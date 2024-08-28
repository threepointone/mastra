
                    import { EventHandler } from '@arkw/core';
                    import { ContentFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const Content: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Content`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { contentId, contentId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/contents/{contentId}'].get({
                                query: {contentId,},
                                params: {contentId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Content`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Content`,
                                properties: ContentFields,
                            });
                        },
                })
                