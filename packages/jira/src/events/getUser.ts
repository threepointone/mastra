import { EventHandler } from '@arkw/core';

import { UserFields } from '../constants';

import { JiraIntegration } from '..';

export const getUser: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-User`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { accountId, username, key, expand } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/user'].get({
      query: { accountId, username, key, expand },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `User`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `User`,
      properties: UserFields,
    });
  },
});
