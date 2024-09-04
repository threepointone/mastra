import { EventHandler } from '@arkw/core';

import { ManyGenresFields } from '../constants';

import { SpotifyIntegration } from '..';

export const recommendationGenres: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyGenres-recommendationGenres`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/recommendations/available-genre-seeds'].get({});

    if (!response.ok) {
      console.log('error in fetching recommendationGenres', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyGenres`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyGenres`,
      properties: ManyGenresFields,
    });
  },
});
