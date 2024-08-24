
import { Integration, IntegrationAuth } from '@arkw/core';

type EgnyteConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class EgnyteIntegration extends Integration {
  config: EgnyteConfig;

  constructor({ config }: { config: EgnyteConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'EGNYTE',
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
        SERVER: `https://${this.config.subdomain}.egnyte.com`,
        AUTHORIZATION_ENDPOINT: '/puboauth/token',
        TOKEN_ENDPOINT: '/puboauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    