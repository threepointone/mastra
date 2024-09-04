import { EventHandler } from '@arkw/core';

import { OneEpisodeFields } from '../constants';

import { SpotifyIntegration } from '..';

export const anEpisode: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneEpisode-anEpisode`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/episodes/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching anEpisode', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneEpisode`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneEpisode`,
      properties: OneEpisodeFields,
    });
  },
});
