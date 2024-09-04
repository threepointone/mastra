import { EventHandler } from '@arkw/core';

import { api_v2010_account_sip_sip_ip_access_control_list_sip_ip_addressFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchSipIpAddress: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address-FetchSipIpAddress`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid, IpAccessControlListSid, Sid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy[
      '/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json'
    ].get({
      params: { AccountSid, IpAccessControlListSid, Sid },
    });

    if (!response.ok) {
      console.log('error in fetching FetchSipIpAddress', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address`,
      properties: api_v2010_account_sip_sip_ip_access_control_list_sip_ip_addressFields,
    });
  },
});
