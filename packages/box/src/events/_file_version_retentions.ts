
                    import { EventHandler } from '@arkw/core';
                    import { FileVersionRetentionsFields } from '../constants';
                    import { BoxIntegration } from '..';

                    export const _file_version_retentions: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-FileVersionRetentions`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { file_id,file_version_id,policy_id,disposition_action,disposition_before,disposition_after,limit,marker,   } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/file_version_retentions'].get({
                                query: {file_id,file_version_id,policy_id,disposition_action,disposition_before,disposition_after,limit,marker,},
                                 })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `FileVersionRetentions`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `FileVersionRetentions`,
                                properties: FileVersionRetentionsFields,
                            });
                        },
                })
                