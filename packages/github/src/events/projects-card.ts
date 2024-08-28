
                    import { EventHandler } from '@arkw/core';
                    import { project-cardFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const projects-card: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-project-card`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { card-id, card_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/projects/columns/cards/{card_id}'].get({
                                query: {card-id,},
                                params: {card_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `project-card`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `project-card`,
                                properties: project-cardFields,
                            });
                        },
                })
                