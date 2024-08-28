
                    import { EventHandler } from '@arkw/core';
                    import { Get2ComplianceJobsResponseFields } from '../constants';
                    import { TwitterIntegration } from '..';

                    export const listBatchComplianceJobs: EventHandler<TwitterIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-Get2ComplianceJobsResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { type,status,ComplianceJobFieldsParameter,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/2/compliance/jobs'].get({
                                query: {type,status,ComplianceJobFieldsParameter,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `Get2ComplianceJobsResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `Get2ComplianceJobsResponse`,
                                properties: Get2ComplianceJobsResponseFields,
                            });
                        },
                })
                