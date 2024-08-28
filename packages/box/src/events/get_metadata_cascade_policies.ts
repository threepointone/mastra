import { EventHandler } from '@arkw/core';

import { MetadataCascadePoliciesFields } from '../constants';

import { BoxIntegration } from '..';

export const get_metadata_cascade_policies: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-MetadataCascadePolicies`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { folder_id, owner_enterprise_id, marker, offset } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/metadata_cascade_policies'].get({
      query: { folder_id, owner_enterprise_id, marker, offset },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `MetadataCascadePolicies`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `MetadataCascadePolicies`,
      properties: MetadataCascadePoliciesFields,
    });
  },
});
