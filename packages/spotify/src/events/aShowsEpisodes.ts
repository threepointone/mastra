import { EventHandler } from '@arkw/core';

import { PagingSimplifiedEpisodeObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aShowsEpisodes: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSimplifiedEpisodeObject-aShowsEpisodes`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/shows/{id}/episodes'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching aShowsEpisodes', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSimplifiedEpisodeObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSimplifiedEpisodeObject`,
      properties: PagingSimplifiedEpisodeObjectFields,
    });
  },
});
