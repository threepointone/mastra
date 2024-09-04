import { EventHandler } from '@arkw/core';

import { ManyArtistsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const anArtistsRelatedArtists: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyArtists-anArtistsRelatedArtists`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/artists/{id}/related-artists'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching anArtistsRelatedArtists', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyArtists`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyArtists`,
      properties: ManyArtistsFields,
    });
  },
});
