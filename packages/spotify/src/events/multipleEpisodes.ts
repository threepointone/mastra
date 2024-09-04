import { EventHandler } from '@arkw/core';

import { ManyEpisodesFields } from '../constants';

import { SpotifyIntegration } from '..';

export const multipleEpisodes: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyEpisodes-multipleEpisodes`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { ids } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/episodes'].get({
      query: { ids },
    });

    if (!response.ok) {
      console.log('error in fetching multipleEpisodes', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyEpisodes`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyEpisodes`,
      properties: ManyEpisodesFields,
    });
  },
});
