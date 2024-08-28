import { EventHandler } from '@arkw/core';

import { PageBeanSecurityLevelMemberFields } from '../constants';

import { JiraIntegration } from '..';

export const getSecurityLevelMembers: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-PageBeanSecurityLevelMember`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { startAt, maxResults, id, schemeId, levelId, expand } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/issuesecurityschemes/level/member'].get({
      query: { startAt, maxResults, id, schemeId, levelId, expand },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `PageBeanSecurityLevelMember`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `PageBeanSecurityLevelMember`,
      properties: PageBeanSecurityLevelMemberFields,
    });
  },
});
