
                    import { EventHandler } from '@arkw/core';
                    import { attributeFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2TargetIdentifierAttributes: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-attribute`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { target,identifier,limit,offset,show_archived, target,identifier,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/{target}/{identifier}/attributes'].get({
                                query: {target,identifier,limit,offset,show_archived,},
                                params: {target,identifier,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `attribute`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `attribute`,
                                properties: attributeFields,
                            });
                        },
                })
                