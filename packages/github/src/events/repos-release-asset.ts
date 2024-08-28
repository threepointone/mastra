
                    import { EventHandler } from '@arkw/core';
                    import { release-assetFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const repos-release-asset: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-release-asset`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo,asset-id, owner,repo,asset_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repos/{owner}/{repo}/releases/assets/{asset_id}'].get({
                                query: {owner,repo,asset-id,},
                                params: {owner,repo,asset_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `release-asset`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `release-asset`,
                                properties: release-assetFields,
                            });
                        },
                })
                