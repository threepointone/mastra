
                    import { EventHandler } from '@arkw/core';
                    import { AdAccountsCountryResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const ad_account_countries: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-AdAccountsCountryResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/resources/ad_account_countries'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AdAccountsCountryResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AdAccountsCountryResponse`,
                                properties: AdAccountsCountryResponseFields,
                            });
                        },
                })
                