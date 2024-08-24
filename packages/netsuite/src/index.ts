
import { Integration, IntegrationAuth } from '@arkw/core';

type NetsuiteConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class NetsuiteIntegration extends Integration {
  config: NetsuiteConfig;

  constructor({ config }: { config: NetsuiteConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'NETSUITE',
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
        SERVER: `https://${this.config.accountid}.app.netsuite.com`,
        AUTHORIZATION_ENDPOINT: '/app/login/oauth2/authorize.nl',
        TOKEN_ENDPOINT: '/services/rest/auth/oauth2/v1/token',
        SCOPES: [],
      },
    });
  }
}
    
    