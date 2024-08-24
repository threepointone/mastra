
import { Integration, IntegrationAuth } from '@arkw/core';

type TimelyConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TimelyIntegration extends Integration {
  config: TimelyConfig;

  constructor({ config }: { config: TimelyConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TIMELY',
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
        SERVER: `https://api.timelyapp.com`,
        AUTHORIZATION_ENDPOINT: '/1.1/oauth/authorize',
        TOKEN_ENDPOINT: '/1.1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    