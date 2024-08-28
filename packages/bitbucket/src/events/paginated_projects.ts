
                    import { EventHandler } from '@arkw/core';
                    import { paginated_projectsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_projects: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_projects`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/workspaces/{workspace}/projects'].get({
                                
                                params: {workspace,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_projects`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_projects`,
                                properties: paginated_projectsFields,
                            });
                        },
                })
                