
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { _v1_employees } from './events/_v1_employees'
import { _v1_companies } from './events/_v1_companies'
import { _v1_company_onboarding_status } from './events/_v1_company_onboarding_status'
import { _v1_companies_company_id_employees } from './events/_v1_companies_company_id_employees'
import { _v1_jobs_job_id } from './events/_v1_jobs_job_id'
import { _v1_employees_employee_id_jobs } from './events/_v1_employees_employee_id_jobs'
import { _v1_companies_company_id_locations } from './events/_v1_companies_company_id_locations'
import { _v1_locations_location_id } from './events/_v1_locations_location_id'
import { _v1_contractors_contractor_id } from './events/_v1_contractors_contractor_id'
import { _v1_companies_company_id_contractors } from './events/_v1_companies_company_id_contractors'
import { _v1_companies_company_id_contractor_payments } from './events/_v1_companies_company_id_contractor_payments'
import { _v1_companies_company_id_contractor_payment_contractor_payment } from './events/_v1_companies_company_id_contractor_payment_contractor_payment'
import { _v1_compensations_compensation_id } from './events/_v1_compensations_compensation_id'
import { _v1_jobs_job_id_compensations } from './events/_v1_jobs_job_id_compensations'
import { _v1_employees_employee_id_garnishments } from './events/_v1_employees_employee_id_garnishments'
import { _v1_garnishments_garnishment_id } from './events/_v1_garnishments_garnishment_id'
import { _v1_employees_employee_id_terminations } from './events/_v1_employees_employee_id_terminations'
import { _v1_companies_company_id_time_off_requests } from './events/_v1_companies_company_id_time_off_requests'
import { _v1_me } from './events/_v1_me'
import { _v1_employees_employee_id_federal_taxes } from './events/_v1_employees_employee_id_federal_taxes'
import { _v1_employees_employee_id_state_taxes } from './events/_v1_employees_employee_id_state_taxes'
import { _v1_employees_employee_id_home_address } from './events/_v1_employees_employee_id_home_address'
import { _v1_company_payment_configs } from './events/_v1_company_payment_configs'
import { _v1_companies_company_id_pay_schedules } from './events/_v1_companies_company_id_pay_schedules'
import { _v1_company_industry } from './events/_v1_company_industry'
import { _v1_companies_company_id_pay_schedules_pay_schedule_id } from './events/_v1_companies_company_id_pay_schedules_pay_schedule_id'
import { _v1_companies_company_id_bank_accounts } from './events/_v1_companies_company_id_bank_accounts'
import { _v1_benefits } from './events/_v1_benefits'
import { _v1_benefits_benefit_id } from './events/_v1_benefits_benefit_id'
import { _v1_companies_company_id_company_benefits } from './events/_v1_companies_company_id_company_benefits'
import { _v1_company_benefits_company_benefit_id } from './events/_v1_company_benefits_company_benefit_id'
import { _v1_companies_company_id_earning_types } from './events/_v1_companies_company_id_earning_types'
import { _v1_employees_employee_id_employee_benefits } from './events/_v1_employees_employee_id_employee_benefits'
import { _v1_employee_benefits_employee_benefit_id } from './events/_v1_employee_benefits_employee_benefit_id'
import { _v1_companies_company_id_payrolls } from './events/_v1_companies_company_id_payrolls'
import { _v1_companies_company_id_payrolls_payroll_id } from './events/_v1_companies_company_id_payrolls_payroll_id'
import { _v1_companies_company_id_time_off_requests_time_off_request_id } from './events/_v1_companies_company_id_time_off_requests_time_off_request_id'
import { _v1_companies_company_id_admins } from './events/_v1_companies_company_id_admins'
import { _v1_companies_company_id_or_uuid_federal_tax_details } from './events/_v1_companies_company_id_or_uuid_federal_tax_details'
import { _v1_employees_employee_id_bank_accounts } from './events/_v1_employees_employee_id_bank_accounts'
import { _v1_employees_employee_id_payment_method } from './events/_v1_employees_employee_id_payment_method'
import { _v1_companies_company_uuid_signatories } from './events/_v1_companies_company_uuid_signatories'
import { _v1_company_forms } from './events/_v1_company_forms'
import { _v1_company_form } from './events/_v1_company_form'
import { _v1_employee_forms } from './events/_v1_employee_forms'
import { _v1_employee_form } from './events/_v1_employee_form'
import { _v1_employees_employee_id_or_uuid_onboarding_status } from './events/_v1_employees_employee_id_or_uuid_onboarding_status'

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
             'gusto._v1_employees/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string(),
