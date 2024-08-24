
import { Integration, IntegrationAuth } from '@arkw/core';

type HarvestConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class HarvestIntegration extends Integration {
  config: HarvestConfig;

  constructor({ config }: { config: HarvestConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'HARVEST',
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
        SERVER: `https://id.getharvest.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/api/v2/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    