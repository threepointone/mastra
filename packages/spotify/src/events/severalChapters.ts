import { EventHandler } from '@arkw/core';

import { ManyChaptersFields } from '../constants';

import { SpotifyIntegration } from '..';

export const severalChapters: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyChapters-severalChapters`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/chapters'].get({});

    if (!response.ok) {
      console.log('error in fetching severalChapters', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyChapters`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyChapters`,
      properties: ManyChaptersFields,
    });
  },
});
