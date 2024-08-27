
                    import { EventHandler } from '@arkw/core';
                    import { StripeIntegration } from '..';

                    export const GetCreditNotesPreviewLines: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-credit_note_line_item`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {},
                })
                