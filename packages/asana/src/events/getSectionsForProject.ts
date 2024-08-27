
                    import { EventHandler } from '@arkw/core';
                    import { AsanaIntegration } from '..';

                    export const getSectionsForProject: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-SectionCompact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['/projects/{project_gid}/sections'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SectionCompact`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SectionCompact`,
                                properties: [],
                            });
                        },
                })
                