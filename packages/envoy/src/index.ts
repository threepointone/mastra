
import { Integration, IntegrationAuth } from '@arkw/core';

type EnvoyConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class EnvoyIntegration extends Integration {
  config: EnvoyConfig;

  constructor({ config }: { config: EnvoyConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ENVOY',
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
        SERVER: `https://app.envoy.com`,
        AUTHORIZATION_ENDPOINT: '/a/auth/v0/authorize',
        TOKEN_ENDPOINT: '/a/auth/v0/token',
        SCOPES: [],
      },
    });
  }
}
    
    