
                    import { EventHandler } from '@arkw/core';
                    import { TermsOfServiceFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _terms_of_services_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TermsOfService`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { terms_of_service_id, terms_of_service_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/terms_of_services/{terms_of_service_id}'].get({
                                query: {terms_of_service_id,},
                                params: {terms_of_service_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TermsOfService`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TermsOfService`,
                                properties: TermsOfServiceFields,
                            });
                        },
                })
                