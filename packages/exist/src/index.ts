
import { Integration, IntegrationAuth } from '@arkw/core';

type ExistConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ExistIntegration extends Integration {
  config: ExistConfig;

  constructor({ config }: { config: ExistConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'EXIST',
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
        SERVER: `https://exist.io`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    