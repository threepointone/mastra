
import { Integration, IntegrationAuth } from '@arkw/core';

type DiscordConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class DiscordIntegration extends Integration {
  config: DiscordConfig;

  constructor({ config }: { config: DiscordConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DISCORD',
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
        SERVER: `https://discord.com`,
        AUTHORIZATION_ENDPOINT: '/api/oauth2/authorize',
        TOKEN_ENDPOINT: '/api/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    