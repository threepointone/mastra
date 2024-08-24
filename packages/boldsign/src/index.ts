
import { Integration, IntegrationAuth } from '@arkw/core';

type BoldsignConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BoldsignIntegration extends Integration {
  config: BoldsignConfig;

  constructor({ config }: { config: BoldsignConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BOLDSIGN',
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
        SERVER: `https://account.boldsign.com`,
        AUTHORIZATION_ENDPOINT: '/connect/authorize',
        TOKEN_ENDPOINT: '/connect/token',
        SCOPES: [],
      },
    });
  }
}
    
    