
                    import { EventHandler } from '@arkw/core';
                    import { reportFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const Report: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-report`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,commit,reportId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}'].get({
                                query: {workspace,repo_slug,commit,reportId,},
                                params: {workspace,repo_slug,commit,reportId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `report`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `report`,
                                properties: reportFields,
                            });
                        },
                })
                