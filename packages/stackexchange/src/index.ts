
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { access_tokens } from './events/access_tokens'
import { answers } from './events/answers'
import { comments } from './events/comments'
import { badges } from './events/badges'
import { errors } from './events/errors'
import { error } from './events/error'
import { events } from './events/events'
import { single_filter } from './events/single_filter'
import { filters } from './events/filters'
import { inbox_items } from './events/inbox_items'
import { info_object } from './events/info_object'
import { user } from './events/user'
import { network_users } from './events/network_users'
import { questions } from './events/questions'
import { account_merge } from './events/account_merge'
import { notifications } from './events/notifications'
import { privileges } from './events/privileges'
import { reputation_changes } from './events/reputation_changes'
import { reputation_history } from './events/reputation_history'
import { suggested-edits } from './events/suggested-edits'
import { tags } from './events/tags'
import { user_timeline_objects } from './events/user_timeline_objects'
import { top_tag_objects } from './events/top_tag_objects'
import { write_permissions } from './events/write_permissions'
import { posts } from './events/posts'
import { revisions } from './events/revisions'
import { question_timeline_events } from './events/question_timeline_events'
import { sites } from './events/sites'
import { tag_synonyms } from './events/tag_synonyms'
import { tag_wikis } from './events/tag_wikis'
import { tag_score_objects } from './events/tag_score_objects'
import { users } from './events/users'

type StackexchangeConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class StackexchangeIntegration extends Integration {
  config: StackexchangeConfig;

  constructor({ config }: { config: StackexchangeConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STACKEXCHANGE',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'stackexchange.access_tokens/sync': {
                schema: z.object({
                  'accessTokens': z.string(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string()}),
                handler: access_tokens,
            },
        

             'stackexchange.answers/sync': {
                schema: z.object({
                  'id': z.string(),
'tags': z.string(),
'id': z.number(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: answers,
            },
        

             'stackexchange.comments/sync': {
                schema: z.object({
                  'ids': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: comments,
            },
        

             'stackexchange.badges/sync': {
                schema: z.object({
                  'ids': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: badges,
            },
        

             'stackexchange.errors/sync': {
                schema: z.object({
                  'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string()}),
                handler: errors,
            },
        

             'stackexchange.error/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: error,
            },
        

             'stackexchange.events/sync': {
                schema: z.object({
                  'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string(),
'since': z.number()}),
                handler: events,
            },
        

             'stackexchange.single_filter/sync': {
                schema: z.object({
                  'base': z.string(),
'exclude': z.string(),
'include': z.string(),
'unsafe': z.boolean()}),
                handler: single_filter,
            },
        

             'stackexchange.filters/sync': {
                schema: z.object({
                  'filters': z.string()}),
                handler: filters,
            },
        

             'stackexchange.inbox_items/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string(),
'since': z.number()}),
                handler: inbox_items,
            },
        

             'stackexchange.info_object/sync': {
                schema: z.object({
                  'site': z.string()}),
                handler: info_object,
            },
        

             'stackexchange.user/sync': {
                schema: z.object({
                  'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: user,
            },
        

             'stackexchange.network_users/sync': {
                schema: z.object({
                  'ids': z.string(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string()}),
                handler: network_users,
            },
        

             'stackexchange.questions/sync': {
                schema: z.object({
                  'id': z.string(),
'tags': z.string(),
'id': z.number(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: questions,
            },
        

             'stackexchange.account_merge/sync': {
                schema: z.object({
                  'ids': z.string(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string()}),
                handler: account_merge,
            },
        

             'stackexchange.notifications/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: notifications,
            },
        

             'stackexchange.privileges/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: privileges,
            },
        

             'stackexchange.reputation_changes/sync': {
                schema: z.object({
                  'ids': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: reputation_changes,
            },
        

             'stackexchange.reputation_history/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: reputation_history,
            },
        

             'stackexchange.suggested-edits/sync': {
                schema: z.object({
                  'ids': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: suggested-edits,
            },
        

             'stackexchange.tags/sync': {
                schema: z.object({
                  'ids': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: tags,
            },
        

             'stackexchange.user_timeline_objects/sync': {
                schema: z.object({
                  'ids': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: user_timeline_objects,
            },
        

             'stackexchange.top_tag_objects/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: top_tag_objects,
            },
        

             'stackexchange.write_permissions/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: write_permissions,
            },
        

             'stackexchange.posts/sync': {
                schema: z.object({
                  'ids': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: posts,
            },
        

             'stackexchange.revisions/sync': {
                schema: z.object({
                  'ids': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: revisions,
            },
        

             'stackexchange.question_timeline_events/sync': {
                schema: z.object({
                  'ids': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: question_timeline_events,
            },
        

             'stackexchange.sites/sync': {
                schema: z.object({
                  'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string()}),
                handler: sites,
            },
        

             'stackexchange.tag_synonyms/sync': {
                schema: z.object({
                  'tags': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: tag_synonyms,
            },
        

             'stackexchange.tag_wikis/sync': {
                schema: z.object({
                  'tags': z.string(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: tag_wikis,
            },
        

             'stackexchange.tag_score_objects/sync': {
                schema: z.object({
                  'tag': z.string(),
'period': z.string(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: tag_score_objects,
            },
        

             'stackexchange.users/sync': {
                schema: z.object({
                  'ids': z.string(),
'order': z.string(),
'max': z.string(),
'min': z.string(),
'sort': z.string(),
'fromdate': z.number(),
'todate': z.number(),
'pagesize': z.number(),
'page': z.number(),
'filter': z.string(),
'callback': z.string(),
'site': z.string()}),
                handler: users,
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
        SERVER: `https://stackoverflow.com`,
        AUTHORIZATION_ENDPOINT: '/oauth',
        TOKEN_ENDPOINT: '/oauth/access_token/json',
        SCOPES: [],
      },
    });
  }
}

    