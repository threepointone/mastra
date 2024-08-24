
import { Integration, IntegrationAuth } from '@arkw/core';

type ClickupConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ClickupIntegration extends Integration {
  config: ClickupConfig;

  constructor({ config }: { config: ClickupConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'CLICKUP',
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
        SERVER: `https://app.clickup.com`,
        AUTHORIZATION_ENDPOINT: '/api',
        TOKEN_ENDPOINT: '/api/v2/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    