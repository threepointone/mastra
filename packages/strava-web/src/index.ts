
import { Integration, IntegrationAuth } from '@arkw/core';

type Strava-webConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Strava-webIntegration extends Integration {
  config: Strava-webConfig;

  constructor({ config }: { config: Strava-webConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STRAVA-WEB',
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
        SERVER: `https://www.strava.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/api/v3/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    