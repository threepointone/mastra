
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { ServiceInformation_GetServiceInformation } from './events/ServiceInformation_GetServiceInformation'
import { ServiceInformation_GetResourceInformation } from './events/ServiceInformation_GetResourceInformation'
import { Accounts_GetProvisioning } from './events/Accounts_GetProvisioning'
import { Accounts_GetAccount } from './events/Accounts_GetAccount'
import { BillingCharges_GetAccountBillingCharges } from './events/BillingCharges_GetAccountBillingCharges'
import { BillingInvoices_GetBillingInvoices } from './events/BillingInvoices_GetBillingInvoices'
import { BillingInvoices_GetBillingInvoice } from './events/BillingInvoices_GetBillingInvoice'
import { BillingInvoices_GetBillingInvoicesPastDue } from './events/BillingInvoices_GetBillingInvoicesPastDue'
import { BillingPayments_GetPaymentList } from './events/BillingPayments_GetPaymentList'
import { BillingPayments_GetPayment } from './events/BillingPayments_GetPayment'
import { BillingPlan_GetBillingPlan } from './events/BillingPlan_GetBillingPlan'
import { BillingPlan_GetCreditCardInfo } from './events/BillingPlan_GetCreditCardInfo'
import { BillingPlan_GetDowngradeRequestBillingInfo } from './events/BillingPlan_GetDowngradeRequestBillingInfo'
import { Brands_GetBrands } from './events/Brands_GetBrands'
import { Brand_GetBrand } from './events/Brand_GetBrand'
import { BrandResources_GetBrandResourcesList } from './events/BrandResources_GetBrandResourcesList'
import { BulkSendV2Batch_GetBulkSendBatches } from './events/BulkSendV2Batch_GetBulkSendBatches'
import { BulkSendV2Batch_GetBulkSendBatchStatus } from './events/BulkSendV2Batch_GetBulkSendBatchStatus'
import { BulkSendV2Envelopes_GetBulkSendBatchEnvelopes } from './events/BulkSendV2Envelopes_GetBulkSendBatchEnvelopes'
import { BulkSendV2CRUD_GetBulkSendLists } from './events/BulkSendV2CRUD_GetBulkSendLists'
import { BulkSendV2CRUD_GetBulkSendList } from './events/BulkSendV2CRUD_GetBulkSendList'
import { ChunkedUploads_GetChunkedUpload } from './events/ChunkedUploads_GetChunkedUpload'
import { Connect_GetConnectConfigs } from './events/Connect_GetConnectConfigs'
import { ConnectFailures_GetConnectLogs } from './events/ConnectFailures_GetConnectLogs'
import { ConnectLog_GetConnectLogs } from './events/ConnectLog_GetConnectLogs'
import { ConnectLog_GetConnectLog } from './events/ConnectLog_GetConnectLog'
import { ConnectOAuthConfig_GetConnectOAuthConfig } from './events/ConnectOAuthConfig_GetConnectOAuthConfig'
import { Connect_GetConnectConfig } from './events/Connect_GetConnectConfig'
import { Connect_GetConnectAllUsers } from './events/Connect_GetConnectAllUsers'
import { Connect_GetConnectUsers } from './events/Connect_GetConnectUsers'
import { ConsumerDisclosure_GetConsumerDisclosure } from './events/ConsumerDisclosure_GetConsumerDisclosure'
import { ConsumerDisclosure_GetConsumerDisclosureLangCode } from './events/ConsumerDisclosure_GetConsumerDisclosureLangCode'
import { Contacts_GetContactById } from './events/Contacts_GetContactById'
import { AccountCustomFields_GetAccountCustomFields } from './events/AccountCustomFields_GetAccountCustomFields'
import { Envelopes_GetEnvelopes } from './events/Envelopes_GetEnvelopes'
import { EnvelopeTransferRules_GetEnvelopeTransferRules } from './events/EnvelopeTransferRules_GetEnvelopeTransferRules'
import { Envelopes_GetEnvelope } from './events/Envelopes_GetEnvelope'
import { Attachments_GetAttachments } from './events/Attachments_GetAttachments'
import { AuditEvents_GetAuditEvents } from './events/AuditEvents_GetAuditEvents'
import { CustomFields_GetCustomFields } from './events/CustomFields_GetCustomFields'
import { DocGenFormFields_GetEnvelopeDocGenFormFields } from './events/DocGenFormFields_GetEnvelopeDocGenFormFields'
import { Documents_GetDocuments } from './events/Documents_GetDocuments'
import { DocumentFields_GetDocumentFields } from './events/DocumentFields_GetDocumentFields'
import { ResponsiveHtml_GetEnvelopeDocumentHtmlDefinitions } from './events/ResponsiveHtml_GetEnvelopeDocumentHtmlDefinitions'
import { Pages_GetPageImages } from './events/Pages_GetPageImages'
import { Tabs_GetPageTabs } from './events/Tabs_GetPageTabs'
import { Tabs_GetDocumentTabs } from './events/Tabs_GetDocumentTabs'
import { Templates_GetDocumentTemplates } from './events/Templates_GetDocumentTemplates'
import { EmailSettings_GetEmailSettings } from './events/EmailSettings_GetEmailSettings'
import { FormData_GetFormData } from './events/FormData_GetFormData'
import { ResponsiveHtml_GetEnvelopeHtmlDefinitions } from './events/ResponsiveHtml_GetEnvelopeHtmlDefinitions'
import { Lock_GetEnvelopeLock } from './events/Lock_GetEnvelopeLock'
import { Notification_GetEnvelopesEnvelopeIdNotification } from './events/Notification_GetEnvelopesEnvelopeIdNotification'
import { Recipients_GetRecipients } from './events/Recipients_GetRecipients'
import { ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId } from './events/ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId'
import { ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode } from './events/ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode'
import { Recipients_GetRecipientDocumentVisibility } from './events/Recipients_GetRecipientDocumentVisibility'
import { Recipients_GetRecipientSignature } from './events/Recipients_GetRecipientSignature'
import { Recipients_GetRecipientTabs } from './events/Recipients_GetRecipientTabs'
import { Templates_GetEnvelopeTemplates } from './events/Templates_GetEnvelopeTemplates'
import { EnvelopeWorkflowDefinitionV2_GetEnvelopeWorkflowDefinition } from './events/EnvelopeWorkflowDefinitionV2_GetEnvelopeWorkflowDefinition'
import { EnvelopeWorkflowScheduledSending_GetEnvelopeScheduledSendingDefinition } from './events/EnvelopeWorkflowScheduledSending_GetEnvelopeScheduledSendingDefinition'
import { EnvelopeWorkflowStep_GetEnvelopeWorkflowStepDefinition } from './events/EnvelopeWorkflowStep_GetEnvelopeWorkflowStepDefinition'
import { EnvelopeWorkflowDelayedRouting_GetEnvelopeDelayedRoutingDefinition } from './events/EnvelopeWorkflowDelayedRouting_GetEnvelopeDelayedRoutingDefinition'
import { FavoriteTemplates_GetFavoriteTemplates } from './events/FavoriteTemplates_GetFavoriteTemplates'
import { Folders_GetFolders } from './events/Folders_GetFolders'
import { Folders_GetFolderItems } from './events/Folders_GetFolderItems'
import { Groups_GetGroups } from './events/Groups_GetGroups'
import { Brands_GetGroupBrands } from './events/Brands_GetGroupBrands'
import { Groups_GetGroupUsers } from './events/Groups_GetGroupUsers'
import { AccountIdentityVerification_GetAccountIdentityVerification } from './events/AccountIdentityVerification_GetAccountIdentityVerification'
import { PaymentGatewayAccounts_GetAllPaymentGatewayAccounts } from './events/PaymentGatewayAccounts_GetAllPaymentGatewayAccounts'
import { PermissionProfiles_GetPermissionProfiles } from './events/PermissionProfiles_GetPermissionProfiles'
import { PermissionProfiles_GetPermissionProfile } from './events/PermissionProfiles_GetPermissionProfile'
import { PowerForms_GetPowerFormsList } from './events/PowerForms_GetPowerFormsList'
import { PowerForms_GetPowerFormsSenders } from './events/PowerForms_GetPowerFormsSenders'
import { PowerForms_GetPowerForm } from './events/PowerForms_GetPowerForm'
import { PowerForms_GetPowerFormFormData } from './events/PowerForms_GetPowerFormFormData'
import { RecipientNames_GetRecipientNames } from './events/RecipientNames_GetRecipientNames'
import { AccountSignatureProviders_GetSealProviders } from './events/AccountSignatureProviders_GetSealProviders'
import { SearchFolders_GetSearchFolderContents } from './events/SearchFolders_GetSearchFolderContents'
import { Settings_GetSettings } from './events/Settings_GetSettings'
import { BCCEmailArchive_GetBCCEmailArchiveList } from './events/BCCEmailArchive_GetBCCEmailArchiveList'
import { BCCEmailArchive_GetBCCEmailArchiveHistoryList } from './events/BCCEmailArchive_GetBCCEmailArchiveHistoryList'
import { ENoteConfiguration_GetENoteConfiguration } from './events/ENoteConfiguration_GetENoteConfiguration'
import { EnvelopePurgeConfiguration_GetEnvelopePurgeConfiguration } from './events/EnvelopePurgeConfiguration_GetEnvelopePurgeConfiguration'
import { NotificationDefaults_GetNotificationDefaults } from './events/NotificationDefaults_GetNotificationDefaults'
import { AccountPasswordRules_GetAccountPasswordRules } from './events/AccountPasswordRules_GetAccountPasswordRules'
import { TabSettings_GetTabSettings } from './events/TabSettings_GetTabSettings'
import { SharedAccess_GetSharedAccess } from './events/SharedAccess_GetSharedAccess'
import { AccountSignatureProviders_GetSignatureProviders } from './events/AccountSignatureProviders_GetSignatureProviders'
import { AccountSignatures_GetAccountSignatures } from './events/AccountSignatures_GetAccountSignatures'
import { AccountSignatures_GetAccountSignature } from './events/AccountSignatures_GetAccountSignature'
import { SigningGroups_GetSigningGroups } from './events/SigningGroups_GetSigningGroups'
import { SigningGroups_GetSigningGroup } from './events/SigningGroups_GetSigningGroup'
import { SigningGroups_GetSigningGroupUsers } from './events/SigningGroups_GetSigningGroupUsers'
import { SupportedLanguages_GetSupportedLanguages } from './events/SupportedLanguages_GetSupportedLanguages'
import { Tabs_GetTabDefinitions } from './events/Tabs_GetTabDefinitions'
import { Tab_GetCustomTab } from './events/Tab_GetCustomTab'
import { Templates_GetTemplates } from './events/Templates_GetTemplates'
import { Templates_GetTemplate } from './events/Templates_GetTemplate'
import { CustomFields_GetTemplateCustomFields } from './events/CustomFields_GetTemplateCustomFields'
import { Documents_GetTemplateDocuments } from './events/Documents_GetTemplateDocuments'
import { DocumentFields_GetTemplateDocumentFields } from './events/DocumentFields_GetTemplateDocumentFields'
import { ResponsiveHtml_GetTemplateDocumentHtmlDefinitions } from './events/ResponsiveHtml_GetTemplateDocumentHtmlDefinitions'
import { Pages_GetTemplatePageImages } from './events/Pages_GetTemplatePageImages'
import { Tabs_GetTemplatePageTabs } from './events/Tabs_GetTemplatePageTabs'
import { Tabs_GetTemplateDocumentTabs } from './events/Tabs_GetTemplateDocumentTabs'
import { ResponsiveHtml_GetTemplateHtmlDefinitions } from './events/ResponsiveHtml_GetTemplateHtmlDefinitions'
import { Lock_GetTemplateLock } from './events/Lock_GetTemplateLock'
import { Notification_GetTemplatesTemplateIdNotification } from './events/Notification_GetTemplatesTemplateIdNotification'
import { Recipients_GetTemplateRecipients } from './events/Recipients_GetTemplateRecipients'
import { Recipients_GetTemplateRecipientDocumentVisibility } from './events/Recipients_GetTemplateRecipientDocumentVisibility'
import { Recipients_GetTemplateRecipientTabs } from './events/Recipients_GetTemplateRecipientTabs'
import { TemplateWorkflowDefinition_GetTemplateWorkflowDefinition } from './events/TemplateWorkflowDefinition_GetTemplateWorkflowDefinition'
import { TemplateWorkflowScheduledSending_GetTemplateScheduledSendingDefinition } from './events/TemplateWorkflowScheduledSending_GetTemplateScheduledSendingDefinition'
import { TemplateWorkflowStep_GetTemplateWorkflowStepDefinition } from './events/TemplateWorkflowStep_GetTemplateWorkflowStepDefinition'
import { TemplateWorkflowDelayedRouting_GetTemplateDelayedRoutingDefinition } from './events/TemplateWorkflowDelayedRouting_GetTemplateDelayedRoutingDefinition'
import { UnsupportedFileTypes_GetUnsupportedFileTypes } from './events/UnsupportedFileTypes_GetUnsupportedFileTypes'
import { Users_GetUsers } from './events/Users_GetUsers'
import { User_GetUser } from './events/User_GetUser'
import { UserAuthorization_GetUserAuthorization } from './events/UserAuthorization_GetUserAuthorization'
import { UserAuthorizations_GetPrincipalUserAuthorizations } from './events/UserAuthorizations_GetPrincipalUserAuthorizations'
import { UserAgentAuthorizations_GetAgentUserAuthorizations } from './events/UserAgentAuthorizations_GetAgentUserAuthorizations'
import { CloudStorage_GetCloudStorageProviders } from './events/CloudStorage_GetCloudStorageProviders'
import { CloudStorage_GetCloudStorage } from './events/CloudStorage_GetCloudStorage'
import { CloudStorageFolder_GetCloudStorageFolderAll } from './events/CloudStorageFolder_GetCloudStorageFolderAll'
import { CloudStorageFolder_GetCloudStorageFolder } from './events/CloudStorageFolder_GetCloudStorageFolder'
import { UserCustomSettings_GetCustomSettings } from './events/UserCustomSettings_GetCustomSettings'
import { UserProfile_GetProfile } from './events/UserProfile_GetProfile'
import { UserSettings_GetUserSettings } from './events/UserSettings_GetUserSettings'
import { UserSignatures_GetUserSignatures } from './events/UserSignatures_GetUserSignatures'
import { UserSignatures_GetUserSignature } from './events/UserSignatures_GetUserSignature'
import { Watermark_GetWatermark } from './events/Watermark_GetWatermark'
import { Workspace_GetWorkspaces } from './events/Workspace_GetWorkspaces'
import { Workspace_GetWorkspace } from './events/Workspace_GetWorkspace'
import { WorkspaceFolder_GetWorkspaceFolder } from './events/WorkspaceFolder_GetWorkspaceFolder'
import { WorkspaceFilePages_GetWorkspaceFilePages } from './events/WorkspaceFilePages_GetWorkspaceFilePages'
import { BillingPlans_GetBillingPlans } from './events/BillingPlans_GetBillingPlans'
import { BillingPlans_GetBillingPlan } from './events/BillingPlans_GetBillingPlan'
import { Notary_GetNotary } from './events/Notary_GetNotary'
import { NotaryJournals_GetNotaryJournals } from './events/NotaryJournals_GetNotaryJournals'
import { NotaryJurisdictions_GetNotaryJurisdictions } from './events/NotaryJurisdictions_GetNotaryJurisdictions'
import { NotaryJurisdictions_GetNotaryJurisdiction } from './events/NotaryJurisdictions_GetNotaryJurisdiction'
import { PasswordRules_GetPasswordRules } from './events/PasswordRules_GetPasswordRules'
import { APIRequestLog_GetRequestLogs } from './events/APIRequestLog_GetRequestLogs'
import { APIRequestLog_GetRequestLogSettings } from './events/APIRequestLog_GetRequestLogSettings'

type DocusignConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class DocusignIntegration extends Integration {
  config: DocusignConfig;

  constructor({ config }: { config: DocusignConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DOCUSIGN',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'docusign.ServiceInformation_GetServiceInformation/sync': {
                schema: z.object({}),
                handler: ServiceInformation_GetServiceInformation,
            },
        

             'docusign.ServiceInformation_GetResourceInformation/sync': {
                schema: z.object({}),
                handler: ServiceInformation_GetResourceInformation,
            },
        

             'docusign.Accounts_GetProvisioning/sync': {
                schema: z.object({}),
                handler: Accounts_GetProvisioning,
            },
        

             'docusign.Accounts_GetAccount/sync': {
                schema: z.object({
                  'accountId': z.string(),
'include_account_settings': z.string(),
accountId: z.string()}),
                handler: Accounts_GetAccount,
            },
        

             'docusign.BillingCharges_GetAccountBillingCharges/sync': {
                schema: z.object({
                  'accountId': z.string(),
'include_charges': z.string(),
accountId: z.string()}),
                handler: BillingCharges_GetAccountBillingCharges,
            },
        

             'docusign.BillingInvoices_GetBillingInvoices/sync': {
                schema: z.object({
                  'accountId': z.string(),
'from_date': z.string(),
'to_date': z.string(),
accountId: z.string()}),
                handler: BillingInvoices_GetBillingInvoices,
            },
        

             'docusign.BillingInvoices_GetBillingInvoice/sync': {
                schema: z.object({
                  'accountId': z.string(),
'invoiceId': z.string(),
accountId: z.string(),
invoiceId: z.string()}),
                handler: BillingInvoices_GetBillingInvoice,
            },
        

             'docusign.BillingInvoices_GetBillingInvoicesPastDue/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: BillingInvoices_GetBillingInvoicesPastDue,
            },
        

             'docusign.BillingPayments_GetPaymentList/sync': {
                schema: z.object({
                  'accountId': z.string(),
'from_date': z.string(),
'to_date': z.string(),
accountId: z.string()}),
                handler: BillingPayments_GetPaymentList,
            },
        

             'docusign.BillingPayments_GetPayment/sync': {
                schema: z.object({
                  'accountId': z.string(),
'paymentId': z.string(),
accountId: z.string(),
paymentId: z.string()}),
                handler: BillingPayments_GetPayment,
            },
        

             'docusign.BillingPlan_GetBillingPlan/sync': {
                schema: z.object({
                  'accountId': z.string(),
'include_credit_card_information': z.string(),
'include_downgrade_information': z.string(),
'include_metadata': z.string(),
'include_successor_plans': z.string(),
'include_tax_exempt_id': z.string(),
accountId: z.string()}),
                handler: BillingPlan_GetBillingPlan,
            },
        

             'docusign.BillingPlan_GetCreditCardInfo/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: BillingPlan_GetCreditCardInfo,
            },
        

             'docusign.BillingPlan_GetDowngradeRequestBillingInfo/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: BillingPlan_GetDowngradeRequestBillingInfo,
            },
        

             'docusign.Brands_GetBrands/sync': {
                schema: z.object({
                  'accountId': z.string(),
'exclude_distributor_brand': z.string(),
'include_logos': z.string(),
accountId: z.string()}),
                handler: Brands_GetBrands,
            },
        

             'docusign.Brand_GetBrand/sync': {
                schema: z.object({
                  'accountId': z.string(),
'brandId': z.string(),
'include_external_references': z.string(),
'include_logos': z.string(),
accountId: z.string(),
brandId: z.string()}),
                handler: Brand_GetBrand,
            },
        

             'docusign.BrandResources_GetBrandResourcesList/sync': {
                schema: z.object({
                  'accountId': z.string(),
'brandId': z.string(),
accountId: z.string(),
brandId: z.string()}),
                handler: BrandResources_GetBrandResourcesList,
            },
        

             'docusign.BulkSendV2Batch_GetBulkSendBatches/sync': {
                schema: z.object({
                  'accountId': z.string(),
'batch_ids': z.string(),
'count': z.string(),
'from_date': z.string(),
'search_text': z.string(),
'start_position': z.string(),
'status': z.string(),
'to_date': z.string(),
'user_id': z.string(),
accountId: z.string()}),
                handler: BulkSendV2Batch_GetBulkSendBatches,
            },
        

             'docusign.BulkSendV2Batch_GetBulkSendBatchStatus/sync': {
                schema: z.object({
                  'accountId': z.string(),
'bulkSendBatchId': z.string(),
accountId: z.string(),
bulkSendBatchId: z.string()}),
                handler: BulkSendV2Batch_GetBulkSendBatchStatus,
            },
        

             'docusign.BulkSendV2Envelopes_GetBulkSendBatchEnvelopes/sync': {
                schema: z.object({
                  'accountId': z.string(),
'bulkSendBatchId': z.string(),
'count': z.string(),
'include': z.string(),
'order': z.string(),
'order_by': z.string(),
'search_text': z.string(),
'start_position': z.string(),
'status': z.string(),
accountId: z.string(),
bulkSendBatchId: z.string()}),
                handler: BulkSendV2Envelopes_GetBulkSendBatchEnvelopes,
            },
        

             'docusign.BulkSendV2CRUD_GetBulkSendLists/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: BulkSendV2CRUD_GetBulkSendLists,
            },
        

             'docusign.BulkSendV2CRUD_GetBulkSendList/sync': {
                schema: z.object({
                  'accountId': z.string(),
'bulkSendListId': z.string(),
accountId: z.string(),
bulkSendListId: z.string()}),
                handler: BulkSendV2CRUD_GetBulkSendList,
            },
        

             'docusign.ChunkedUploads_GetChunkedUpload/sync': {
                schema: z.object({
                  'accountId': z.string(),
'chunkedUploadId': z.string(),
'include': z.string(),
accountId: z.string(),
chunkedUploadId: z.string()}),
                handler: ChunkedUploads_GetChunkedUpload,
            },
        

             'docusign.Connect_GetConnectConfigs/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: Connect_GetConnectConfigs,
            },
        

             'docusign.ConnectFailures_GetConnectLogs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'from_date': z.string(),
