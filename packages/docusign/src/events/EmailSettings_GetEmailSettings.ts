
                    import { EventHandler } from '@arkw/core';
                    import { emailSettingsFields } from '../constants';
                    import { DocusignIntegration } from '..';

                    export const EmailSettings_GetEmailSettings: EventHandler<DocusignIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-emailSettings`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { accountId,envelopeId, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2.1/accounts/{accountId}/envelopes/{envelopeId}/email_settings'].get({
                                query: {accountId,envelopeId,},
                                params: {accountId,envelopeId,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `emailSettings`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `emailSettings`,
                                properties: emailSettingsFields,
                            });
                        },
                })
                