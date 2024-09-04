import { EventHandler } from '@arkw/core';

import { PagingSimplifiedAudiobookObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersSavedAudiobooks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSimplifiedAudiobookObject-usersSavedAudiobooks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/audiobooks'].get({});

    if (!response.ok) {
      console.log('error in fetching usersSavedAudiobooks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSimplifiedAudiobookObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSimplifiedAudiobookObject`,
      properties: PagingSimplifiedAudiobookObjectFields,
    });
  },
});
