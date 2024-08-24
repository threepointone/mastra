
import { Integration, IntegrationAuth } from '@arkw/core';

type Ramp-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Ramp-sandboxIntegration extends Integration {
  config: Ramp-sandboxConfig;

  constructor({ config }: { config: Ramp-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'RAMP-SANDBOX',
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
        SERVER: `https://demo.ramp.com`,
        AUTHORIZATION_ENDPOINT: '/v1/authorize',
        TOKEN_ENDPOINT: '/developer/v1/token',
        SCOPES: [],
      },
    });
  }
}
    
    