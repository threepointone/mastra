import { EventHandler } from '@arkw/core';

import { OnePrivateUserFields } from '../constants';

import { SpotifyIntegration } from '..';

export const currentUsersProfile: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OnePrivateUser-currentUsersProfile`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me'].get({});

    if (!response.ok) {
      console.log('error in fetching currentUsersProfile', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OnePrivateUser`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OnePrivateUser`,
      properties: OnePrivateUserFields,
    });
  },
});
