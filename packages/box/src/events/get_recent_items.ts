import { EventHandler } from '@arkw/core';

import { RecentItemsFields } from '../constants';

import { BoxIntegration } from '..';

export const get_recent_items: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-RecentItems`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { fields, limit, marker } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/recent_items'].get({
      query: { fields, limit, marker },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `RecentItems`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `RecentItems`,
      properties: RecentItemsFields,
    });
  },
});
