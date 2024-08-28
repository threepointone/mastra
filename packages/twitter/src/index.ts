import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { findMyUser } from './events/findMyUser';
import { findSpaceById } from './events/findSpaceById';
import { findSpacesByCreatorIds } from './events/findSpacesByCreatorIds';
import { findSpacesByIds } from './events/findSpacesByIds';
import { findTweetById } from './events/findTweetById';
import { findTweetsById } from './events/findTweetsById';
import { findTweetsThatQuoteATweet } from './events/findTweetsThatQuoteATweet';
import { findUserById } from './events/findUserById';
import { findUserByUsername } from './events/findUserByUsername';
import { findUsersById } from './events/findUsersById';
import { findUsersByUsername } from './events/findUsersByUsername';
import { getBatchComplianceJob } from './events/getBatchComplianceJob';
import { getDmConversationsIdDmEvents } from './events/getDmConversationsIdDmEvents';
import { getDmConversationsWithParticipantIdDmEvents } from './events/getDmConversationsWithParticipantIdDmEvents';
import { getDmEvents } from './events/getDmEvents';
import { getRules } from './events/getRules';
import { getTweetsComplianceStream } from './events/getTweetsComplianceStream';
import { getTweetsFirehoseStream } from './events/getTweetsFirehoseStream';
import { getTweetsLabelStream } from './events/getTweetsLabelStream';
import { getTweetsSample10Stream } from './events/getTweetsSample10Stream';
import { getUserListMemberships } from './events/getUserListMemberships';
import { getUsersComplianceStream } from './events/getUsersComplianceStream';
import { getUsersIdBookmarks } from './events/getUsersIdBookmarks';
import { listBatchComplianceJobs } from './events/listBatchComplianceJobs';
import { listGetFollowers } from './events/listGetFollowers';
import { listGetMembers } from './events/listGetMembers';
import { listIdGet } from './events/listIdGet';
import { listUserOwnedLists } from './events/listUserOwnedLists';
import { listUserPinnedLists } from './events/listUserPinnedLists';
import { listsIdTweets } from './events/listsIdTweets';
import { sampleStream } from './events/sampleStream';
import { searchSpaces } from './events/searchSpaces';
import { searchStream } from './events/searchStream';
import { spaceBuyers } from './events/spaceBuyers';
import { spaceTweets } from './events/spaceTweets';
import { tweetCountsFullArchiveSearch } from './events/tweetCountsFullArchiveSearch';
import { tweetCountsRecentSearch } from './events/tweetCountsRecentSearch';
import { tweetsFullarchiveSearch } from './events/tweetsFullarchiveSearch';
import { tweetsIdLikingUsers } from './events/tweetsIdLikingUsers';
import { tweetsIdRetweetingUsers } from './events/tweetsIdRetweetingUsers';
import { tweetsRecentSearch } from './events/tweetsRecentSearch';
import { userFollowedLists } from './events/userFollowedLists';
import { usersIdBlocking } from './events/usersIdBlocking';
import { usersIdFollowers } from './events/usersIdFollowers';
import { usersIdFollowing } from './events/usersIdFollowing';
import { usersIdLikedTweets } from './events/usersIdLikedTweets';
import { usersIdMentions } from './events/usersIdMentions';
import { usersIdMuting } from './events/usersIdMuting';
import { usersIdTimeline } from './events/usersIdTimeline';
import { usersIdTweets } from './events/usersIdTweets';
import type openapi from './openapi';

type TwitterConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TwitterIntegration extends Integration {
  config: TwitterConfig;

  constructor({ config }: { config: TwitterConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TWITTER',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'twitter.listBatchComplianceJobs/sync': {
        schema: z.object({
          type: z.string(),
          status: z.string(),
          ComplianceJobFieldsParameter: z.string(),
        }),
        handler: listBatchComplianceJobs,
      },

      'twitter.BatchComplianceJob/sync': {
        schema: z.object({
          id: z.string(),
          ComplianceJobFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: getBatchComplianceJob,
      },

      'twitter.DmConversationsWithParticipantIdDmEvents/sync': {
        schema: z.object({
          participant_id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          event_types: z.string(),
          DmEventFieldsParameter: z.string(),
          DmEventExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          participant_id: z.string(),
        }),
        handler: getDmConversationsWithParticipantIdDmEvents,
      },

      'twitter.DmConversationsIdDmEvents/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          event_types: z.string(),
          DmEventFieldsParameter: z.string(),
          DmEventExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: getDmConversationsIdDmEvents,
      },

      'twitter.DmEvents/sync': {
        schema: z.object({
          max_results: z.number(),
          pagination_token: z.string(),
          event_types: z.string(),
          DmEventFieldsParameter: z.string(),
          DmEventExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TweetFieldsParameter: z.string(),
        }),
        handler: getDmEvents,
      },

      'twitter.listIdGet/sync': {
        schema: z.object({
          id: z.string(),
          ListFieldsParameter: z.string(),
          ListExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: listIdGet,
      },

      'twitter.listGetFollowers/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: listGetFollowers,
      },

      'twitter.listGetMembers/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: listGetMembers,
      },

      'twitter.listsIdTweets/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: listsIdTweets,
      },

      'twitter.findSpacesByIds/sync': {
        schema: z.object({
          ids: z.string(),
          SpaceFieldsParameter: z.string(),
          SpaceExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TopicFieldsParameter: z.string(),
        }),
        handler: findSpacesByIds,
      },

      'twitter.findSpacesByCreatorIds/sync': {
        schema: z.object({
          user_ids: z.string(),
          SpaceFieldsParameter: z.string(),
          SpaceExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TopicFieldsParameter: z.string(),
        }),
        handler: findSpacesByCreatorIds,
      },

      'twitter.searchSpaces/sync': {
        schema: z.object({
          query: z.string(),
          state: z.string(),
          max_results: z.number(),
          SpaceFieldsParameter: z.string(),
          SpaceExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TopicFieldsParameter: z.string(),
        }),
        handler: searchSpaces,
      },

      'twitter.findSpaceById/sync': {
        schema: z.object({
          id: z.string(),
          SpaceFieldsParameter: z.string(),
          SpaceExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          TopicFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: findSpaceById,
      },

      'twitter.spaceBuyers/sync': {
        schema: z.object({
          id: z.string(),
          pagination_token: z.string(),
          max_results: z.number(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: spaceBuyers,
      },

      'twitter.spaceTweets/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: spaceTweets,
      },

      'twitter.findTweetsById/sync': {
        schema: z.object({
          ids: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: findTweetsById,
      },

      'twitter.TweetsComplianceStream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          partition: z.number(),
          start_time: z.string(),
          end_time: z.string(),
        }),
        handler: getTweetsComplianceStream,
      },

      'twitter.tweetCountsFullArchiveSearch/sync': {
        schema: z.object({
          query: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          next_token: z.string(),
          pagination_token: z.string(),
          granularity: z.string(),
          SearchCountFieldsParameter: z.string(),
        }),
        handler: tweetCountsFullArchiveSearch,
      },

      'twitter.tweetCountsRecentSearch/sync': {
        schema: z.object({
          query: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          next_token: z.string(),
          pagination_token: z.string(),
          granularity: z.string(),
          SearchCountFieldsParameter: z.string(),
        }),
        handler: tweetCountsRecentSearch,
      },

      'twitter.TweetsFirehoseStream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          partition: z.number(),
          start_time: z.string(),
          end_time: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: getTweetsFirehoseStream,
      },

      'twitter.TweetsLabelStream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          start_time: z.string(),
          end_time: z.string(),
        }),
        handler: getTweetsLabelStream,
      },

      'twitter.sampleStream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: sampleStream,
      },

      'twitter.TweetsSample10Stream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          partition: z.number(),
          start_time: z.string(),
          end_time: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: getTweetsSample10Stream,
      },

      'twitter.tweetsFullarchiveSearch/sync': {
        schema: z.object({
          query: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          max_results: z.number(),
          next_token: z.string(),
          pagination_token: z.string(),
          sort_order: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: tweetsFullarchiveSearch,
      },

      'twitter.tweetsRecentSearch/sync': {
        schema: z.object({
          query: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          max_results: z.number(),
          next_token: z.string(),
          pagination_token: z.string(),
          sort_order: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: tweetsRecentSearch,
      },

      'twitter.searchStream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          start_time: z.string(),
          end_time: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
        }),
        handler: searchStream,
      },

      'twitter.Rules/sync': {
        schema: z.object({
          ids: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
        }),
        handler: getRules,
      },

      'twitter.findTweetById/sync': {
        schema: z.object({
          id: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: findTweetById,
      },

      'twitter.tweetsIdLikingUsers/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: tweetsIdLikingUsers,
      },

      'twitter.findTweetsThatQuoteATweet/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          exclude: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: findTweetsThatQuoteATweet,
      },

      'twitter.tweetsIdRetweetingUsers/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: tweetsIdRetweetingUsers,
      },

      'twitter.findUsersById/sync': {
        schema: z.object({
          ids: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
        }),
        handler: findUsersById,
      },

      'twitter.findUsersByUsername/sync': {
        schema: z.object({
          usernames: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
        }),
        handler: findUsersByUsername,
      },

      'twitter.findUserByUsername/sync': {
        schema: z.object({
          username: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          username: z.string(),
        }),
        handler: findUserByUsername,
      },

      'twitter.UsersComplianceStream/sync': {
        schema: z.object({
          backfill_minutes: z.number(),
          partition: z.number(),
          start_time: z.string(),
          end_time: z.string(),
        }),
        handler: getUsersComplianceStream,
      },

      'twitter.findMyUser/sync': {
        schema: z.object({
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
        }),
        handler: findMyUser,
      },

      'twitter.findUserById/sync': {
        schema: z.object({
          id: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: findUserById,
      },

      'twitter.usersIdBlocking/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdBlocking,
      },

      'twitter.UsersIdBookmarks/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: getUsersIdBookmarks,
      },

      'twitter.userFollowedLists/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          ListFieldsParameter: z.string(),
          ListExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: userFollowedLists,
      },

      'twitter.usersIdFollowers/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdFollowers,
      },

      'twitter.usersIdFollowing/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdFollowing,
      },

      'twitter.usersIdLikedTweets/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdLikedTweets,
      },

      'twitter.UserListMemberships/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          ListFieldsParameter: z.string(),
          ListExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: getUserListMemberships,
      },

      'twitter.usersIdMentions/sync': {
        schema: z.object({
          id: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdMentions,
      },

      'twitter.usersIdMuting/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          UserFieldsParameter: z.string(),
          UserExpansionsParameter: z.string(),
          TweetFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdMuting,
      },

      'twitter.listUserOwnedLists/sync': {
        schema: z.object({
          id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          ListFieldsParameter: z.string(),
          ListExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: listUserOwnedLists,
      },

      'twitter.listUserPinnedLists/sync': {
        schema: z.object({
          id: z.string(),
          ListFieldsParameter: z.string(),
          ListExpansionsParameter: z.string(),
          UserFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: listUserPinnedLists,
      },

      'twitter.usersIdTimeline/sync': {
        schema: z.object({
          id: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          exclude: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdTimeline,
      },

      'twitter.usersIdTweets/sync': {
        schema: z.object({
          id: z.string(),
          since_id: z.string(),
          until_id: z.string(),
          max_results: z.number(),
          pagination_token: z.string(),
          exclude: z.string(),
          start_time: z.string(),
          end_time: z.string(),
          TweetFieldsParameter: z.string(),
          TweetExpansionsParameter: z.string(),
          MediaFieldsParameter: z.string(),
          PollFieldsParameter: z.string(),
          UserFieldsParameter: z.string(),
          PlaceFieldsParameter: z.string(),
          id: z.string(),
        }),
        handler: usersIdTweets,
      },
    };
    return this.events;
  }

  async getProxy({ referenceId }: { referenceId: string }) {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId });

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`);
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id);

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: '',
      globalParams: {
        headers: {
          Authorization: `Bearer ${credential?.value}`,
        },
      },
    });

    return client;
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
        SERVER: `https://api.twitter.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
