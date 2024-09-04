import { EventHandler } from '@arkw/core';

import { PagedFeaturedPlaylistsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const featuredPlaylists: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagedFeaturedPlaylists-featuredPlaylists`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { country, locale, timestamp } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/browse/featured-playlists'].get({
      query: { country, locale, timestamp },
    });

    if (!response.ok) {
      console.log('error in fetching featuredPlaylists', { response });
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
