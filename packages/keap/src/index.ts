
import { Integration, IntegrationAuth } from '@arkw/core';

type KeapConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class KeapIntegration extends Integration {
  config: KeapConfig;

  constructor({ config }: { config: KeapConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'KEAP',
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
        SERVER: `https://accounts.infusionsoft.com`,
        AUTHORIZATION_ENDPOINT: '/app/oauth/authorize',
        TOKEN_ENDPOINT: '/token',
        SCOPES: [],
      },
    });
  }
}
    
    