
                    import { EventHandler } from '@arkw/core';
                    import { packageFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const packages-package-for-authenticated-user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({        
                        id: `${name}-sync-package`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { package-type,package-name, package_type,package_name,  } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })

                         
                            const response = await proxy['/user/packages/{package_type}/{package_name}'].get({
                                query: {package-type,package-name,},
                                params: {package_type,package_name,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `package`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `package`,
                                properties: packageFields,
                            });
                        },
                })
                