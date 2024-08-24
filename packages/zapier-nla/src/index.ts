
import { Integration, IntegrationAuth } from '@arkw/core';

type Zapier-nlaConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Zapier-nlaIntegration extends Integration {
  config: Zapier-nlaConfig;

  constructor({ config }: { config: Zapier-nlaConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ZAPIER-NLA',
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
        SERVER: `https://nla.zapier.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize/',
        TOKEN_ENDPOINT: '/oauth/token/',
        SCOPES: [],
      },
    });
  }
}
    
    