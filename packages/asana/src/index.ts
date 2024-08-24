
import { Integration, IntegrationAuth } from '@arkw/core';

type AsanaConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AsanaIntegration extends Integration {
  config: AsanaConfig;

  constructor({ config }: { config: AsanaConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ASANA',
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
        SERVER: `https://app.asana.com`,
        AUTHORIZATION_ENDPOINT: '/-/oauth_authorize',
        TOKEN_ENDPOINT: '/-/oauth_token',
        SCOPES: [],
      },
    });
  }
}
    
    