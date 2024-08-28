
                    import { EventHandler } from '@arkw/core';
                    import { recipientNamesResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const RecipientNames_GetRecipientNames: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-recipientNamesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,email, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/recipient_names'].get({
                                query: {accountId,email,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `recipientNamesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `recipientNamesResponse`,
                                properties: recipientNamesResponseFields,
                            });
                        },
                })
                