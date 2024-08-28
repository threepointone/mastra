
                    import { EventHandler } from '@arkw/core';
                    import { PageBeanContextualConfigurationFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const CustomFieldConfiguration: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-PageBeanContextualConfiguration`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { fieldIdOrKey,id,fieldContextId,issueId,projectKeyOrId,issueTypeId,startAt,maxResults, fieldIdOrKey,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/app/field/{fieldIdOrKey}/context/configuration'].get({
                                query: {fieldIdOrKey,id,fieldContextId,issueId,projectKeyOrId,issueTypeId,startAt,maxResults,},
                                params: {fieldIdOrKey,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `PageBeanContextualConfiguration`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `PageBeanContextualConfiguration`,
                                properties: PageBeanContextualConfigurationFields,
                            });
                        },
                })
                