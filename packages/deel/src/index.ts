
import { Integration, IntegrationAuth } from '@arkw/core';

type DeelConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class DeelIntegration extends Integration {
  config: DeelConfig;

  constructor({ config }: { config: DeelConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DEEL',
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
        SERVER: `https://auth.letsdeel.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/tokens',
        SCOPES: [],
      },
    });
  }
}
    
    