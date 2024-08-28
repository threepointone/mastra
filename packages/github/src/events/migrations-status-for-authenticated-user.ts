
                    import { EventHandler } from '@arkw/core';
                    import { migrationFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const migrations-status-for-authenticated-user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-migration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { migration-id,exclude, migration_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/user/migrations/{migration_id}'].get({
                                query: {migration-id,exclude,},
                                params: {migration_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `migration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `migration`,
                                properties: migrationFields,
                            });
                        },
                })
                