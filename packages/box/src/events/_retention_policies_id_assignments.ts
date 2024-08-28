
                    import { EventHandler } from '@arkw/core';
                    import { RetentionPolicyAssignmentsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _retention_policies_id_assignments: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-RetentionPolicyAssignments`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { retention_policy_id,type,fields,marker,limit, retention_policy_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/retention_policies/{retention_policy_id}/assignments'].get({
                                query: {retention_policy_id,type,fields,marker,limit,},
                                params: {retention_policy_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetentionPolicyAssignments`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetentionPolicyAssignments`,
                                properties: RetentionPolicyAssignmentsFields,
                            });
                        },
                })
                