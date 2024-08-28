
                    import { EventHandler } from '@arkw/core';
                    import { Signatory-ListFields } from '../constants';
                    import { GustoIntegration } from '..';

                    export const _v1_companies_company_uuid_signatories: EventHandler<GustoIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Signatory-List`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { company_uuid, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/companies/{company_uuid}/signatories'].get({
                                
                                params: {company_uuid,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Signatory-List`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Signatory-List`,
                                properties: Signatory-ListFields,
                            });
                        },
                })
                