
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import type openapi from './openapi'

type XeroConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class XeroIntegration extends Integration {
  config: XeroConfig;

  constructor({ config }: { config: XeroConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'XERO',
      logoUrl: "TODO",
    });

    this.config = config;
  }


  async getProxy({ referenceId }: { referenceId: string }) {
    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: ""
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
        SERVER: `https://login.xero.com`,
        AUTHORIZATION_ENDPOINT: '/identity/connect/authorize',
        TOKEN_ENDPOINT: '/connect/token',
        SCOPES: [],
      },
    });
  }
}
    
    