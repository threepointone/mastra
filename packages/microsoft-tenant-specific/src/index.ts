
import { Integration, IntegrationAuth } from '@arkw/core';

type Microsoft-tenant-specificConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Microsoft-tenant-specificIntegration extends Integration {
  config: Microsoft-tenant-specificConfig;

  constructor({ config }: { config: Microsoft-tenant-specificConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'MICROSOFT-TENANT-SPECIFIC',
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
        SERVER: `https://login.microsoftonline.com`,
        AUTHORIZATION_ENDPOINT: '/$%7BconnectionConfig.tenant%7D/oauth2/v2.0/authorize',
        TOKEN_ENDPOINT: '/$%7BconnectionConfig.tenant%7D/oauth2/v2.0/token',
        SCOPES: [],
      },
    });
  }
}
    
    