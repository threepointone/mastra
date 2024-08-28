
                    import { EventHandler } from '@arkw/core';
                    import { IntegrationMetadataFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const integrations_commerce: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-IntegrationMetadata`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_external_business_id,external_business_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/integrations/commerce/{external_business_id}'].get({
                                query: {path_external_business_id,},
                                params: {external_business_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IntegrationMetadata`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IntegrationMetadata`,
                                properties: IntegrationMetadataFields,
                            });
                        },
                })
                