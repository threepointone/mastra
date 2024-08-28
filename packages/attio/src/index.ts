
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { v2Objects } from './events/v2Objects'
import { v2TargetIdentifierAttributes } from './events/v2TargetIdentifierAttributes'
import { v2TargetIdentifierAttributesAttributeOptions } from './events/v2TargetIdentifierAttributesAttributeOptions'
import { v2TargetIdentifierAttributesAttributeStatuses } from './events/v2TargetIdentifierAttributesAttributeStatuses'
import { v2ObjectsObjectRecordsRecord_idAttributesAttributeValues } from './events/v2ObjectsObjectRecordsRecord_idAttributesAttributeValues'
import { v2ObjectsObjectRecordsRecord_idEntries } from './events/v2ObjectsObjectRecordsRecord_idEntries'
import { v2Lists } from './events/v2Lists'
import { v2ListsListEntriesEntry_idAttributesAttributeValues } from './events/v2ListsListEntriesEntry_idAttributesAttributeValues'
import { v2Workspace_members } from './events/v2Workspace_members'
import { v2Notes } from './events/v2Notes'
import { v2Tasks } from './events/v2Tasks'
import { v2Threads } from './events/v2Threads'
import { v2Webhooks } from './events/v2Webhooks'

type AttioConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AttioIntegration extends Integration {
  config: AttioConfig;

  constructor({ config }: { config: AttioConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ATTIO',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'attio.v2Objects/sync': {
                schema: z.object({}),
                handler: v2Objects,
            },
        

             'attio.v2TargetIdentifierAttributes/sync': {
                schema: z.object({
                  'target': z.string(),
'identifier': z.string(),
'limit': z.number(),
'offset': z.number(),
'show_archived': z.boolean()}),
                handler: v2TargetIdentifierAttributes,
            },
        

             'attio.v2TargetIdentifierAttributesAttributeOptions/sync': {
                schema: z.object({
                  'target': z.string(),
'identifier': z.string(),
'attribute': z.string(),
'show_archived': z.boolean()}),
                handler: v2TargetIdentifierAttributesAttributeOptions,
            },
        

             'attio.v2TargetIdentifierAttributesAttributeStatuses/sync': {
                schema: z.object({
                  'target': z.string(),
'identifier': z.string(),
'attribute': z.string(),
'show_archived': z.boolean()}),
                handler: v2TargetIdentifierAttributesAttributeStatuses,
            },
        

             'attio.v2ObjectsObjectRecordsRecord_idAttributesAttributeValues/sync': {
                schema: z.object({
                  'object': z.string(),
'record_id': z.string(),
'attribute': z.string(),
'show_historic': z.boolean(),
'limit': z.number(),
'offset': z.number()}),
                handler: v2ObjectsObjectRecordsRecord_idAttributesAttributeValues,
            },
        

             'attio.v2ObjectsObjectRecordsRecord_idEntries/sync': {
                schema: z.object({
                  'object': z.string(),
'record_id': z.string(),
'limit': z.number(),
'offset': z.number()}),
                handler: v2ObjectsObjectRecordsRecord_idEntries,
            },
        

             'attio.v2Lists/sync': {
                schema: z.object({}),
                handler: v2Lists,
            },
        

             'attio.v2ListsListEntriesEntry_idAttributesAttributeValues/sync': {
                schema: z.object({
                  'list': z.string(),
'entry_id': z.string(),
'attribute': z.string(),
'show_historic': z.boolean(),
'limit': z.number(),
'offset': z.number()}),
                handler: v2ListsListEntriesEntry_idAttributesAttributeValues,
            },
        

             'attio.v2Workspace_members/sync': {
                schema: z.object({}),
                handler: v2Workspace_members,
            },
        

             'attio.v2Notes/sync': {
                schema: z.object({
                  'limit': z.number(),
'offset': z.number(),
'parent_object': z.string(),
'parent_record_id': z.string()}),
                handler: v2Notes,
            },
        

             'attio.v2Tasks/sync': {
                schema: z.object({
                  'limit': z.number(),
'offset': z.number(),
'sort': z.string(),
'linked_object': z.string(),
'linked_record_id': z.string(),
'assignee': z.string(),
'is_completed': z.boolean()}),
                handler: v2Tasks,
            },
        

             'attio.v2Threads/sync': {
                schema: z.object({
                  'record_id': z.string(),
'object': z.string(),
'entry_id': z.string(),
'list': z.string(),
'limit': z.number(),
'offset': z.number()}),
                handler: v2Threads,
            },
        

             'attio.v2Webhooks/sync': {
                schema: z.object({
                  'limit': z.number(),
'offset': z.number()}),
                handler: v2Webhooks,
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
        SERVER: `https://app.attio.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}

    