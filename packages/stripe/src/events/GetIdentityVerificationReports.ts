
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetIdentityVerificationReports: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-identity.verification_report`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })
                            const response = await proxy['/v1/identity/verification_reports'].get()

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `identity.verification_report`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `identity.verification_report`,
                                properties: [],
                            });
                        },
                })
                