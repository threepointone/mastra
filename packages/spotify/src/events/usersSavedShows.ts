import { EventHandler } from '@arkw/core';

import { PagingSavedShowObjectFields } from '../constants';

import { SpotifyIntegration } from '..';

export const usersSavedShows: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PagingSavedShowObject-usersSavedShows`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/me/shows'].get({});

    if (!response.ok) {
      console.log('error in fetching usersSavedShows', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PagingSavedShowObject`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PagingSavedShowObject`,
      properties: PagingSavedShowObjectFields,
    });
  },
});
