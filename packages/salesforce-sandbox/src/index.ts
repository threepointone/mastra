
import { Integration, IntegrationAuth } from '@arkw/core';

type Salesforce-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Salesforce-sandboxIntegration extends Integration {
  config: Salesforce-sandboxConfig;

  constructor({ config }: { config: Salesforce-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SALESFORCE-SANDBOX',
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
        SERVER: `https://test.salesforce.com`,
        AUTHORIZATION_ENDPOINT: '/services/oauth2/authorize',
        TOKEN_ENDPOINT: '/services/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    