import { EventHandler } from '@arkw/core';

import { CustomFieldSettingResponseFields } from '../constants';

import { AsanaIntegration } from '..';

export const getCustomFieldSettingsForPortfolio: EventHandler<AsanaIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-CustomFieldSettingResponse`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });
    const response = await proxy['/portfolios/{portfolio_gid}/custom_field_settings'].get();

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `CustomFieldSettingResponse`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `CustomFieldSettingResponse`,
      properties: CustomFieldSettingResponseFields,
    });
  },
});
