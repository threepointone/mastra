
                    import { EventHandler } from '@arkw/core';
                    import { templateDocumentsResultFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Documents_GetTemplateDocuments: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-templateDocumentsResult`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId,include_tabs, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}/documents'].get({
                                query: {accountId,templateId,include_tabs,},
                                params: {accountId,templateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `templateDocumentsResult`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `templateDocumentsResult`,
                                properties: templateDocumentsResultFields,
                            });
                        },
                })
                