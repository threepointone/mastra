import { EventHandler } from '@arkw/core';

import { CollaborationAllowlistExemptTargetsFields } from '../constants';

import { BoxIntegration } from '..';

export const get_collaboration_whitelist_exempt_targets: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-CollaborationAllowlistExemptTargets`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { marker, limit } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/collaboration_whitelist_exempt_targets'].get({
      query: { marker, limit },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `CollaborationAllowlistExemptTargets`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `CollaborationAllowlistExemptTargets`,
      properties: CollaborationAllowlistExemptTargetsFields,
    });
  },
});
