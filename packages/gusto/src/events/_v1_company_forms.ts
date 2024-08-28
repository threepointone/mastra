
                    import { EventHandler } from '@arkw/core';
                    import { Form-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_company_forms: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Form-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { company_id_or_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_id_or_uuid}/forms'].get({
                                
                                params: {company_id_or_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Form-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Form-List`,
                                properties: Form-ListFields,
                            });
                        },
                })
                