import { Integration, IntegrationAuth, OpenAPI } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { aCategoriesPlaylists } from './events/aCategoriesPlaylists';
import { aCategory } from './events/aCategory';
import { aChapter } from './events/aChapter';
import { aListOfCurrentUsersPlaylists } from './events/aListOfCurrentUsersPlaylists';
import { aShow } from './events/aShow';
import { aShowsEpisodes } from './events/aShowsEpisodes';
import { aUsersAvailableDevices } from './events/aUsersAvailableDevices';
import { anAlbum } from './events/anAlbum';
import { anAlbumsTracks } from './events/anAlbumsTracks';
import { anArtist } from './events/anArtist';
import { anArtistsAlbums } from './events/anArtistsAlbums';
import { anArtistsRelatedArtists } from './events/anArtistsRelatedArtists';
import { anArtistsTopTracks } from './events/anArtistsTopTracks';
import { anAudiobook } from './events/anAudiobook';
import { anEpisode } from './events/anEpisode';
import { audioAnalysis } from './events/audioAnalysis';
import { audioFeatures } from './events/audioFeatures';
import { audiobookChapters } from './events/audiobookChapters';
import { categories } from './events/categories';
import { checkCurrentUserFollows } from './events/checkCurrentUserFollows';
import { checkIfUserFollowsPlaylist } from './events/checkIfUserFollowsPlaylist';
import { checkUsersSavedAlbums } from './events/checkUsersSavedAlbums';
import { checkUsersSavedAudiobooks } from './events/checkUsersSavedAudiobooks';
import { checkUsersSavedEpisodes } from './events/checkUsersSavedEpisodes';
import { checkUsersSavedShows } from './events/checkUsersSavedShows';
import { checkUsersSavedTracks } from './events/checkUsersSavedTracks';
import { currentUsersProfile } from './events/currentUsersProfile';
import { featuredPlaylists } from './events/featuredPlaylists';
import { followed } from './events/followed';
import { informationAboutTheUsersCurrentPlayback } from './events/informationAboutTheUsersCurrentPlayback';
import { listUsersPlaylists } from './events/listUsersPlaylists';
import { multipleAlbums } from './events/multipleAlbums';
import { multipleArtists } from './events/multipleArtists';
import { multipleAudiobooks } from './events/multipleAudiobooks';
import { multipleEpisodes } from './events/multipleEpisodes';
import { multipleShows } from './events/multipleShows';
import { newReleases } from './events/newReleases';
import { playlist } from './events/playlist';
import { playlistCover } from './events/playlistCover';
import { playlistsTracks } from './events/playlistsTracks';
import { queue } from './events/queue';
import { recentlyPlayed } from './events/recentlyPlayed';
import { recommendationGenres } from './events/recommendationGenres';
import { recommendations } from './events/recommendations';
import { search } from './events/search';
import { severalAudioFeatures } from './events/severalAudioFeatures';
import { severalChapters } from './events/severalChapters';
import { severalTracks } from './events/severalTracks';
import { theUsersCurrentlyPlayingTrack } from './events/theUsersCurrentlyPlayingTrack';
import { track } from './events/track';
import { usersProfile } from './events/usersProfile';
import { usersSavedAlbums } from './events/usersSavedAlbums';
import { usersSavedAudiobooks } from './events/usersSavedAudiobooks';
import { usersSavedEpisodes } from './events/usersSavedEpisodes';
import { usersSavedShows } from './events/usersSavedShows';
import { usersSavedTracks } from './events/usersSavedTracks';
import { usersTopArtistsAndTracks } from './events/usersTopArtistsAndTracks';
import openapi from './openapi';

type SpotifyConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  [key: string]: any;
};

export class SpotifyIntegration extends Integration {
  config: SpotifyConfig;

