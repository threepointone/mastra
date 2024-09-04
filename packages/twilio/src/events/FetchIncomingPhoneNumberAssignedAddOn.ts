import { EventHandler } from '@arkw/core';

import { api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_onFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchIncomingPhoneNumberAssignedAddOn: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on-FetchIncomingPhoneNumberAssignedAddOn`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid, ResourceSid, Sid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy[
      '/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json'
    ].get({
      params: { AccountSid, ResourceSid, Sid },
    });

    if (!response.ok) {
      console.log('error in fetching FetchIncomingPhoneNumberAssignedAddOn', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on`,
      properties: api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_onFields,
    });
  },
});
