
import { Integration, IntegrationAuth } from '@arkw/core';

type YahooConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class YahooIntegration extends Integration {
  config: YahooConfig;

  constructor({ config }: { config: YahooConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'YAHOO',
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
        SERVER: `https://api.login.yahoo.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/request_auth',
        TOKEN_ENDPOINT: '/oauth2/get_token',
        SCOPES: [],
      },
    });
  }
}
    
    