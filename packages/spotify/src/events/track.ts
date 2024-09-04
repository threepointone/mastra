import { EventHandler } from '@arkw/core';

import { OneTrackFields } from '../constants';

import { SpotifyIntegration } from '..';

export const track: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneTrack-track`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/tracks/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching track', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneTrack`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneTrack`,
      properties: OneTrackFields,
    });
  },
});
