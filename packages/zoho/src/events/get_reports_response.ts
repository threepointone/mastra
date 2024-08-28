
                    import { EventHandler } from '@arkw/core';
                    import { get_reports_responseFields } from '../constants';
                    import { ZohoIntegration } from '..';

                    export const get_reports_response: EventHandler<ZohoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-get_reports_response`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { account_owner_name,app_link_name, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/creator/v2/meta/{account_owner_name}/{app_link_name}/reports'].get({
                                query: {account_owner_name,app_link_name,},
                                params: {account_owner_name,app_link_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `get_reports_response`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `get_reports_response`,
                                properties: get_reports_responseFields,
                            });
                        },
                })
                