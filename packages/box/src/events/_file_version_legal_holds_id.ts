
                    import { EventHandler } from '@arkw/core';
                    import { FileVersionLegalHoldFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _file_version_legal_holds_id: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FileVersionLegalHold`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_version_legal_hold_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/file_version_legal_holds/{file_version_legal_hold_id}'].get({
                                query: {file_version_legal_hold_id,},
                                params: {file_version_legal_hold_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileVersionLegalHold`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileVersionLegalHold`,
                                properties: FileVersionLegalHoldFields,
                            });
                        },
                })
                