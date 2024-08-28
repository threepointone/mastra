
                    import { EventHandler } from '@arkw/core';
                    import { TimeReportsResultsFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const projectsTimeReport: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TimeReportsResults`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { from,to,include_fixed_fee,page,per_page,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/reports/time/projects'].get({
                                query: {from,to,include_fixed_fee,page,per_page,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TimeReportsResults`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TimeReportsResults`,
                                properties: TimeReportsResultsFields,
                            });
                        },
                })
                