import { EventHandler } from '@arkw/core';

import { OneCurrentlyPlayingTrackFields } from '../constants';

import { SpotifyIntegration } from '..';

export const theUsersCurrentlyPlayingTrack: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneCurrentlyPlayingTrack-theUsersCurrentlyPlayingTrack`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/player/currently-playing'].get({});

    if (!response.ok) {
      console.log('error in fetching theUsersCurrentlyPlayingTrack', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneCurrentlyPlayingTrack`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneCurrentlyPlayingTrack`,
      properties: OneCurrentlyPlayingTrackFields,
    });
  },
});
