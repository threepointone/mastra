import { EventHandler } from '@arkw/core';

import { api_v2010_account_available_phone_number_countryFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchAvailablePhoneNumberCountry: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_available_phone_number_country-FetchAvailablePhoneNumberCountry`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid, CountryCode } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json'].get({
      params: { AccountSid, CountryCode },
    });

    if (!response.ok) {
      console.log('error in fetching FetchAvailablePhoneNumberCountry', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_available_phone_number_country`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_available_phone_number_country`,
      properties: api_v2010_account_available_phone_number_countryFields,
    });
  },
});
