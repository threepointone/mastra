
                    import { EventHandler } from '@arkw/core';
                    import { account_mergeFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const account_merge: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-account_merge`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { ids,pagesize,page,filter,callback, ids,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{ids}/merges'].get({
                                query: {ids,pagesize,page,filter,callback,},
                                params: {ids,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `account_merge`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `account_merge`,
                                properties: account_mergeFields,
                            });
                        },
                })
                