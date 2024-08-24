
import { Integration, IntegrationAuth } from '@arkw/core';

type Stripe-expressConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Stripe-expressIntegration extends Integration {
  config: Stripe-expressConfig;

  constructor({ config }: { config: Stripe-expressConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STRIPE-EXPRESS',
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
        SERVER: `https://connect.stripe.com`,
        AUTHORIZATION_ENDPOINT: '/express/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    