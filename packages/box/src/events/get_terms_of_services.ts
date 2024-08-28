import { EventHandler } from '@arkw/core';

import { TermsOfServicesFields } from '../constants';

import { BoxIntegration } from '..';

export const get_terms_of_services: EventHandler<BoxIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-TermsOfServices`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { tos_type } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/terms_of_services'].get({
      query: { tos_type },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `TermsOfServices`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `TermsOfServices`,
      properties: TermsOfServicesFields,
    });
  },
});
