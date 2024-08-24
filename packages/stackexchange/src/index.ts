
import { Integration, IntegrationAuth } from '@arkw/core';

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
    
    