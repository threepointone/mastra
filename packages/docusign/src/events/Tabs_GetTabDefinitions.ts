
                    import { EventHandler } from '@arkw/core';
                    import { tabMetadataListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Tabs_GetTabDefinitions: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tabMetadataList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,custom_tab_only, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/tab_definitions'].get({
                                query: {accountId,custom_tab_only,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tabMetadataList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tabMetadataList`,
                                properties: tabMetadataListFields,
                            });
                        },
                })
                