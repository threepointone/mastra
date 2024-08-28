
                    import { EventHandler } from '@arkw/core';
                    import { pageImagesFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Pages_GetPageImages: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-pageImages`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,documentId,envelopeId,count,dpi,max_height,max_width,nocache,show_changes,start_position, accountId,envelopeId,documentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/documents/{documentId}/pages'].get({
                                query: {accountId,documentId,envelopeId,count,dpi,max_height,max_width,nocache,show_changes,start_position,},
                                params: {accountId,envelopeId,documentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pageImages`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pageImages`,
                                properties: pageImagesFields,
                            });
                        },
                })
                