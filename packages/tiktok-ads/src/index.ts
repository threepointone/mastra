
import { Integration, IntegrationAuth } from '@arkw/core';

type Tiktok-adsConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Tiktok-adsIntegration extends Integration {
  config: Tiktok-adsConfig;

  constructor({ config }: { config: Tiktok-adsConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TIKTOK-ADS',
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
        SERVER: `https://business-api.tiktok.com`,
        AUTHORIZATION_ENDPOINT: '/portal/auth',
        TOKEN_ENDPOINT: '/open_api/v1.3/oauth2/access_token/',
        SCOPES: [],
      },
    });
  }
}
    
    