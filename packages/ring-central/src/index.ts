
import { Integration, IntegrationAuth } from '@arkw/core';

type Ring-centralConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Ring-centralIntegration extends Integration {
  config: Ring-centralConfig;

  constructor({ config }: { config: Ring-centralConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'RING-CENTRAL',
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
        SERVER: `https://platform.ringcentral.com`,
        AUTHORIZATION_ENDPOINT: '/restapi/oauth/authorize',
        TOKEN_ENDPOINT: '/restapi/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    