import { IntegrationMap } from '@arkw/core';

import { framework } from '@/lib/framework-utils';

import { ClientLayout } from '.././[entityType]/client-layout';

export default async function Integration({ params }: { params: { integration: string; entityType: string } }) {
  const integrationName = params.integration.toUpperCase() as keyof IntegrationMap;
  const entityType = params.entityType.toUpperCase();
  const integration = framework?.getIntegration(integrationName);

  if (!integration) {
    console.log(`Integration ${integrationName} not found`);
    return null;
  }

  let isAuthenticatable;
  try {
    integration.getAuthenticator();
    isAuthenticatable = true;
  } catch (e) {
    isAuthenticatable = false;
  }

  const referenceId = `1`;

  let syncTable;

  if (isAuthenticatable) {
    const connection = await framework?.dataLayer.getConnectionByReferenceId({
      referenceId,
      name: integrationName as string,
    });

    if (!connection) {
      console.log(`Connection with referenceId ${referenceId} not found for ${params.integration}`);
      return null;
    }

    syncTable = await framework?.dataLayer.getEntityRecordsByConnectionAndType({
      connectionId: connection?.id!,
      type: entityType,
    });
  } else {
    const connection = await framework?.dataLayer.getConnectionByReferenceId({
      referenceId: integrationName as string,
      name: integrationName as string,
    });

    if (!connection) {
      console.log(`Connection with referenceId ${integrationName} not found for ${params.integration}`);
      return null;
    }

    syncTable = await framework?.dataLayer.getEntityRecordsByConnectionAndType({
      connectionId: connection.id,
      type: entityType,
    });
  }

  return (
    <ClientLayout
      integration={params.integration}
      properties={syncTable?.properties || []}
      data={syncTable?.records?.map(({ data }) => data) || []}
      entityTypes={integration.entityTypes}
    />
  );
}
