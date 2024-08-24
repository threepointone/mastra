
import { Integration, IntegrationAuth } from '@arkw/core';

type Exact-onlineConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Exact-onlineIntegration extends Integration {
  config: Exact-onlineConfig;

  constructor({ config }: { config: Exact-onlineConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'EXACT-ONLINE',
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
        SERVER: `https://start.exactonline.${this.config.extension}`,
        AUTHORIZATION_ENDPOINT: '/api/oauth2/auth',
        TOKEN_ENDPOINT: '/api/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    