
                    import { EventHandler } from '@arkw/core';
                    import { actions-get-default-workflow-permissionsFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions-github-actions-default-workflow-permissions-organization: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-actions-get-default-workflow-permissions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org, org,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/actions/permissions/workflow'].get({
                                query: {org,},
                                params: {org,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions-get-default-workflow-permissions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions-get-default-workflow-permissions`,
                                properties: actions-get-default-workflow-permissionsFields,
                            });
                        },
                })
                