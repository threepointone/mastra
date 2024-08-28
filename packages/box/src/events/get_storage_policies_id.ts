
                    import { EventHandler } from '@arkw/core';
                    import { StoragePolicyFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const get_storage_policies_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-StoragePolicy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { storage_policy_id, storage_policy_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/storage_policies/{storage_policy_id}'].get({
                                query: {storage_policy_id,},
                                params: {storage_policy_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `StoragePolicy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `StoragePolicy`,
                                properties: StoragePolicyFields,
                            });
                        },
                })
                