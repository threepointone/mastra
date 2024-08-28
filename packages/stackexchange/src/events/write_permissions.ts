
                    import { EventHandler } from '@arkw/core';
                    import { write_permissionsFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const write_permissions: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-write_permissions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,pagesize,page,filter,callback,site, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{id}/write-permissions'].get({
                                query: {id,pagesize,page,filter,callback,site,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `write_permissions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `write_permissions`,
                                properties: write_permissionsFields,
                            });
                        },
                })
                