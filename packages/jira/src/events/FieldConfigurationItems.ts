
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanFieldConfigurationItemFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const FieldConfigurationItems: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanFieldConfigurationItem`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,startAt,maxResults, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/fieldconfiguration/{id}/fields'].get({
                                query: {id,startAt,maxResults,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanFieldConfigurationItem`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanFieldConfigurationItem`,
                                properties: PageBeanFieldConfigurationItemFields,
                            });
                        },
                })
                