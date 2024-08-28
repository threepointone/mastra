import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { detailsContact } from './events/detailsContact';
import { detailsContentLibraryItem } from './events/detailsContentLibraryItem';
import { detailsCurrentMember } from './events/detailsCurrentMember';
import { detailsDocument } from './events/detailsDocument';
import { detailsDocumentAttachment } from './events/detailsDocumentAttachment';
import { detailsLog } from './events/detailsLog';
import { detailsMember } from './events/detailsMember';
import { detailsTemplate } from './events/detailsTemplate';
import { detailsWebhookEvent } from './events/detailsWebhookEvent';
import { detailsWebhookSubscription } from './events/detailsWebhookSubscription';
import { listContacts } from './events/listContacts';
import { listContentLibraryItems } from './events/listContentLibraryItems';
import { listDocumentFolders } from './events/listDocumentFolders';
import { listDocuments } from './events/listDocuments';
import { listForm } from './events/listForm';
import { listLinkedObjects } from './events/listLinkedObjects';
import { listLogs } from './events/listLogs';
import { listMembers } from './events/listMembers';
import { listTemplateFolders } from './events/listTemplateFolders';
import { listTemplates } from './events/listTemplates';
import { listWebhookEvent } from './events/listWebhookEvent';
import { listWebhookSubscriptions } from './events/listWebhookSubscriptions';
import { statusDocument } from './events/statusDocument';
import type openapi from './openapi';

type PandadocConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class PandadocIntegration extends Integration {
  config: PandadocConfig;

  constructor({ config }: { config: PandadocConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'PANDADOC',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'pandadoc.listDocuments/sync': {
        schema: z.object({
          completed_from: z.string(),
          completed_to: z.string(),
          contact_id: z.string(),
          count: z.number(),
          created_from: z.string(),
          created_to: z.string(),
          deleted: z.boolean(),
          id: z.string(),
          folder_uuid: z.string(),
          form_id: z.string(),
          membership_id: z.string(),
          metadata: z.string(),
          modified_from: z.string(),
          modified_to: z.string(),
          order_by: z.string(),
          page: z.number(),
          q: z.string(),
          status: z.string(),
          status__ne: z.string(),
          tag: z.string(),
          template_id: z.string(),
        }),
        handler: listDocuments,
      },

      'pandadoc.statusDocument/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: statusDocument,
      },

      'pandadoc.detailsDocument/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsDocument,
      },

      'pandadoc.listLinkedObjects/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: listLinkedObjects,
      },

      'pandadoc.detailsDocumentAttachment/sync': {
        schema: z.object({
          id: z.string(),
          attachment_id: z.string(),
          id: z.string(),
          attachment_id: z.string(),
        }),
        handler: detailsDocumentAttachment,
      },

      'pandadoc.listContentLibraryItems/sync': {
        schema: z.object({
          q: z.string(),
          id: z.string(),
          deleted: z.boolean(),
          folder_uuid: z.string(),
          count: z.number(),
          page: z.number(),
          tag: z.string(),
        }),
        handler: listContentLibraryItems,
      },

      'pandadoc.detailsContentLibraryItem/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsContentLibraryItem,
      },

      'pandadoc.listTemplates/sync': {
        schema: z.object({
          q: z.string(),
          shared: z.boolean(),
          deleted: z.boolean(),
          count: z.number(),
          page: z.number(),
          id: z.string(),
          folder_uuid: z.string(),
          tag: z.string(),
        }),
        handler: listTemplates,
      },

      'pandadoc.detailsTemplate/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsTemplate,
      },

      'pandadoc.listForm/sync': {
        schema: z.object({
          count: z.number(),
          page: z.number(),
          status: z.string(),
          order_by: z.string(),
          asc: z.boolean(),
          name: z.string(),
        }),
        handler: listForm,
      },

      'pandadoc.listDocumentFolders/sync': {
        schema: z.object({
          parent_uuid: z.string(),
          count: z.number(),
          page: z.number(),
        }),
        handler: listDocumentFolders,
      },

      'pandadoc.listTemplateFolders/sync': {
        schema: z.object({
          parent_uuid: z.string(),
          count: z.number(),
          page: z.number(),
        }),
        handler: listTemplateFolders,
      },

      'pandadoc.listLogs/sync': {
        schema: z.object({
          since: z.string(),
          to: z.string(),
          count: z.number(),
          page: z.number(),
          statuses: z.string(),
          methods: z.string(),
          search: z.string(),
          environment_type: z.string(),
        }),
        handler: listLogs,
      },

      'pandadoc.detailsLog/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsLog,
      },

      'pandadoc.listContacts/sync': {
        schema: z.object({
          email: z.string(),
        }),
        handler: listContacts,
      },

      'pandadoc.detailsContact/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsContact,
      },

      'pandadoc.listMembers/sync': {
        schema: z.object({}),
        handler: listMembers,
      },

      'pandadoc.detailsCurrentMember/sync': {
        schema: z.object({}),
        handler: detailsCurrentMember,
      },

      'pandadoc.detailsMember/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsMember,
      },

      'pandadoc.listWebhookSubscriptions/sync': {
        schema: z.object({}),
        handler: listWebhookSubscriptions,
      },

      'pandadoc.detailsWebhookSubscription/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsWebhookSubscription,
      },

      'pandadoc.listWebhookEvent/sync': {
        schema: z.object({
          count: z.number(),
          page: z.number(),
          since: z.string(),
          to: z.string(),
          type: z.string(),
          http_status_code: z.string(),
          error: z.string(),
        }),
        handler: listWebhookEvent,
      },

      'pandadoc.detailsWebhookEvent/sync': {
        schema: z.object({
          id: z.string(),
          id: z.string(),
        }),
        handler: detailsWebhookEvent,
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
        SERVER: `https://app.pandadoc.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/access_token',
        SCOPES: [],
      },
    });
  }
}
