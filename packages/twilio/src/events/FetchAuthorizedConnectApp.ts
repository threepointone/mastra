import { EventHandler } from '@arkw/core';

import { api_v2010_account_authorized_connect_appFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchAuthorizedConnectApp: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_authorized_connect_app-FetchAuthorizedConnectApp`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid, ConnectAppSid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json'].get({
      params: { AccountSid, ConnectAppSid },
    });

    if (!response.ok) {
      console.log('error in fetching FetchAuthorizedConnectApp', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_authorized_connect_app`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_authorized_connect_app`,
      properties: api_v2010_account_authorized_connect_appFields,
    });
  },
});
