import { EventHandler } from '@arkw/core';

import { OneCurrentlyPlayingFields } from '../constants';

import { SpotifyIntegration } from '..';

export const informationAboutTheUsersCurrentPlayback: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneCurrentlyPlaying-informationAboutTheUsersCurrentPlayback`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/player'].get({});

    if (!response.ok) {
      console.log('error in fetching informationAboutTheUsersCurrentPlayback', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneCurrentlyPlaying`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneCurrentlyPlaying`,
      properties: OneCurrentlyPlayingFields,
    });
  },
});
