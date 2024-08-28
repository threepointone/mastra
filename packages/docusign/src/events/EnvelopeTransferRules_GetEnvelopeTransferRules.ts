
                    import { EventHandler } from '@arkw/core';
                    import { envelopeTransferRuleInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const EnvelopeTransferRules_GetEnvelopeTransferRules: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-envelopeTransferRuleInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,count,start_position, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/transfer_rules'].get({
                                query: {accountId,count,start_position,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `envelopeTransferRuleInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `envelopeTransferRuleInformation`,
                                properties: envelopeTransferRuleInformationFields,
                            });
                        },
                })
                