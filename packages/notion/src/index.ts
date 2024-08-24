
import { Integration, IntegrationAuth } from '@arkw/core';

type NotionConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class NotionIntegration extends Integration {
  config: NotionConfig;

  constructor({ config }: { config: NotionConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'NOTION',
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
        SERVER: `https://api.notion.com`,
        AUTHORIZATION_ENDPOINT: '/v1/oauth/authorize',
        TOKEN_ENDPOINT: '/v1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    