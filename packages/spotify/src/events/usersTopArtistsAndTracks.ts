import { EventHandler } from '@arkw/core';

import { PagingArtistOrTrackObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersTopArtistsAndTracks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingArtistOrTrackObject-usersTopArtistsAndTracks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { time_range, type } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/top/{type}'].get({
      query: { time_range },
      params: { type },
    });

    if (!response.ok) {
      console.log('error in fetching usersTopArtistsAndTracks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingArtistOrTrackObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingArtistOrTrackObject`,
      properties: PagingArtistOrTrackObjectFields,
    });
  },
});
