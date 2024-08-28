import { EventHandler } from '@arkw/core';

import { DataClassificationLevelsBeanFields } from '../constants';

import { JiraIntegration } from '..';

export const getAllUserDataClassificationLevels: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-DataClassificationLevelsBean`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { status, orderBy } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/classification-levels'].get({
      query: { status, orderBy },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `DataClassificationLevelsBean`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `DataClassificationLevelsBean`,
      properties: DataClassificationLevelsBeanFields,
    });
  },
});
