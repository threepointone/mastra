
import { Integration, IntegrationAuth } from '@arkw/core';

type IntercomConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class IntercomIntegration extends Integration {
  config: IntercomConfig;

  constructor({ config }: { config: IntercomConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'INTERCOM',
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
        SERVER: `https://app.intercom.io`,
        AUTHORIZATION_ENDPOINT: '/oauth',
        TOKEN_ENDPOINT: '/auth/eagle/token',
        SCOPES: [],
      },
    });
  }
}
    
    