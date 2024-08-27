
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import type openapi from './openapi'

type GithubConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class GithubIntegration extends Integration {
  config: GithubConfig;

  constructor({ config }: { config: GithubConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'GITHUB',
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
        SERVER: `https://github.com`,
        AUTHORIZATION_ENDPOINT: '/login/oauth/authorize',
        TOKEN_ENDPOINT: '/login/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    