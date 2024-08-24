
import { Integration, IntegrationAuth } from '@arkw/core';

type SmartsheetConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SmartsheetIntegration extends Integration {
  config: SmartsheetConfig;

  constructor({ config }: { config: SmartsheetConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SMARTSHEET',
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
        SERVER: `https://app.smartsheet.com`,
        AUTHORIZATION_ENDPOINT: '/b/authorize',
        TOKEN_ENDPOINT: '/2.0/token',
        SCOPES: [],
      },
    });
  }
}
    
    