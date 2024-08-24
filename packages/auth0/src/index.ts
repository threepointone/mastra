
import { Integration, IntegrationAuth } from '@arkw/core';

type Auth0Config = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Auth0Integration extends Integration {
  config: Auth0Config;

  constructor({ config }: { config: Auth0Config }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'AUTH0',
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
        SERVER: `https://${this.config.subdomain}.auth0.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    