
import { Integration, IntegrationAuth } from '@arkw/core';

type TsheetsteamConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class TsheetsteamIntegration extends Integration {
  config: TsheetsteamConfig;

  constructor({ config }: { config: TsheetsteamConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TSHEETSTEAM',
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
        SERVER: `https://rest.tsheets.com`,
        AUTHORIZATION_ENDPOINT: '/api/v1/authorize',
        TOKEN_ENDPOINT: '/api/v1/grant',
        SCOPES: [],
      },
    });
  }
}
    
    