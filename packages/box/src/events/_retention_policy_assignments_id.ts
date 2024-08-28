
                    import { EventHandler } from '@arkw/core';
                    import { RetentionPolicyAssignmentFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _retention_policy_assignments_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetentionPolicyAssignment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { retention_policy_assignment_id,fields, retention_policy_assignment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/retention_policy_assignments/{retention_policy_assignment_id}'].get({
                                query: {retention_policy_assignment_id,fields,},
                                params: {retention_policy_assignment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetentionPolicyAssignment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetentionPolicyAssignment`,
                                properties: RetentionPolicyAssignmentFields,
                            });
                        },
                })
                