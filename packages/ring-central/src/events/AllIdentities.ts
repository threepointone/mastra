
                    import { EventHandler } from '@arkw/core';
                    import { GetAllIdentitiesResponseFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const AllIdentities: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-GetAllIdentitiesResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { community_id,source_id,identity_group_id,identity_group_ids,user_id,sort,foreign_id,uuid,offset,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/identities'].get({
                                query: {community_id,source_id,identity_group_id,identity_group_ids,user_id,sort,foreign_id,uuid,offset,limit,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `GetAllIdentitiesResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `GetAllIdentitiesResponse`,
                                properties: GetAllIdentitiesResponseFields,
                            });
                        },
                })
                