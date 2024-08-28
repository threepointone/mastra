
                    import { EventHandler } from '@arkw/core';
                    import { MetadataTemplateFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _metadata_templates_id_id_schema: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-MetadataTemplate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { scope,template_key, scope,template_key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/metadata_templates/{scope}/{template_key}/schema'].get({
                                query: {scope,template_key,},
                                params: {scope,template_key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `MetadataTemplate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `MetadataTemplate`,
                                properties: MetadataTemplateFields,
                            });
                        },
                })
                