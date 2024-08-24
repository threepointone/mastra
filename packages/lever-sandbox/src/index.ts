
import { Integration, IntegrationAuth } from '@arkw/core';

type Lever-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Lever-sandboxIntegration extends Integration {
  config: Lever-sandboxConfig;

  constructor({ config }: { config: Lever-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'LEVER-SANDBOX',
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
        SERVER: `https://sandbox-lever.auth0.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    