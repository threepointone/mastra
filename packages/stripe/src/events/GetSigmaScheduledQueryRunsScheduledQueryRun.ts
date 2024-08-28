
                    import { EventHandler } from '@arkw/core';
                    import { scheduled_query_runFields } from '../constants';
                    import { StripeIntegration } from '..';

                    export const GetSigmaScheduledQueryRunsScheduledQueryRun: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-scheduled_query_run`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { expand,scheduled_query_run, scheduled_query_run,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v1/sigma/scheduled_query_runs/{scheduled_query_run}'].get({
                                query: {expand,scheduled_query_run,},
                                params: {scheduled_query_run,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `scheduled_query_run`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `scheduled_query_run`,
                                properties: scheduled_query_runFields,
                            });
                        },
                })
                