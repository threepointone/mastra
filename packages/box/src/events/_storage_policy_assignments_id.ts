
                    import { EventHandler } from '@arkw/core';
                    import { StoragePolicyAssignmentFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _storage_policy_assignments_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-StoragePolicyAssignment`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { storage_policy_assignment_id, storage_policy_assignment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/storage_policy_assignments/{storage_policy_assignment_id}'].get({
                                query: {storage_policy_assignment_id,},
                                params: {storage_policy_assignment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `StoragePolicyAssignment`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `StoragePolicyAssignment`,
                                properties: StoragePolicyAssignmentFields,
                            });
                        },
                })
                