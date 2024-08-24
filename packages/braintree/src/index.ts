
import { Integration, IntegrationAuth } from '@arkw/core';

type BraintreeConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BraintreeIntegration extends Integration {
  config: BraintreeConfig;

  constructor({ config }: { config: BraintreeConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BRAINTREE',
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
        SERVER: `https://api.braintreegateway.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/connect',
        TOKEN_ENDPOINT: '/oauth/access_tokens',
        SCOPES: [],
      },
    });
  }
}
    
    