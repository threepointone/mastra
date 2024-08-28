import { EventHandler } from '@arkw/core';

import { UsersFields } from '../constants';

import { BoxIntegration } from '..';

export const get_users: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-Users`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { filter_term, user_type, external_app_user_id, fields, offset, limit, usemarker, marker } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/users'].get({
      query: { filter_term, user_type, external_app_user_id, fields, offset, limit, usemarker, marker },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `Users`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `Users`,
      properties: UsersFields,
    });
  },
});
