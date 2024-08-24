
import { Integration, IntegrationAuth } from '@arkw/core';

type Wildix-pbxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Wildix-pbxIntegration extends Integration {
  config: Wildix-pbxConfig;

  constructor({ config }: { config: Wildix-pbxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'WILDIX-PBX',
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
        SERVER: `https://${this.config.subdomain}.wildixin.com`,
        AUTHORIZATION_ENDPOINT: '/authorization/oauth2',
        TOKEN_ENDPOINT: '/authorization/oauth2Token',
        SCOPES: [],
      },
    });
  }
}
    
    