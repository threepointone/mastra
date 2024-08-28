
                    import { EventHandler } from '@arkw/core';
                    import { MimeEmailPayloadFields } from '../constants';
                    import { SalesloftIntegration } from '..';

                    export const MimeEmailPayload: EventHandler<SalesloftIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-MimeEmailPayload`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/mime_email_payloads/{id}.json'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `MimeEmailPayload`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `MimeEmailPayload`,
                                properties: MimeEmailPayloadFields,
                            });
                        },
                })
                