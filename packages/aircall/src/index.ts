
import { Integration, IntegrationAuth } from '@arkw/core';

type AircallConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AircallIntegration extends Integration {
  config: AircallConfig;

  constructor({ config }: { config: AircallConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'AIRCALL',
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
        SERVER: `https://dashboard.aircall.io`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/v1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    