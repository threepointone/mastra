
                    import { EventHandler } from '@arkw/core';
                    import { TransitionsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const Transitions: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Transitions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueIdOrKey,expand,transitionId,skipRemoteOnlyCondition,includeUnavailableTransitions,sortByOpsBarAndStatus, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issue/{issueIdOrKey}/transitions'].get({
                                query: {issueIdOrKey,expand,transitionId,skipRemoteOnlyCondition,includeUnavailableTransitions,sortByOpsBarAndStatus,},
                                params: {issueIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Transitions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Transitions`,
                                properties: TransitionsFields,
                            });
                        },
                })
                