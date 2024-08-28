
                    import { EventHandler } from '@arkw/core';
                    import { getAllSurveysResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const getAllSurveys: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-getAllSurveysResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/surveys'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `getAllSurveysResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `getAllSurveysResponse`,
                                properties: getAllSurveysResponseFields,
                            });
                        },
                })
                