import { EventHandler } from '@arkw/core';

import { ArrayOfBooleansFields } from '../constants';

import { SpotifyIntegration } from '..';

export const checkIfUserFollowsPlaylist: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ArrayOfBooleans-checkIfUserFollowsPlaylist`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { ids, playlist_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/playlists/{playlist_id}/followers/contains'].get({
      query: { ids },
      params: { playlist_id },
    });

    if (!response.ok) {
      console.log('error in fetching checkIfUserFollowsPlaylist', { response });
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
