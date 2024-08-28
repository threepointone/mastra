
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanFieldConfigurationDetailsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllFieldConfigurations: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanFieldConfigurationDetails`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,isDefault,query,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/fieldconfiguration'].get({
                                query: {startAt,maxResults,id,isDefault,query,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanFieldConfigurationDetails`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanFieldConfigurationDetails`,
                                properties: PageBeanFieldConfigurationDetailsFields,
                            });
                        },
                })
                