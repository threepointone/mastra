import { EventHandler } from '@arkw/core';

import { PagingPlaylistTrackObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const playlistsTracks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingPlaylistTrackObject-playlistsTracks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { fields, playlist_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/playlists/{playlist_id}/tracks'].get({
      query: { fields },
      params: { playlist_id },
    });

    if (!response.ok) {
      console.log('error in fetching playlistsTracks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingPlaylistTrackObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingPlaylistTrackObject`,
      properties: PagingPlaylistTrackObjectFields,
    });
  },
});
