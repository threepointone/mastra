
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { listClients } from './events/listClients'
import { retrieveClient } from './events/retrieveClient'
import { retrieveCompany } from './events/retrieveCompany'
import { listContacts } from './events/listContacts'
import { retrieveContact } from './events/retrieveContact'
import { listEstimateItemCategories } from './events/listEstimateItemCategories'
import { retrieveEstimateItemCategory } from './events/retrieveEstimateItemCategory'
import { listEstimates } from './events/listEstimates'
import { retrieveEstimate } from './events/retrieveEstimate'
import { listMessagesForEstimate } from './events/listMessagesForEstimate'
import { listExpenseCategories } from './events/listExpenseCategories'
import { retrieveExpenseCategory } from './events/retrieveExpenseCategory'
import { listExpenses } from './events/listExpenses'
import { retrieveExpense } from './events/retrieveExpense'
import { listInvoiceItemCategories } from './events/listInvoiceItemCategories'
import { retrieveInvoiceItemCategory } from './events/retrieveInvoiceItemCategory'
import { listInvoices } from './events/listInvoices'
import { retrieveInvoice } from './events/retrieveInvoice'
import { listMessagesForInvoice } from './events/listMessagesForInvoice'
import { retrieveInvoiceMessageSubjectAndBodyForSpecificInvoice } from './events/retrieveInvoiceMessageSubjectAndBodyForSpecificInvoice'
import { listPaymentsForInvoice } from './events/listPaymentsForInvoice'
import { listProjects } from './events/listProjects'
import { retrieveProject } from './events/retrieveProject'
import { listTaskAssignmentsForSpecificProject } from './events/listTaskAssignmentsForSpecificProject'
import { retrieveTaskAssignment } from './events/retrieveTaskAssignment'
import { listUserAssignmentsForSpecificProject } from './events/listUserAssignmentsForSpecificProject'
import { retrieveUserAssignment } from './events/retrieveUserAssignment'
import { expenseCategoriesReport } from './events/expenseCategoriesReport'
import { clientsExpensesReport } from './events/clientsExpensesReport'
import { projectsExpensesReport } from './events/projectsExpensesReport'
import { teamExpensesReport } from './events/teamExpensesReport'
import { projectBudReport } from './events/projectBudReport'
import { clientsTimeReport } from './events/clientsTimeReport'
import { projectsTimeReport } from './events/projectsTimeReport'
import { tasksReport } from './events/tasksReport'
import { teamTimeReport } from './events/teamTimeReport'
import { uninvoicedReport } from './events/uninvoicedReport'
import { listRoles } from './events/listRoles'
import { retrieveRole } from './events/retrieveRole'
import { listTaskAssignments } from './events/listTaskAssignments'
import { listTasks } from './events/listTasks'
import { retrieveTask } from './events/retrieveTask'
import { listTimeEntries } from './events/listTimeEntries'
import { retrieveTimeEntry } from './events/retrieveTimeEntry'
import { listUserAssignments } from './events/listUserAssignments'
import { listUsers } from './events/listUsers'
import { retrieveTheCurrentlyAuthenticatedUser } from './events/retrieveTheCurrentlyAuthenticatedUser'
import { listActiveProjectAssignmentsForTheCurrentlyAuthenticatedUser } from './events/listActiveProjectAssignmentsForTheCurrentlyAuthenticatedUser'
import { retrieveUser } from './events/retrieveUser'
import { listBillableRatesForSpecificUser } from './events/listBillableRatesForSpecificUser'
import { retrieveBillableRate } from './events/retrieveBillableRate'
import { listCostRatesForSpecificUser } from './events/listCostRatesForSpecificUser'
import { retrieveCostRate } from './events/retrieveCostRate'
import { listActiveProjectAssignments } from './events/listActiveProjectAssignments'
import { listAssignedTeammatesForSpecificUser } from './events/listAssignedTeammatesForSpecificUser'

type HarvestConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class HarvestIntegration extends Integration {
  config: HarvestConfig;

  constructor({ config }: { config: HarvestConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'HARVEST',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'harvest.listClients/sync': {
                schema: z.object({
                  'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listClients,
            },
        

             'harvest.retrieveClient/sync': {
                schema: z.object({
                  'clientId': z.string()}),
                handler: retrieveClient,
            },
        

             'harvest.retrieveCompany/sync': {
                schema: z.object({}),
                handler: retrieveCompany,
            },
        

             'harvest.listContacts/sync': {
                schema: z.object({
                  'client_id': z.number(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listContacts,
            },
        

             'harvest.retrieveContact/sync': {
                schema: z.object({
                  'contactId': z.string()}),
                handler: retrieveContact,
            },
        

             'harvest.listEstimateItemCategories/sync': {
                schema: z.object({
                  'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listEstimateItemCategories,
            },
        

             'harvest.retrieveEstimateItemCategory/sync': {
                schema: z.object({
                  'estimateItemCategoryId': z.string()}),
                handler: retrieveEstimateItemCategory,
            },
        

             'harvest.listEstimates/sync': {
                schema: z.object({
                  'client_id': z.number(),
'updated_since': z.string(),
'from': z.string(),
'to': z.string(),
'state': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: listEstimates,
            },
        

             'harvest.retrieveEstimate/sync': {
                schema: z.object({
                  'estimateId': z.string()}),
                handler: retrieveEstimate,
            },
        

             'harvest.listMessagesForEstimate/sync': {
                schema: z.object({
                  'estimateId': z.string(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listMessagesForEstimate,
            },
        

             'harvest.listExpenseCategories/sync': {
                schema: z.object({
                  'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listExpenseCategories,
            },
        

             'harvest.retrieveExpenseCategory/sync': {
                schema: z.object({
                  'expenseCategoryId': z.string()}),
                handler: retrieveExpenseCategory,
            },
        

             'harvest.listExpenses/sync': {
                schema: z.object({
                  'user_id': z.number(),
'client_id': z.number(),
'project_id': z.number(),
'is_billed': z.boolean(),
'updated_since': z.string(),
'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: listExpenses,
            },
        

             'harvest.retrieveExpense/sync': {
                schema: z.object({
                  'expenseId': z.string()}),
                handler: retrieveExpense,
            },
        

             'harvest.listInvoiceItemCategories/sync': {
                schema: z.object({
                  'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listInvoiceItemCategories,
            },
        

             'harvest.retrieveInvoiceItemCategory/sync': {
                schema: z.object({
                  'invoiceItemCategoryId': z.string()}),
                handler: retrieveInvoiceItemCategory,
            },
        

             'harvest.listInvoices/sync': {
                schema: z.object({
                  'client_id': z.number(),
'project_id': z.number(),
'updated_since': z.string(),
'from': z.string(),
'to': z.string(),
'state': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: listInvoices,
            },
        

             'harvest.retrieveInvoice/sync': {
                schema: z.object({
                  'invoiceId': z.string()}),
                handler: retrieveInvoice,
            },
        

             'harvest.listMessagesForInvoice/sync': {
                schema: z.object({
                  'invoiceId': z.string(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listMessagesForInvoice,
            },
        

             'harvest.retrieveInvoiceMessageSubjectAndBodyForSpecificInvoice/sync': {
                schema: z.object({
                  'invoiceId': z.string(),
'thank_you': z.boolean(),
'reminder': z.boolean()}),
                handler: retrieveInvoiceMessageSubjectAndBodyForSpecificInvoice,
            },
        

             'harvest.listPaymentsForInvoice/sync': {
                schema: z.object({
                  'invoiceId': z.string(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listPaymentsForInvoice,
            },
        

             'harvest.listProjects/sync': {
                schema: z.object({
                  'is_active': z.boolean(),
'client_id': z.number(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listProjects,
            },
        

             'harvest.retrieveProject/sync': {
                schema: z.object({
                  'projectId': z.string()}),
                handler: retrieveProject,
            },
        

             'harvest.listTaskAssignmentsForSpecificProject/sync': {
                schema: z.object({
                  'projectId': z.string(),
'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: listTaskAssignmentsForSpecificProject,
            },
        

             'harvest.retrieveTaskAssignment/sync': {
                schema: z.object({
                  'projectId': z.string(),
'taskAssignmentId': z.string()}),
                handler: retrieveTaskAssignment,
            },
        

             'harvest.listUserAssignmentsForSpecificProject/sync': {
                schema: z.object({
                  'projectId': z.string(),
'user_id': z.number(),
'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: listUserAssignmentsForSpecificProject,
            },
        

             'harvest.retrieveUserAssignment/sync': {
                schema: z.object({
                  'projectId': z.string(),
'userAssignmentId': z.string()}),
                handler: retrieveUserAssignment,
            },
        

             'harvest.expenseCategoriesReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: expenseCategoriesReport,
            },
        

             'harvest.clientsExpensesReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: clientsExpensesReport,
            },
        

             'harvest.projectsExpensesReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: projectsExpensesReport,
            },
        

             'harvest.teamExpensesReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: teamExpensesReport,
            },
        

             'harvest.projectBudReport/sync': {
                schema: z.object({
                  'page': z.number(),
'per_page': z.number(),
'is_active': z.boolean()}),
                handler: projectBudReport,
            },
        

             'harvest.clientsTimeReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'include_fixed_fee': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: clientsTimeReport,
            },
        

             'harvest.projectsTimeReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'include_fixed_fee': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: projectsTimeReport,
            },
        

             'harvest.tasksReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'include_fixed_fee': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: tasksReport,
            },
        

             'harvest.teamTimeReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'include_fixed_fee': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: teamTimeReport,
            },
        

             'harvest.uninvoicedReport/sync': {
                schema: z.object({
                  'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: uninvoicedReport,
            },
        

             'harvest.listRoles/sync': {
                schema: z.object({
                  'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listRoles,
            },
        

             'harvest.retrieveRole/sync': {
                schema: z.object({
                  'roleId': z.string()}),
                handler: retrieveRole,
            },
        

             'harvest.listTaskAssignments/sync': {
                schema: z.object({
                  'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listTaskAssignments,
            },
        

             'harvest.listTasks/sync': {
                schema: z.object({
                  'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listTasks,
            },
        

             'harvest.retrieveTask/sync': {
                schema: z.object({
                  'taskId': z.string()}),
                handler: retrieveTask,
            },
        

             'harvest.listTimeEntries/sync': {
                schema: z.object({
                  'user_id': z.number(),
'client_id': z.number(),
'project_id': z.number(),
'task_id': z.number(),
'external_reference_id': z.string(),
'is_billed': z.boolean(),
'is_running': z.boolean(),
'updated_since': z.string(),
'from': z.string(),
'to': z.string(),
'page': z.number(),
'per_page': z.number()}),
                handler: listTimeEntries,
            },
        

             'harvest.retrieveTimeEntry/sync': {
                schema: z.object({
                  'timeEntryId': z.string()}),
                handler: retrieveTimeEntry,
            },
        

             'harvest.listUserAssignments/sync': {
                schema: z.object({
                  'user_id': z.number(),
'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listUserAssignments,
            },
        

             'harvest.listUsers/sync': {
                schema: z.object({
                  'is_active': z.boolean(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listUsers,
            },
        

             'harvest.retrieveTheCurrentlyAuthenticatedUser/sync': {
                schema: z.object({}),
                handler: retrieveTheCurrentlyAuthenticatedUser,
            },
        

             'harvest.listActiveProjectAssignmentsForTheCurrentlyAuthenticatedUser/sync': {
                schema: z.object({
                  'page': z.number(),
'per_page': z.number()}),
                handler: listActiveProjectAssignmentsForTheCurrentlyAuthenticatedUser,
            },
        

             'harvest.retrieveUser/sync': {
                schema: z.object({
                  'userId': z.string()}),
                handler: retrieveUser,
            },
        

             'harvest.listBillableRatesForSpecificUser/sync': {
                schema: z.object({
                  'userId': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listBillableRatesForSpecificUser,
            },
        

             'harvest.retrieveBillableRate/sync': {
                schema: z.object({
                  'userId': z.string(),
'billableRateId': z.string()}),
                handler: retrieveBillableRate,
            },
        

             'harvest.listCostRatesForSpecificUser/sync': {
                schema: z.object({
                  'userId': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listCostRatesForSpecificUser,
            },
        

             'harvest.retrieveCostRate/sync': {
                schema: z.object({
                  'userId': z.string(),
'costRateId': z.string()}),
                handler: retrieveCostRate,
            },
        

             'harvest.listActiveProjectAssignments/sync': {
                schema: z.object({
                  'userId': z.string(),
'updated_since': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listActiveProjectAssignments,
            },
        

             'harvest.listAssignedTeammatesForSpecificUser/sync': {
                schema: z.object({
                  'userId': z.string(),
'page': z.number(),
'cursor': z.string(),
'per_page': z.number()}),
                handler: listAssignedTeammatesForSpecificUser,
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
        SERVER: `https://id.getharvest.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/api/v2/oauth2/token',
        SCOPES: [],
      },
    });
  }
}

    