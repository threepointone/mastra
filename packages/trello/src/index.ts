import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import type openapi from './openapi';

type TrelloConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TrelloIntegration extends Integration {
  config: TrelloConfig;

  constructor({ config }: { config: TrelloConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TRELLO',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {};
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
        SERVER: `https://trello.com`,
        AUTHORIZATION_ENDPOINT: '/1/OAuthAuthorizeToken',
        TOKEN_ENDPOINT: '/1/OAuthGetAccessToken',
        SCOPES: [],
      },
    });
  }
}
