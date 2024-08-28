
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { -v1-employees } from './events/-v1-employees'
import { -v1-companies } from './events/-v1-companies'
import { -v1-company-onboarding-status } from './events/-v1-company-onboarding-status'
import { -v1-companies-company_id-employees } from './events/-v1-companies-company_id-employees'
import { -v1-jobs-job_id } from './events/-v1-jobs-job_id'
import { -v1-employees-employee_id-jobs } from './events/-v1-employees-employee_id-jobs'
import { -v1-companies-company_id-locations } from './events/-v1-companies-company_id-locations'
import { -v1-locations-location_id } from './events/-v1-locations-location_id'
import { -v1-contractors-contractor_id } from './events/-v1-contractors-contractor_id'
import { -v1-companies-company_id-contractors } from './events/-v1-companies-company_id-contractors'
import { -v1-companies-company_id-contractor_payments } from './events/-v1-companies-company_id-contractor_payments'
import { -v1-companies-company_id-contractor_payment-contractor-payment } from './events/-v1-companies-company_id-contractor_payment-contractor-payment'
import { -v1-compensations-compensation_id } from './events/-v1-compensations-compensation_id'
import { -v1-jobs-job_id-compensations } from './events/-v1-jobs-job_id-compensations'
import { -v1-employees-employee_id-garnishments } from './events/-v1-employees-employee_id-garnishments'
import { -v1-garnishments-garnishment_id } from './events/-v1-garnishments-garnishment_id'
import { -v1-employees-employee_id-terminations } from './events/-v1-employees-employee_id-terminations'
import { -v1-companies-company_id-time_off_requests } from './events/-v1-companies-company_id-time_off_requests'
import { -v1-me } from './events/-v1-me'
import { -v1-employees-employee_id-federal_taxes } from './events/-v1-employees-employee_id-federal_taxes'
import { -v1-employees-employee_id-state_taxes } from './events/-v1-employees-employee_id-state_taxes'
import { -v1-employees-employee_id-home_address } from './events/-v1-employees-employee_id-home_address'
import { -v1-company-payment-configs } from './events/-v1-company-payment-configs'
import { -v1-companies-company_id-pay_schedules } from './events/-v1-companies-company_id-pay_schedules'
import { -v1-company-industry } from './events/-v1-company-industry'
import { -v1-companies-company_id-pay_schedules-pay_schedule_id } from './events/-v1-companies-company_id-pay_schedules-pay_schedule_id'
import { -v1-companies-company_id-bank-accounts } from './events/-v1-companies-company_id-bank-accounts'
import { -v1-benefits } from './events/-v1-benefits'
import { -v1-benefits-benefit_id } from './events/-v1-benefits-benefit_id'
import { -v1-companies-company_id-company_benefits } from './events/-v1-companies-company_id-company_benefits'
import { -v1-company_benefits-company_benefit_id } from './events/-v1-company_benefits-company_benefit_id'
import { -v1-companies-company_id-earning_types } from './events/-v1-companies-company_id-earning_types'
import { -v1-employees-employee_id-employee_benefits } from './events/-v1-employees-employee_id-employee_benefits'
import { -v1-employee_benefits-employee_benefit_id } from './events/-v1-employee_benefits-employee_benefit_id'
import { -v1-companies-company_id-payrolls } from './events/-v1-companies-company_id-payrolls'
import { -v1-companies-company_id-payrolls-payroll_id } from './events/-v1-companies-company_id-payrolls-payroll_id'
import { -v1-companies-company_id-time_off_requests-time_off_request_id } from './events/-v1-companies-company_id-time_off_requests-time_off_request_id'
import { -v1-companies-company_id-admins } from './events/-v1-companies-company_id-admins'
import { -v1-companies-company_id_or_uuid-federal_tax_details } from './events/-v1-companies-company_id_or_uuid-federal_tax_details'
import { -v1-employees-employee_id-bank_accounts } from './events/-v1-employees-employee_id-bank_accounts'
import { -v1-employees-employee_id-payment_method } from './events/-v1-employees-employee_id-payment_method'
import { -v1-companies-company_uuid-signatories } from './events/-v1-companies-company_uuid-signatories'
import { -v1-company-forms } from './events/-v1-company-forms'
import { -v1-company-form } from './events/-v1-company-form'
import { -v1-employee-forms } from './events/-v1-employee-forms'
import { -v1-employee-form } from './events/-v1-employee-form'
import { -v1-employees-employee_id_or_uuid-onboarding_status } from './events/-v1-employees-employee_id_or_uuid-onboarding_status'

type GustoConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class GustoIntegration extends Integration {
  config: GustoConfig;

  constructor({ config }: { config: GustoConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'GUSTO',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'gusto.-v1-employees/sync': {
                schema: z.object({
                  'include': z.string(),
employee_id_or_uuid: z.string()}),
                handler: -v1-employees,
            },
        

             'gusto.-v1-companies/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string()}),
                handler: -v1-companies,
            },
        

             'gusto.-v1-company-onboarding-status/sync': {
                schema: z.object({
                  company_uuid: z.string()}),
                handler: -v1-company-onboarding-status,
            },
        

             'gusto.-v1-companies-company_id-employees/sync': {
                schema: z.object({
                  'terminated': z.boolean(),
'include': z.string(),
'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-employees,
            },
        

             'gusto.-v1-jobs-job_id/sync': {
                schema: z.object({
                  job_id_or_uuid: z.string()}),
                handler: -v1-jobs-job_id,
            },
        

             'gusto.-v1-employees-employee_id-jobs/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-jobs,
            },
        

             'gusto.-v1-companies-company_id-locations/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-locations,
            },
        

             'gusto.-v1-locations-location_id/sync': {
                schema: z.object({
                  location_id: z.string()}),
                handler: -v1-locations-location_id,
            },
        

             'gusto.-v1-contractors-contractor_id/sync': {
                schema: z.object({
                  contractor_id_or_uuid: z.string()}),
                handler: -v1-contractors-contractor_id,
            },
        

             'gusto.-v1-companies-company_id-contractors/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-contractors,
            },
        

             'gusto.-v1-companies-company_id-contractor_payments/sync': {
                schema: z.object({
                  'start_date': z.string(),
'end_date': z.string(),
'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-contractor_payments,
            },
        

             'gusto.-v1-companies-company_id-contractor_payment-contractor-payment/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string(),
contractor_payment_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-contractor_payment-contractor-payment,
            },
        

             'gusto.-v1-compensations-compensation_id/sync': {
                schema: z.object({
                  compensation_id_or_uuid: z.string()}),
                handler: -v1-compensations-compensation_id,
            },
        

             'gusto.-v1-jobs-job_id-compensations/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
job_id_or_uuid: z.string()}),
                handler: -v1-jobs-job_id-compensations,
            },
        

             'gusto.-v1-employees-employee_id-garnishments/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-garnishments,
            },
        

             'gusto.-v1-garnishments-garnishment_id/sync': {
                schema: z.object({
                  garnishment_id_or_uuid: z.string()}),
                handler: -v1-garnishments-garnishment_id,
            },
        

             'gusto.-v1-employees-employee_id-terminations/sync': {
                schema: z.object({
                  employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-terminations,
            },
        

             'gusto.-v1-companies-company_id-time_off_requests/sync': {
                schema: z.object({
                  'start_date': z.string(),
'end_date': z.string(),
'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-time_off_requests,
            },
        

             'gusto.-v1-me/sync': {
                schema: z.object({}),
                handler: -v1-me,
            },
        

             'gusto.-v1-employees-employee_id-federal_taxes/sync': {
                schema: z.object({
                  employee_uuid: z.string()}),
                handler: -v1-employees-employee_id-federal_taxes,
            },
        

             'gusto.-v1-employees-employee_id-state_taxes/sync': {
                schema: z.object({
                  employee_uuid: z.string()}),
                handler: -v1-employees-employee_id-state_taxes,
            },
        

             'gusto.-v1-employees-employee_id-home_address/sync': {
                schema: z.object({
                  employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-home_address,
            },
        

             'gusto.-v1-company-payment-configs/sync': {
                schema: z.object({
                  company_uuid: z.string()}),
                handler: -v1-company-payment-configs,
            },
        

             'gusto.-v1-companies-company_id-pay_schedules/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-pay_schedules,
            },
        

             'gusto.-v1-company-industry/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string()}),
                handler: -v1-company-industry,
            },
        

             'gusto.-v1-companies-company_id-pay_schedules-pay_schedule_id/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string(),
pay_schedule_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-pay_schedules-pay_schedule_id,
            },
        

             'gusto.-v1-companies-company_id-bank-accounts/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-bank-accounts,
            },
        

             'gusto.-v1-benefits/sync': {
                schema: z.object({}),
                handler: -v1-benefits,
            },
        

             'gusto.-v1-benefits-benefit_id/sync': {
                schema: z.object({
                  benefit_id: z.string()}),
                handler: -v1-benefits-benefit_id,
            },
        

             'gusto.-v1-companies-company_id-company_benefits/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-company_benefits,
            },
        

             'gusto.-v1-company_benefits-company_benefit_id/sync': {
                schema: z.object({
                  company_benefit_id: z.string()}),
                handler: -v1-company_benefits-company_benefit_id,
            },
        

             'gusto.-v1-companies-company_id-earning_types/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-earning_types,
            },
        

             'gusto.-v1-employees-employee_id-employee_benefits/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-employee_benefits,
            },
        

             'gusto.-v1-employee_benefits-employee_benefit_id/sync': {
                schema: z.object({
                  employee_benefit_id: z.string()}),
                handler: -v1-employee_benefits-employee_benefit_id,
            },
        

             'gusto.-v1-companies-company_id-payrolls/sync': {
                schema: z.object({
                  'processed': z.boolean(),
'include_off_cycle': z.boolean(),
'include': z.string(),
'start_date': z.string(),
'end_date': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-payrolls,
            },
        

             'gusto.-v1-companies-company_id-payrolls-payroll_id/sync': {
                schema: z.object({
                  'include': z.string(),
'show_calculation': z.string(),
company_id_or_uuid: z.string(),
payroll_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-payrolls-payroll_id,
            },
        

             'gusto.-v1-companies-company_id-time_off_requests-time_off_request_id/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string(),
time_off_request_id: z.string()}),
                handler: -v1-companies-company_id-time_off_requests-time_off_request_id,
            },
        

             'gusto.-v1-companies-company_id-admins/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id-admins,
            },
        

             'gusto.-v1-companies-company_id_or_uuid-federal_tax_details/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string()}),
                handler: -v1-companies-company_id_or_uuid-federal_tax_details,
            },
        

             'gusto.-v1-employees-employee_id-bank_accounts/sync': {
                schema: z.object({
                  'pageParam': z.string(),
'perParam': z.string(),
employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-bank_accounts,
            },
        

             'gusto.-v1-employees-employee_id-payment_method/sync': {
                schema: z.object({
                  employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id-payment_method,
            },
        

             'gusto.-v1-companies-company_uuid-signatories/sync': {
                schema: z.object({
                  company_uuid: z.string()}),
                handler: -v1-companies-company_uuid-signatories,
            },
        

             'gusto.-v1-company-forms/sync': {
                schema: z.object({
                  company_id_or_uuid: z.string()}),
                handler: -v1-company-forms,
            },
        

             'gusto.-v1-company-form/sync': {
                schema: z.object({
                  id_or_uuid: z.string()}),
                handler: -v1-company-form,
            },
        

             'gusto.-v1-employee-forms/sync': {
                schema: z.object({
                  employee_id_or_uuid: z.string()}),
                handler: -v1-employee-forms,
            },
        

             'gusto.-v1-employee-form/sync': {
                schema: z.object({
                  employee_id_or_uuid: z.string(),
id_or_uuid: z.string()}),
                handler: -v1-employee-form,
            },
        

             'gusto.-v1-employees-employee_id_or_uuid-onboarding_status/sync': {
                schema: z.object({
                  employee_id_or_uuid: z.string()}),
                handler: -v1-employees-employee_id_or_uuid-onboarding_status,
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
        SERVER: `https://api.gusto.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}

    