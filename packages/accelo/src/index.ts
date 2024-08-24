
import { Integration, IntegrationAuth } from '@arkw/core';

type AcceloConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AcceloIntegration extends Integration {
  config: AcceloConfig;

  constructor({ config }: { config: AcceloConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ACCELO',
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
        SERVER: `https://${this.config.subdomain}.api.accelo.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/v0/authorize',
        TOKEN_ENDPOINT: '/oauth2/v0/token',
        SCOPES: [],
      },
    });
  }
}
    
    