import { EventHandler } from '@arkw/core';

import { PagedPlaylistsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aListOfCurrentUsersPlaylists: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagedPlaylists-aListOfCurrentUsersPlaylists`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { offset } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/playlists'].get({
      query: { offset },
    });

    if (!response.ok) {
      console.log('error in fetching aListOfCurrentUsersPlaylists', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagedPlaylists`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagedPlaylists`,
      properties: PagedPlaylistsFields,
    });
  },
});
