
                    import { EventHandler } from '@arkw/core';
                    import { ConnectModulesFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const DynamicModulesResource.Modules_get: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ConnectModules`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/atlassian-connect/1/app/module/dynamic'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ConnectModules`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ConnectModules`,
                                properties: ConnectModulesFields,
                            });
                        },
                })
                