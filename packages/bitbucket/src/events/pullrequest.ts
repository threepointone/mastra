
                    import { EventHandler } from '@arkw/core';
                    import { pullrequestFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const pullrequest: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-pullrequest`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,pull_request_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}'].get({
                                
                                params: {workspace,repo_slug,pull_request_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `pullrequest`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `pullrequest`,
                                properties: pullrequestFields,
                            });
                        },
                })
                