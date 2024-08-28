
                    import { EventHandler } from '@arkw/core';
                    import { powerFormSendersResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const PowerForms_GetPowerFormsSenders: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-powerFormSendersResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,start_position, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/powerforms/senders'].get({
                                query: {accountId,start_position,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `powerFormSendersResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `powerFormSendersResponse`,
                                properties: powerFormSendersResponseFields,
                            });
                        },
                })
                