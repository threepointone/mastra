
                    import { EventHandler } from '@arkw/core';
                    import { paginated_hook_eventsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_hook_events: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_hook_events`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { subject_type, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/hook_events/{subject_type}'].get({
                                
                                params: {subject_type,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_hook_events`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_hook_events`,
                                properties: paginated_hook_eventsFields,
                            });
                        },
                })
                