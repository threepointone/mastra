
import { Integration, IntegrationAuth } from '@arkw/core';

type ZendeskConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ZendeskIntegration extends Integration {
  config: ZendeskConfig;

  constructor({ config }: { config: ZendeskConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ZENDESK',
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
        SERVER: `https://${this.config.subdomain}.zendesk.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorizations/new',
        TOKEN_ENDPOINT: '/oauth/tokens',
        SCOPES: [],
      },
    });
  }
}
    
    