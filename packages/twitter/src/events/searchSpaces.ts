
                    import { EventHandler } from '@arkw/core';
                    import { Get2SpacesSearchResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const searchSpaces: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2SpacesSearchResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query,state,max_results,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/spaces/search'].get({
                                query: {query,state,max_results,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2SpacesSearchResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2SpacesSearchResponse`,
                                properties: Get2SpacesSearchResponseFields,
                            });
                        },
                })
                