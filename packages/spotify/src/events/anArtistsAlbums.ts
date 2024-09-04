import { EventHandler } from '@arkw/core';

import { PagingSimplifiedAlbumObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const anArtistsAlbums: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSimplifiedAlbumObject-anArtistsAlbums`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/artists/{id}/albums'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching anArtistsAlbums', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSimplifiedAlbumObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSimplifiedAlbumObject`,
      properties: PagingSimplifiedAlbumObjectFields,
    });
  },
});
