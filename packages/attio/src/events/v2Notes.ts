
                    import { EventHandler } from '@arkw/core';
                    import { noteFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2Notes: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-note`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { limit,offset,parent_object,parent_record_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/notes'].get({
                                query: {limit,offset,parent_object,parent_record_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `note`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `note`,
                                properties: noteFields,
                            });
                        },
                })
                