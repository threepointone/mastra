
                    import { EventHandler } from '@arkw/core';
                    import { AccountCustomFieldsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const AccountCustomFields_GetAccountCustomFields: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AccountCustomFields`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/custom_fields'].get({
                                query: {accountId,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AccountCustomFields`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AccountCustomFields`,
                                properties: AccountCustomFieldsFields,
                            });
                        },
                })
                