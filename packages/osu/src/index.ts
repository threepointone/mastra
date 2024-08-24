
import { Integration, IntegrationAuth } from '@arkw/core';

type OsuConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class OsuIntegration extends Integration {
  config: OsuConfig;

  constructor({ config }: { config: OsuConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'OSU',
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
        SERVER: `https://osu.ppy.sh`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    