'to_date': z.string(),
accountId: z.string()}),
                handler: ConnectFailures_GetConnectLogs,
            },
        

             'docusign.ConnectLog_GetConnectLogs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'from_date': z.string(),
'to_date': z.string(),
accountId: z.string()}),
                handler: ConnectLog_GetConnectLogs,
            },
        

             'docusign.ConnectLog_GetConnectLog/sync': {
                schema: z.object({
                  'accountId': z.string(),
'logId': z.string(),
'additional_info': z.string(),
accountId: z.string(),
logId: z.string()}),
                handler: ConnectLog_GetConnectLog,
            },
        

             'docusign.ConnectOAuthConfig_GetConnectOAuthConfig/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: ConnectOAuthConfig_GetConnectOAuthConfig,
            },
        

             'docusign.Connect_GetConnectConfig/sync': {
                schema: z.object({
                  'accountId': z.string(),
'connectId': z.string(),
accountId: z.string(),
connectId: z.string()}),
                handler: Connect_GetConnectConfig,
            },
        

             'docusign.Connect_GetConnectAllUsers/sync': {
                schema: z.object({
                  'accountId': z.string(),
'connectId': z.string(),
'count': z.string(),
'domain_users_only': z.string(),
'email_substring': z.string(),
'start_position': z.string(),
'status': z.string(),
'user_name_substring': z.string(),
accountId: z.string(),
connectId: z.string()}),
                handler: Connect_GetConnectAllUsers,
            },
        

             'docusign.Connect_GetConnectUsers/sync': {
                schema: z.object({
                  'accountId': z.string(),
'connectId': z.string(),
'count': z.string(),
'email_substring': z.string(),
'list_included_users': z.string(),
'start_position': z.string(),
'status': z.string(),
'user_name_substring': z.string(),
accountId: z.string(),
connectId: z.string()}),
                handler: Connect_GetConnectUsers,
            },
        

             'docusign.ConsumerDisclosure_GetConsumerDisclosure/sync': {
                schema: z.object({
                  'accountId': z.string(),
'langCode': z.string(),
accountId: z.string()}),
                handler: ConsumerDisclosure_GetConsumerDisclosure,
            },
        

             'docusign.ConsumerDisclosure_GetConsumerDisclosureLangCode/sync': {
                schema: z.object({
                  'accountId': z.string(),
'langCode': z.string(),
accountId: z.string(),
langCode: z.string()}),
                handler: ConsumerDisclosure_GetConsumerDisclosureLangCode,
            },
        

             'docusign.Contacts_GetContactById/sync': {
                schema: z.object({
                  'accountId': z.string(),
'contactId': z.string(),
'cloud_provider': z.string(),
accountId: z.string(),
contactId: z.string()}),
                handler: Contacts_GetContactById,
            },
        

             'docusign.AccountCustomFields_GetAccountCustomFields/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: AccountCustomFields_GetAccountCustomFields,
            },
        

             'docusign.Envelopes_GetEnvelopes/sync': {
                schema: z.object({
                  'accountId': z.string(),
'ac_status': z.string(),
'block': z.string(),
'cdse_mode': z.string(),
'continuation_token': z.string(),
'count': z.string(),
'custom_field': z.string(),
'email': z.string(),
'envelope_ids': z.string(),
'exclude': z.string(),
'folder_ids': z.string(),
'folder_types': z.string(),
'from_date': z.string(),
'from_to_status': z.string(),
'include': z.string(),
'include_purge_information': z.string(),
'intersecting_folder_ids': z.string(),
'last_queried_date': z.string(),
'order': z.string(),
'order_by': z.string(),
'powerformids': z.string(),
'query_budget': z.string(),
'requester_date_format': z.string(),
'search_text': z.string(),
'start_position': z.string(),
'status': z.string(),
'to_date': z.string(),
'transaction_ids': z.string(),
'user_filter': z.string(),
'user_id': z.string(),
'user_name': z.string(),
accountId: z.string()}),
                handler: Envelopes_GetEnvelopes,
            },
        

             'docusign.EnvelopeTransferRules_GetEnvelopeTransferRules/sync': {
                schema: z.object({
                  'accountId': z.string(),
'count': z.string(),
'start_position': z.string(),
accountId: z.string()}),
                handler: EnvelopeTransferRules_GetEnvelopeTransferRules,
            },
        

             'docusign.Envelopes_GetEnvelope/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'advanced_update': z.string(),
