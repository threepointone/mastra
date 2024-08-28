
                    import { EventHandler } from '@arkw/core';
                    import { StatusCategoryFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const StatusCategory: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-StatusCategory`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { idOrKey, idOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/api/3/statuscategory/{idOrKey}'].get({
                                query: {idOrKey,},
                                params: {idOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `StatusCategory`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `StatusCategory`,
                                properties: StatusCategoryFields,
                            });
                        },
                })
                