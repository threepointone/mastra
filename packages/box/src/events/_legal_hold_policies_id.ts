
                    import { EventHandler } from '@arkw/core';
                    import { LegalHoldPolicyFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _legal_hold_policies_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-LegalHoldPolicy`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { legal_hold_policy_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/legal_hold_policies/{legal_hold_policy_id}'].get({
                                query: {legal_hold_policy_id,},
                                params: {legal_hold_policy_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `LegalHoldPolicy`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `LegalHoldPolicy`,
                                properties: LegalHoldPolicyFields,
                            });
                        },
                })
                