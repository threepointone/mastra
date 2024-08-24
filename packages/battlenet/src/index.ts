
import { Integration, IntegrationAuth } from '@arkw/core';

type BattlenetConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BattlenetIntegration extends Integration {
  config: BattlenetConfig;

  constructor({ config }: { config: BattlenetConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BATTLENET',
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
        SERVER: `https://oauth.battle.${this.config.extension}`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/token',
        SCOPES: [],
      },
    });
  }
}
    
    