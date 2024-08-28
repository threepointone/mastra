
                    import { EventHandler } from '@arkw/core';
                    import { tabsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetTemplateRecipientTabs: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-tabs`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,recipientId,templateId,include_anchor_tab_locations,include_metadata, accountId,templateId,recipientId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/recipients/{recipientId}/tabs'].get({
                                query: {accountId,recipientId,templateId,include_anchor_tab_locations,include_metadata,},
                                params: {accountId,templateId,recipientId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tabs`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tabs`,
                                properties: tabsFields,
                            });
                        },
                })
                