
                    import { EventHandler } from '@arkw/core';
                    import { paginated_default_reviewer_and_typeFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_default_reviewer_and_type: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-paginated_default_reviewer_and_type`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,project_key,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/workspaces/{workspace}/projects/{project_key}/default-reviewers'].get({
                                
                                params: {workspace,project_key,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_default_reviewer_and_type`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_default_reviewer_and_type`,
                                properties: paginated_default_reviewer_and_typeFields,
                            });
                        },
                })
                