
                    import { EventHandler } from '@arkw/core';
                    import { accountSignaturesInformationFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const AccountSignatures_GetAccountSignatures: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-accountSignaturesInformation`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,stamp_format,stamp_name,stamp_type, accountId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/v2.1/accounts/{accountId}/signatures'].get({
                                query: {accountId,stamp_format,stamp_name,stamp_type,},
                                params: {accountId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `accountSignaturesInformation`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `accountSignaturesInformation`,
                                properties: accountSignaturesInformationFields,
                            });
                        },
                })
                