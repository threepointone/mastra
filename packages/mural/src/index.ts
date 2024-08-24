
import { Integration, IntegrationAuth } from '@arkw/core';

type MuralConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class MuralIntegration extends Integration {
  config: MuralConfig;

  constructor({ config }: { config: MuralConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'MURAL',
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
        SERVER: `https://app.mural.co`,
        AUTHORIZATION_ENDPOINT: '/api/public/v1/authorization/oauth2',
        TOKEN_ENDPOINT: '/api/public/v1/authorization/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    