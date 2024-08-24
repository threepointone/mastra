
import { Integration, IntegrationAuth } from '@arkw/core';

type TwinfieldConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TwinfieldIntegration extends Integration {
  config: TwinfieldConfig;

  constructor({ config }: { config: TwinfieldConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TWINFIELD',
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
        SERVER: `https://login.twinfield.com`,
        AUTHORIZATION_ENDPOINT: '/auth/authentication/connect/authorize',
        TOKEN_ENDPOINT: '/auth/authentication/connect/token',
        SCOPES: [],
      },
    });
  }
}
    
    