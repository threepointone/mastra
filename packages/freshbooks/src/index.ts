
import { Integration, IntegrationAuth } from '@arkw/core';

type FreshbooksConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class FreshbooksIntegration extends Integration {
  config: FreshbooksConfig;

  constructor({ config }: { config: FreshbooksConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'FRESHBOOKS',
      logoUrl: "TODO",
    });

    this.config = config;
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
        SERVER: `https://auth.freshbooks.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/auth/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    