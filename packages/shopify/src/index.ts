
import { Integration, IntegrationAuth } from '@arkw/core';

type ShopifyConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ShopifyIntegration extends Integration {
  config: ShopifyConfig;

  constructor({ config }: { config: ShopifyConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SHOPIFY',
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
        SERVER: `https://${this.config.subdomain}.myshopify.com`,
        AUTHORIZATION_ENDPOINT: '/admin/oauth/authorize',
        TOKEN_ENDPOINT: '/admin/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    