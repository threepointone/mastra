
                    import { EventHandler } from '@arkw/core';
                    import { MemberDetailsResponseFields } from '../constants';
                    import { PandadocIntegration } from '..';

                    export const detailsCurrentMember: EventHandler<PandadocIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-MemberDetailsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/public/v1/members/current'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `MemberDetailsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `MemberDetailsResponse`,
                                properties: MemberDetailsResponseFields,
                            });
                        },
                })
                