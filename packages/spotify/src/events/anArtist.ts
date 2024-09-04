import { EventHandler } from '@arkw/core';

import { OneArtistFields } from '../constants';

import { SpotifyIntegration } from '..';

export const anArtist: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneArtist-anArtist`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/artists/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching anArtist', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneArtist`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneArtist`,
      properties: OneArtistFields,
    });
  },
});
