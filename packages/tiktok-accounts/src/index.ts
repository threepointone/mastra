
import { Integration, IntegrationAuth } from '@arkw/core';

type Tiktok-accountsConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Tiktok-accountsIntegration extends Integration {
  config: Tiktok-accountsConfig;

  constructor({ config }: { config: Tiktok-accountsConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TIKTOK-ACCOUNTS',
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
        SERVER: `https://www.tiktok.com`,
        AUTHORIZATION_ENDPOINT: '/v2/auth/authorize/',
        TOKEN_ENDPOINT: '/open_api/v1.3/tt_user/oauth2/token/',
        SCOPES: [],
      },
    });
  }
}
    
    