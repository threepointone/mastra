
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_variablesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PipelineVariablesForTeam: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_pipeline_variables`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { username, username,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/teams/{username}/pipelines_config/variables'].get({
                                query: {username,},
                                params: {username,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_pipeline_variables`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_pipeline_variables`,
                                properties: paginated_pipeline_variablesFields,
                            });
                        },
                })
                