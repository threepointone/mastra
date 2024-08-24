
import { Integration, IntegrationAuth } from '@arkw/core';

type TodoistConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TodoistIntegration extends Integration {
  config: TodoistConfig;

  constructor({ config }: { config: TodoistConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TODOIST',
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
        SERVER: `https://todoist.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    