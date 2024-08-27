import { EventHandler } from '@arkw/core';

import { customerFields } from '../constants';

import { StripeIntegration } from '..';

export const GetCustomers: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-customer`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { created, email, ending_before, expand, limit, starting_after, test_clock } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/v1/customers'].get({
      query: { created, email, ending_before, expand, limit, starting_after, test_clock },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `customer`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `customer`,
      properties: customerFields,
    });
  },
});
