
import { Integration, IntegrationAuth } from '@arkw/core';

type QualtricsConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class QualtricsIntegration extends Integration {
  config: QualtricsConfig;

  constructor({ config }: { config: QualtricsConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'QUALTRICS',
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
        SERVER: `https://${this.config.subdomain}.qualtrics.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/auth',
        TOKEN_ENDPOINT: '/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    