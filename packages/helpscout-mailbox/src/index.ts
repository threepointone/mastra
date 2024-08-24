
import { Integration, IntegrationAuth } from '@arkw/core';

type Helpscout-mailboxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Helpscout-mailboxIntegration extends Integration {
  config: Helpscout-mailboxConfig;

  constructor({ config }: { config: Helpscout-mailboxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'HELPSCOUT-MAILBOX',
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
        SERVER: `https://secure.helpscout.net`,
        AUTHORIZATION_ENDPOINT: '/authentication/authorizeClientApplication',
        TOKEN_ENDPOINT: '/v2/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    