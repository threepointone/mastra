import { EventHandler } from '@arkw/core';

import { ConfigurationFields } from '../constants';

import { JiraIntegration } from '..';

export const getConfiguration: EventHandler<JiraIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-Configuration`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {} = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/rest/api/3/configuration'].get({});

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `Configuration`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `Configuration`,
      properties: ConfigurationFields,
    });
  },
});
