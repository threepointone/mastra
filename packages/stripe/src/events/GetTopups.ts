import { EventHandler } from '@arkw/core';

import { topupFields } from '../constants';

import { StripeIntegration } from '..';

export const GetTopups: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-topup`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/v1/topups'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `topup`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `topup`,
      properties: topupFields,
    });
  },
});
