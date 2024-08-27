import { EventHandler } from '@arkw/core';

import { subscription_scheduleFields } from '../constants';

import { StripeIntegration } from '..';

export const GetSubscriptionSchedules: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-subscription_schedule`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {
      canceled_at,
      completed_at,
      created,
      customer,
      ending_before,
      expand,
      limit,
      released_at,
      scheduled,
      starting_after,
    } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/v1/subscription_schedules'].get({
      query: {
        canceled_at,
        completed_at,
        created,
        customer,
        ending_before,
        expand,
        limit,
        released_at,
        scheduled,
        starting_after,
      },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `subscription_schedule`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `subscription_schedule`,
      properties: subscription_scheduleFields,
    });
  },
});
