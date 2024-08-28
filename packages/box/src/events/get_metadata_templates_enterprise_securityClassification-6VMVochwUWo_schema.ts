
                    import { EventHandler } from '@arkw/core';
                    import { ClassificationTemplateFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-ClassificationTemplate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ClassificationTemplate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ClassificationTemplate`,
                                properties: ClassificationTemplateFields,
                            });
                        },
                })
                