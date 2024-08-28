
                    import { EventHandler } from '@arkw/core';
                    import { errorsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const errors: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-errors`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { pagesize,page,filter,callback,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/errors'].get({
                                query: {pagesize,page,filter,callback,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `errors`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `errors`,
                                properties: errorsFields,
                            });
                        },
                })
                