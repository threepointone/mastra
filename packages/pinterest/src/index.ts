
import { Integration, IntegrationAuth } from '@arkw/core';

type PinterestConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class PinterestIntegration extends Integration {
  config: PinterestConfig;

  constructor({ config }: { config: PinterestConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'PINTEREST',
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
        SERVER: `https://www.pinterest.com`,
        AUTHORIZATION_ENDPOINT: '/oauth',
        TOKEN_ENDPOINT: '/v5/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    