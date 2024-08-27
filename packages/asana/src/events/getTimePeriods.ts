import { EventHandler } from '@arkw/core';

import { TimePeriodCompactFields } from '../constants';

import { AsanaIntegration } from '..';

export const getTimePeriods: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-TimePeriodCompact`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/time_periods'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `TimePeriodCompact`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `TimePeriodCompact`,
      properties: TimePeriodCompactFields,
    });
  },
});
