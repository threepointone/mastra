import { EventHandler } from '@arkw/core';

import { OneAudioAnalysisFields } from '../constants';

import { SpotifyIntegration } from '..';

export const audioAnalysis: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneAudioAnalysis-audioAnalysis`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const { id } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/audio-analysis/{id}'].get({
      params: { id },
    });

    if (!response.ok) {
      console.log('error in fetching audioAnalysis', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneAudioAnalysis`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneAudioAnalysis`,
      properties: OneAudioAnalysisFields,
    });
  },
});
