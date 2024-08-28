import { EventHandler } from '@arkw/core';

import { PageBeanScreenFields } from '../constants';

import { JiraIntegration } from '..';

export const getScreens: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PageBeanScreen`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { startAt, maxResults, id, queryString, scope, orderBy } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/screens'].get({
      query: { startAt, maxResults, id, queryString, scope, orderBy },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PageBeanScreen`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PageBeanScreen`,
      properties: PageBeanScreenFields,
    });
  },
});
