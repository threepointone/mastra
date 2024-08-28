
                    import { EventHandler } from '@arkw/core';
                    import { StoragePolicyAssignmentsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _storage_policy_assignments: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-StoragePolicyAssignments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { marker,resolved_for_type,resolved_for_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/storage_policy_assignments'].get({
                                query: {marker,resolved_for_type,resolved_for_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `StoragePolicyAssignments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `StoragePolicyAssignments`,
                                properties: StoragePolicyAssignmentsFields,
                            });
                        },
                })
                