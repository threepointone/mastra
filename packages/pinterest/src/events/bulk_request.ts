
                    import { EventHandler } from '@arkw/core';
                    import { BulkUpsertStatusResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const bulk_request: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-BulkUpsertStatusResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_bulk_request_id,include_details,ad_account_id,bulk_request_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/bulk/{bulk_request_id}'].get({
                                query: {path_ad_account_id,path_bulk_request_id,include_details,},
                                params: {ad_account_id,bulk_request_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `BulkUpsertStatusResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `BulkUpsertStatusResponse`,
                                properties: BulkUpsertStatusResponseFields,
                            });
                        },
                })
                