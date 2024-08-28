
                    import { EventHandler } from '@arkw/core';
                    import { notaryJurisdictionListFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const NotaryJurisdictions_GetNotaryJurisdictions: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-notaryJurisdictionList`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const {    } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/current_user/notary/jurisdictions'].get({
                                
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `notaryJurisdictionList`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `notaryJurisdictionList`,
                                properties: notaryJurisdictionListFields,
                            });
                        },
                })
                