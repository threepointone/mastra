
import { Integration, IntegrationAuth } from '@arkw/core';

type LinkedinConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class LinkedinIntegration extends Integration {
  config: LinkedinConfig;

  constructor({ config }: { config: LinkedinConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'LINKEDIN',
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
        SERVER: `https://www.linkedin.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/v2/authorization',
        TOKEN_ENDPOINT: '/oauth/v2/accessToken',
        SCOPES: [],
      },
    });
  }
}
    
    