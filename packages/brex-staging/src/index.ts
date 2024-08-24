
import { Integration, IntegrationAuth } from '@arkw/core';

type Brex-stagingConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Brex-stagingIntegration extends Integration {
  config: Brex-stagingConfig;

  constructor({ config }: { config: Brex-stagingConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BREX-STAGING',
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
        SERVER: `https://accounts-api.staging.brexapps.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/default/v1/authorize',
        TOKEN_ENDPOINT: '/oauth2/default/v1/token',
        SCOPES: [],
      },
    });
  }
}
    
    