
import { Integration, IntegrationAuth } from '@arkw/core';

type IntuitConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class IntuitIntegration extends Integration {
  config: IntuitConfig;

  constructor({ config }: { config: IntuitConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'INTUIT',
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
        SERVER: `https://appcenter.intuit.com`,
        AUTHORIZATION_ENDPOINT: '/connect/oauth2',
        TOKEN_ENDPOINT: '/oauth2/v1/tokens/bearer',
        SCOPES: [],
      },
    });
  }
}
    
    