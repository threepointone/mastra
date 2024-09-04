import { EventHandler } from '@arkw/core';

import { OneAudioFeaturesFields } from '../constants';

import { SpotifyIntegration } from '..';

export const audioFeatures: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneAudioFeatures-audioFeatures`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/audio-features/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching audioFeatures', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneAudioFeatures`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneAudioFeatures`,
      properties: OneAudioFeaturesFields,
    });
  },
});
