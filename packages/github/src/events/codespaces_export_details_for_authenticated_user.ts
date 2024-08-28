
                    import { EventHandler } from '@arkw/core';
                    import { codespace-export-detailsFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const codespaces_export_details_for_authenticated_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-codespace-export-details`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { codespace-name,export-id,codespace_name,export_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user/codespaces/{codespace_name}/exports/{export_id}'].get({
                                query: {codespace-name,export-id,},
                                params: {codespace_name,export_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `codespace-export-details`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `codespace-export-details`,
                                properties: codespace-export-detailsFields,
                            });
                        },
                })
                