
                    import { EventHandler } from '@arkw/core';
                    import { FileVersionLegalHoldsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _legal_hold_policy_assignments_id_files_on_hold: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FileVersionLegalHolds`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { legal_hold_policy_assignment_id,marker,limit,fields, legal_hold_policy_assignment_id,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/legal_hold_policy_assignments/{legal_hold_policy_assignment_id}/files_on_hold'].get({
                                query: {legal_hold_policy_assignment_id,marker,limit,fields,},
                                params: {legal_hold_policy_assignment_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileVersionLegalHolds`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileVersionLegalHolds`,
                                properties: FileVersionLegalHoldsFields,
                            });
                        },
                })
                