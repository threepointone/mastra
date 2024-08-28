
                    import { EventHandler } from '@arkw/core';
                    import { CustomFieldFields } from '../constants';
                    import { Ring-centralIntegration } from '..';

                    export const CustomField: EventHandler<Ring-centralIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CustomField`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { customFieldId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/custom_fields/{customFieldId}'].get({
                                query: {customFieldId,},
                                params: {customFieldId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CustomField`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CustomField`,
                                properties: CustomFieldFields,
                            });
                        },
                })
                