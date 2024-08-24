
import { Integration, IntegrationAuth } from '@arkw/core';

type MailchimpConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class MailchimpIntegration extends Integration {
  config: MailchimpConfig;

  constructor({ config }: { config: MailchimpConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'MAILCHIMP',
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
        SERVER: `https://login.mailchimp.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    