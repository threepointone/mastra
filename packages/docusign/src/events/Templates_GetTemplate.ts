
                    import { EventHandler } from '@arkw/core';
                    import { envelopeTemplateFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Templates_GetTemplate: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-envelopeTemplate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,templateId,include, accountId,templateId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/templates/{templateId}'].get({
                                query: {accountId,templateId,include,},
                                params: {accountId,templateId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `envelopeTemplate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `envelopeTemplate`,
                                properties: envelopeTemplateFields,
                            });
                        },
                })
                