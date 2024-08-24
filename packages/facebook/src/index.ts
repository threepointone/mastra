
import { Integration, IntegrationAuth } from '@arkw/core';

type FacebookConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class FacebookIntegration extends Integration {
  config: FacebookConfig;

  constructor({ config }: { config: FacebookConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'FACEBOOK',
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
        SERVER: `https://www.facebook.com`,
        AUTHORIZATION_ENDPOINT: '/v15.0/dialog/oauth',
        TOKEN_ENDPOINT: '/v15.0/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    