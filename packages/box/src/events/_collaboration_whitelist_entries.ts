
                    import { EventHandler } from '@arkw/core';
                    import { CollaborationAllowlistEntriesFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _collaboration_whitelist_entries: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CollaborationAllowlistEntries`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { marker,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/collaboration_whitelist_entries'].get({
                                query: {marker,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CollaborationAllowlistEntries`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CollaborationAllowlistEntries`,
                                properties: CollaborationAllowlistEntriesFields,
                            });
                        },
                })
                