'include': z.string()}),
                handler: _v1_employees,
            },
        

             'gusto._v1_companies/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string()}),
                handler: _v1_companies,
            },
        

             'gusto._v1_company_onboarding_status/sync': {
                schema: z.object({
                  'company_uuid': z.string()}),
                handler: _v1_company_onboarding_status,
            },
        

             'gusto._v1_companies_company_id_employees/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'terminated': z.boolean(),
'include': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_employees,
            },
        

             'gusto._v1_jobs_job_id/sync': {
                schema: z.object({
                  'job_id_or_uuid': z.string()}),
                handler: _v1_jobs_job_id,
            },
        

             'gusto._v1_employees_employee_id_jobs/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_employees_employee_id_jobs,
            },
        

             'gusto._v1_companies_company_id_locations/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_locations,
            },
        

             'gusto._v1_locations_location_id/sync': {
                schema: z.object({
                  'location_id': z.string()}),
                handler: _v1_locations_location_id,
            },
        

             'gusto._v1_contractors_contractor_id/sync': {
                schema: z.object({
                  'contractor_id_or_uuid': z.string()}),
                handler: _v1_contractors_contractor_id,
            },
        

             'gusto._v1_companies_company_id_contractors/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_contractors,
            },
        

             'gusto._v1_companies_company_id_contractor_payments/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'start_date': z.string(),
'end_date': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_contractor_payments,
            },
        

             'gusto._v1_companies_company_id_contractor_payment_contractor_payment/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'contractor_payment_id_or_uuid': z.string()}),
                handler: _v1_companies_company_id_contractor_payment_contractor_payment,
            },
        

             'gusto._v1_compensations_compensation_id/sync': {
                schema: z.object({
                  'compensation_id_or_uuid': z.string()}),
                handler: _v1_compensations_compensation_id,
            },
        

             'gusto._v1_jobs_job_id_compensations/sync': {
                schema: z.object({
                  'job_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_jobs_job_id_compensations,
            },
        

             'gusto._v1_employees_employee_id_garnishments/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_employees_employee_id_garnishments,
            },
        

             'gusto._v1_garnishments_garnishment_id/sync': {
                schema: z.object({
                  'garnishment_id_or_uuid': z.string()}),
                handler: _v1_garnishments_garnishment_id,
            },
        

             'gusto._v1_employees_employee_id_terminations/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string()}),
                handler: _v1_employees_employee_id_terminations,
            },
        

             'gusto._v1_companies_company_id_time_off_requests/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'start_date': z.string(),
