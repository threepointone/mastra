import { EventHandler } from '@arkw/core';

import { TagCompactFields } from '../constants';

import { AsanaIntegration } from '..';

export const getTagsForWorkspace: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-TagCompact`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/workspaces/{workspace_gid}/tags'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `TagCompact`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `TagCompact`,
      properties: TagCompactFields,
    });
  },
});
