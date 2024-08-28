
                    import { EventHandler } from '@arkw/core';
                    import { TermsOfServiceUserStatusesFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _terms_of_service_user_statuses: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TermsOfServiceUserStatuses`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { tos_id,user_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/terms_of_service_user_statuses'].get({
                                query: {tos_id,user_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TermsOfServiceUserStatuses`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TermsOfServiceUserStatuses`,
                                properties: TermsOfServiceUserStatusesFields,
                            });
                        },
                })
                