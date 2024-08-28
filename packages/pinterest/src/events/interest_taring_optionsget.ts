
                    import { EventHandler } from '@arkw/core';
                    import { SingleInterestTargetingOptionResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const interest_taring_optionsget: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-SingleInterestTargetingOptionResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_interest_id, interest_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/resources/targeting/interests/{interest_id}'].get({
                                query: {path_interest_id,},
                                params: {interest_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `SingleInterestTargetingOptionResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `SingleInterestTargetingOptionResponse`,
                                properties: SingleInterestTargetingOptionResponseFields,
                            });
                        },
                })
                