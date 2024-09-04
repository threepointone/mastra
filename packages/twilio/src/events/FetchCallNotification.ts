import { EventHandler } from '@arkw/core';

import { api_v2010_account_call_call_notification_instanceFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchCallNotification: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_call_call_notification_instance-FetchCallNotification`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid, CallSid, Sid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json'].get({
      params: { AccountSid, CallSid, Sid },
    });

    if (!response.ok) {
      console.log('error in fetching FetchCallNotification', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_call_call_notification_instance`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_call_call_notification_instance`,
      properties: api_v2010_account_call_call_notification_instanceFields,
    });
  },
});
