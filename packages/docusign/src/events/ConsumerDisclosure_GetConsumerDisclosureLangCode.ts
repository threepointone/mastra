
                    import { EventHandler } from '@arkw/core';
                    import { AccountConsumerDisclosuresFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const ConsumerDisclosure_GetConsumerDisclosureLangCode: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-AccountConsumerDisclosures`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,langCode, accountId,langCode,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/consumer_disclosure/{langCode}'].get({
                                query: {accountId,langCode,},
                                params: {accountId,langCode,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `AccountConsumerDisclosures`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `AccountConsumerDisclosures`,
                                properties: AccountConsumerDisclosuresFields,
                            });
                        },
                })
                