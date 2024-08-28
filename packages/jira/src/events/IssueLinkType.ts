
                    import { EventHandler } from '@arkw/core';
                    import { IssueLinkTypeFields } from '../constants';
                    import { JiraIntegration } from '..';

                    export const IssueLinkType: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-IssueLinkType`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { issueLinkTypeId, issueLinkTypeId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/rest/api/3/issueLinkType/{issueLinkTypeId}'].get({
                                query: {issueLinkTypeId,},
                                params: {issueLinkTypeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `IssueLinkType`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `IssueLinkType`,
                                properties: IssueLinkTypeFields,
                            });
                        },
                })
                