
                    import { EventHandler } from '@arkw/core';
                    import { #/paths/~1api~1v1~1company~1notification~1list~1%7Bid%7D/get/responses/200Fields } from '../constants';
                    import { BrexIntegration } from '..';

                    export const CompanyMonitorList: EventHandler<BrexIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-#/paths/~1api~1v1~1company~1notification~1list~1%7Bid%7D/get/responses/200`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/api/v1/company/monitoring/list'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `#/paths/~1api~1v1~1company~1notification~1list~1%7Bid%7D/get/responses/200`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `#/paths/~1api~1v1~1company~1notification~1list~1%7Bid%7D/get/responses/200`,
                                properties: #/paths/~1api~1v1~1company~1notification~1list~1%7Bid%7D/get/responses/200Fields,
                            });
                        },
                })
                