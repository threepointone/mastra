
                    import { EventHandler } from '@arkw/core';
                    import { FileVersionLegalHoldsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _file_version_legal_holds: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-FileVersionLegalHolds`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { policy_id,marker,limit,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/file_version_legal_holds'].get({
                                query: {policy_id,marker,limit,},
                                 })

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
                