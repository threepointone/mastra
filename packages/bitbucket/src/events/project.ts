
                    import { EventHandler } from '@arkw/core';
                    import { projectFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const project: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-project`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,project_key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/projects/{project_key}'].get({
                                
                                params: {workspace,project_key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `project`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `project`,
                                properties: projectFields,
                            });
                        },
                })
                