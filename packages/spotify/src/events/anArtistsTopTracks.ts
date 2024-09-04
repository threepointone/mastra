import { EventHandler } from '@arkw/core';

import { ManyTracksFields } from '../constants';

import { SpotifyIntegration } from '..';

export const anArtistsTopTracks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyTracks-anArtistsTopTracks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/artists/{id}/top-tracks'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching anArtistsTopTracks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyTracks`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyTracks`,
      properties: ManyTracksFields,
    });
  },
});
