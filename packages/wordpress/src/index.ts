
import { Integration, IntegrationAuth } from '@arkw/core';

type WordpressConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class WordpressIntegration extends Integration {
  config: WordpressConfig;

  constructor({ config }: { config: WordpressConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'WORDPRESS',
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
        SERVER: `https://public-api.wordpress.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    