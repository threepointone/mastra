
                    import { EventHandler } from '@arkw/core';
                    import { RetentionPoliciesFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _retention_policies: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetentionPolicies`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { policy_name,policy_type,created_by_user_id,fields,limit,marker,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/retention_policies'].get({
                                query: {policy_name,policy_type,created_by_user_id,fields,limit,marker,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetentionPolicies`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetentionPolicies`,
                                properties: RetentionPoliciesFields,
                            });
                        },
                })
                