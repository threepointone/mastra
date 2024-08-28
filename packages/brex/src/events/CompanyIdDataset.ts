
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1api~1v1~1company~1deepsearch~1lei~1%7Bnumber%7D/get/responses/200/content/application~1json/schema/properties/companyFields } from '../constants';
                    import { BrexIntegration } from '..';

                    export const CompanyIdDataset: EventHandler<BrexIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-#/paths/~1api~1v1~1company~1deepsearch~1lei~1%7Bnumber%7D/get/responses/200/content/application~1json/schema/properties/company`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,check_stock_listing,dataset,lang, id,dataset,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/api/v1/company/{id}/{dataset}'].get({
                                query: {id,check_stock_listing,dataset,lang,},
                                params: {id,dataset,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1api~1v1~1company~1deepsearch~1lei~1%7Bnumber%7D/get/responses/200/content/application~1json/schema/properties/company`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1api~1v1~1company~1deepsearch~1lei~1%7Bnumber%7D/get/responses/200/content/application~1json/schema/properties/company`,
                                properties: #/paths/~1api~1v1~1company~1deepsearch~1lei~1%7Bnumber%7D/get/responses/200/content/application~1json/schema/properties/companyFields,
                            });
                        },
                })
                