'end_date': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_time_off_requests,
            },
        

             'gusto._v1_me/sync': {
                schema: z.object({}),
                handler: _v1_me,
            },
        

             'gusto._v1_employees_employee_id_federal_taxes/sync': {
                schema: z.object({
                  'employee_uuid': z.string()}),
                handler: _v1_employees_employee_id_federal_taxes,
            },
        

             'gusto._v1_employees_employee_id_state_taxes/sync': {
                schema: z.object({
                  'employee_uuid': z.string()}),
                handler: _v1_employees_employee_id_state_taxes,
            },
        

             'gusto._v1_employees_employee_id_home_address/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string()}),
                handler: _v1_employees_employee_id_home_address,
            },
        

             'gusto._v1_company_payment_configs/sync': {
                schema: z.object({
                  'company_uuid': z.string()}),
                handler: _v1_company_payment_configs,
            },
        

             'gusto._v1_companies_company_id_pay_schedules/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_pay_schedules,
            },
        

             'gusto._v1_company_industry/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string()}),
                handler: _v1_company_industry,
            },
        

             'gusto._v1_companies_company_id_pay_schedules_pay_schedule_id/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'pay_schedule_id_or_uuid': z.string()}),
                handler: _v1_companies_company_id_pay_schedules_pay_schedule_id,
            },
        

             'gusto._v1_companies_company_id_bank_accounts/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_bank_accounts,
            },
        

             'gusto._v1_benefits/sync': {
                schema: z.object({}),
                handler: _v1_benefits,
            },
        

             'gusto._v1_benefits_benefit_id/sync': {
                schema: z.object({
                  'benefit_id': z.string()}),
                handler: _v1_benefits_benefit_id,
            },
        

             'gusto._v1_companies_company_id_company_benefits/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string()}),
                handler: _v1_companies_company_id_company_benefits,
            },
        

             'gusto._v1_company_benefits_company_benefit_id/sync': {
                schema: z.object({
                  'company_benefit_id': z.string()}),
                handler: _v1_company_benefits_company_benefit_id,
            },
        

             'gusto._v1_companies_company_id_earning_types/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string()}),
                handler: _v1_companies_company_id_earning_types,
            },
        

             'gusto._v1_employees_employee_id_employee_benefits/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_employees_employee_id_employee_benefits,
            },
        

             'gusto._v1_employee_benefits_employee_benefit_id/sync': {
                schema: z.object({
                  'employee_benefit_id': z.string()}),
                handler: _v1_employee_benefits_employee_benefit_id,
            },
        

             'gusto._v1_companies_company_id_payrolls/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'processed': z.boolean(),
'include_off_cycle': z.boolean(),
'include': z.string(),
'start_date': z.string(),
'end_date': z.string()}),
                handler: _v1_companies_company_id_payrolls,
            },
        

             'gusto._v1_companies_company_id_payrolls_payroll_id/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'payroll_id_or_uuid': z.string(),
'include': z.string(),
'show_calculation': z.string()}),
                handler: _v1_companies_company_id_payrolls_payroll_id,
            },
        

             'gusto._v1_companies_company_id_time_off_requests_time_off_request_id/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'time_off_request_id': z.string()}),
                handler: _v1_companies_company_id_time_off_requests_time_off_request_id,
            },
        

             'gusto._v1_companies_company_id_admins/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_companies_company_id_admins,
            },
        

             'gusto._v1_companies_company_id_or_uuid_federal_tax_details/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string()}),
                handler: _v1_companies_company_id_or_uuid_federal_tax_details,
            },
        

             'gusto._v1_employees_employee_id_bank_accounts/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string(),
'pageParam': z.string(),
'perParam': z.string()}),
                handler: _v1_employees_employee_id_bank_accounts,
            },
        

             'gusto._v1_employees_employee_id_payment_method/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string()}),
                handler: _v1_employees_employee_id_payment_method,
            },
        

             'gusto._v1_companies_company_uuid_signatories/sync': {
                schema: z.object({
                  'company_uuid': z.string()}),
                handler: _v1_companies_company_uuid_signatories,
            },
        

             'gusto._v1_company_forms/sync': {
                schema: z.object({
                  'company_id_or_uuid': z.string()}),
                handler: _v1_company_forms,
            },
        

             'gusto._v1_company_form/sync': {
                schema: z.object({
                  'id_or_uuid': z.string()}),
                handler: _v1_company_form,
            },
        

             'gusto._v1_employee_forms/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string()}),
                handler: _v1_employee_forms,
            },
        

             'gusto._v1_employee_form/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string(),
'id_or_uuid': z.string()}),
                handler: _v1_employee_form,
            },
        

             'gusto._v1_employees_employee_id_or_uuid_onboarding_status/sync': {
                schema: z.object({
                  'employee_id_or_uuid': z.string()}),
                handler: _v1_employees_employee_id_or_uuid_onboarding_status,
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

    