
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { CompanyDeepsearchName } from './events/CompanyDeepsearchName'
import { CompanyDeepsearchNumber } from './events/CompanyDeepsearchNumber'
import { CompanyMonitorList } from './events/CompanyMonitorList'
import { CompanyMonitorId } from './events/CompanyMonitorId'
import { CompanyNotificationList } from './events/CompanyNotificationList'
import { CompanySearchNumber } from './events/CompanySearchNumber'
import { CompanyIdAnnouncements } from './events/CompanyIdAnnouncements'
import { CompanyIdSuper } from './events/CompanyIdSuper'
import { CompanyIdDataset } from './events/CompanyIdDataset'
import { ProductNotifier } from './events/ProductNotifier'
import { ProductStatus } from './events/ProductStatus'

type BrexConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BrexIntegration extends Integration {
  config: BrexConfig;

  constructor({ config }: { config: BrexConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BREX',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'brex.CompanyDeepsearchName/sync': {
                schema: z.object({
                  'country': z.string(),
'name': z.string()}),
                handler: CompanyDeepsearchName,
            },
        

             'brex.CompanyDeepsearchNumber/sync': {
                schema: z.object({
                  'country': z.string(),
'number': z.string()}),
                handler: CompanyDeepsearchNumber,
            },
        

             'brex.CompanyMonitorList/sync': {
                schema: z.object({}),
                handler: CompanyMonitorList,
            },
        

             'brex.CompanyMonitorId/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: CompanyMonitorId,
            },
        

             'brex.CompanyNotificationList/sync': {
                schema: z.object({}),
                handler: CompanyNotificationList,
            },
        

             'brex.CompanySearchNumber/sync': {
                schema: z.object({
                  'country': z.string(),
'number': z.string(),
'limit': z.number()}),
                handler: CompanySearchNumber,
            },
        

             'brex.CompanyIdAnnouncements/sync': {
                schema: z.object({
                  'id': z.string(),
'limit': z.number(),
'offset': z.number(),
'data': z.boolean()}),
                handler: CompanyIdAnnouncements,
            },
        

             'brex.CompanyIdSuper/sync': {
                schema: z.object({
                  'id': z.string(),
'country': z.string(),
'lang': z.string()}),
                handler: CompanyIdSuper,
            },
        

             'brex.CompanyIdDataset/sync': {
                schema: z.object({
                  'id': z.string(),
'dataset': z.string(),
'check_stock_listing': z.boolean(),
'lang': z.string()}),
                handler: CompanyIdDataset,
            },
        

             'brex.ProductNotifier/sync': {
                schema: z.object({
                  'notifierId': z.string()}),
                handler: ProductNotifier,
            },
        

             'brex.ProductStatus/sync': {
                schema: z.object({
                  'orderId': z.string()}),
                handler: ProductStatus,
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
        SERVER: `https://accounts-api.brex.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/default/v1/authorize',
        TOKEN_ENDPOINT: '/oauth2/default/v1/token',
        SCOPES: [],
      },
    });
  }
}

    