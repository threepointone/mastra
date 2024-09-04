import { EventHandler } from '@arkw/core';

import { ArrayOfBooleansFields } from '../constants';

import { SpotifyIntegration } from '..';

export const checkUsersSavedAudiobooks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ArrayOfBooleans-checkUsersSavedAudiobooks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/audiobooks/contains'].get({});

    if (!response.ok) {
      console.log('error in fetching checkUsersSavedAudiobooks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ArrayOfBooleans`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ArrayOfBooleans`,
      properties: ArrayOfBooleansFields,
    });
  },
});
