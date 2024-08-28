
                    import { EventHandler } from '@arkw/core';
                    import { ContactListResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const listContacts: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ContactListResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { email,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/public/v1/contacts'].get({
                                query: {email,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ContactListResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ContactListResponse`,
                                properties: ContactListResponseFields,
                            });
                        },
                })
                