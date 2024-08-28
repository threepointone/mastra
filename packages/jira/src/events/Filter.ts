
                    import { EventHandler } from '@arkw/core';
                    import { FilterFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Filter: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Filter`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,expand,overrideSharePermissions, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/filter/{id}'].get({
                                query: {id,expand,overrideSharePermissions,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Filter`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Filter`,
                                properties: FilterFields,
                            });
                        },
                })
                