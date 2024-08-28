
                    import { EventHandler } from '@arkw/core';
                    import { paginated_pipeline_variablesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PipelineVariablesForUser: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_pipeline_variables`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { selected_user, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{selected_user}/pipelines_config/variables'].get({
                                query: {selected_user,},
                                params: {selected_user,} })

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
                