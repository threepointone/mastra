
                    import { EventHandler } from '@arkw/core';
                    import { ContactFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveContact: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Contact`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { contactId, contactId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/contacts/{contactId}'].get({
                                query: {contactId,},
                                params: {contactId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Contact`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Contact`,
                                properties: ContactFields,
                            });
                        },
                })
                