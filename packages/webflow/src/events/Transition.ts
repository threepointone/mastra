
                    import { EventHandler } from '@arkw/core';
                    import { TransitionFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Transition: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Transition`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { transitionId, transitionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/transitions/{transitionId}'].get({
                                query: {transitionId,},
                                params: {transitionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Transition`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Transition`,
                                properties: TransitionFields,
                            });
                        },
                })
                