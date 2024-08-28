
                    import { EventHandler } from '@arkw/core';
                    import { notaryResultFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const Notary_GetNotary: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-notaryResult`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { include_jurisdictions, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/current_user/notary'].get({
                                query: {include_jurisdictions,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `notaryResult`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `notaryResult`,
                                properties: notaryResultFields,
                            });
                        },
                })
                