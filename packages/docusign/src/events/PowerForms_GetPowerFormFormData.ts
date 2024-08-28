
                    import { EventHandler } from '@arkw/core';
                    import { powerFormsFormDataResponseFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const PowerForms_GetPowerFormFormData: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-powerFormsFormDataResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,powerFormId,data_layout,from_date,to_date, accountId,powerFormId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/powerforms/{powerFormId}/form_data'].get({
                                query: {accountId,powerFormId,data_layout,from_date,to_date,},
                                params: {accountId,powerFormId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `powerFormsFormDataResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `powerFormsFormDataResponse`,
                                properties: powerFormsFormDataResponseFields,
                            });
                        },
                })
                