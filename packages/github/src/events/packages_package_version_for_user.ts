
                    import { EventHandler } from '@arkw/core';
                    import { package-versionFields } from '../constants';
                    import { GithubIntegration } from '..';

                    export const packages_package_version_for_user: EventHandler<GithubIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
                        id: `${name}-sync-package-version`,
                        event: eventKey,
                        executor: async ({ event, step }: any) => {
                            const { package-type,package-name,package-version-id,username,package_type,package_name,package_version_id, } = event.data;
                            const { referenceId } = event.user;
                            const proxy = await getProxy({ referenceId })


                            const response = await proxy['/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'].get({
                                query: {package-type,package-name,package-version-id,username,},
                                params: {username,package_type,package_name,package_version_id,} })

                            if (!response.ok) {
                            return
                            }

                            const d = await response.json()

                            const records = d?.data?.map(({ _externalId, ...d2 }) => ({
                                externalId: _externalId,
                                data: d2,
                                entityType: `package-version`,
                            }));

                            await dataLayer?.syncData({
                                name,
                                referenceId,
                                data: records,
                                type: `package-version`,
                                properties: package-versionFields,
                            });
                        },
                })
                