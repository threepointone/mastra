
                    import { EventHandler } from '@arkw/core';
                    import { statusFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2TargetIdentifierAttributesAttributeStatuses: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-status`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { target,identifier,attribute,show_archived, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/{target}/{identifier}/attributes/{attribute}/statuses'].get({
                                query: {target,identifier,attribute,show_archived,},
                                params: {target,identifier,attribute,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `status`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `status`,
                                properties: statusFields,
                            });
                        },
                })
                