import { EventHandler } from '@arkw/core';

import { MetadataQueryIndicesFields } from '../constants';

import { BoxIntegration } from '..';

export const get_metadata_query_indices: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-MetadataQueryIndices`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { scope, template_key } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/metadata_query_indices'].get({
      query: { scope, template_key },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `MetadataQueryIndices`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `MetadataQueryIndices`,
      properties: MetadataQueryIndicesFields,
    });
  },
});
