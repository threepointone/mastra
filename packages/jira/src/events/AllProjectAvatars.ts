
                    import { EventHandler } from '@arkw/core';
                    import { ProjectAvatarsFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const AllProjectAvatars: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-ProjectAvatars`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { projectIdOrKey, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/project/{projectIdOrKey}/avatars'].get({
                                query: {projectIdOrKey,},
                                params: {projectIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `ProjectAvatars`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `ProjectAvatars`,
                                properties: ProjectAvatarsFields,
                            });
                        },
                })
                