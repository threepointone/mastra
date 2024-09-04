import { EventHandler } from '@arkw/core';

import { OneCategoryFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aCategory: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneCategory-aCategory`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { country, locale, category_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/browse/categories/{category_id}'].get({
      query: { country, locale },
      params: { category_id },
    });

    if (!response.ok) {
      console.log('error in fetching aCategory', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneCategory`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneCategory`,
      properties: OneCategoryFields,
    });
  },
});
