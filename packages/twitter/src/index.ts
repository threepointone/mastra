
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { listBatchComplianceJobs } from './events/listBatchComplianceJobs'
import { BatchComplianceJob } from './events/BatchComplianceJob'
import { DmConversationsWithParticipantIdDmEvents } from './events/DmConversationsWithParticipantIdDmEvents'
import { DmConversationsIdDmEvents } from './events/DmConversationsIdDmEvents'
import { DmEvents } from './events/DmEvents'
import { listIdGet } from './events/listIdGet'
import { listGetFollowers } from './events/listGetFollowers'
import { listGetMembers } from './events/listGetMembers'
import { listsIdTweets } from './events/listsIdTweets'
import { findSpacesByIds } from './events/findSpacesByIds'
import { findSpacesByCreatorIds } from './events/findSpacesByCreatorIds'
import { searchSpaces } from './events/searchSpaces'
import { findSpaceById } from './events/findSpaceById'
import { spaceBuyers } from './events/spaceBuyers'
import { spaceTweets } from './events/spaceTweets'
import { findTweetsById } from './events/findTweetsById'
import { TweetsComplianceStream } from './events/TweetsComplianceStream'
import { tweetCountsFullArchiveSearch } from './events/tweetCountsFullArchiveSearch'
import { tweetCountsRecentSearch } from './events/tweetCountsRecentSearch'
import { TweetsFirehoseStream } from './events/TweetsFirehoseStream'
import { TweetsLabelStream } from './events/TweetsLabelStream'
import { sampleStream } from './events/sampleStream'
import { TweetsSample10Stream } from './events/TweetsSample10Stream'
import { tweetsFullarchiveSearch } from './events/tweetsFullarchiveSearch'
import { tweetsRecentSearch } from './events/tweetsRecentSearch'
import { searchStream } from './events/searchStream'
import { Rules } from './events/Rules'
import { findTweetById } from './events/findTweetById'
import { tweetsIdLikingUsers } from './events/tweetsIdLikingUsers'
import { findTweetsThatQuoteATweet } from './events/findTweetsThatQuoteATweet'
import { tweetsIdRetweetingUsers } from './events/tweetsIdRetweetingUsers'
import { findUsersById } from './events/findUsersById'
import { findUsersByUsername } from './events/findUsersByUsername'
import { findUserByUsername } from './events/findUserByUsername'
import { UsersComplianceStream } from './events/UsersComplianceStream'
import { findMyUser } from './events/findMyUser'
import { findUserById } from './events/findUserById'
import { usersIdBlocking } from './events/usersIdBlocking'
import { UsersIdBookmarks } from './events/UsersIdBookmarks'
import { userFollowedLists } from './events/userFollowedLists'
import { usersIdFollowers } from './events/usersIdFollowers'
import { usersIdFollowing } from './events/usersIdFollowing'
import { usersIdLikedTweets } from './events/usersIdLikedTweets'
import { UserListMemberships } from './events/UserListMemberships'
import { usersIdMentions } from './events/usersIdMentions'
import { usersIdMuting } from './events/usersIdMuting'
import { listUserOwnedLists } from './events/listUserOwnedLists'
import { listUserPinnedLists } from './events/listUserPinnedLists'
import { usersIdTimeline } from './events/usersIdTimeline'
import { usersIdTweets } from './events/usersIdTweets'

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
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'twitter.listBatchComplianceJobs/sync': {
                schema: z.object({
                  'type': z.string(),
'status': z.string(),
'ComplianceJobFieldsParameter': z.string()}),
                handler: listBatchComplianceJobs,
            },
        

             'twitter.BatchComplianceJob/sync': {
                schema: z.object({
                  'id': z.string(),
'ComplianceJobFieldsParameter': z.string(),
id: z.string()}),
                handler: BatchComplianceJob,
            },
        

             'twitter.DmConversationsWithParticipantIdDmEvents/sync': {
                schema: z.object({
                  'participant_id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'event_types': z.string(),
'DmEventFieldsParameter': z.string(),
'DmEventExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TweetFieldsParameter': z.string(),
participant_id: z.string()}),
                handler: DmConversationsWithParticipantIdDmEvents,
            },
        

             'twitter.DmConversationsIdDmEvents/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'event_types': z.string(),
