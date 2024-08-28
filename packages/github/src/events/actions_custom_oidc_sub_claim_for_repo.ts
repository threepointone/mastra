
                    import { EventHandler } from '@arkw/core';
                    import { oidc-custom-sub-repoFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_custom_oidc_sub_claim_for_repo: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-oidc-custom-sub-repo`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { owner,repo, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repos/{owner}/{repo}/actions/oidc/customization/sub'].get({
                                query: {owner,repo,},
                                params: {owner,repo,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `oidc-custom-sub-repo`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `oidc-custom-sub-repo`,
                                properties: oidc-custom-sub-repoFields,
                            });
                        },
                })
                