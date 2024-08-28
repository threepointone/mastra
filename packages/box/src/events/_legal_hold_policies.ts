
                    import { EventHandler } from '@arkw/core';
                    import { LegalHoldPoliciesFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _legal_hold_policies: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-LegalHoldPolicies`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { policy_name,fields,marker,limit, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/legal_hold_policies'].get({
                                query: {policy_name,fields,marker,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `LegalHoldPolicies`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `LegalHoldPolicies`,
                                properties: LegalHoldPoliciesFields,
                            });
                        },
                })
                