
                    import { EventHandler } from '@arkw/core';
                    import { LeadFormResponseFields } from '../constants';
                    import { PinterestIntegration } from '..';

                    export const lead_form: EventHandler<PinterestIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-LeadFormResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { path_ad_account_id,path_lead_form_id, ad_account_id,lead_form_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/ad_accounts/{ad_account_id}/lead_forms/{lead_form_id}'].get({
                                query: {path_ad_account_id,path_lead_form_id,},
                                params: {ad_account_id,lead_form_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `LeadFormResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `LeadFormResponse`,
                                properties: LeadFormResponseFields,
                            });
                        },
                })
                