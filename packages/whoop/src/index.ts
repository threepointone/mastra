
import { Integration, IntegrationAuth } from '@arkw/core';

type WhoopConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class WhoopIntegration extends Integration {
  config: WhoopConfig;

  constructor({ config }: { config: WhoopConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'WHOOP',
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
        SERVER: `https://api.prod.whoop.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/oauth2/auth',
        TOKEN_ENDPOINT: '/oauth/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    