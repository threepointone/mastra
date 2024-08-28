
                    import { EventHandler } from '@arkw/core';
                    import { select-optionFields } from '../constants';
                    import { AttioIntegration } from '..';

                    export const v2TargetIdentifierAttributesAttributeOptions: EventHandler<AttioIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-select-option`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { target,identifier,attribute,show_archived, target,identifier,attribute,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/{target}/{identifier}/attributes/{attribute}/options'].get({
                                query: {target,identifier,attribute,show_archived,},
                                params: {target,identifier,attribute,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `select-option`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `select-option`,
                                properties: select-optionFields,
                            });
                        },
                })
                