  constructor({ config }: { config: SpotifyConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SPOTIFY',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'spotify.multipleAlbums/sync': {
        schema: z.object({
          QueryAlbumIds: z.string(),
        }),
        handler: multipleAlbums,
      },

      'spotify.anAlbum/sync': {
        schema: z.object({
          PathAlbumId: z.string(),
          id: z.string(),
        }),
        handler: anAlbum,
      },

      'spotify.anAlbumsTracks/sync': {
        schema: z.object({
          PathAlbumId: z.string(),
          id: z.string(),
        }),
        handler: anAlbumsTracks,
      },

      'spotify.multipleArtists/sync': {
        schema: z.object({
          ids: z.string(),
        }),
        handler: multipleArtists,
      },

      'spotify.anArtist/sync': {
        schema: z.object({
          PathArtistId: z.string(),
          id: z.string(),
        }),
        handler: anArtist,
      },

      'spotify.anArtistsAlbums/sync': {
        schema: z.object({
          PathArtistId: z.string(),
          id: z.string(),
        }),
        handler: anArtistsAlbums,
      },

      'spotify.anArtistsRelatedArtists/sync': {
        schema: z.object({
          PathArtistId: z.string(),
          id: z.string(),
        }),
        handler: anArtistsRelatedArtists,
      },

      'spotify.anArtistsTopTracks/sync': {
        schema: z.object({
          PathArtistId: z.string(),
          id: z.string(),
        }),
        handler: anArtistsTopTracks,
      },

      'spotify.audioAnalysis/sync': {
        schema: z.object({
          id: z.string(),
        }),
        handler: audioAnalysis,
      },

      'spotify.severalAudioFeatures/sync': {
        schema: z.object({
          ids: z.string(),
        }),
        handler: severalAudioFeatures,
      },

      'spotify.audioFeatures/sync': {
        schema: z.object({
          id: z.string(),
        }),
        handler: audioFeatures,
      },

      'spotify.multipleAudiobooks/sync': {
        schema: z.object({
          QueryAudiobookIds: z.string(),
        }),
        handler: multipleAudiobooks,
      },

      'spotify.anAudiobook/sync': {
        schema: z.object({
          PathAudiobookId: z.string(),
          id: z.string(),
        }),
        handler: anAudiobook,
      },

      'spotify.audiobookChapters/sync': {
        schema: z.object({
          PathAudiobookId: z.string(),
          id: z.string(),
        }),
        handler: audiobookChapters,
      },

      'spotify.categories/sync': {
        schema: z.object({
          country: z.string(),
          locale: z.string(),
          QueryLimit: z.string(),
        }),
        handler: categories,
      },

      'spotify.aCategory/sync': {
        schema: z.object({
          category_id: z.string(),
          country: z.string(),
          locale: z.string(),
        }),
        handler: aCategory,
      },

      'spotify.aCategoriesPlaylists/sync': {
        schema: z.object({
          category_id: z.string(),
          country: z.string(),
          QueryLimit: z.string(),
        }),
        handler: aCategoriesPlaylists,
      },

      'spotify.featuredPlaylists/sync': {
        schema: z.object({
          country: z.string(),
          locale: z.string(),
          timestamp: z.string(),
          QueryLimit: z.string(),
        }),
        handler: featuredPlaylists,
      },

      'spotify.newReleases/sync': {
        schema: z.object({
          country: z.string(),
          QueryLimit: z.string(),
        }),
        handler: newReleases,
      },

      'spotify.severalChapters/sync': {
        schema: z.object({
          QueryChapterIds: z.string(),
        }),
        handler: severalChapters,
      },

      'spotify.aChapter/sync': {
        schema: z.object({
          PathChapterId: z.string(),
          id: z.string(),
        }),
        handler: aChapter,
      },

      'spotify.multipleEpisodes/sync': {
        schema: z.object({
          ids: z.string(),
          QueryMarket: z.string(),
        }),
        handler: multipleEpisodes,
      },

      'spotify.anEpisode/sync': {
        schema: z.object({
          id: z.string(),
          QueryMarket: z.string(),
        }),
        handler: anEpisode,
      },

      'spotify.currentUsersProfile/sync': {
        schema: z.object({}),
        handler: currentUsersProfile,
      },

      'spotify.usersSavedAlbums/sync': {
        schema: z.object({
          QueryLimit: z.string(),
        }),
        handler: usersSavedAlbums,
      },

      'spotify.checkUsersSavedAlbums/sync': {
        schema: z.object({
          QueryAlbumIds: z.string(),
        }),
        handler: checkUsersSavedAlbums,
      },

      'spotify.usersSavedAudiobooks/sync': {
        schema: z.object({
          QueryLimit: z.string(),
        }),
        handler: usersSavedAudiobooks,
      },

      'spotify.checkUsersSavedAudiobooks/sync': {
        schema: z.object({
          QueryAudiobookIds: z.string(),
        }),
        handler: checkUsersSavedAudiobooks,
      },

      'spotify.usersSavedEpisodes/sync': {
        schema: z.object({
          QueryMarket: z.string(),
        }),
        handler: usersSavedEpisodes,
      },

      'spotify.checkUsersSavedEpisodes/sync': {
        schema: z.object({
          ids: z.string(),
        }),
        handler: checkUsersSavedEpisodes,
      },

      'spotify.followed/sync': {
        schema: z.object({
          type: z.string(),
          after: z.string(),
          limit: z.number(),
        }),
        handler: followed,
      },

      'spotify.checkCurrentUserFollows/sync': {
        schema: z.object({
          type: z.string(),
          ids: z.string(),
        }),
        handler: checkCurrentUserFollows,
      },

      'spotify.informationAboutTheUsersCurrentPlayback/sync': {
        schema: z.object({
          QueryMarket: z.string(),
        }),
        handler: informationAboutTheUsersCurrentPlayback,
      },

      'spotify.theUsersCurrentlyPlayingTrack/sync': {
        schema: z.object({
          QueryMarket: z.string(),
        }),
        handler: theUsersCurrentlyPlayingTrack,
      },

      'spotify.aUsersAvailableDevices/sync': {
        schema: z.object({}),
        handler: aUsersAvailableDevices,
      },

      'spotify.queue/sync': {
        schema: z.object({}),
        handler: queue,
      },

      'spotify.recentlyPlayed/sync': {
        schema: z.object({
          limit: z.number(),
          after: z.number(),
          before: z.number(),
        }),
        handler: recentlyPlayed,
      },

      'spotify.aListOfCurrentUsersPlaylists/sync': {
        schema: z.object({
          QueryLimit: z.string(),
          offset: z.number(),
        }),
        handler: aListOfCurrentUsersPlaylists,
      },

      'spotify.usersSavedShows/sync': {
        schema: z.object({
          QueryLimit: z.string(),
        }),
        handler: usersSavedShows,
      },

      'spotify.checkUsersSavedShows/sync': {
        schema: z.object({
          QueryShowIds: z.string(),
        }),
        handler: checkUsersSavedShows,
      },

      'spotify.usersTopArtistsAndTracks/sync': {
        schema: z.object({
          type: z.string(),
          time_range: z.string(),
          QueryLimit: z.string(),
        }),
        handler: usersTopArtistsAndTracks,
      },

      'spotify.usersSavedTracks/sync': {
        schema: z.object({
          QueryMarket: z.string(),
        }),
        handler: usersSavedTracks,
      },

      'spotify.checkUsersSavedTracks/sync': {
        schema: z.object({
          QueryTrackIds: z.string(),
        }),
        handler: checkUsersSavedTracks,
      },

      'spotify.playlist/sync': {
        schema: z.object({
          PathPlaylistId: z.string(),
          fields: z.string(),
          playlist_id: z.string(),
        }),
        handler: playlist,
      },

      'spotify.checkIfUserFollowsPlaylist/sync': {
        schema: z.object({
          PathPlaylistId: z.string(),
          ids: z.string(),
          playlist_id: z.string(),
        }),
        handler: checkIfUserFollowsPlaylist,
      },

      'spotify.playlistCover/sync': {
        schema: z.object({
          PathPlaylistId: z.string(),
          playlist_id: z.string(),
        }),
        handler: playlistCover,
      },

      'spotify.playlistsTracks/sync': {
        schema: z.object({
          PathPlaylistId: z.string(),
          fields: z.string(),
          playlist_id: z.string(),
        }),
        handler: playlistsTracks,
      },

      'spotify.recommendations/sync': {
        schema: z.object({
          limit: z.number(),
          QueryMarket: z.string(),
          seed_artists: z.string(),
          seed_genres: z.string(),
          seed_tracks: z.string(),
          min_acousticness: z.string(),
          max_acousticness: z.string(),
          target_acousticness: z.string(),
          min_danceability: z.string(),
          max_danceability: z.string(),
          target_danceability: z.string(),
          min_duration_ms: z.number(),
          max_duration_ms: z.number(),
          target_duration_ms: z.number(),
          min_energy: z.string(),
          max_energy: z.string(),
          target_energy: z.string(),
          min_instrumentalness: z.string(),
          max_instrumentalness: z.string(),
          target_instrumentalness: z.string(),
          min_key: z.number(),
          max_key: z.number(),
          target_key: z.number(),
          min_liveness: z.string(),
          max_liveness: z.string(),
          target_liveness: z.string(),
          min_loudness: z.string(),
          max_loudness: z.string(),
          target_loudness: z.string(),
          min_mode: z.number(),
          max_mode: z.number(),
          target_mode: z.number(),
          min_popularity: z.number(),
          max_popularity: z.number(),
          target_popularity: z.number(),
          min_speechiness: z.string(),
          max_speechiness: z.string(),
          target_speechiness: z.string(),
          min_tempo: z.string(),
          max_tempo: z.string(),
          target_tempo: z.string(),
          min_time_signature: z.number(),
          max_time_signature: z.number(),
          target_time_signature: z.number(),
          min_valence: z.string(),
          max_valence: z.string(),
          target_valence: z.string(),
        }),
        handler: recommendations,
      },

      'spotify.recommendationGenres/sync': {
        schema: z.object({}),
        handler: recommendationGenres,
      },

      'spotify.search/sync': {
        schema: z.object({
          q: z.string(),
          type: z.string(),
          QueryMarket: z.string(),
          limit: z.number(),
          offset: z.number(),
          include_external: z.string(),
        }),
        handler: search,
      },

      'spotify.multipleShows/sync': {
        schema: z.object({
          QueryMarket: z.string(),
        }),
        handler: multipleShows,
      },

      'spotify.aShow/sync': {
        schema: z.object({
          QueryMarket: z.string(),
          id: z.string(),
        }),
        handler: aShow,
      },

      'spotify.aShowsEpisodes/sync': {
        schema: z.object({
          PathShowId: z.string(),
          id: z.string(),
        }),
        handler: aShowsEpisodes,
      },

      'spotify.severalTracks/sync': {
        schema: z.object({
          QueryMarket: z.string(),
        }),
        handler: severalTracks,
      },

      'spotify.track/sync': {
        schema: z.object({
          id: z.string(),
          QueryMarket: z.string(),
        }),
        handler: track,
      },

      'spotify.usersProfile/sync': {
        schema: z.object({
          PathUserId: z.string(),
          user_id: z.string(),
        }),
        handler: usersProfile,
      },

      'spotify.listUsersPlaylists/sync': {
        schema: z.object({
          PathUserId: z.string(),
          offset: z.number(),
          user_id: z.string(),
        }),
        handler: listUsersPlaylists,
      },
    };
    return this.events;
  }

  getOpenApiSpec() {
    return openapi as unknown as OpenAPI;
  }

  getApiClient = async ({ referenceId }: { referenceId: string }): Promise<OASClient<NormalizeOAS<typeof openapi>>> => {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId });

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`);
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id);

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: 'https://api.spotify.com/v1',
      globalParams: {
        headers: {
          Authorization: `Bearer ${credential?.value}`,
        },
      },
    });

    return client;
  };

  getAuthenticator() {
    return new IntegrationAuth({
      dataAccess: this.dataLayer!,
      // @ts-ignore
      onConnectionCreated: () => {
        // TODO
      },
      config: {
        INTEGRATION_NAME: this.name,
        AUTH_TYPE: this.config.authType,
        CLIENT_ID: this.config.CLIENT_ID,
        CLIENT_SECRET: this.config.CLIENT_SECRET,
        REDIRECT_URI: this.config.REDIRECT_URI || this.corePresets.redirectURI,
        SERVER: `https://accounts.spotify.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/api/token',
        SCOPES: [],
      },
    });
  }
}
