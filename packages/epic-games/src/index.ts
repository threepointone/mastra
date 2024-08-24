
import { Integration, IntegrationAuth } from '@arkw/core';

type Epic-gamesConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Epic-gamesIntegration extends Integration {
  config: Epic-gamesConfig;

  constructor({ config }: { config: Epic-gamesConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'EPIC-GAMES',
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
        SERVER: `https://www.epicgames.com`,
        AUTHORIZATION_ENDPOINT: '/id/authorize',
        TOKEN_ENDPOINT: '/epic/oauth/v1/token',
        SCOPES: [],
      },
    });
  }
}
    
    