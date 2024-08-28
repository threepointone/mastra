import { EventHandler } from '@arkw/core';

import { PageBeanStringFields } from '../constants';

import { JiraIntegration } from '..';

export const getAllLabels: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PageBeanString`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { startAt, maxResults } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/label'].get({
      query: { startAt, maxResults },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PageBeanString`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PageBeanString`,
      properties: PageBeanStringFields,
    });
  },
});
