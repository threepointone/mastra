import {
  Integration,
  IntegrationCredentialType,
  IntegrationAuth,
} from "@mastra/core";
import * as zodSchema from "./client/zodSchema";
import * as integrationClient from "./client/services.gen";
import { comments } from "./client/service-comments";

// @ts-ignore
import BrowserbaseLogo from "./assets/browserbase.svg";

type BrowserbaseConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;

  [key: string]: any;
};

export class BrowserbaseIntegration extends Integration {
  constructor({ config }: { config: BrowserbaseConfig }) {
    super({
      ...config,
      authType: IntegrationCredentialType.API_KEY,
      name: "BROWSERBASE",
      logoUrl: BrowserbaseLogo,
    });
  }

  getClientZodSchema() {
    return zodSchema;
  }

  getCommentsForClientApis() {
    return comments;
  }

  getBaseClient() {
    integrationClient.client.setConfig({
      baseUrl: `https://www.browserbase.com/v1`,
    });
    return integrationClient;
  }

  getApiClient = async ({ connectionId }: { connectionId: string }) => {
    const connection = await this.dataLayer?.getConnection({
      name: this.name,
      connectionId,
    });

    if (!connection) {
      throw new Error(`Connection not found for connectionId: ${connectionId}`);
    }

    const authenticator = this.getAuthenticator();
    const { accessToken } = await authenticator.getAuthToken({
      k_id: connection.id,
    });

    const baseClient = this.getBaseClient();

    baseClient.client.interceptors.request.use((request, options) => {
      request.headers.set("Authorization", `Bearer ${accessToken}`);
      return request;
    });

    return integrationClient;
  };

  registerEvents() {
    this.events = {};
    return this.events;
  }

  getAuthenticator() {
    return new IntegrationAuth({
      dataAccess: this.dataLayer!,
      // @ts-ignore
      onConnectionCreated: () => {
        // TODO
      },
      config: {
        INTEGRATION_NAME: this.name,
        AUTH_TYPE: this.config.authType,
      },
    });
  }
}