'include': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Envelopes_GetEnvelope,
            },
        

             'docusign.Attachments_GetAttachments/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Attachments_GetAttachments,
            },
        

             'docusign.AuditEvents_GetAuditEvents/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: AuditEvents_GetAuditEvents,
            },
        

             'docusign.CustomFields_GetCustomFields/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: CustomFields_GetCustomFields,
            },
        

             'docusign.DocGenFormFields_GetEnvelopeDocGenFormFields/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: DocGenFormFields_GetEnvelopeDocGenFormFields,
            },
        

             'docusign.Documents_GetDocuments/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'documents_by_userid': z.string(),
'include_docgen_formfields': z.string(),
'include_metadata': z.string(),
'include_tabs': z.string(),
'recipient_id': z.string(),
'shared_user_id': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Documents_GetDocuments,
            },
        

             'docusign.DocumentFields_GetDocumentFields/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string(),
documentId: z.string()}),
                handler: DocumentFields_GetDocumentFields,
            },
        

             'docusign.ResponsiveHtml_GetEnvelopeDocumentHtmlDefinitions/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string(),
documentId: z.string()}),
                handler: ResponsiveHtml_GetEnvelopeDocumentHtmlDefinitions,
            },
        

             'docusign.Pages_GetPageImages/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'envelopeId': z.string(),
