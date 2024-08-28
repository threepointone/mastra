
                    import { EventHandler } from '@arkw/core';
                    import { powerFormsResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const PowerForms_GetPowerFormsList: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-powerFormsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,from_date,order,order_by,search_fields,search_text,to_date, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/powerforms'].get({
                                query: {accountId,from_date,order,order_by,search_fields,search_text,to_date,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `powerFormsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `powerFormsResponse`,
                                properties: powerFormsResponseFields,
                            });
                        },
                })
                