
import { Integration, IntegrationAuth } from '@arkw/core';

type PandadocConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class PandadocIntegration extends Integration {
  config: PandadocConfig;

  constructor({ config }: { config: PandadocConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'PANDADOC',
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
        SERVER: `https://app.pandadoc.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    