import { EventHandler } from '@arkw/core';

import { FolderLocksFields } from '../constants';

import { BoxIntegration } from '..';

export const get_folder_locks: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-FolderLocks`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { folder_id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/folder_locks'].get({
      query: { folder_id },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `FolderLocks`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `FolderLocks`,
      properties: FolderLocksFields,
    });
  },
});
