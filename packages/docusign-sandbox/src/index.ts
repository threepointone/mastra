
import { Integration, IntegrationAuth } from '@arkw/core';

type Docusign-sandboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Docusign-sandboxIntegration extends Integration {
  config: Docusign-sandboxConfig;

  constructor({ config }: { config: Docusign-sandboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DOCUSIGN-SANDBOX',
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
        SERVER: `https://account-d.docusign.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/auth',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    