
                    import { EventHandler } from '@arkw/core';
                    import { Get2ComplianceJobsIdResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const getBatchComplianceJob: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-Get2ComplianceJobsIdResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { id,ComplianceJobFieldsParameter, id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/2/compliance/jobs/{id}'].get({
                                query: {id,ComplianceJobFieldsParameter,},
                                params: {id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2ComplianceJobsIdResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2ComplianceJobsIdResponse`,
                                properties: Get2ComplianceJobsIdResponseFields,
                            });
                        },
                })
                