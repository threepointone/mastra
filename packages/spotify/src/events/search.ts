import { EventHandler } from '@arkw/core';

import { SearchItemsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const search: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-SearchItems-search`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { q, type, limit, offset, include_external } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/search'].get({
      query: { q, type, limit, offset, include_external },
    });

    if (!response.ok) {
      console.log('error in fetching search', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `SearchItems`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `SearchItems`,
      properties: SearchItemsFields,
    });
  },
});
