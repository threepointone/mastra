
                    import { EventHandler } from '@arkw/core';
                    import { powerFormFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const PowerForms_GetPowerForm: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-powerForm`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,powerFormId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/powerforms/{powerFormId}'].get({
                                query: {accountId,powerFormId,},
                                params: {accountId,powerFormId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `powerForm`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `powerForm`,
                                properties: powerFormFields,
                            });
                        },
                })
                