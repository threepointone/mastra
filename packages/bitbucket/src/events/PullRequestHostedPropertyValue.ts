
                    import { EventHandler } from '@arkw/core';
                    import { application_propertyFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const PullRequestHostedPropertyValue: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-application_property`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { workspace,repo_slug,pullrequest_id,app_key,property_name, workspace,repo_slug,pullrequest_id,app_key,property_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}'].get({
                                query: {workspace,repo_slug,pullrequest_id,app_key,property_name,},
                                params: {workspace,repo_slug,pullrequest_id,app_key,property_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `application_property`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `application_property`,
                                properties: application_propertyFields,
                            });
                        },
                })
                