
                    import { EventHandler } from '@arkw/core';
                    import { personFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetAccountsAccountPersons: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-person`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account,ending_before,expand,limit,relationship,starting_after, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/accounts/{account}/persons'].get({
                                query: {account,ending_before,expand,limit,relationship,starting_after,},
                                params: {account,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `person`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `person`,
                                properties: personFields,
                            });
                        },
                })
                