
import { Integration, IntegrationAuth } from '@arkw/core';

type Jira-data-centerConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Jira-data-centerIntegration extends Integration {
  config: Jira-data-centerConfig;

  constructor({ config }: { config: Jira-data-centerConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'JIRA-DATA-CENTER',
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
        SERVER: `https://${this.config.endpointurl}`,
        AUTHORIZATION_ENDPOINT: '/rest/oauth2/latest/authorize',
        TOKEN_ENDPOINT: '/rest/oauth2/latest/token',
        SCOPES: [],
      },
    });
  }
}
    
    