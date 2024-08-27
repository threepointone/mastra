import { EventHandler } from '@arkw/core';

import { ProjectMembershipCompactFields } from '../constants';

import { AsanaIntegration } from '..';

export const getProjectMembershipsForProject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-ProjectMembershipCompact`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/projects/{project_gid}/project_memberships'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `ProjectMembershipCompact`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `ProjectMembershipCompact`,
      properties: ProjectMembershipCompactFields,
    });
  },
});
