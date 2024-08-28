
                    import { EventHandler } from '@arkw/core';
                    import { paginated_accountsFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const paginated_accounts: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-paginated_accounts`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  workspace,encoded_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/snippets/{workspace}/{encoded_id}/watchers'].get({
                                
                                params: {workspace,encoded_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `paginated_accounts`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `paginated_accounts`,
                                properties: paginated_accountsFields,
                            });
                        },
                })
                