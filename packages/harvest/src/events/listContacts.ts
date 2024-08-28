
                    import { EventHandler } from '@arkw/core';
                    import { ContactsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const listContacts: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Contacts`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { client_id,updated_since,page,cursor,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/contacts'].get({
                                query: {client_id,updated_since,page,cursor,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Contacts`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Contacts`,
                                properties: ContactsFields,
                            });
                        },
                })
                