
import { Integration, IntegrationAuth } from '@arkw/core';

type AutodeskConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AutodeskIntegration extends Integration {
  config: AutodeskConfig;

  constructor({ config }: { config: AutodeskConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'AUTODESK',
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
        SERVER: `https://developer.api.autodesk.com`,
        AUTHORIZATION_ENDPOINT: '/authentication/v2/authorize',
        TOKEN_ENDPOINT: '/authentication/v2/token',
        SCOPES: [],
      },
    });
  }
}
    
    