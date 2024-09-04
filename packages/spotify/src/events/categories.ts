import { EventHandler } from '@arkw/core';

import { PagedCategoriesFields } from '../constants';

import { SpotifyIntegration } from '..';

export const categories: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagedCategories-categories`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { country, locale } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/browse/categories'].get({
      query: { country, locale },
    });

    if (!response.ok) {
      console.log('error in fetching categories', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagedCategories`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagedCategories`,
      properties: PagedCategoriesFields,
    });
  },
});
