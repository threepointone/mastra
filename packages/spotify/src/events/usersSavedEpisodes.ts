import { EventHandler } from '@arkw/core';

import { PagingSavedEpisodeObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersSavedEpisodes: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSavedEpisodeObject-usersSavedEpisodes`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/episodes'].get({});

    if (!response.ok) {
      console.log('error in fetching usersSavedEpisodes', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSavedEpisodeObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSavedEpisodeObject`,
      properties: PagingSavedEpisodeObjectFields,
    });
  },
});
