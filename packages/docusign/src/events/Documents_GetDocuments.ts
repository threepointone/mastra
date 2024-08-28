
                    import { EventHandler } from '@arkw/core';
                    import { envelopeDocumentsResultFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Documents_GetDocuments: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-envelopeDocumentsResult`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId,documents_by_userid,include_docgen_formfields,include_metadata,include_tabs,recipient_id,shared_user_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents'].get({
                                query: {accountId,envelopeId,documents_by_userid,include_docgen_formfields,include_metadata,include_tabs,recipient_id,shared_user_id,},
                                params: {accountId,envelopeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `envelopeDocumentsResult`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `envelopeDocumentsResult`,
                                properties: envelopeDocumentsResultFields,
                            });
                        },
                })
                