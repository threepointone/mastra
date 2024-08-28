
                    import { EventHandler } from '@arkw/core';
                    import { accountFields } from '../constants';
                    import { BitbucketIntegration } from '..';

                    export const account: EventHandler<BitbucketIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-account`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {  selected_user,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/users/{selected_user}'].get({
                                
                                params: {selected_user,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `account`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `account`,
                                properties: accountFields,
                            });
                        },
                })
                