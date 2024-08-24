
import { Integration, IntegrationAuth } from '@arkw/core';

type SquarespaceConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SquarespaceIntegration extends Integration {
  config: SquarespaceConfig;

  constructor({ config }: { config: SquarespaceConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SQUARESPACE',
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
        SERVER: `https://login.squarespace.com`,
        AUTHORIZATION_ENDPOINT: '/api/1/login/oauth/provider/authorize',
        TOKEN_ENDPOINT: '/api/1/login/oauth/provider/tokens',
        SCOPES: [],
      },
    });
  }
}
    
    