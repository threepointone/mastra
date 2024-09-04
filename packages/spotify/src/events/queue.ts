import { EventHandler } from '@arkw/core';

import { QueueFields } from '../constants';

import { SpotifyIntegration } from '..';

export const queue: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-Queue-queue`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/player/queue'].get({});

    if (!response.ok) {
      console.log('error in fetching queue', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `Queue`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `Queue`,
      properties: QueueFields,
    });
  },
});
