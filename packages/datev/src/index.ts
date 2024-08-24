
import { Integration, IntegrationAuth } from '@arkw/core';

type DatevConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class DatevIntegration extends Integration {
  config: DatevConfig;

  constructor({ config }: { config: DatevConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DATEV',
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
        SERVER: `https://login.datev.de`,
        AUTHORIZATION_ENDPOINT: '/openid/authorize',
        TOKEN_ENDPOINT: '/token',
        SCOPES: [],
      },
    });
  }
}
    
    