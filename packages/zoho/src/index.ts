
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { get_sections_response } from './events/get_sections_response'
import { publish_api_get_record_detail_view_response } from './events/publish_api_get_record_detail_view_response'
import { get_fields_response } from './events/get_fields_response'
import { get_reports_response } from './events/get_reports_response'
import { get_records_quick_view_response } from './events/get_records_quick_view_response'
import { get_pages_response } from './events/get_pages_response'
import { download_file_from_subform_response } from './events/download_file_from_subform_response'
import { download_file_response } from './events/download_file_response'
import { get_applications_response } from './events/get_applications_response'
import { get_record_detail_view_response } from './events/get_record_detail_view_response'
import { download_bulk_read_result_response } from './events/download_bulk_read_result_response'
import { publish_api_get_records_quick_view_response } from './events/publish_api_get_records_quick_view_response'
import { get_the_status_of_the_bulk_read_job_response } from './events/get_the_status_of_the_bulk_read_job_response'
import { get_applications_by_workspace_response } from './events/get_applications_by_workspace_response'
import { get_forms_response } from './events/get_forms_response'

type ZohoConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class ZohoIntegration extends Integration {
  config: ZohoConfig;

  constructor({ config }: { config: ZohoConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ZOHO',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'zoho.get_sections_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
account_owner_name: z.string(),
app_link_name: z.string()}),
                handler: get_sections_response,
            },
        

             'zoho.publish_api_get_record_detail_view_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'record_ID': z.string(),
'privatelink': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string(),
record_ID: z.string()}),
                handler: publish_api_get_record_detail_view_response,
            },
        

             'zoho.get_fields_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'form_link_name': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
form_link_name: z.string()}),
                handler: get_fields_response,
            },
        

             'zoho.get_reports_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
account_owner_name: z.string(),
app_link_name: z.string()}),
                handler: get_reports_response,
            },
        

             'zoho.get_records_quick_view_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'from': z.string(),
'limit': z.string(),
'criteria': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string()}),
                handler: get_records_quick_view_response,
            },
        

             'zoho.get_pages_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
account_owner_name: z.string(),
app_link_name: z.string()}),
                handler: get_pages_response,
            },
        

             'zoho.download_file_from_subform_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'record_ID': z.string(),
'subform_link_name': z.string(),
'field_link_name': z.string(),
'subform_record_ID': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string(),
record_ID: z.string(),
subform_link_name: z.string(),
field_link_name: z.string(),
subform_record_ID: z.string()}),
                handler: download_file_from_subform_response,
            },
        

             'zoho.download_file_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'record_ID': z.string(),
'field_link_name': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string(),
record_ID: z.string(),
field_link_name: z.string()}),
                handler: download_file_response,
            },
        

             'zoho.get_applications_response/sync': {
                schema: z.object({}),
                handler: get_applications_response,
            },
        

             'zoho.get_record_detail_view_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'record_ID': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string(),
record_ID: z.string()}),
                handler: get_record_detail_view_response,
            },
        

             'zoho.download_bulk_read_result_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'job_ID': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string(),
job_ID: z.string()}),
                handler: download_bulk_read_result_response,
            },
        

             'zoho.publish_api_get_records_quick_view_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'privatelink': z.string(),
'from': z.string(),
'limit': z.string(),
'criteria': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string()}),
                handler: publish_api_get_records_quick_view_response,
            },
        

             'zoho.get_the_status_of_the_bulk_read_job_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
'report_link_name': z.string(),
'job_ID': z.string(),
account_owner_name: z.string(),
app_link_name: z.string(),
report_link_name: z.string(),
job_ID: z.string()}),
                handler: get_the_status_of_the_bulk_read_job_response,
            },
        

             'zoho.get_applications_by_workspace_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
account_owner_name: z.string()}),
                handler: get_applications_by_workspace_response,
            },
        

             'zoho.get_forms_response/sync': {
                schema: z.object({
                  'account_owner_name': z.string(),
'app_link_name': z.string(),
account_owner_name: z.string(),
app_link_name: z.string()}),
                handler: get_forms_response,
            },
        }
    return this.events;
  }


  async getProxy({ referenceId }: { referenceId: string }) {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId })

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`)
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id)

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: "",
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
        SERVER: `https://accounts.zoho.${this.config.extension}`,
        AUTHORIZATION_ENDPOINT: '/oauth/v2/auth',
        TOKEN_ENDPOINT: '/oauth/v2/token',
        SCOPES: [],
      },
    });
  }
}
    
    