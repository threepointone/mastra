import { EventHandler } from '@arkw/core';

import { PagingSavedAlbumObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersSavedAlbums: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSavedAlbumObject-usersSavedAlbums`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/albums'].get({});

    if (!response.ok) {
      console.log('error in fetching usersSavedAlbums', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSavedAlbumObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSavedAlbumObject`,
      properties: PagingSavedAlbumObjectFields,
    });
  },
});
