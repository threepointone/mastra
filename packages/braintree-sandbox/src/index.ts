
import { Integration, IntegrationAuth } from '@arkw/core';

type Braintree-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Braintree-sandboxIntegration extends Integration {
  config: Braintree-sandboxConfig;

  constructor({ config }: { config: Braintree-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BRAINTREE-SANDBOX',
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
        SERVER: `https://api.sandbox.braintreegateway.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/connect',
        TOKEN_ENDPOINT: '/oauth/access_tokens',
        SCOPES: [],
      },
    });
  }
}
    
    