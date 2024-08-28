
                    import { EventHandler } from '@arkw/core';
                    import { paginated_filesFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_files: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_files`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { renames,q,sort,workspace,repo_slug,commit,path, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}'].get({
                                query: {renames,q,sort,},
                                params: {workspace,repo_slug,commit,path,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_files`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_files`,
                                properties: paginated_filesFields,
                            });
                        },
                })
                