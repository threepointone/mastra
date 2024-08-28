
                    import { EventHandler } from '@arkw/core';
                    import { CadenceExportFields } from '../constants';
                    import { SalesloftIntegration } from '..';

                    export const CadenceExport: EventHandler<SalesloftIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-CadenceExport`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/cadence_exports/{id}.json'].get({
                                query: {id,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `CadenceExport`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `CadenceExport`,
                                properties: CadenceExportFields,
                            });
                        },
                })
                