
import { Integration, IntegrationAuth } from '@arkw/core';

type SpotifyConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SpotifyIntegration extends Integration {
  config: SpotifyConfig;

  constructor({ config }: { config: SpotifyConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SPOTIFY',
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
        SERVER: `https://accounts.spotify.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/api/token',
        SCOPES: [],
      },
    });
  }
}
    
    