import { EventHandler } from '@arkw/core';

import { api_v2010_account_recording_recording_add_on_resultFields } from '../constants';

import { TwilioIntegration } from '..';

export const FetchRecordingAddOnResult: EventHandler<TwilioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-api_v2010_account_recording_recording_add_on_result-FetchRecordingAddOnResult`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { AccountSid, ReferenceSid, Sid } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy[
      '/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json'
    ].get({
      params: { AccountSid, ReferenceSid, Sid },
    });

    if (!response.ok) {
      console.log('error in fetching FetchRecordingAddOnResult', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `api_v2010_account_recording_recording_add_on_result`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `api_v2010_account_recording_recording_add_on_result`,
      properties: api_v2010_account_recording_recording_add_on_resultFields,
    });
  },
});
