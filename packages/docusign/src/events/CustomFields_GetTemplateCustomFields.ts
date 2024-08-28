
                    import { EventHandler } from '@arkw/core';
                    import { customFieldsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const CustomFields_GetTemplateCustomFields: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-customFields`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId, accountId,templateId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/custom_fields'].get({
                                query: {accountId,templateId,},
                                params: {accountId,templateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `customFields`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `customFields`,
                                properties: customFieldsFields,
                            });
                        },
                })
                