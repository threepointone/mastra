
                    import { EventHandler } from '@arkw/core';
                    import { SignRequestFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _sign_requests_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-SignRequest`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { sign_request_id, sign_request_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/sign_requests/{sign_request_id}'].get({
                                query: {sign_request_id,},
                                params: {sign_request_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SignRequest`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SignRequest`,
                                properties: SignRequestFields,
                            });
                        },
                })
                