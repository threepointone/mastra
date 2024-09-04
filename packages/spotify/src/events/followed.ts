import { EventHandler } from '@arkw/core';

import { CursorPagedArtistsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const followed: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-CursorPagedArtists-followed`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { type, after, limit } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/following'].get({
      query: { type, after, limit },
    });

    if (!response.ok) {
      console.log('error in fetching followed', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `CursorPagedArtists`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `CursorPagedArtists`,
      properties: CursorPagedArtistsFields,
    });
  },
});
