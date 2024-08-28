
                    import { EventHandler } from '@arkw/core';
                    import { Get2ListsIdResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const listIdGet: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Get2ListsIdResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,ListFieldsParameter,ListExpansionsParameter,UserFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/2/lists/{id}'].get({
                                query: {id,ListFieldsParameter,ListExpansionsParameter,UserFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2ListsIdResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2ListsIdResponse`,
                                properties: Get2ListsIdResponseFields,
                            });
                        },
                })
                