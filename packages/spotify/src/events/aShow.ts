import { EventHandler } from '@arkw/core';

import { OneShowFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aShow: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneShow-aShow`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/shows/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching aShow', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneShow`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneShow`,
      properties: OneShowFields,
    });
  },
});
