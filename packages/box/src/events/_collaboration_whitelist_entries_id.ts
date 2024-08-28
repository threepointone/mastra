
                    import { EventHandler } from '@arkw/core';
                    import { CollaborationAllowlistEntryFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _collaboration_whitelist_entries_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CollaborationAllowlistEntry`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { collaboration_whitelist_entry_id, collaboration_whitelist_entry_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/collaboration_whitelist_entries/{collaboration_whitelist_entry_id}'].get({
                                query: {collaboration_whitelist_entry_id,},
                                params: {collaboration_whitelist_entry_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CollaborationAllowlistEntry`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CollaborationAllowlistEntry`,
                                properties: CollaborationAllowlistEntryFields,
                            });
                        },
                })
                