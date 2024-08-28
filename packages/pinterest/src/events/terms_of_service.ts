
                    import { EventHandler } from '@arkw/core';
                    import { TermsOfServiceFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const terms_of_service: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TermsOfService`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,query_include_html,query_tos_type, ad_account_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/ad_accounts/{ad_account_id}/terms_of_service'].get({
                                query: {path_ad_account_id,query_include_html,query_tos_type,},
                                params: {ad_account_id,} })

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
                