'count': z.string(),
'dpi': z.string(),
'max_height': z.string(),
'max_width': z.string(),
'nocache': z.string(),
'show_changes': z.string(),
'start_position': z.string(),
accountId: z.string(),
envelopeId: z.string(),
documentId: z.string()}),
                handler: Pages_GetPageImages,
            },
        

             'docusign.Tabs_GetPageTabs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'envelopeId': z.string(),
'pageNumber': z.string(),
accountId: z.string(),
envelopeId: z.string(),
documentId: z.string(),
pageNumber: z.string()}),
                handler: Tabs_GetPageTabs,
            },
        

             'docusign.Tabs_GetDocumentTabs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'envelopeId': z.string(),
'include_metadata': z.string(),
'page_numbers': z.string(),
accountId: z.string(),
envelopeId: z.string(),
documentId: z.string()}),
                handler: Tabs_GetDocumentTabs,
            },
        

             'docusign.Templates_GetDocumentTemplates/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'envelopeId': z.string(),
'include': z.string(),
accountId: z.string(),
envelopeId: z.string(),
documentId: z.string()}),
                handler: Templates_GetDocumentTemplates,
            },
        

             'docusign.EmailSettings_GetEmailSettings/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: EmailSettings_GetEmailSettings,
            },
        

             'docusign.FormData_GetFormData/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: FormData_GetFormData,
            },
        

             'docusign.ResponsiveHtml_GetEnvelopeHtmlDefinitions/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: ResponsiveHtml_GetEnvelopeHtmlDefinitions,
            },
        

             'docusign.Lock_GetEnvelopeLock/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Lock_GetEnvelopeLock,
            },
        

             'docusign.Notification_GetEnvelopesEnvelopeIdNotification/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Notification_GetEnvelopesEnvelopeIdNotification,
            },
        

             'docusign.Recipients_GetRecipients/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'include_anchor_tab_locations': z.string(),
'include_extended': z.string(),
'include_metadata': z.string(),
'include_tabs': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Recipients_GetRecipients,
            },
        

             'docusign.ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'recipientId': z.string(),
'langCode': z.string(),
accountId: z.string(),
envelopeId: z.string(),
recipientId: z.string()}),
                handler: ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientId,
            },
        

             'docusign.ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'langCode': z.string(),
'recipientId': z.string(),
'langCode': z.string(),
accountId: z.string(),
envelopeId: z.string(),
recipientId: z.string(),
langCode: z.string()}),
                handler: ConsumerDisclosure_GetConsumerDisclosureEnvelopeIdRecipientIdLangCode,
            },
        

             'docusign.Recipients_GetRecipientDocumentVisibility/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'recipientId': z.string(),
accountId: z.string(),
envelopeId: z.string(),
recipientId: z.string()}),
                handler: Recipients_GetRecipientDocumentVisibility,
            },
        

             'docusign.Recipients_GetRecipientSignature/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'recipientId': z.string(),
accountId: z.string(),
envelopeId: z.string(),
recipientId: z.string()}),
                handler: Recipients_GetRecipientSignature,
            },
        

             'docusign.Recipients_GetRecipientTabs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'recipientId': z.string(),
'include_anchor_tab_locations': z.string(),
'include_metadata': z.string(),
accountId: z.string(),
envelopeId: z.string(),
recipientId: z.string()}),
                handler: Recipients_GetRecipientTabs,
            },
        

             'docusign.Templates_GetEnvelopeTemplates/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'include': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: Templates_GetEnvelopeTemplates,
            },
        

             'docusign.EnvelopeWorkflowDefinitionV2_GetEnvelopeWorkflowDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: EnvelopeWorkflowDefinitionV2_GetEnvelopeWorkflowDefinition,
            },
        

             'docusign.EnvelopeWorkflowScheduledSending_GetEnvelopeScheduledSendingDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
accountId: z.string(),
envelopeId: z.string()}),
                handler: EnvelopeWorkflowScheduledSending_GetEnvelopeScheduledSendingDefinition,
            },
        

             'docusign.EnvelopeWorkflowStep_GetEnvelopeWorkflowStepDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'workflowStepId': z.string(),
accountId: z.string(),
envelopeId: z.string(),
workflowStepId: z.string()}),
                handler: EnvelopeWorkflowStep_GetEnvelopeWorkflowStepDefinition,
            },
        

             'docusign.EnvelopeWorkflowDelayedRouting_GetEnvelopeDelayedRoutingDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'envelopeId': z.string(),
