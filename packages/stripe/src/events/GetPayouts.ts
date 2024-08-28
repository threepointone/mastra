import { EventHandler } from '@arkw/core';

import { payoutFields } from '../constants';

import { StripeIntegration } from '..';

export const GetPayouts: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-payout`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { arrival_date, created, destination, ending_before, expand, limit, starting_after, status } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/v1/payouts'].get({
      query: { arrival_date, created, destination, ending_before, expand, limit, starting_after, status },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `payout`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `payout`,
      properties: payoutFields,
    });
  },
});
