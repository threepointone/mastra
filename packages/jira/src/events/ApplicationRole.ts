
                    import { EventHandler } from '@arkw/core';
                    import { ApplicationRoleFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const ApplicationRole: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ApplicationRole`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { key, key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/applicationrole/{key}'].get({
                                query: {key,},
                                params: {key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ApplicationRole`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ApplicationRole`,
                                properties: ApplicationRoleFields,
                            });
                        },
                })
                