import { EventHandler } from '@arkw/core';

import { LegalHoldPolicyAssignmentsFields } from '../constants';

import { BoxIntegration } from '..';

export const get_legal_hold_policy_assignments: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-LegalHoldPolicyAssignments`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { policy_id, assign_to_type, assign_to_id, marker, limit, fields } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/legal_hold_policy_assignments'].get({
      query: { policy_id, assign_to_type, assign_to_id, marker, limit, fields },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `LegalHoldPolicyAssignments`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `LegalHoldPolicyAssignments`,
      properties: LegalHoldPolicyAssignmentsFields,
    });
  },
});
