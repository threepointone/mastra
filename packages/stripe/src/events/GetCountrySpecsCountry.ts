
                    import { EventHandler } from '@arkw/core';
                    import { country_specFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetCountrySpecsCountry: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-country_spec`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { country,expand, country,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/country_specs/{country}'].get({
                                query: {country,expand,},
                                params: {country,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `country_spec`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `country_spec`,
                                properties: country_specFields,
                            });
                        },
                })
                