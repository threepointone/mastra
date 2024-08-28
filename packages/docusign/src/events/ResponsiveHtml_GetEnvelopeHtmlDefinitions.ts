
                    import { EventHandler } from '@arkw/core';
                    import { documentHtmlDefinitionOriginalsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ResponsiveHtml_GetEnvelopeHtmlDefinitions: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-documentHtmlDefinitionOriginals`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId, accountId,envelopeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/html_definitions'].get({
                                query: {accountId,envelopeId,},
                                params: {accountId,envelopeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `documentHtmlDefinitionOriginals`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `documentHtmlDefinitionOriginals`,
                                properties: documentHtmlDefinitionOriginalsFields,
                            });
                        },
                })
                