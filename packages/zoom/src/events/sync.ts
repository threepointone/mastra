import { EventHandler, PropertyType } from '@kpl/core';

import { ZoomIntegration } from '..';

export const meetingsSync: EventHandler<ZoomIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, entityTypes, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-meetings`,
  event: eventKey,
  executor: async ({ event, step }) => {
    const { connectionId } = event.user;

    const connection = await dataLayer?.getConnection({ connectionId, name });

    if (!connection) {
      throw new Error('Integration connection not found');
    }

    const client = await getApiClient({ connectionId });
    const res = await client['/metrics/meetings'].get();

    const { meetings } = await res.json();

    const meetingProperties = Object.keys(meetings ?? {})?.flatMap(key => ({
      name: key,
      order: 0,
      type: PropertyType.SINGLE_LINE_TEXT,
      displayName: key,
    }));

    await dataLayer?.syncData({
      connectionId,
      data: meetings?.flatMap((r: any) => {
        return {
          externalId: r.id,
          data: r,
          entityType: entityTypes.MEETINGS,
        };
      }),
      properties: meetingProperties,
      type: entityTypes.MEETINGS,
      name,
    });
  },
});
