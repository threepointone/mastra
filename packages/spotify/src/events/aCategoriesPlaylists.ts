import { EventHandler } from '@arkw/core';

import { PagedFeaturedPlaylistsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aCategoriesPlaylists: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagedFeaturedPlaylists-aCategoriesPlaylists`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { country, category_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/browse/categories/{category_id}/playlists'].get({
      query: { country },
      params: { category_id },
    });

    if (!response.ok) {
      console.log('error in fetching aCategoriesPlaylists', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagedFeaturedPlaylists`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagedFeaturedPlaylists`,
      properties: PagedFeaturedPlaylistsFields,
    });
  },
});
