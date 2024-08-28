
                    import { EventHandler } from '@arkw/core';
                    import { SurveyResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const SurveyResponse: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-SurveyResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { surveyResponseId, surveyResponseId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/survey_responses/{surveyResponseId}'].get({
                                query: {surveyResponseId,},
                                params: {surveyResponseId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SurveyResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SurveyResponse`,
                                properties: SurveyResponseFields,
                            });
                        },
                })
                