
import { Integration, IntegrationAuth } from '@arkw/core';

type SplitwiseConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SplitwiseIntegration extends Integration {
  config: SplitwiseConfig;

  constructor({ config }: { config: SplitwiseConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SPLITWISE',
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
        SERVER: `https://secure.splitwise.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    