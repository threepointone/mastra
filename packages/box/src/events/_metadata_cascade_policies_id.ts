
                    import { EventHandler } from '@arkw/core';
                    import { MetadataCascadePolicyFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _metadata_cascade_policies_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-MetadataCascadePolicy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { metadata_cascade_policy_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/metadata_cascade_policies/{metadata_cascade_policy_id}'].get({
                                query: {metadata_cascade_policy_id,},
                                params: {metadata_cascade_policy_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `MetadataCascadePolicy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `MetadataCascadePolicy`,
                                properties: MetadataCascadePolicyFields,
                            });
                        },
                })
                