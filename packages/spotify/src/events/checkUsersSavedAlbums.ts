import { EventHandler } from '@arkw/core';

import { ArrayOfBooleansFields } from '../constants';

import { SpotifyIntegration } from '..';

export const checkUsersSavedAlbums: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ArrayOfBooleans-checkUsersSavedAlbums`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/albums/contains'].get({});

    if (!response.ok) {
      console.log('error in fetching checkUsersSavedAlbums', { response });
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
