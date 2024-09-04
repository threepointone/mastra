import { EventHandler } from '@arkw/core';

import { ManyAudiobooksFields } from '../constants';

import { SpotifyIntegration } from '..';

export const multipleAudiobooks: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyAudiobooks-multipleAudiobooks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/audiobooks'].get({});

    if (!response.ok) {
      console.log('error in fetching multipleAudiobooks', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyAudiobooks`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyAudiobooks`,
      properties: ManyAudiobooksFields,
    });
  },
});
