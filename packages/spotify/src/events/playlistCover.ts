import { EventHandler } from '@arkw/core';

import { ArrayOfImagesFields } from '../constants';

import { SpotifyIntegration } from '..';

export const playlistCover: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ArrayOfImages-playlistCover`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { playlist_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/playlists/{playlist_id}/images'].get({
      params: { playlist_id },
    });

    if (!response.ok) {
      console.log('error in fetching playlistCover', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ArrayOfImages`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ArrayOfImages`,
      properties: ArrayOfImagesFields,
    });
  },
});
