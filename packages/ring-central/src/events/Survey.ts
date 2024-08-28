
                    import { EventHandler } from '@arkw/core';
                    import { SurveyFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Survey: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Survey`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { surveyId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/surveys/{surveyId}'].get({
                                query: {surveyId,},
                                params: {surveyId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Survey`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Survey`,
                                properties: SurveyFields,
                            });
                        },
                })
                