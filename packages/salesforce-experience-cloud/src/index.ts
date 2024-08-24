
import { Integration, IntegrationAuth } from '@arkw/core';

type Salesforce-experience-cloudConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Salesforce-experience-cloudIntegration extends Integration {
  config: Salesforce-experience-cloudConfig;

  constructor({ config }: { config: Salesforce-experience-cloudConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SALESFORCE-EXPERIENCE-CLOUD',
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
        SERVER: `https://${this.config.subdomain}.my.site.com`,
        AUTHORIZATION_ENDPOINT: '/services/oauth2/authorize',
        TOKEN_ENDPOINT: '/services/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    