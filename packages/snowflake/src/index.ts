
import { Integration, IntegrationAuth } from '@arkw/core';

type SnowflakeConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SnowflakeIntegration extends Integration {
  config: SnowflakeConfig;

  constructor({ config }: { config: SnowflakeConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SNOWFLAKE',
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
        SERVER: `https://${this.config.snowflake_account_url}`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token-request',
        SCOPES: [],
      },
    });
  }
}
    
    