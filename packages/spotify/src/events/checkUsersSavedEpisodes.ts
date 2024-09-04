import { EventHandler } from '@arkw/core';

import { ArrayOfBooleansFields } from '../constants';

import { SpotifyIntegration } from '..';

export const checkUsersSavedEpisodes: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ArrayOfBooleans-checkUsersSavedEpisodes`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { ids } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/episodes/contains'].get({
      query: { ids },
    });

    if (!response.ok) {
      console.log('error in fetching checkUsersSavedEpisodes', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ArrayOfBooleans`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ArrayOfBooleans`,
      properties: ArrayOfBooleansFields,
    });
  },
});
