
import { Integration, IntegrationAuth } from '@arkw/core';

type Stripe-app-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Stripe-app-sandboxIntegration extends Integration {
  config: Stripe-app-sandboxConfig;

  constructor({ config }: { config: Stripe-app-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STRIPE-APP-SANDBOX',
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
        AUTHORIZATION_ENDPOINT: '/oauth/v2/$%7BconnectionConfig.appDomain%7D/authorize',
        TOKEN_ENDPOINT: '/v1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    