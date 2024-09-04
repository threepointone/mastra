import { EventHandler } from '@arkw/core';

import { PagingSimplifiedChapterObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const audiobookChapters: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSimplifiedChapterObject-audiobookChapters`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/audiobooks/{id}/chapters'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching audiobookChapters', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSimplifiedChapterObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSimplifiedChapterObject`,
      properties: PagingSimplifiedChapterObjectFields,
    });
  },
});
