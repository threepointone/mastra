
                    import { EventHandler } from '@arkw/core';
                    import { personFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetAccountsAccountPeoplePerson: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-person`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account,expand,person, account,person,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/accounts/{account}/people/{person}'].get({
                                query: {account,expand,person,},
                                params: {account,person,} })

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
                