
                    import { EventHandler } from '@arkw/core';
                    import { ProjectFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveProject: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Project`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/projects/{projectId}'].get({
                                query: {projectId,},
                                params: {projectId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Project`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Project`,
                                properties: ProjectFields,
                            });
                        },
                })
                