'DmEventFieldsParameter': z.string(),
'DmEventExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: DmConversationsIdDmEvents,
            },
        

             'twitter.DmEvents/sync': {
                schema: z.object({
                  'max_results': z.number(),
'pagination_token': z.string(),
'event_types': z.string(),
'DmEventFieldsParameter': z.string(),
'DmEventExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TweetFieldsParameter': z.string()}),
                handler: DmEvents,
            },
        

             'twitter.listIdGet/sync': {
                schema: z.object({
                  'id': z.string(),
'ListFieldsParameter': z.string(),
'ListExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
id: z.string()}),
                handler: listIdGet,
            },
        

             'twitter.listGetFollowers/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: listGetFollowers,
            },
        

             'twitter.listGetMembers/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: listGetMembers,
            },
        

             'twitter.listsIdTweets/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: listsIdTweets,
            },
        

             'twitter.findSpacesByIds/sync': {
                schema: z.object({
                  'ids': z.string(),
'SpaceFieldsParameter': z.string(),
'SpaceExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TopicFieldsParameter': z.string()}),
                handler: findSpacesByIds,
            },
        

             'twitter.findSpacesByCreatorIds/sync': {
                schema: z.object({
                  'user_ids': z.string(),
'SpaceFieldsParameter': z.string(),
'SpaceExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TopicFieldsParameter': z.string()}),
                handler: findSpacesByCreatorIds,
            },
        

             'twitter.searchSpaces/sync': {
                schema: z.object({
                  'query': z.string(),
'state': z.string(),
'max_results': z.number(),
'SpaceFieldsParameter': z.string(),
'SpaceExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TopicFieldsParameter': z.string()}),
                handler: searchSpaces,
            },
        

             'twitter.findSpaceById/sync': {
                schema: z.object({
                  'id': z.string(),
'SpaceFieldsParameter': z.string(),
'SpaceExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
'TopicFieldsParameter': z.string(),
id: z.string()}),
                handler: findSpaceById,
            },
        

             'twitter.spaceBuyers/sync': {
                schema: z.object({
                  'id': z.string(),
'pagination_token': z.string(),
'max_results': z.number(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: spaceBuyers,
            },
        

             'twitter.spaceTweets/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: spaceTweets,
            },
        

             'twitter.findTweetsById/sync': {
                schema: z.object({
                  'ids': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: findTweetsById,
            },
        

             'twitter.TweetsComplianceStream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'partition': z.number(),
'start_time': z.string(),
'end_time': z.string()}),
                handler: TweetsComplianceStream,
            },
        

             'twitter.tweetCountsFullArchiveSearch/sync': {
                schema: z.object({
                  'query': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'next_token': z.string(),
'pagination_token': z.string(),
'granularity': z.string(),
'SearchCountFieldsParameter': z.string()}),
                handler: tweetCountsFullArchiveSearch,
            },
        

             'twitter.tweetCountsRecentSearch/sync': {
                schema: z.object({
                  'query': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'next_token': z.string(),
'pagination_token': z.string(),
'granularity': z.string(),
'SearchCountFieldsParameter': z.string()}),
                handler: tweetCountsRecentSearch,
            },
        

             'twitter.TweetsFirehoseStream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'partition': z.number(),
'start_time': z.string(),
'end_time': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: TweetsFirehoseStream,
            },
        

             'twitter.TweetsLabelStream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'start_time': z.string(),
'end_time': z.string()}),
                handler: TweetsLabelStream,
            },
        

             'twitter.sampleStream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: sampleStream,
            },
        

             'twitter.TweetsSample10Stream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'partition': z.number(),
