import { EventHandler } from '@arkw/core';

import { eventFields } from '../constants';

import { StripeIntegration } from '..';

export const GetEvents: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-event`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { created, delivery_success, ending_before, expand, limit, starting_after, type, types } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/v1/events'].get({
      query: { created, delivery_success, ending_before, expand, limit, starting_after, type, types },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `event`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `event`,
      properties: eventFields,
    });
  },
});
