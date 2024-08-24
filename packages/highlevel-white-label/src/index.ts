
import { Integration, IntegrationAuth } from '@arkw/core';

type Highlevel-white-labelConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Highlevel-white-labelIntegration extends Integration {
  config: Highlevel-white-labelConfig;

  constructor({ config }: { config: Highlevel-white-labelConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'HIGHLEVEL-WHITE-LABEL',
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
        SERVER: `https://marketplace.leadconnectorhq.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/chooselocation',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    