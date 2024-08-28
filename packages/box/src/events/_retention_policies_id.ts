
                    import { EventHandler } from '@arkw/core';
                    import { RetentionPolicyFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _retention_policies_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetentionPolicy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { retention_policy_id,fields, retention_policy_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/retention_policies/{retention_policy_id}'].get({
                                query: {retention_policy_id,fields,},
                                params: {retention_policy_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetentionPolicy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetentionPolicy`,
                                properties: RetentionPolicyFields,
                            });
                        },
                })
                