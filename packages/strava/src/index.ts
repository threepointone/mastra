
import { Integration, IntegrationAuth } from '@arkw/core';

type StravaConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class StravaIntegration extends Integration {
  config: StravaConfig;

  constructor({ config }: { config: StravaConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STRAVA',
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
        AUTHORIZATION_ENDPOINT: '/oauth/mobile/authorize',
        TOKEN_ENDPOINT: '/api/v3/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    