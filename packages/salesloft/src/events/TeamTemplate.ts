
                    import { EventHandler } from '@arkw/core';
                    import { TeamTemplateFields } from '../constants';
                    import { SalesloftIntegration } from '..';

                    export const TeamTemplate: EventHandler<SalesloftIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-TeamTemplate`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,include_signature, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2/team_templates/{id}.json'].get({
                                query: {id,include_signature,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `TeamTemplate`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `TeamTemplate`,
                                properties: TeamTemplateFields,
                            });
                        },
                })
                