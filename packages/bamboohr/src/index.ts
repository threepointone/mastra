
import { Integration, IntegrationAuth } from '@arkw/core';

type BamboohrConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BamboohrIntegration extends Integration {
  config: BamboohrConfig;

  constructor({ config }: { config: BamboohrConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BAMBOOHR',
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
        SERVER: `https://${this.config.subdomain}.bamboohr.com`,
        AUTHORIZATION_ENDPOINT: '/authorize.php',
        TOKEN_ENDPOINT: '/token.php',
        SCOPES: [],
      },
    });
  }
}
    
    