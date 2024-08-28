
                    import { EventHandler } from '@arkw/core';
                    import { CollaborationAllowlistExemptTargetFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _collaboration_whitelist_exempt_targets_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CollaborationAllowlistExemptTarget`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { collaboration_whitelist_exempt_target_id, collaboration_whitelist_exempt_target_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/collaboration_whitelist_exempt_targets/{collaboration_whitelist_exempt_target_id}'].get({
                                query: {collaboration_whitelist_exempt_target_id,},
                                params: {collaboration_whitelist_exempt_target_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CollaborationAllowlistExemptTarget`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CollaborationAllowlistExemptTarget`,
                                properties: CollaborationAllowlistExemptTargetFields,
                            });
                        },
                })
                