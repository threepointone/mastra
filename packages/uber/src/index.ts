
import { Integration, IntegrationAuth } from '@arkw/core';

type UberConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class UberIntegration extends Integration {
  config: UberConfig;

  constructor({ config }: { config: UberConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'UBER',
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
        SERVER: `https://login.uber.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/v2/authorize',
        TOKEN_ENDPOINT: '/oauth/v2/token',
        SCOPES: [],
      },
    });
  }
}
    
    