
import { Integration, IntegrationAuth } from '@arkw/core';

type ZohoConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ZohoIntegration extends Integration {
  config: ZohoConfig;

  constructor({ config }: { config: ZohoConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ZOHO',
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
        SERVER: `https://accounts.zoho.${this.config.extension}`,
        AUTHORIZATION_ENDPOINT: '/oauth/v2/auth',
        TOKEN_ENDPOINT: '/oauth/v2/token',
        SCOPES: [],
      },
    });
  }
}
    
    