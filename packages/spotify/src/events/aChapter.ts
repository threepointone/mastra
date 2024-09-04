import { EventHandler } from '@arkw/core';

import { OneChapterFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aChapter: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneChapter-aChapter`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/chapters/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching aChapter', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneChapter`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneChapter`,
      properties: OneChapterFields,
    });
  },
});
