
import { Integration, IntegrationAuth } from '@arkw/core';

type FigmaConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class FigmaIntegration extends Integration {
  config: FigmaConfig;

  constructor({ config }: { config: FigmaConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'FIGMA',
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
        SERVER: `https://www.figma.com`,
        AUTHORIZATION_ENDPOINT: '/oauth',
        TOKEN_ENDPOINT: '/api/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    