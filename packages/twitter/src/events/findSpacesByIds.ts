
                    import { EventHandler } from '@arkw/core';
                    import { Get2SpacesResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findSpacesByIds: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2SpacesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/spaces'].get({
                                query: {ids,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2SpacesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2SpacesResponse`,
                                properties: Get2SpacesResponseFields,
                            });
                        },
                })
                