'start_time': z.string(),
'end_time': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: TweetsSample10Stream,
            },
        

             'twitter.tweetsFullarchiveSearch/sync': {
                schema: z.object({
                  'query': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'max_results': z.number(),
'next_token': z.string(),
'pagination_token': z.string(),
'sort_order': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: tweetsFullarchiveSearch,
            },
        

             'twitter.tweetsRecentSearch/sync': {
                schema: z.object({
                  'query': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'max_results': z.number(),
'next_token': z.string(),
'pagination_token': z.string(),
'sort_order': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: tweetsRecentSearch,
            },
        

             'twitter.searchStream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'start_time': z.string(),
'end_time': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string()}),
                handler: searchStream,
            },
        

             'twitter.Rules/sync': {
                schema: z.object({
                  'ids': z.string(),
'max_results': z.number(),
'pagination_token': z.string()}),
                handler: Rules,
            },
        

             'twitter.findTweetById/sync': {
                schema: z.object({
                  'id': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: findTweetById,
            },
        

             'twitter.tweetsIdLikingUsers/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: tweetsIdLikingUsers,
            },
        

             'twitter.findTweetsThatQuoteATweet/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'exclude': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: findTweetsThatQuoteATweet,
            },
        

             'twitter.tweetsIdRetweetingUsers/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: tweetsIdRetweetingUsers,
            },
        

             'twitter.findUsersById/sync': {
                schema: z.object({
                  'ids': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string()}),
                handler: findUsersById,
            },
        

             'twitter.findUsersByUsername/sync': {
                schema: z.object({
                  'usernames': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string()}),
                handler: findUsersByUsername,
            },
        

             'twitter.findUserByUsername/sync': {
                schema: z.object({
                  'username': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
username: z.string()}),
                handler: findUserByUsername,
            },
        

             'twitter.UsersComplianceStream/sync': {
                schema: z.object({
                  'backfill_minutes': z.number(),
'partition': z.number(),
'start_time': z.string(),
'end_time': z.string()}),
                handler: UsersComplianceStream,
            },
        

             'twitter.findMyUser/sync': {
                schema: z.object({
                  'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string()}),
                handler: findMyUser,
            },
        

             'twitter.findUserById/sync': {
                schema: z.object({
                  'id': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: findUserById,
            },
        

             'twitter.usersIdBlocking/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdBlocking,
            },
        

             'twitter.UsersIdBookmarks/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: UsersIdBookmarks,
            },
        

             'twitter.userFollowedLists/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'ListFieldsParameter': z.string(),
'ListExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
id: z.string()}),
                handler: userFollowedLists,
            },
        

             'twitter.usersIdFollowers/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdFollowers,
            },
        

             'twitter.usersIdFollowing/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdFollowing,
            },
        

             'twitter.usersIdLikedTweets/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdLikedTweets,
            },
        

             'twitter.UserListMemberships/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'ListFieldsParameter': z.string(),
'ListExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
id: z.string()}),
                handler: UserListMemberships,
            },
        

             'twitter.usersIdMentions/sync': {
                schema: z.object({
                  'id': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdMentions,
            },
        

             'twitter.usersIdMuting/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'UserFieldsParameter': z.string(),
'UserExpansionsParameter': z.string(),
'TweetFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdMuting,
            },
        

             'twitter.listUserOwnedLists/sync': {
                schema: z.object({
                  'id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'ListFieldsParameter': z.string(),
'ListExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
id: z.string()}),
                handler: listUserOwnedLists,
            },
        

             'twitter.listUserPinnedLists/sync': {
                schema: z.object({
                  'id': z.string(),
'ListFieldsParameter': z.string(),
'ListExpansionsParameter': z.string(),
'UserFieldsParameter': z.string(),
id: z.string()}),
                handler: listUserPinnedLists,
            },
        

             'twitter.usersIdTimeline/sync': {
                schema: z.object({
                  'id': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'exclude': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdTimeline,
            },
        

             'twitter.usersIdTweets/sync': {
                schema: z.object({
                  'id': z.string(),
'since_id': z.string(),
'until_id': z.string(),
'max_results': z.number(),
'pagination_token': z.string(),
'exclude': z.string(),
'start_time': z.string(),
'end_time': z.string(),
'TweetFieldsParameter': z.string(),
'TweetExpansionsParameter': z.string(),
'MediaFieldsParameter': z.string(),
'PollFieldsParameter': z.string(),
'UserFieldsParameter': z.string(),
'PlaceFieldsParameter': z.string(),
id: z.string()}),
                handler: usersIdTweets,
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
        SERVER: `https://api.twitter.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}

    