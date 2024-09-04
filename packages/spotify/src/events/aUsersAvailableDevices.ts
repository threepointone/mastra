import { EventHandler } from '@arkw/core';

import { ManyDevicesFields } from '../constants';

import { SpotifyIntegration } from '..';

export const aUsersAvailableDevices: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ManyDevices-aUsersAvailableDevices`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/player/devices'].get({});

    if (!response.ok) {
      console.log('error in fetching aUsersAvailableDevices', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ManyDevices`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ManyDevices`,
      properties: ManyDevicesFields,
    });
  },
});
