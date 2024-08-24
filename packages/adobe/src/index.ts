
import { Integration, IntegrationAuth } from '@arkw/core';

type AdobeConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AdobeIntegration extends Integration {
  config: AdobeConfig;

  constructor({ config }: { config: AdobeConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ADOBE',
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
        SERVER: `https://ims-na1.adobelogin.com`,
        AUTHORIZATION_ENDPOINT: '/ims/authorize/v2',
        TOKEN_ENDPOINT: '/ims/token/v3',
        SCOPES: [],
      },
    });
  }
}
    
    