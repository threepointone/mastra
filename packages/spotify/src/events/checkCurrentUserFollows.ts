import { EventHandler } from '@arkw/core';

import { ArrayOfBooleansFields } from '../constants';

import { SpotifyIntegration } from '..';

export const checkCurrentUserFollows: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ArrayOfBooleans-checkCurrentUserFollows`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { type, ids } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/following/contains'].get({
      query: { type, ids },
    });

    if (!response.ok) {
      console.log('error in fetching checkCurrentUserFollows', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ArrayOfBooleans`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ArrayOfBooleans`,
      properties: ArrayOfBooleansFields,
    });
  },
});
