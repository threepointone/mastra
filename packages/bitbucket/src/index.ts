
import { Integration, IntegrationAuth } from '@arkw/core';

type BitbucketConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BitbucketIntegration extends Integration {
  config: BitbucketConfig;

  constructor({ config }: { config: BitbucketConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BITBUCKET',
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
        SERVER: `https://bitbucket.org`,
        AUTHORIZATION_ENDPOINT: '/site/oauth2/authorize',
        TOKEN_ENDPOINT: '/site/oauth2/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    