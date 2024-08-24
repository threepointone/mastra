
import { Integration, IntegrationAuth } from '@arkw/core';

type PaypalConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class PaypalIntegration extends Integration {
  config: PaypalConfig;

  constructor({ config }: { config: PaypalConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'PAYPAL',
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
        SERVER: `https://www.paypal.com`,
        AUTHORIZATION_ENDPOINT: '/signin/authorize',
        TOKEN_ENDPOINT: '/v1/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    