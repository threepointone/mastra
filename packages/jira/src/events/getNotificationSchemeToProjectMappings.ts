import { EventHandler } from '@arkw/core';

import { PageBeanNotificationSchemeAndProjectMappingJsonBeanFields } from '../constants';

import { JiraIntegration } from '..';

export const getNotificationSchemeToProjectMappings: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PageBeanNotificationSchemeAndProjectMappingJsonBean`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { startAt, maxResults, notificationSchemeId, projectId } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/notificationscheme/project'].get({
      query: { startAt, maxResults, notificationSchemeId, projectId },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PageBeanNotificationSchemeAndProjectMappingJsonBean`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PageBeanNotificationSchemeAndProjectMappingJsonBean`,
      properties: PageBeanNotificationSchemeAndProjectMappingJsonBeanFields,
    });
  },
});
