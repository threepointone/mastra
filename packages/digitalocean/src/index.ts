import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { apps_get } from './events/apps_get';
import { apps_get_deployment } from './events/apps_get_deployment';
import { imageActions_get } from './events/imageActions_get';
import { monitoring_get_DropletCpuMetrics } from './events/monitoring_get_DropletCpuMetrics';
import { monitoring_get_dropletFilesystemFreeMetrics } from './events/monitoring_get_dropletFilesystemFreeMetrics';
import { monitoring_get_dropletLoad1Metrics } from './events/monitoring_get_dropletLoad1Metrics';
import type openapi from './openapi';

type DigitaloceanConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class DigitaloceanIntegration extends Integration {
  config: DigitaloceanConfig;

  constructor({ config }: { config: DigitaloceanConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DIGITALOCEAN',
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'digitalocean.apps__deployment/sync': {
        schema: z.object({
          '#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0': z.string(),
          deployment_id: z.string(),
          app_id: z.string(),
          deployment_id: z.string(),
        }),
        handler: apps_get_deployment,
      },

      'digitalocean.apps_/sync': {
        schema: z.object({
          '#/paths/~1v2~1apps~1%7Bid%7D/delete/parameters/0': z.string(),
          name: z.string(),
          id: z.string(),
        }),
        handler: apps_get,
      },

      'digitalocean.imageActions_/sync': {
        schema: z.object({
          '#/paths/~1v2~1images~1%7Bimage_id%7D/put/parameters/0': z.string(),
          '#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0': z.string(),
          image_id: z.string(),
          action_id: z.string(),
        }),
        handler: imageActions_get,
      },

      'digitalocean.monitoring__DropletCpuMetrics/sync': {
        schema: z.object({
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string(),
        }),
        handler: monitoring_get_DropletCpuMetrics,
      },

      'digitalocean.monitoring__dropletFilesystemFreeMetrics/sync': {
        schema: z.object({
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string(),
        }),
        handler: monitoring_get_dropletFilesystemFreeMetrics,
      },

      'digitalocean.monitoring__dropletLoad1Metrics/sync': {
        schema: z.object({
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
          '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string(),
        }),
        handler: monitoring_get_dropletLoad1Metrics,
      },
    };
    return this.events;
  }

  async getProxy({ referenceId }: { referenceId: string }) {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId });

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`);
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id);

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: '',
      globalParams: {
        headers: {
          Authorization: `Bearer ${credential?.value}`,
        },
      },
    });

    return client;
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
        SERVER: `https://cloud.digitalocean.com`,
        AUTHORIZATION_ENDPOINT: '/v1/oauth/authorize',
        TOKEN_ENDPOINT: '/v1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
