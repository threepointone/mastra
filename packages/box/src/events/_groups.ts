
                    import { EventHandler } from '@arkw/core';
                    import { GroupsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _groups: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Groups`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { filter_term,fields,limit,offset,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/groups'].get({
                                query: {filter_term,fields,limit,offset,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Groups`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Groups`,
                                properties: GroupsFields,
                            });
                        },
                })
                