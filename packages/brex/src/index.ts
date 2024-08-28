import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { CompanyIdDataset } from './events/CompanyIdDataset';
import type openapi from './openapi';

type BrexConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BrexIntegration extends Integration {
  config: BrexConfig;

  constructor({ config }: { config: BrexConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BREX',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'brex.CompanyIdDataset/sync': {
        schema: z.object({
          id: z.string(),
          check_stock_listing: z.boolean(),
          dataset: z.string(),
          lang: z.string(),
          id: z.string(),
          dataset: z.string(),
        }),
        handler: CompanyIdDataset,
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
        SERVER: `https://accounts-api.brex.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/default/v1/authorize',
        TOKEN_ENDPOINT: '/oauth2/default/v1/token',
        SCOPES: [],
      },
    });
  }
}
