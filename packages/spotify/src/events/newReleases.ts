import { EventHandler } from '@arkw/core';

import { PagedAlbumsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const newReleases: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagedAlbums-newReleases`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { country } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/browse/new-releases'].get({
      query: { country },
    });

    if (!response.ok) {
      console.log('error in fetching newReleases', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagedAlbums`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagedAlbums`,
      properties: PagedAlbumsFields,
    });
  },
});
