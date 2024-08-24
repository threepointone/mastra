
import { Integration, IntegrationAuth } from '@arkw/core';

type Stripe-appConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Stripe-appIntegration extends Integration {
  config: Stripe-appConfig;

  constructor({ config }: { config: Stripe-appConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STRIPE-APP',
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
        SERVER: `https://marketplace.stripe.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/v2/authorize',
        TOKEN_ENDPOINT: '/v1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    