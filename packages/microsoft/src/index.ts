
import { Integration, IntegrationAuth } from '@arkw/core';

type MicrosoftConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class MicrosoftIntegration extends Integration {
  config: MicrosoftConfig;

  constructor({ config }: { config: MicrosoftConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'MICROSOFT',
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
        AUTHORIZATION_ENDPOINT: '/common/oauth2/v2.0/authorize',
        TOKEN_ENDPOINT: '/common/oauth2/v2.0/token',
        SCOPES: [],
      },
    });
  }
}
    
    