
import { Integration, IntegrationAuth } from '@arkw/core';

type Gong-oauthConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Gong-oauthIntegration extends Integration {
  config: Gong-oauthConfig;

  constructor({ config }: { config: Gong-oauthConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'GONG-OAUTH',
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
        SERVER: `https://app.gong.io`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/generate-customer-token',
        SCOPES: [],
      },
    });
  }
}
    
    