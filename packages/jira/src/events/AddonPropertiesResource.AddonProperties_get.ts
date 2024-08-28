
                    import { EventHandler } from '@arkw/core';
                    import { PropertyKeysFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AddonPropertiesResource.AddonProperties_get: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-PropertyKeys`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { addonKey, addonKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/rest/atlassian-connect/1/addons/{addonKey}/properties'].get({
                                query: {addonKey,},
                                params: {addonKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PropertyKeys`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PropertyKeys`,
                                properties: PropertyKeysFields,
                            });
                        },
                })
                