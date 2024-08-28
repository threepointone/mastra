
                    import { EventHandler } from '@arkw/core';
                    import { BoardFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const boards: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Board`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_board_id,query_ad_account_id,board_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/boards/{board_id}'].get({
                                query: {path_board_id,query_ad_account_id,},
                                params: {board_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Board`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Board`,
                                properties: BoardFields,
                            });
                        },
                })
                