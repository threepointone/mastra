import { Integration, OpenAPI, IntegrationCredentialType, IntegrationAuth } from '@kpl/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';



// @ts-ignore
import GithubLogo from './assets/github.svg';
import { GITHUB_PULL_REQUEST_FIELDS } from './constants';
import { pullRequestSync } from './events/sync';
import { openapi } from './openapi';
import { components } from './openapi-components';
import { paths } from './openapi-paths';


export class GithubIntegration extends Integration {
  entityTypes = { BRANCHES: 'BRANCHES', PULL_REQUEST: 'PULL_REQUEST' } as const;

  constructor() {
    super({
      authType: IntegrationCredentialType.API_KEY,
      name: 'GITHUB',
      logoUrl: GithubLogo,
      authConnectionOptions: z.object({
        API_KEY: z.string(),
      }),
    });
  }

  getOpenApiSpec() {
    return { paths, components } as unknown as OpenAPI;
  }

  getApiClient = async ({ connectionId }: { connectionId: string }): Promise<OASClient<NormalizeOAS<openapi>, false>> => {
    const connection = await this.dataLayer?.getConnection({ name: this.name, connectionId });

    if (!connection) {
      throw new Error(`Connection not found for connectionId: ${connectionId}`);
    }

    const credential = await this.dataLayer?.getCredentialsByConnection(connection.id);
    const value = credential?.value as Record<string, string>;

    const client = createClient<NormalizeOAS<openapi>>({
      endpoint: 'https://api.github.com',
      globalParams: {
        headers: {
          Authorization: `Basic ${btoa(`${value?.['API_KEY']}`)}`,
        },
      },
    });

    return client;
  };

  registerEvents() {
    this.events = {
      'github.pull-requests/sync': {
        schema: z.record(z.any()),
        handler: pullRequestSync,
        description: 'Sync pull requests from Github',
        key: 'github/sync.pull-requests',
        label: 'Sync Pull Requests',
      },
    };

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

  createEntity = async ({
    k_id,
    connectionId,
    shouldSync = true,
  }: {
    k_id: string;
    connectionId: string;
    shouldSync?: boolean;
  }) => {
    for (const entityType of Object.values(this.entityTypes)) {
      const existingEntity = await this.dataLayer?.getEntityByConnectionAndType({
        type: entityType,
        k_id,
      });

      let entity;
      if (existingEntity) {
        entity = existingEntity;
      } else {
        entity = await this.dataLayer?.createEntity({
          connectionId,
          type: entityType,
          k_id,
        });

        await this.dataLayer?.addPropertiesToEntity({
          entityId: entity?.id!,
          properties: GITHUB_PULL_REQUEST_FIELDS,
        });
      }
      if (shouldSync && entity) {
        await this.triggerEvent({
          key: 'github/sync.table',
          data: {
            entityType,
          },
          user: {
            connectionId,
          },
        });
      }
    }
  };

  // async onConnectionCreated({ connection }: { connection: Connection }) {
  //   return this.createEntity({
  //     connectionId: connection.id,
  //     k_id: connection.id,
  //   });
  // }
}
