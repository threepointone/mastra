
import { Integration, IntegrationAuth } from '@arkw/core';

type Servicem8Config = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Servicem8Integration extends Integration {
  config: Servicem8Config;

  constructor({ config }: { config: Servicem8Config }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SERVICEM8',
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
        SERVER: `https://go.servicem8.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    