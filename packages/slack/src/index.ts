
import { Integration, IntegrationAuth } from '@arkw/core';

type SlackConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SlackIntegration extends Integration {
  config: SlackConfig;

  constructor({ config }: { config: SlackConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SLACK',
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
        SERVER: `https://slack.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/v2/authorize',
        TOKEN_ENDPOINT: '/api/oauth.v2.access',
        SCOPES: [],
      },
    });
  }
}
    
    