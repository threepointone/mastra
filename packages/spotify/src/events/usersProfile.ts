import { EventHandler } from '@arkw/core';

import { OnePublicUserFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersProfile: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OnePublicUser-usersProfile`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { user_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/users/{user_id}'].get({
      params: { user_id },
    });

    if (!response.ok) {
      console.log('error in fetching usersProfile', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OnePublicUser`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OnePublicUser`,
      properties: OnePublicUserFields,
    });
  },
});
