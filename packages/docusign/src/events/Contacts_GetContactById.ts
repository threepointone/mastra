
                    import { EventHandler } from '@arkw/core';
                    import { contactGetResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Contacts_GetContactById: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-contactGetResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,contactId,cloud_provider, accountId,contactId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/contacts/{contactId}'].get({
                                query: {accountId,contactId,cloud_provider,},
                                params: {accountId,contactId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `contactGetResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `contactGetResponse`,
                                properties: contactGetResponseFields,
                            });
                        },
                })
                