
import { Integration, IntegrationAuth } from '@arkw/core';

type ContentstackConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ContentstackIntegration extends Integration {
  config: ContentstackConfig;

  constructor({ config }: { config: ContentstackConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'CONTENTSTACK',
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
        SERVER: `https://${this.config.subdomain}.contentstack.com`,
        AUTHORIZATION_ENDPOINT: '/apps/$%7BconnectionConfig.appId%7D/authorize',
        TOKEN_ENDPOINT: '/apps-api/apps/token',
        SCOPES: [],
      },
    });
  }
}
    
    