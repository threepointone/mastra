import { EventHandler } from '@arkw/core';

import { PagingSavedTrackObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersSavedTracks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSavedTrackObject-usersSavedTracks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/tracks'].get({});

    if (!response.ok) {
      console.log('error in fetching usersSavedTracks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSavedTrackObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSavedTrackObject`,
      properties: PagingSavedTrackObjectFields,
    });
  },
});
