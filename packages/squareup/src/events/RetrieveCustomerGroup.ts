
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveCustomerGroupResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveCustomerGroup: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveCustomerGroupResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { group_id, group_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/customers/groups/{group_id}'].get({
                                query: {group_id,},
                                params: {group_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveCustomerGroupResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveCustomerGroupResponse`,
                                properties: RetrieveCustomerGroupResponseFields,
                            });
                        },
                })
                