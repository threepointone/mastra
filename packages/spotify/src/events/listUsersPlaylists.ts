import { EventHandler } from '@arkw/core';

import { PagedPlaylistsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const listUsersPlaylists: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagedPlaylists-listUsersPlaylists`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { offset, user_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/users/{user_id}/playlists'].get({
      query: { offset },
      params: { user_id },
    });

    if (!response.ok) {
      console.log('error in fetching listUsersPlaylists', { response });
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
