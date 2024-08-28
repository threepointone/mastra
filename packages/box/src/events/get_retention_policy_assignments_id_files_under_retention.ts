
                    import { EventHandler } from '@arkw/core';
                    import { FilesUnderRetentionFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_retention_policy_assignments_id_files_under_retention: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-FilesUnderRetention`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { retention_policy_assignment_id,marker,limit, retention_policy_assignment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/retention_policy_assignments/{retention_policy_assignment_id}/files_under_retention'].get({
                                query: {retention_policy_assignment_id,marker,limit,},
                                params: {retention_policy_assignment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FilesUnderRetention`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FilesUnderRetention`,
                                properties: FilesUnderRetentionFields,
                            });
                        },
                })
                