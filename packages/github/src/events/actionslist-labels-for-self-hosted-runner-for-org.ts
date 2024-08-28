
                    import { EventHandler } from '@arkw/core';
                    import { actions_runner_labelsFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const actionslist-labels-for-self-hosted-runner-for-org: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-actions_runner_labels`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { org,runner-id, org,runner_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/orgs/{org}/actions/runners/{runner_id}/labels'].get({
                                query: {org,runner-id,},
                                params: {org,runner_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `actions_runner_labels`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `actions_runner_labels`,
                                properties: actions_runner_labelsFields,
                            });
                        },
                })
                