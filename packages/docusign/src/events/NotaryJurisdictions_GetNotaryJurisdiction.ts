
                    import { EventHandler } from '@arkw/core';
                    import { notaryJurisdictionFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const NotaryJurisdictions_GetNotaryJurisdiction: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-notaryJurisdiction`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { jurisdictionId, jurisdictionId,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/current_user/notary/jurisdictions/{jurisdictionId}'].get({
                                query: {jurisdictionId,},
                                params: {jurisdictionId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `notaryJurisdiction`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `notaryJurisdiction`,
                                properties: notaryJurisdictionFields,
                            });
                        },
                })
                