import { EventHandler } from '@arkw/core';

import { ManyAlbumsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const multipleAlbums: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyAlbums-multipleAlbums`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/albums'].get({});

    if (!response.ok) {
      console.log('error in fetching multipleAlbums', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyAlbums`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyAlbums`,
      properties: ManyAlbumsFields,
    });
  },
});
