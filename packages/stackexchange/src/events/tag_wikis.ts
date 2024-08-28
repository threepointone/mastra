
                    import { EventHandler } from '@arkw/core';
                    import { tag_wikisFields } from '../constants';
                    import { StackexchangeIntegration } from '..';

                    export const tag_wikis: EventHandler<StackexchangeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-tag_wikis`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { tags,pagesize,page,filter,callback,site, tags,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/tags/{tags}/wikis'].get({
                                query: {tags,pagesize,page,filter,callback,site,},
                                params: {tags,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `tag_wikis`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `tag_wikis`,
                                properties: tag_wikisFields,
                            });
                        },
                })
                