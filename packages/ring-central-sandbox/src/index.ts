
import { Integration, IntegrationAuth } from '@arkw/core';

type Ring-central-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Ring-central-sandboxIntegration extends Integration {
  config: Ring-central-sandboxConfig;

  constructor({ config }: { config: Ring-central-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'RING-CENTRAL-SANDBOX',
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
        SERVER: `https://platform.devtest.ringcentral.com`,
        AUTHORIZATION_ENDPOINT: '/restapi/oauth/authorize',
        TOKEN_ENDPOINT: '/restapi/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    