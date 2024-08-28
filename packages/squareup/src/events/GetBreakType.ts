
                    import { EventHandler } from '@arkw/core';
                    import { GetBreakTypeResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const GetBreakType: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetBreakTypeResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/labor/break-types/{id}'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetBreakTypeResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetBreakTypeResponse`,
                                properties: GetBreakTypeResponseFields,
                            });
                        },
                })
                