'workflowStepId': z.string(),
accountId: z.string(),
envelopeId: z.string(),
workflowStepId: z.string()}),
                handler: EnvelopeWorkflowDelayedRouting_GetEnvelopeDelayedRoutingDefinition,
            },
        

             'docusign.FavoriteTemplates_GetFavoriteTemplates/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: FavoriteTemplates_GetFavoriteTemplates,
            },
        

             'docusign.Folders_GetFolders/sync': {
                schema: z.object({
                  'accountId': z.string(),
'count': z.string(),
'include': z.string(),
'include_items': z.string(),
'start_position': z.string(),
'sub_folder_depth': z.string(),
'template': z.string(),
'user_filter': z.string(),
accountId: z.string()}),
                handler: Folders_GetFolders,
            },
        

             'docusign.Folders_GetFolderItems/sync': {
                schema: z.object({
                  'accountId': z.string(),
'folderId': z.string(),
'from_date': z.string(),
'include_items': z.string(),
'owner_email': z.string(),
'owner_name': z.string(),
'search_text': z.string(),
'start_position': z.string(),
'status': z.string(),
'to_date': z.string(),
accountId: z.string(),
folderId: z.string()}),
                handler: Folders_GetFolderItems,
            },
        

             'docusign.Groups_GetGroups/sync': {
                schema: z.object({
                  'accountId': z.string(),
'count': z.string(),
'group_type': z.string(),
'include_usercount': z.string(),
'search_text': z.string(),
'start_position': z.string(),
accountId: z.string()}),
                handler: Groups_GetGroups,
            },
        

             'docusign.Brands_GetGroupBrands/sync': {
                schema: z.object({
                  'accountId': z.string(),
'groupId': z.string(),
accountId: z.string(),
groupId: z.string()}),
                handler: Brands_GetGroupBrands,
            },
        

             'docusign.Groups_GetGroupUsers/sync': {
                schema: z.object({
                  'accountId': z.string(),
'groupId': z.string(),
'count': z.string(),
'start_position': z.string(),
accountId: z.string(),
groupId: z.string()}),
                handler: Groups_GetGroupUsers,
            },
        

             'docusign.AccountIdentityVerification_GetAccountIdentityVerification/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: AccountIdentityVerification_GetAccountIdentityVerification,
            },
        

             'docusign.PaymentGatewayAccounts_GetAllPaymentGatewayAccounts/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: PaymentGatewayAccounts_GetAllPaymentGatewayAccounts,
            },
        

             'docusign.PermissionProfiles_GetPermissionProfiles/sync': {
                schema: z.object({
                  'accountId': z.string(),
'include': z.string(),
accountId: z.string()}),
                handler: PermissionProfiles_GetPermissionProfiles,
            },
        

             'docusign.PermissionProfiles_GetPermissionProfile/sync': {
                schema: z.object({
                  'accountId': z.string(),
'permissionProfileId': z.string(),
'include': z.string(),
accountId: z.string(),
permissionProfileId: z.string()}),
                handler: PermissionProfiles_GetPermissionProfile,
            },
        

             'docusign.PowerForms_GetPowerFormsList/sync': {
                schema: z.object({
                  'accountId': z.string(),
'from_date': z.string(),
'order': z.string(),
'order_by': z.string(),
'search_fields': z.string(),
'search_text': z.string(),
'to_date': z.string(),
accountId: z.string()}),
                handler: PowerForms_GetPowerFormsList,
            },
        

             'docusign.PowerForms_GetPowerFormsSenders/sync': {
                schema: z.object({
                  'accountId': z.string(),
'start_position': z.string(),
accountId: z.string()}),
                handler: PowerForms_GetPowerFormsSenders,
            },
        

             'docusign.PowerForms_GetPowerForm/sync': {
                schema: z.object({
                  'accountId': z.string(),
'powerFormId': z.string(),
accountId: z.string(),
powerFormId: z.string()}),
                handler: PowerForms_GetPowerForm,
            },
        

             'docusign.PowerForms_GetPowerFormFormData/sync': {
                schema: z.object({
                  'accountId': z.string(),
'powerFormId': z.string(),
'data_layout': z.string(),
'from_date': z.string(),
'to_date': z.string(),
accountId: z.string(),
powerFormId: z.string()}),
                handler: PowerForms_GetPowerFormFormData,
            },
        

             'docusign.RecipientNames_GetRecipientNames/sync': {
                schema: z.object({
                  'accountId': z.string(),
'email': z.string(),
accountId: z.string()}),
                handler: RecipientNames_GetRecipientNames,
            },
        

             'docusign.AccountSignatureProviders_GetSealProviders/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: AccountSignatureProviders_GetSealProviders,
            },
        

             'docusign.SearchFolders_GetSearchFolderContents/sync': {
                schema: z.object({
                  'accountId': z.string(),
'searchFolderId': z.string(),
'all': z.string(),
'count': z.string(),
'from_date': z.string(),
'include_recipients': z.string(),
'order': z.string(),
'order_by': z.string(),
'start_position': z.string(),
'to_date': z.string(),
accountId: z.string(),
searchFolderId: z.string()}),
                handler: SearchFolders_GetSearchFolderContents,
            },
        

             'docusign.Settings_GetSettings/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: Settings_GetSettings,
            },
        

             'docusign.BCCEmailArchive_GetBCCEmailArchiveList/sync': {
                schema: z.object({
                  'accountId': z.string(),
'count': z.string(),
'start_position': z.string(),
accountId: z.string()}),
                handler: BCCEmailArchive_GetBCCEmailArchiveList,
            },
        

             'docusign.BCCEmailArchive_GetBCCEmailArchiveHistoryList/sync': {
                schema: z.object({
                  'accountId': z.string(),
'bccEmailArchiveId': z.string(),
'count': z.string(),
'start_position': z.string(),
accountId: z.string(),
bccEmailArchiveId: z.string()}),
                handler: BCCEmailArchive_GetBCCEmailArchiveHistoryList,
            },
        

             'docusign.ENoteConfiguration_GetENoteConfiguration/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: ENoteConfiguration_GetENoteConfiguration,
            },
        

             'docusign.EnvelopePurgeConfiguration_GetEnvelopePurgeConfiguration/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: EnvelopePurgeConfiguration_GetEnvelopePurgeConfiguration,
            },
        

             'docusign.NotificationDefaults_GetNotificationDefaults/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: NotificationDefaults_GetNotificationDefaults,
            },
        

             'docusign.AccountPasswordRules_GetAccountPasswordRules/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: AccountPasswordRules_GetAccountPasswordRules,
            },
        

             'docusign.TabSettings_GetTabSettings/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: TabSettings_GetTabSettings,
            },
        

             'docusign.SharedAccess_GetSharedAccess/sync': {
                schema: z.object({
                  'accountId': z.string(),
'count': z.string(),
'envelopes_not_shared_user_status': z.string(),
'folder_ids': z.string(),
'item_type': z.string(),
'search_text': z.string(),
'shared': z.string(),
'start_position': z.string(),
'user_ids': z.string(),
accountId: z.string()}),
                handler: SharedAccess_GetSharedAccess,
            },
        

             'docusign.AccountSignatureProviders_GetSignatureProviders/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: AccountSignatureProviders_GetSignatureProviders,
            },
        

             'docusign.AccountSignatures_GetAccountSignatures/sync': {
                schema: z.object({
                  'accountId': z.string(),
'stamp_format': z.string(),
'stamp_name': z.string(),
'stamp_type': z.string(),
accountId: z.string()}),
                handler: AccountSignatures_GetAccountSignatures,
            },
        

             'docusign.AccountSignatures_GetAccountSignature/sync': {
                schema: z.object({
                  'accountId': z.string(),
'signatureId': z.string(),
accountId: z.string(),
signatureId: z.string()}),
                handler: AccountSignatures_GetAccountSignature,
            },
        

             'docusign.SigningGroups_GetSigningGroups/sync': {
                schema: z.object({
                  'accountId': z.string(),
'group_type': z.string(),
'include_users': z.string(),
accountId: z.string()}),
                handler: SigningGroups_GetSigningGroups,
            },
        

             'docusign.SigningGroups_GetSigningGroup/sync': {
                schema: z.object({
                  'accountId': z.string(),
'signingGroupId': z.string(),
accountId: z.string(),
signingGroupId: z.string()}),
                handler: SigningGroups_GetSigningGroup,
            },
        

             'docusign.SigningGroups_GetSigningGroupUsers/sync': {
                schema: z.object({
                  'accountId': z.string(),
'signingGroupId': z.string(),
accountId: z.string(),
signingGroupId: z.string()}),
                handler: SigningGroups_GetSigningGroupUsers,
            },
        

             'docusign.SupportedLanguages_GetSupportedLanguages/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: SupportedLanguages_GetSupportedLanguages,
            },
        

             'docusign.Tabs_GetTabDefinitions/sync': {
                schema: z.object({
                  'accountId': z.string(),
'custom_tab_only': z.string(),
accountId: z.string()}),
                handler: Tabs_GetTabDefinitions,
            },
        

             'docusign.Tab_GetCustomTab/sync': {
                schema: z.object({
                  'accountId': z.string(),
'customTabId': z.string(),
accountId: z.string(),
customTabId: z.string()}),
                handler: Tab_GetCustomTab,
            },
        

             'docusign.Templates_GetTemplates/sync': {
                schema: z.object({
                  'accountId': z.string(),
'count': z.string(),
'created_from_date': z.string(),
'created_to_date': z.string(),
'folder_ids': z.string(),
'folder_types': z.string(),
'from_date': z.string(),
'include': z.string(),
'is_deleted_template_only': z.string(),
'is_download': z.string(),
'modified_from_date': z.string(),
'modified_to_date': z.string(),
'order': z.string(),
'order_by': z.string(),
'search_fields': z.string(),
'search_text': z.string(),
'shared_by_me': z.string(),
'start_position': z.string(),
'template_ids': z.string(),
'to_date': z.string(),
'used_from_date': z.string(),
'used_to_date': z.string(),
'user_filter': z.string(),
'user_id': z.string(),
accountId: z.string()}),
                handler: Templates_GetTemplates,
            },
        

             'docusign.Templates_GetTemplate/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
