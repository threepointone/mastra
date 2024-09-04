import { EventHandler } from '@arkw/core';

import { ManyAudioFeaturesFields } from '../constants';

import { SpotifyIntegration } from '..';

export const severalAudioFeatures: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyAudioFeatures-severalAudioFeatures`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { ids } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/audio-features'].get({
      query: { ids },
    });

    if (!response.ok) {
      console.log('error in fetching severalAudioFeatures', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyAudioFeatures`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyAudioFeatures`,
      properties: ManyAudioFeaturesFields,
    });
  },
});
