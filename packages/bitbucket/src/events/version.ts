
                    import { EventHandler } from '@arkw/core';
                    import { versionFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const version: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-version`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,repo_slug,version_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/versions/{version_id}'].get({
                                
                                params: {workspace,repo_slug,version_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `version`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `version`,
                                properties: versionFields,
                            });
                        },
                })
                