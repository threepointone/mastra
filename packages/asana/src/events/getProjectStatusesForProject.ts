import { EventHandler } from '@arkw/core';

import { ProjectStatusCompactFields } from '../constants';

import { AsanaIntegration } from '..';

export const getProjectStatusesForProject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ProjectStatusCompact`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/projects/{project_gid}/project_statuses'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ProjectStatusCompact`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ProjectStatusCompact`,
      properties: ProjectStatusCompactFields,
    });
  },
});
