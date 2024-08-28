
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { _multiple_albums } from './events/_multiple_albums'
import { _an_album } from './events/_an_album'
import { _an_albums_tracks } from './events/_an_albums_tracks'
import { _multiple_artists } from './events/_multiple_artists'
import { _an_artist } from './events/_an_artist'
import { _an_artists_albums } from './events/_an_artists_albums'
import { _an_artists_related_artists } from './events/_an_artists_related_artists'
import { _an_artists_top_tracks } from './events/_an_artists_top_tracks'
import { _audio_analysis } from './events/_audio_analysis'
import { _several_audio_features } from './events/_several_audio_features'
import { _audio_features } from './events/_audio_features'
import { _multiple_audiobooks } from './events/_multiple_audiobooks'
import { _an_audiobook } from './events/_an_audiobook'
import { _audiobook_chapters } from './events/_audiobook_chapters'
import { _categories } from './events/_categories'
import { _a_category } from './events/_a_category'
import { _a_categories_playlists } from './events/_a_categories_playlists'
import { _featured_playlists } from './events/_featured_playlists'
import { _new_releases } from './events/_new_releases'
import { _several_chapters } from './events/_several_chapters'
import { _a_chapter } from './events/_a_chapter'
import { _multiple_episodes } from './events/_multiple_episodes'
import { _an_episode } from './events/_an_episode'
import { _current_users_profile } from './events/_current_users_profile'
import { _users_saved_albums } from './events/_users_saved_albums'
import { check_users_saved_albums } from './events/check_users_saved_albums'
import { _users_saved_audiobooks } from './events/_users_saved_audiobooks'
import { check_users_saved_audiobooks } from './events/check_users_saved_audiobooks'
import { _users_saved_episodes } from './events/_users_saved_episodes'
import { check_users_saved_episodes } from './events/check_users_saved_episodes'
import { _followed } from './events/_followed'
import { check_current_user_follows } from './events/check_current_user_follows'
import { _information_about_the_users_current_playback } from './events/_information_about_the_users_current_playback'
import { _the_users_currently_playing_track } from './events/_the_users_currently_playing_track'
import { _a_users_available_devices } from './events/_a_users_available_devices'
import { _queue } from './events/_queue'
import { _recently_played } from './events/_recently_played'
import { _a_list_of_current_users_playlists } from './events/_a_list_of_current_users_playlists'
import { _users_saved_shows } from './events/_users_saved_shows'
import { check_users_saved_shows } from './events/check_users_saved_shows'
import { _users_top_artists_and_tracks } from './events/_users_top_artists_and_tracks'
import { _users_saved_tracks } from './events/_users_saved_tracks'
import { check_users_saved_tracks } from './events/check_users_saved_tracks'
import { _playlist } from './events/_playlist'
import { check_if_user_follows_playlist } from './events/check_if_user_follows_playlist'
import { _playlist_cover } from './events/_playlist_cover'
import { _playlists_tracks } from './events/_playlists_tracks'
import { _recommendations } from './events/_recommendations'
import { _recommendation_genres } from './events/_recommendation_genres'
import { search } from './events/search'
import { _multiple_shows } from './events/_multiple_shows'
import { _a_show } from './events/_a_show'
import { _a_shows_episodes } from './events/_a_shows_episodes'
import { _several_tracks } from './events/_several_tracks'
import { _track } from './events/_track'
import { _users_profile } from './events/_users_profile'
import { _list_users_playlists } from './events/_list_users_playlists'

type SpotifyConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SpotifyIntegration extends Integration {
  config: SpotifyConfig;

  constructor({ config }: { config: SpotifyConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SPOTIFY',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'spotify._multiple_albums/sync': {
                schema: z.object({
                  'QueryAlbumIds': z.string(),
'QueryMarket': z.string()}),
                handler: _multiple_albums,
            },
        

             'spotify._an_album/sync': {
                schema: z.object({
                  'id': z.string(),
'PathAlbumId': z.string(),
'QueryMarket': z.string()}),
                handler: _an_album,
            },
        

             'spotify._an_albums_tracks/sync': {
                schema: z.object({
                  'id': z.string(),
'PathAlbumId': z.string(),
'QueryMarket': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _an_albums_tracks,
            },
        

             'spotify._multiple_artists/sync': {
                schema: z.object({
                  'ids': z.string()}),
                handler: _multiple_artists,
            },
        

             'spotify._an_artist/sync': {
                schema: z.object({
                  'id': z.string(),
'PathArtistId': z.string()}),
                handler: _an_artist,
            },
        

             'spotify._an_artists_albums/sync': {
                schema: z.object({
                  'id': z.string(),
'PathArtistId': z.string(),
'QueryIncludeGroups': z.string(),
'QueryMarket': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _an_artists_albums,
            },
        

             'spotify._an_artists_related_artists/sync': {
                schema: z.object({
                  'id': z.string(),
'PathArtistId': z.string()}),
                handler: _an_artists_related_artists,
            },
        

             'spotify._an_artists_top_tracks/sync': {
                schema: z.object({
                  'id': z.string(),
'PathArtistId': z.string(),
'QueryMarket': z.string()}),
                handler: _an_artists_top_tracks,
            },
        

             'spotify._audio_analysis/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: _audio_analysis,
            },
        

             'spotify._several_audio_features/sync': {
                schema: z.object({
                  'ids': z.string()}),
                handler: _several_audio_features,
            },
        

             'spotify._audio_features/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: _audio_features,
            },
        

             'spotify._multiple_audiobooks/sync': {
                schema: z.object({
                  'QueryAudiobookIds': z.string(),
'QueryMarket': z.string()}),
                handler: _multiple_audiobooks,
            },
        

             'spotify._an_audiobook/sync': {
                schema: z.object({
                  'id': z.string(),
'PathAudiobookId': z.string(),
'QueryMarket': z.string()}),
                handler: _an_audiobook,
            },
        

             'spotify._audiobook_chapters/sync': {
                schema: z.object({
                  'id': z.string(),
'PathAudiobookId': z.string(),
'QueryMarket': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _audiobook_chapters,
            },
        

             'spotify._categories/sync': {
                schema: z.object({
                  'country': z.string(),
'locale': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _categories,
            },
        

             'spotify._a_category/sync': {
                schema: z.object({
                  'category_id': z.string(),
'country': z.string(),
'locale': z.string()}),
                handler: _a_category,
            },
        

             'spotify._a_categories_playlists/sync': {
                schema: z.object({
                  'category_id': z.string(),
'country': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _a_categories_playlists,
            },
        

             'spotify._featured_playlists/sync': {
                schema: z.object({
                  'country': z.string(),
'locale': z.string(),
'timestamp': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _featured_playlists,
            },
        

             'spotify._new_releases/sync': {
                schema: z.object({
                  'country': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _new_releases,
            },
        

             'spotify._several_chapters/sync': {
                schema: z.object({
                  'QueryChapterIds': z.string(),
'QueryMarket': z.string()}),
                handler: _several_chapters,
            },
        

             'spotify._a_chapter/sync': {
                schema: z.object({
                  'id': z.string(),
'PathChapterId': z.string(),
'QueryMarket': z.string()}),
                handler: _a_chapter,
            },
        

             'spotify._multiple_episodes/sync': {
                schema: z.object({
                  'ids': z.string(),
'QueryMarket': z.string()}),
                handler: _multiple_episodes,
            },
        

             'spotify._an_episode/sync': {
                schema: z.object({
                  'id': z.string(),
'QueryMarket': z.string()}),
                handler: _an_episode,
            },
        

             'spotify._current_users_profile/sync': {
                schema: z.object({}),
                handler: _current_users_profile,
            },
        

             'spotify._users_saved_albums/sync': {
                schema: z.object({
                  'QueryLimit': z.string(),
'QueryOffset': z.string(),
'QueryMarket': z.string()}),
                handler: _users_saved_albums,
            },
        

             'spotify.check_users_saved_albums/sync': {
                schema: z.object({
                  'QueryAlbumIds': z.string()}),
                handler: check_users_saved_albums,
            },
        

             'spotify._users_saved_audiobooks/sync': {
                schema: z.object({
                  'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _users_saved_audiobooks,
            },
        

             'spotify.check_users_saved_audiobooks/sync': {
                schema: z.object({
                  'QueryAudiobookIds': z.string()}),
                handler: check_users_saved_audiobooks,
            },
        

             'spotify._users_saved_episodes/sync': {
                schema: z.object({
                  'QueryMarket': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _users_saved_episodes,
            },
        

             'spotify.check_users_saved_episodes/sync': {
                schema: z.object({
                  'ids': z.string()}),
                handler: check_users_saved_episodes,
            },
        

             'spotify._followed/sync': {
                schema: z.object({
                  'type': z.string(),
'after': z.string(),
'limit': z.number()}),
                handler: _followed,
            },
        

             'spotify.check_current_user_follows/sync': {
                schema: z.object({
                  'type': z.string(),
'ids': z.string()}),
                handler: check_current_user_follows,
            },
        

             'spotify._information_about_the_users_current_playback/sync': {
                schema: z.object({
                  'QueryMarket': z.string(),
'QueryAdditionalTypes': z.string()}),
                handler: _information_about_the_users_current_playback,
            },
        

             'spotify._the_users_currently_playing_track/sync': {
                schema: z.object({
                  'QueryMarket': z.string(),
'QueryAdditionalTypes': z.string()}),
                handler: _the_users_currently_playing_track,
            },
        

             'spotify._a_users_available_devices/sync': {
                schema: z.object({}),
                handler: _a_users_available_devices,
            },
        

             'spotify._queue/sync': {
                schema: z.object({}),
                handler: _queue,
            },
        

             'spotify._recently_played/sync': {
                schema: z.object({
                  'limit': z.number(),
'after': z.number(),
'before': z.number()}),
                handler: _recently_played,
            },
        

             'spotify._a_list_of_current_users_playlists/sync': {
                schema: z.object({
                  'QueryLimit': z.string(),
'offset': z.number()}),
                handler: _a_list_of_current_users_playlists,
            },
        

             'spotify._users_saved_shows/sync': {
                schema: z.object({
                  'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _users_saved_shows,
            },
        

             'spotify.check_users_saved_shows/sync': {
                schema: z.object({
                  'QueryShowIds': z.string()}),
                handler: check_users_saved_shows,
            },
        

             'spotify._users_top_artists_and_tracks/sync': {
                schema: z.object({
                  'type': z.string(),
'time_range': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _users_top_artists_and_tracks,
            },
        

             'spotify._users_saved_tracks/sync': {
                schema: z.object({
                  'QueryMarket': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _users_saved_tracks,
            },
        

             'spotify.check_users_saved_tracks/sync': {
                schema: z.object({
                  'QueryTrackIds': z.string()}),
                handler: check_users_saved_tracks,
            },
        

             'spotify._playlist/sync': {
                schema: z.object({
                  'playlist_id': z.string(),
'PathPlaylistId': z.string(),
'QueryMarket': z.string(),
'fields': z.string(),
'QueryAdditionalTypes': z.string()}),
                handler: _playlist,
            },
        

             'spotify.check_if_user_follows_playlist/sync': {
                schema: z.object({
                  'playlist_id': z.string(),
'PathPlaylistId': z.string(),
'ids': z.string()}),
                handler: check_if_user_follows_playlist,
            },
        

             'spotify._playlist_cover/sync': {
                schema: z.object({
                  'playlist_id': z.string(),
'PathPlaylistId': z.string()}),
                handler: _playlist_cover,
            },
        

             'spotify._playlists_tracks/sync': {
                schema: z.object({
                  'playlist_id': z.string(),
'PathPlaylistId': z.string(),
'QueryMarket': z.string(),
'fields': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string(),
'QueryAdditionalTypes': z.string()}),
                handler: _playlists_tracks,
            },
        

             'spotify._recommendations/sync': {
                schema: z.object({
                  'limit': z.number(),
'QueryMarket': z.string(),
'seed_artists': z.string(),
'seed_genres': z.string(),
'seed_tracks': z.string(),
'min_acousticness': z.string(),
'max_acousticness': z.string(),
'target_acousticness': z.string(),
'min_danceability': z.string(),
'max_danceability': z.string(),
'target_danceability': z.string(),
'min_duration_ms': z.number(),
'max_duration_ms': z.number(),
'target_duration_ms': z.number(),
'min_energy': z.string(),
'max_energy': z.string(),
'target_energy': z.string(),
'min_instrumentalness': z.string(),
'max_instrumentalness': z.string(),
'target_instrumentalness': z.string(),
'min_key': z.number(),
'max_key': z.number(),
'target_key': z.number(),
'min_liveness': z.string(),
'max_liveness': z.string(),
'target_liveness': z.string(),
'min_loudness': z.string(),
'max_loudness': z.string(),
'target_loudness': z.string(),
'min_mode': z.number(),
'max_mode': z.number(),
'target_mode': z.number(),
'min_popularity': z.number(),
'max_popularity': z.number(),
'target_popularity': z.number(),
'min_speechiness': z.string(),
'max_speechiness': z.string(),
'target_speechiness': z.string(),
'min_tempo': z.string(),
'max_tempo': z.string(),
'target_tempo': z.string(),
'min_time_signature': z.number(),
'max_time_signature': z.number(),
'target_time_signature': z.number(),
'min_valence': z.string(),
'max_valence': z.string(),
'target_valence': z.string()}),
                handler: _recommendations,
            },
        

             'spotify._recommendation_genres/sync': {
                schema: z.object({}),
                handler: _recommendation_genres,
            },
        

             'spotify.search/sync': {
                schema: z.object({
                  'q': z.string(),
'type': z.string(),
'QueryMarket': z.string(),
'limit': z.number(),
'offset': z.number(),
'include_external': z.string()}),
                handler: search,
            },
        

             'spotify._multiple_shows/sync': {
                schema: z.object({
                  'QueryMarket': z.string(),
'QueryShowIds': z.string()}),
                handler: _multiple_shows,
            },
        

             'spotify._a_show/sync': {
                schema: z.object({
                  'id': z.string(),
'QueryMarket': z.string(),
'PathShowId': z.string()}),
                handler: _a_show,
            },
        

             'spotify._a_shows_episodes/sync': {
                schema: z.object({
                  'id': z.string(),
'PathShowId': z.string(),
'QueryMarket': z.string(),
'QueryLimit': z.string(),
'QueryOffset': z.string()}),
                handler: _a_shows_episodes,
            },
        

             'spotify._several_tracks/sync': {
                schema: z.object({
                  'QueryMarket': z.string(),
'QueryTrackIds': z.string()}),
                handler: _several_tracks,
            },
        

             'spotify._track/sync': {
                schema: z.object({
                  'id': z.string(),
'QueryMarket': z.string()}),
                handler: _track,
            },
        

             'spotify._users_profile/sync': {
                schema: z.object({
                  'user_id': z.string(),
'PathUserId': z.string()}),
                handler: _users_profile,
            },
        

             'spotify._list_users_playlists/sync': {
                schema: z.object({
                  'user_id': z.string(),
'PathUserId': z.string(),
'QueryLimit': z.string(),
'offset': z.number()}),
                handler: _list_users_playlists,
            },
        }
    return this.events;
  }


  async getProxy({ referenceId }: { referenceId: string }): Promise<OASClient<NormalizeOAS<typeof openapi>>> {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId })

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`)
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id)

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: openapi.servers[0].url,
      globalParams: {
        headers: {
          Authorization: `Bearer ${credential?.value}`
        }
      }
    })

    return client
  }

  getAuthenticator() {
    return new IntegrationAuth({
      dataAccess: this.dataLayer!,
      onConnectionCreated: () => {
        // TODO
      },
      config: {
        INTEGRATION_NAME: this.name,
        AUTH_TYPE: this.config.authType,
        CLIENT_ID: this.config.CLIENT_ID,
        CLIENT_SECRET: this.config.CLIENT_SECRET,
        REDIRECT_URI: this.config.REDIRECT_URI,
        SERVER: `https://accounts.spotify.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/api/token',
        SCOPES: [],
      },
    });
  }
}

    