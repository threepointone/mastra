
import { Integration, IntegrationAuth } from '@arkw/core';

type Checkr-partnerConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Checkr-partnerIntegration extends Integration {
  config: Checkr-partnerConfig;

  constructor({ config }: { config: Checkr-partnerConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'CHECKR-PARTNER',
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
        SERVER: `https://partners.checkr.com`,
        AUTHORIZATION_ENDPOINT: '/authorize/$%7BconnectionConfig.client_id%7D',
        TOKEN_ENDPOINT: '/oauth/tokens',
        SCOPES: [],
      },
    });
  }
}
    
    