'include': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: Templates_GetTemplate,
            },
        

             'docusign.CustomFields_GetTemplateCustomFields/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: CustomFields_GetTemplateCustomFields,
            },
        

             'docusign.Documents_GetTemplateDocuments/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
'include_tabs': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: Documents_GetTemplateDocuments,
            },
        

             'docusign.DocumentFields_GetTemplateDocumentFields/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string(),
documentId: z.string()}),
                handler: DocumentFields_GetTemplateDocumentFields,
            },
        

             'docusign.ResponsiveHtml_GetTemplateDocumentHtmlDefinitions/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string(),
documentId: z.string()}),
                handler: ResponsiveHtml_GetTemplateDocumentHtmlDefinitions,
            },
        

             'docusign.Pages_GetTemplatePageImages/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'templateId': z.string(),
'count': z.string(),
'dpi': z.string(),
'max_height': z.string(),
'max_width': z.string(),
'nocache': z.string(),
'show_changes': z.string(),
'start_position': z.string(),
accountId: z.string(),
templateId: z.string(),
documentId: z.string()}),
                handler: Pages_GetTemplatePageImages,
            },
        

             'docusign.Tabs_GetTemplatePageTabs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'pageNumber': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string(),
documentId: z.string(),
pageNumber: z.string()}),
                handler: Tabs_GetTemplatePageTabs,
            },
        

             'docusign.Tabs_GetTemplateDocumentTabs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'documentId': z.string(),
'templateId': z.string(),
'page_numbers': z.string(),
accountId: z.string(),
templateId: z.string(),
documentId: z.string()}),
                handler: Tabs_GetTemplateDocumentTabs,
            },
        

             'docusign.ResponsiveHtml_GetTemplateHtmlDefinitions/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: ResponsiveHtml_GetTemplateHtmlDefinitions,
            },
        

             'docusign.Lock_GetTemplateLock/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: Lock_GetTemplateLock,
            },
        

             'docusign.Notification_GetTemplatesTemplateIdNotification/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: Notification_GetTemplatesTemplateIdNotification,
            },
        

             'docusign.Recipients_GetTemplateRecipients/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
'include_anchor_tab_locations': z.string(),
'include_extended': z.string(),
'include_tabs': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: Recipients_GetTemplateRecipients,
            },
        

             'docusign.Recipients_GetTemplateRecipientDocumentVisibility/sync': {
                schema: z.object({
                  'accountId': z.string(),
'recipientId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string(),
recipientId: z.string()}),
                handler: Recipients_GetTemplateRecipientDocumentVisibility,
            },
        

             'docusign.Recipients_GetTemplateRecipientTabs/sync': {
                schema: z.object({
                  'accountId': z.string(),
'recipientId': z.string(),
'templateId': z.string(),
'include_anchor_tab_locations': z.string(),
'include_metadata': z.string(),
accountId: z.string(),
templateId: z.string(),
recipientId: z.string()}),
                handler: Recipients_GetTemplateRecipientTabs,
            },
        

             'docusign.TemplateWorkflowDefinition_GetTemplateWorkflowDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: TemplateWorkflowDefinition_GetTemplateWorkflowDefinition,
            },
        

             'docusign.TemplateWorkflowScheduledSending_GetTemplateScheduledSendingDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
accountId: z.string(),
templateId: z.string()}),
                handler: TemplateWorkflowScheduledSending_GetTemplateScheduledSendingDefinition,
            },
        

             'docusign.TemplateWorkflowStep_GetTemplateWorkflowStepDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
'workflowStepId': z.string(),
accountId: z.string(),
templateId: z.string(),
workflowStepId: z.string()}),
                handler: TemplateWorkflowStep_GetTemplateWorkflowStepDefinition,
            },
        

             'docusign.TemplateWorkflowDelayedRouting_GetTemplateDelayedRoutingDefinition/sync': {
                schema: z.object({
                  'accountId': z.string(),
'templateId': z.string(),
'workflowStepId': z.string(),
accountId: z.string(),
templateId: z.string(),
workflowStepId: z.string()}),
                handler: TemplateWorkflowDelayedRouting_GetTemplateDelayedRoutingDefinition,
            },
        

             'docusign.UnsupportedFileTypes_GetUnsupportedFileTypes/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: UnsupportedFileTypes_GetUnsupportedFileTypes,
            },
        

             'docusign.Users_GetUsers/sync': {
                schema: z.object({
                  'accountId': z.string(),
'additional_info': z.string(),
'alternate_admins_only': z.string(),
'count': z.string(),
'domain_users_only': z.string(),
'email': z.string(),
'email_substring': z.string(),
'group_id': z.string(),
'include_usersettings_for_csv': z.string(),
'login_status': z.string(),
'not_group_id': z.string(),
'start_position': z.string(),
'status': z.string(),
'user_name_substring': z.string(),
accountId: z.string()}),
                handler: Users_GetUsers,
            },
        

             'docusign.User_GetUser/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
'additional_info': z.string(),
'email': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: User_GetUser,
            },
        

             'docusign.UserAuthorization_GetUserAuthorization/sync': {
                schema: z.object({
                  'accountId': z.string(),
'authorizationId': z.string(),
'userId': z.string(),
accountId: z.string(),
userId: z.string(),
authorizationId: z.string()}),
                handler: UserAuthorization_GetUserAuthorization,
            },
        

             'docusign.UserAuthorizations_GetPrincipalUserAuthorizations/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
