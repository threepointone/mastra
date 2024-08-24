
import { Integration, IntegrationAuth } from '@arkw/core';

type TeamworkConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TeamworkIntegration extends Integration {
  config: TeamworkConfig;

  constructor({ config }: { config: TeamworkConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TEAMWORK',
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
        SERVER: `https://www.teamwork.com`,
        AUTHORIZATION_ENDPOINT: '/launchpad/login',
        TOKEN_ENDPOINT: '/launchpad/v1/token.json',
        SCOPES: [],
      },
    });
  }
}
    
    