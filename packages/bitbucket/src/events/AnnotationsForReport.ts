
                    import { EventHandler } from '@arkw/core';
                    import { paginated_annotationsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const AnnotationsForReport: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_annotations`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,commit,reportId, workspace,repo_slug,commit,reportId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations'].get({
                                query: {workspace,repo_slug,commit,reportId,},
                                params: {workspace,repo_slug,commit,reportId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_annotations`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_annotations`,
                                properties: paginated_annotationsFields,
                            });
                        },
                })
                