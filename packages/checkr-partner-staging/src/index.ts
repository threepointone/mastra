
import { Integration, IntegrationAuth } from '@arkw/core';

type Checkr-partner-stagingConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Checkr-partner-stagingIntegration extends Integration {
  config: Checkr-partner-stagingConfig;

  constructor({ config }: { config: Checkr-partner-stagingConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'CHECKR-PARTNER-STAGING',
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
        SERVER: `https://partners.checkrhq-staging.net`,
        AUTHORIZATION_ENDPOINT: '/authorize/$%7BconnectionConfig.client_id%7D',
        TOKEN_ENDPOINT: '/oauth/tokens',
        SCOPES: [],
      },
    });
  }
}
    
    