
                    import { EventHandler } from '@arkw/core';
                    import { organization-actions-secretFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_org_secret: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-organization-actions-secret`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,secret-name,secret_name, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/actions/secrets/{secret_name}'].get({
                                query: {org,secret-name,},
                                params: {org,secret_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `organization-actions-secret`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `organization-actions-secret`,
                                properties: organization-actions-secretFields,
                            });
                        },
                })
                