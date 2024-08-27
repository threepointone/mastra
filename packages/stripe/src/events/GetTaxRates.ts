import { EventHandler } from '@arkw/core';

import { tax_rateFields } from '../constants';

import { StripeIntegration } from '..';

export const GetTaxRates: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-tax_rate`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { active, created, ending_before, expand, inclusive, limit, starting_after } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/v1/tax_rates'].get({
      query: { active, created, ending_before, expand, inclusive, limit, starting_after },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `tax_rate`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `tax_rate`,
      properties: tax_rateFields,
    });
  },
});
