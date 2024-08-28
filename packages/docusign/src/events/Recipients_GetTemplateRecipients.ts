
                    import { EventHandler } from '@arkw/core';
                    import { recipientsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Recipients_GetTemplateRecipients: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-recipients`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId,include_anchor_tab_locations,include_extended,include_tabs, accountId,templateId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/recipients'].get({
                                query: {accountId,templateId,include_anchor_tab_locations,include_extended,include_tabs,},
                                params: {accountId,templateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `recipients`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `recipients`,
                                properties: recipientsFields,
                            });
                        },
                })
                