
                    import { EventHandler } from '@arkw/core';
                    import { Get2SpacesIdResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findSpaceById: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2SpacesIdResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/spaces/{id}'].get({
                                query: {id,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2SpacesIdResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2SpacesIdResponse`,
                                properties: Get2SpacesIdResponseFields,
                            });
                        },
                })
                