'active_only': z.string(),
'count': z.string(),
'email_substring': z.string(),
'permissions': z.string(),
'start_position': z.string(),
'user_name_substring': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: UserAuthorizations_GetPrincipalUserAuthorizations,
            },
        

             'docusign.UserAgentAuthorizations_GetAgentUserAuthorizations/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
'active_only': z.string(),
'count': z.string(),
'email_substring': z.string(),
'permissions': z.string(),
'start_position': z.string(),
'user_name_substring': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: UserAgentAuthorizations_GetAgentUserAuthorizations,
            },
        

             'docusign.CloudStorage_GetCloudStorageProviders/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
'redirectUrl': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: CloudStorage_GetCloudStorageProviders,
            },
        

             'docusign.CloudStorage_GetCloudStorage/sync': {
                schema: z.object({
                  'accountId': z.string(),
'serviceId': z.string(),
'userId': z.string(),
'redirectUrl': z.string(),
accountId: z.string(),
userId: z.string(),
serviceId: z.string()}),
                handler: CloudStorage_GetCloudStorage,
            },
        

             'docusign.CloudStorageFolder_GetCloudStorageFolderAll/sync': {
                schema: z.object({
                  'accountId': z.string(),
'serviceId': z.string(),
'userId': z.string(),
'cloud_storage_folder_path': z.string(),
'count': z.string(),
'order': z.string(),
'order_by': z.string(),
'search_text': z.string(),
'start_position': z.string(),
accountId: z.string(),
userId: z.string(),
serviceId: z.string()}),
                handler: CloudStorageFolder_GetCloudStorageFolderAll,
            },
        

             'docusign.CloudStorageFolder_GetCloudStorageFolder/sync': {
                schema: z.object({
                  'accountId': z.string(),
'folderId': z.string(),
'serviceId': z.string(),
'userId': z.string(),
'cloud_storage_folder_path': z.string(),
'cloud_storage_folderid_plain': z.string(),
'count': z.string(),
'order': z.string(),
'order_by': z.string(),
'search_text': z.string(),
'start_position': z.string(),
accountId: z.string(),
userId: z.string(),
serviceId: z.string(),
folderId: z.string()}),
                handler: CloudStorageFolder_GetCloudStorageFolder,
            },
        

             'docusign.UserCustomSettings_GetCustomSettings/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: UserCustomSettings_GetCustomSettings,
            },
        

             'docusign.UserProfile_GetProfile/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: UserProfile_GetProfile,
            },
        

             'docusign.UserSettings_GetUserSettings/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: UserSettings_GetUserSettings,
            },
        

             'docusign.UserSignatures_GetUserSignatures/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userId': z.string(),
'stamp_type': z.string(),
accountId: z.string(),
userId: z.string()}),
                handler: UserSignatures_GetUserSignatures,
            },
        

             'docusign.UserSignatures_GetUserSignature/sync': {
                schema: z.object({
                  'accountId': z.string(),
'signatureId': z.string(),
'userId': z.string(),
accountId: z.string(),
userId: z.string(),
signatureId: z.string()}),
                handler: UserSignatures_GetUserSignature,
            },
        

             'docusign.Watermark_GetWatermark/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: Watermark_GetWatermark,
            },
        

             'docusign.Workspace_GetWorkspaces/sync': {
                schema: z.object({
                  'accountId': z.string(),
accountId: z.string()}),
                handler: Workspace_GetWorkspaces,
            },
        

             'docusign.Workspace_GetWorkspace/sync': {
                schema: z.object({
                  'accountId': z.string(),
'workspaceId': z.string(),
accountId: z.string(),
workspaceId: z.string()}),
                handler: Workspace_GetWorkspace,
            },
        

             'docusign.WorkspaceFolder_GetWorkspaceFolder/sync': {
                schema: z.object({
                  'accountId': z.string(),
'folderId': z.string(),
'workspaceId': z.string(),
'count': z.string(),
'include_files': z.string(),
'include_sub_folders': z.string(),
'include_thumbnails': z.string(),
'include_user_detail': z.string(),
'start_position': z.string(),
'workspace_user_id': z.string(),
accountId: z.string(),
workspaceId: z.string(),
folderId: z.string()}),
                handler: WorkspaceFolder_GetWorkspaceFolder,
            },
        

             'docusign.WorkspaceFilePages_GetWorkspaceFilePages/sync': {
                schema: z.object({
                  'accountId': z.string(),
'fileId': z.string(),
'folderId': z.string(),
'workspaceId': z.string(),
'count': z.string(),
'dpi': z.string(),
'max_height': z.string(),
'max_width': z.string(),
'start_position': z.string(),
accountId: z.string(),
workspaceId: z.string(),
folderId: z.string(),
fileId: z.string()}),
                handler: WorkspaceFilePages_GetWorkspaceFilePages,
            },
        

             'docusign.BillingPlans_GetBillingPlans/sync': {
                schema: z.object({}),
                handler: BillingPlans_GetBillingPlans,
            },
        

             'docusign.BillingPlans_GetBillingPlan/sync': {
                schema: z.object({
                  'billingPlanId': z.string(),
billingPlanId: z.string()}),
                handler: BillingPlans_GetBillingPlan,
            },
        

             'docusign.Notary_GetNotary/sync': {
                schema: z.object({
                  'include_jurisdictions': z.string()}),
                handler: Notary_GetNotary,
            },
        

             'docusign.NotaryJournals_GetNotaryJournals/sync': {
                schema: z.object({
                  'count': z.string(),
'search_text': z.string(),
'start_position': z.string()}),
                handler: NotaryJournals_GetNotaryJournals,
            },
        

             'docusign.NotaryJurisdictions_GetNotaryJurisdictions/sync': {
                schema: z.object({}),
                handler: NotaryJurisdictions_GetNotaryJurisdictions,
            },
        

             'docusign.NotaryJurisdictions_GetNotaryJurisdiction/sync': {
                schema: z.object({
                  'jurisdictionId': z.string(),
jurisdictionId: z.string()}),
                handler: NotaryJurisdictions_GetNotaryJurisdiction,
            },
        

             'docusign.PasswordRules_GetPasswordRules/sync': {
                schema: z.object({}),
                handler: PasswordRules_GetPasswordRules,
            },
        

             'docusign.APIRequestLog_GetRequestLogs/sync': {
                schema: z.object({
                  'encoding': z.string()}),
                handler: APIRequestLog_GetRequestLogs,
            },
        

             'docusign.APIRequestLog_GetRequestLogSettings/sync': {
                schema: z.object({}),
                handler: APIRequestLog_GetRequestLogSettings,
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
        SERVER: `https://account.docusign.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/auth',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    