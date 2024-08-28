
                    import { EventHandler } from '@arkw/core';
                    import { RetrieveWageSettingResponseFields } from '../constants';
                    import { SquareupIntegration } from '..';

                    export const RetrieveWageSetting: EventHandler<SquareupIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-RetrieveWageSettingResponse`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { team_member_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/v2/team-members/{team_member_id}/wage-setting'].get({
                                query: {team_member_id,},
                                params: {team_member_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `RetrieveWageSettingResponse`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `RetrieveWageSettingResponse`,
                                properties: RetrieveWageSettingResponseFields,
                            });
                        },
                })
                