
                    import { EventHandler } from '@arkw/core';
                    import { UserWebsiteVerificationCodeFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const website_verification: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-UserWebsiteVerificationCode`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { query_ad_account_id,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/user_account/websites/verification'].get({
                                query: {query_ad_account_id,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `UserWebsiteVerificationCode`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `UserWebsiteVerificationCode`,
                                properties: UserWebsiteVerificationCodeFields,
                            });
                        },
                })
                