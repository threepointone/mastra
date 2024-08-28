
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanFieldConfigurationSchemeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllFieldConfigurationSchemes: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanFieldConfigurationScheme`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { startAt,maxResults,id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/fieldconfigurationscheme'].get({
                                query: {startAt,maxResults,id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanFieldConfigurationScheme`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanFieldConfigurationScheme`,
                                properties: PageBeanFieldConfigurationSchemeFields,
                            });
                        },
                })
                