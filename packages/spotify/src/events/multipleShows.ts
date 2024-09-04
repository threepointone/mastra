import { EventHandler } from '@arkw/core';

import { ManySimplifiedShowsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const multipleShows: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManySimplifiedShows-multipleShows`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/shows'].get({});

    if (!response.ok) {
      console.log('error in fetching multipleShows', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManySimplifiedShows`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManySimplifiedShows`,
      properties: ManySimplifiedShowsFields,
    });
  },
});
