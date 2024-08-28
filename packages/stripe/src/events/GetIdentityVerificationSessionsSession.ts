
                    import { EventHandler } from '@arkw/core';
                    import { identity.verification_sessionFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetIdentityVerificationSessionsSession: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-identity.verification_session`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,session, session,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v1/identity/verification_sessions/{session}'].get({
                                query: {expand,session,},
                                params: {session,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `identity.verification_session`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `identity.verification_session`,
                                properties: identity.verification_sessionFields,
                            });
                        },
                })
                