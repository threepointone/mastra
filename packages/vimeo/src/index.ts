import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { get_project } from './events/get_project';
import { get_project_alt1 } from './events/get_project_alt1';
import type openapi from './openapi';

type VimeoConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class VimeoIntegration extends Integration {
  config: VimeoConfig;

  constructor({ config }: { config: VimeoConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'VIMEO',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'vimeo._project_alt1/sync': {
        schema: z.object({
          project_id: z.string(),
          project_id: z.string(),
        }),
        handler: get_project_alt1,
      },

      'vimeo._project/sync': {
        schema: z.object({
          project_id: z.string(),
          user_id: z.string(),
          user_id: z.string(),
          project_id: z.string(),
        }),
        handler: get_project,
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
        SERVER: `https://api.vimeo.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
