
                    import { EventHandler } from '@arkw/core';
                    import { report_annotationFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const Annotation: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-report_annotation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,commit,reportId,annotationId, workspace,repo_slug,commit,reportId,annotationId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}'].get({
                                query: {workspace,repo_slug,commit,reportId,annotationId,},
                                params: {workspace,repo_slug,commit,reportId,annotationId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `report_annotation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `report_annotation`,
                                properties: report_annotationFields,
                            });
                        },
                })
                