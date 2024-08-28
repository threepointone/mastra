
                    import { EventHandler } from '@arkw/core';
                    import { organization-actions-variableFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actions_org_variable: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-organization-actions-variable`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,variable-name,name, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/orgs/{org}/actions/variables/{name}'].get({
                                query: {org,variable-name,},
                                params: {org,name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `organization-actions-variable`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `organization-actions-variable`,
                                properties: organization-actions-variableFields,
                            });
                        },
                })
                