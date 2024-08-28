
                    import { EventHandler } from '@arkw/core';
                    import { credit_noteFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCreditNotesId: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-credit_note`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,id, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/credit_notes/{id}'].get({
                                query: {expand,id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `credit_note`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `credit_note`,
                                properties: credit_noteFields,
                            });
                        },
                })
                