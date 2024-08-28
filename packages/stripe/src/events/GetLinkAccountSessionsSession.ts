
                    import { EventHandler } from '@arkw/core';
                    import { financial_connections.sessionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetLinkAccountSessionsSession: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-financial_connections.session`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,session, session,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/link_account_sessions/{session}'].get({
                                query: {expand,session,},
                                params: {session,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `financial_connections.session`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `financial_connections.session`,
                                properties: financial_connections.sessionFields,
                            });
                        },
                })
                