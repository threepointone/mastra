
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { _execution_log_endpoint } from './events/_execution_log_endpoint'
import { list_exposed_actions } from './events/list_exposed_actions'

type Zapier-nlaConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Zapier-nlaIntegration extends Integration {
  config: Zapier-nlaConfig;

  constructor({ config }: { config: Zapier-nlaConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ZAPIER-NLA',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'zapier-nla._execution_log_endpoint/sync': {
                schema: z.object({
                  'execution_log_id': z.string()}),
                handler: _execution_log_endpoint,
            },
        

             'zapier-nla.list_exposed_actions/sync': {
                schema: z.object({}),
                handler: list_exposed_actions,
            },
        }
    return this.events;
  }


  async getProxy({ referenceId }: { referenceId: string }): Promise<OASClient<NormalizeOAS<typeof openapi>>> {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId })

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`)
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id)

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: openapi.servers[0].url,
      globalParams: {
        headers: {
          Authorization: `Bearer ${credential?.value}`
        }
      }
    })

    return client
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
        SERVER: `https://nla.zapier.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize/',
        TOKEN_ENDPOINT: '/oauth/token/',
        SCOPES: [],
      },
    });
  }
}

    