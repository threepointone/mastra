import { EventHandler } from '@arkw/core';

import { undefinedFields } from '../constants';

import { StripeIntegration } from '..';

export const GetAccountsAccountExternalAccounts: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-undefined`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/v1/accounts/{account}/external_accounts'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `undefined`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `undefined`,
      properties: undefinedFields,
    });
  },
});
