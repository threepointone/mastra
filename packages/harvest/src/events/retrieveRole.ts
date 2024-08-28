
                    import { EventHandler } from '@arkw/core';
                    import { RoleFields } from '../constants';
                    import { HarvestIntegration } from '..';

                    export const retrieveRole: EventHandler<HarvestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Role`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { roleId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/roles/{roleId}'].get({
                                query: {roleId,},
                                params: {roleId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Role`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Role`,
                                properties: RoleFields,
                            });
                        },
                })
                