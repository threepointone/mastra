
import { Integration, IntegrationAuth } from '@arkw/core';

type ServicenowConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ServicenowIntegration extends Integration {
  config: ServicenowConfig;

  constructor({ config }: { config: ServicenowConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SERVICENOW',
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
        SERVER: `https://${this.config.subdomain}.service-now.com`,
        AUTHORIZATION_ENDPOINT: '/oauth_auth.do',
        TOKEN_ENDPOINT: '/oauth_token.do',
        SCOPES: [],
      },
    });
  }
}
    
    