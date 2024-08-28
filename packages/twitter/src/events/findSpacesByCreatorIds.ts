
                    import { EventHandler } from '@arkw/core';
                    import { Get2SpacesByCreatorIdsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const findSpacesByCreatorIds: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2SpacesByCreatorIdsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { user_ids,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/spaces/by/creator_ids'].get({
                                query: {user_ids,SpaceFieldsParameter,SpaceExpansionsParameter,UserFieldsParameter,TopicFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2SpacesByCreatorIdsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2SpacesByCreatorIdsResponse`,
                                properties: Get2SpacesByCreatorIdsResponseFields,
                            });
                        },
                })
                