
import { Integration, IntegrationAuth } from '@arkw/core';

type Paypal-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Paypal-sandboxIntegration extends Integration {
  config: Paypal-sandboxConfig;

  constructor({ config }: { config: Paypal-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'PAYPAL-SANDBOX',
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
        SERVER: `https://www.sandbox.paypal.com`,
        AUTHORIZATION_ENDPOINT: '/signin/authorize',
        TOKEN_ENDPOINT: '/v1/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    