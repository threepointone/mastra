
                    import { EventHandler } from '@arkw/core';
                    import { Form-ObjectFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_company_form: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Form-Object`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/forms/{id_or_uuid}'].get({
                                
                                params: {id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Form-Object`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Form-Object`,
                                properties: Form-ObjectFields,
                            });
                        },
                })
                