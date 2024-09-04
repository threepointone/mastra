import { EventHandler } from '@arkw/core';

import { OneRecommendationsFields } from '../constants';

import { SpotifyIntegration } from '..';

export const recommendations: EventHandler<SpotifyIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getApiClient },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-OneRecommendations-recommendations`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {
      limit,
      seed_artists,
      seed_genres,
      seed_tracks,
      min_acousticness,
      max_acousticness,
      target_acousticness,
      min_danceability,
      max_danceability,
      target_danceability,
      min_duration_ms,
      max_duration_ms,
      target_duration_ms,
      min_energy,
      max_energy,
      target_energy,
      min_instrumentalness,
      max_instrumentalness,
      target_instrumentalness,
      min_key,
      max_key,
      target_key,
      min_liveness,
      max_liveness,
      target_liveness,
      min_loudness,
      max_loudness,
      target_loudness,
      min_mode,
      max_mode,
      target_mode,
      min_popularity,
      max_popularity,
      target_popularity,
      min_speechiness,
      max_speechiness,
      target_speechiness,
      min_tempo,
      max_tempo,
      target_tempo,
      min_time_signature,
      max_time_signature,
      target_time_signature,
      min_valence,
      max_valence,
      target_valence,
    } = event.data;
    const { referenceId } = event.user;
    const proxy = await getApiClient({ referenceId });

    // @ts-ignore
    const response = await proxy['/recommendations'].get({
      query: {
        limit,
        seed_artists,
        seed_genres,
        seed_tracks,
        min_acousticness,
        max_acousticness,
        target_acousticness,
        min_danceability,
        max_danceability,
        target_danceability,
        min_duration_ms,
        max_duration_ms,
        target_duration_ms,
        min_energy,
        max_energy,
        target_energy,
        min_instrumentalness,
        max_instrumentalness,
        target_instrumentalness,
        min_key,
        max_key,
        target_key,
        min_liveness,
        max_liveness,
        target_liveness,
        min_loudness,
        max_loudness,
        target_loudness,
        min_mode,
        max_mode,
        target_mode,
        min_popularity,
        max_popularity,
        target_popularity,
        min_speechiness,
        max_speechiness,
        target_speechiness,
        min_tempo,
        max_tempo,
        target_tempo,
        min_time_signature,
        max_time_signature,
        target_time_signature,
        min_valence,
        max_valence,
        target_valence,
      },
    });

    if (!response.ok) {
      console.log('error in fetching recommendations', { response });
      return;
    }

    const d = await response.json();

    // @ts-ignore
    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `OneRecommendations`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `OneRecommendations`,
      properties: OneRecommendationsFields,
    });
  },
});
