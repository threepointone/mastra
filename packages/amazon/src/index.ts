
import { Integration, IntegrationAuth } from '@arkw/core';

type AmazonConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AmazonIntegration extends Integration {
  config: AmazonConfig;

  constructor({ config }: { config: AmazonConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'AMAZON',
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
        SERVER: `https://www.amazon.com`,
        AUTHORIZATION_ENDPOINT: '/ap/oa',
        TOKEN_ENDPOINT: '/auth/o2/token',
        SCOPES: [],
      },
    });
  }
}
    
    