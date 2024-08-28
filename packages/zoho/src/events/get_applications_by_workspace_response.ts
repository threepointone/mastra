
                    import { EventHandler } from '@arkw/core';
                    import { get_applications_by_workspace_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const get_applications_by_workspace_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-get_applications_by_workspace_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name, account_owner_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/creator/v2/meta/{account_owner_name}/applications'].get({
                                query: {account_owner_name,},
                                params: {account_owner_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `get_applications_by_workspace_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `get_applications_by_workspace_response`,
                                properties: get_applications_by_workspace_responseFields,
                            });
                        },
                })
                