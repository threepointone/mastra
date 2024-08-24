
import { Integration, IntegrationAuth } from '@arkw/core';

type GoogleConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class GoogleIntegration extends Integration {
  config: GoogleConfig;

  constructor({ config }: { config: GoogleConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'GOOGLE',
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
        SERVER: `https://accounts.google.com`,
        AUTHORIZATION_ENDPOINT: '/o/oauth2/v2/auth',
        TOKEN_ENDPOINT: '/token',
        SCOPES: [],
      },
    });
  }
}
    
    