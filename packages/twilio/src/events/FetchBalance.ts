import { EventHandler } from '@arkw/core';

import { api_v2010_account_balanceFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchBalance: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_balance-FetchBalance`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Balance.json'].get({
      params: { AccountSid },
    });

    if (!response.ok) {
      console.log('error in fetching FetchBalance', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_balance`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_balance`,
      properties: api_v2010_account_balanceFields,
    });
  },
});
