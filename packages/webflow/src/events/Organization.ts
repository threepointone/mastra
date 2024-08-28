
                    import { EventHandler } from '@arkw/core';
                    import { OrganizationFields } from '../constants';
                    import { WebflowIntegration } from '..';

                    export const Organization: EventHandler<WebflowIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Organization`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { organizationId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/organizations/{organizationId}'].get({
                                query: {organizationId,},
                                params: {organizationId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Organization`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Organization`,
                                properties: OrganizationFields,
                            });
                        },
                })
                