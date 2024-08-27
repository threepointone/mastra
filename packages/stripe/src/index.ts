
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { GetAccounts } from './events/GetAccounts'
import { GetAccountsAccountCapabilities } from './events/GetAccountsAccountCapabilities'
import { GetAccountsAccountExternalAccounts } from './events/GetAccountsAccountExternalAccounts'
import { GetAccountsAccountPeople } from './events/GetAccountsAccountPeople'
import { GetAccountsAccountPersons } from './events/GetAccountsAccountPersons'
import { GetApplePayDomains } from './events/GetApplePayDomains'
import { GetApplicationFees } from './events/GetApplicationFees'
import { GetApplicationFeesIdRefunds } from './events/GetApplicationFeesIdRefunds'
import { GetAppsSecrets } from './events/GetAppsSecrets'
import { GetBalanceHistory } from './events/GetBalanceHistory'
import { GetBalanceTransactions } from './events/GetBalanceTransactions'
import { GetBillingPortalConfigurations } from './events/GetBillingPortalConfigurations'
import { GetCharges } from './events/GetCharges'
import { GetChargesSearch } from './events/GetChargesSearch'
import { GetChargesChargeRefunds } from './events/GetChargesChargeRefunds'
import { GetCheckoutSessions } from './events/GetCheckoutSessions'
import { GetCheckoutSessionsSessionLineItems } from './events/GetCheckoutSessionsSessionLineItems'
import { GetCountrySpecs } from './events/GetCountrySpecs'
import { GetCoupons } from './events/GetCoupons'
import { GetCreditNotes } from './events/GetCreditNotes'
import { GetCreditNotesPreviewLines } from './events/GetCreditNotesPreviewLines'
import { GetCreditNotesCreditNoteLines } from './events/GetCreditNotesCreditNoteLines'
import { GetCustomers } from './events/GetCustomers'
import { GetCustomersSearch } from './events/GetCustomersSearch'
import { GetCustomersCustomerBalanceTransactions } from './events/GetCustomersCustomerBalanceTransactions'
import { GetCustomersCustomerBankAccounts } from './events/GetCustomersCustomerBankAccounts'
import { GetCustomersCustomerCards } from './events/GetCustomersCustomerCards'
import { GetCustomersCustomerCashBalanceTransactions } from './events/GetCustomersCustomerCashBalanceTransactions'
import { GetCustomersCustomerPaymentMethods } from './events/GetCustomersCustomerPaymentMethods'
import { GetCustomersCustomerSources } from './events/GetCustomersCustomerSources'
import { GetCustomersCustomerSubscriptions } from './events/GetCustomersCustomerSubscriptions'
import { GetCustomersCustomerTaxIds } from './events/GetCustomersCustomerTaxIds'
import { GetDisputes } from './events/GetDisputes'
import { GetEvents } from './events/GetEvents'
import { GetExchangeRates } from './events/GetExchangeRates'
import { GetFileLinks } from './events/GetFileLinks'
import { GetFiles } from './events/GetFiles'
import { GetFinancialConnectionsAccounts } from './events/GetFinancialConnectionsAccounts'
import { GetFinancialConnectionsAccountsAccountOwners } from './events/GetFinancialConnectionsAccountsAccountOwners'
import { GetIdentityVerificationReports } from './events/GetIdentityVerificationReports'
import { GetIdentityVerificationSessions } from './events/GetIdentityVerificationSessions'
import { GetInvoiceitems } from './events/GetInvoiceitems'
import { GetInvoices } from './events/GetInvoices'
import { GetInvoicesSearch } from './events/GetInvoicesSearch'
import { GetInvoicesUpcomingLines } from './events/GetInvoicesUpcomingLines'
import { GetInvoicesInvoiceLines } from './events/GetInvoicesInvoiceLines'
import { GetIssuingAuthorizations } from './events/GetIssuingAuthorizations'
import { GetIssuingCardholders } from './events/GetIssuingCardholders'
import { GetIssuingCards } from './events/GetIssuingCards'
import { GetIssuingDisputes } from './events/GetIssuingDisputes'
import { GetIssuingSettlements } from './events/GetIssuingSettlements'
import { GetIssuingTransactions } from './events/GetIssuingTransactions'
import { GetLinkedAccounts } from './events/GetLinkedAccounts'
import { GetLinkedAccountsAccountOwners } from './events/GetLinkedAccountsAccountOwners'
import { GetPaymentIntents } from './events/GetPaymentIntents'
import { GetPaymentIntentsSearch } from './events/GetPaymentIntentsSearch'
import { GetPaymentLinks } from './events/GetPaymentLinks'
import { GetPaymentLinksPaymentLinkLineItems } from './events/GetPaymentLinksPaymentLinkLineItems'
import { GetPaymentMethods } from './events/GetPaymentMethods'
import { GetPayouts } from './events/GetPayouts'
import { GetPlans } from './events/GetPlans'
import { GetPrices } from './events/GetPrices'
import { GetPricesSearch } from './events/GetPricesSearch'
import { GetProducts } from './events/GetProducts'
import { GetProductsSearch } from './events/GetProductsSearch'
import { GetPromotionCodes } from './events/GetPromotionCodes'
import { GetQuotes } from './events/GetQuotes'
import { GetQuotesQuoteComputedUpfrontLineItems } from './events/GetQuotesQuoteComputedUpfrontLineItems'
import { GetQuotesQuoteLineItems } from './events/GetQuotesQuoteLineItems'
import { GetRadarEarlyFraudWarnings } from './events/GetRadarEarlyFraudWarnings'
import { GetRadarValueListItems } from './events/GetRadarValueListItems'
import { GetRadarValueLists } from './events/GetRadarValueLists'
import { GetRefunds } from './events/GetRefunds'
import { GetReportingReportRuns } from './events/GetReportingReportRuns'
import { GetReportingReportTypes } from './events/GetReportingReportTypes'
import { GetReviews } from './events/GetReviews'
import { GetSetupAttempts } from './events/GetSetupAttempts'
import { GetSetupIntents } from './events/GetSetupIntents'
import { GetShippingRates } from './events/GetShippingRates'
import { GetSigmaScheduledQueryRuns } from './events/GetSigmaScheduledQueryRuns'
import { GetSourcesSourceSourceTransactions } from './events/GetSourcesSourceSourceTransactions'
import { GetSubscriptionItems } from './events/GetSubscriptionItems'
import { GetSubscriptionItemsSubscriptionItemUsageRecordSummaries } from './events/GetSubscriptionItemsSubscriptionItemUsageRecordSummaries'
import { GetSubscriptionSchedules } from './events/GetSubscriptionSchedules'
import { GetSubscriptions } from './events/GetSubscriptions'
import { GetSubscriptionsSearch } from './events/GetSubscriptionsSearch'
import { GetTaxCalculationsCalculationLineItems } from './events/GetTaxCalculationsCalculationLineItems'
import { GetTaxTransactionsTransactionLineItems } from './events/GetTaxTransactionsTransactionLineItems'
import { GetTaxCodes } from './events/GetTaxCodes'
import { GetTaxRates } from './events/GetTaxRates'
import { GetTerminalConfigurations } from './events/GetTerminalConfigurations'
import { GetTerminalLocations } from './events/GetTerminalLocations'
import { GetTerminalReaders } from './events/GetTerminalReaders'
import { GetTestHelpersTestClocks } from './events/GetTestHelpersTestClocks'
import { GetTopups } from './events/GetTopups'
import { GetTransfers } from './events/GetTransfers'
import { GetTransfersIdReversals } from './events/GetTransfersIdReversals'
import { GetTreasuryCreditReversals } from './events/GetTreasuryCreditReversals'
import { GetTreasuryDebitReversals } from './events/GetTreasuryDebitReversals'
import { GetTreasuryFinancialAccounts } from './events/GetTreasuryFinancialAccounts'
import { GetTreasuryInboundTransfers } from './events/GetTreasuryInboundTransfers'
import { GetTreasuryOutboundPayments } from './events/GetTreasuryOutboundPayments'
import { GetTreasuryOutboundTransfers } from './events/GetTreasuryOutboundTransfers'
import { GetTreasuryReceivedCredits } from './events/GetTreasuryReceivedCredits'
import { GetTreasuryReceivedDebits } from './events/GetTreasuryReceivedDebits'
import { GetTreasuryTransactionEntries } from './events/GetTreasuryTransactionEntries'
import { GetTreasuryTransactions } from './events/GetTreasuryTransactions'
import { GetWebhookEndpoints } from './events/GetWebhookEndpoints'

type StripeConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class StripeIntegration extends Integration {
  config: StripeConfig;

  constructor({ config }: { config: StripeConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'STRIPE',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'stripe.GetAccounts/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetAccounts,
            },
        

             'stripe.GetAccountsAccountCapabilities/sync': {
                schema: z.object({
                  account: z.string(),
expand: z.string(),
account: z.string()}),
                handler: GetAccountsAccountCapabilities,
            },
        

             'stripe.GetAccountsAccountExternalAccounts/sync': {
                schema: z.object({
                  account: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
account: z.string()}),
                handler: GetAccountsAccountExternalAccounts,
            },
        

             'stripe.GetAccountsAccountPeople/sync': {
                schema: z.object({
                  account: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
relationship: z.string(),
starting_after: z.string(),
account: z.string()}),
                handler: GetAccountsAccountPeople,
            },
        

             'stripe.GetAccountsAccountPersons/sync': {
                schema: z.object({
                  account: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
relationship: z.string(),
starting_after: z.string(),
account: z.string()}),
                handler: GetAccountsAccountPersons,
            },
        

             'stripe.GetApplePayDomains/sync': {
                schema: z.object({
                  domain_name: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetApplePayDomains,
            },
        

             'stripe.GetApplicationFees/sync': {
                schema: z.object({
                  charge: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetApplicationFees,
            },
        

             'stripe.GetApplicationFeesIdRefunds/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
id: z.string(),
limit: z.number(),
starting_after: z.string(),
id: z.string()}),
                handler: GetApplicationFeesIdRefunds,
            },
        

             'stripe.GetAppsSecrets/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
scope: z.string(),
starting_after: z.string()}),
                handler: GetAppsSecrets,
            },
        

             'stripe.GetBalanceHistory/sync': {
                schema: z.object({
                  created: z.string(),
currency: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payout: z.string(),
source: z.string(),
starting_after: z.string(),
type: z.string()}),
                handler: GetBalanceHistory,
            },
        

             'stripe.GetBalanceTransactions/sync': {
                schema: z.object({
                  created: z.string(),
currency: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payout: z.string(),
source: z.string(),
starting_after: z.string(),
type: z.string()}),
                handler: GetBalanceTransactions,
            },
        

             'stripe.GetBillingPortalConfigurations/sync': {
                schema: z.object({
                  active: z.boolean(),
ending_before: z.string(),
expand: z.string(),
is_default: z.boolean(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetBillingPortalConfigurations,
            },
        

             'stripe.GetCharges/sync': {
                schema: z.object({
                  created: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_intent: z.string(),
starting_after: z.string(),
transfer_group: z.string()}),
                handler: GetCharges,
            },
        

             'stripe.GetChargesSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetChargesSearch,
            },
        

             'stripe.GetChargesChargeRefunds/sync': {
                schema: z.object({
                  charge: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
charge: z.string()}),
                handler: GetChargesChargeRefunds,
            },
        

             'stripe.GetCheckoutSessions/sync': {
                schema: z.object({
                  customer: z.string(),
customer_details: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_intent: z.string(),
payment_link: z.string(),
starting_after: z.string(),
subscription: z.string()}),
                handler: GetCheckoutSessions,
            },
        

             'stripe.GetCheckoutSessionsSessionLineItems/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
session: z.string(),
starting_after: z.string(),
session: z.string()}),
                handler: GetCheckoutSessionsSessionLineItems,
            },
        

             'stripe.GetCountrySpecs/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetCountrySpecs,
            },
        

             'stripe.GetCoupons/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetCoupons,
            },
        

             'stripe.GetCreditNotes/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
invoice: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetCreditNotes,
            },
        

             'stripe.GetCreditNotesPreviewLines/sync': {
                schema: z.object({
                  amount: z.number(),
credit_amount: z.number(),
ending_before: z.string(),
expand: z.string(),
invoice: z.string(),
limit: z.number(),
lines: z.string(),
memo: z.string(),
metadata: z.string(),
out_of_band_amount: z.number(),
reason: z.string(),
refund: z.string(),
refund_amount: z.number(),
shipping_cost: z.string(),
starting_after: z.string()}),
                handler: GetCreditNotesPreviewLines,
            },
        

             'stripe.GetCreditNotesCreditNoteLines/sync': {
                schema: z.object({
                  credit_note: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
credit_note: z.string()}),
                handler: GetCreditNotesCreditNoteLines,
            },
        

             'stripe.GetCustomers/sync': {
                schema: z.object({
                  created: z.string(),
email: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
test_clock: z.string()}),
                handler: GetCustomers,
            },
        

             'stripe.GetCustomersSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetCustomersSearch,
            },
        

             'stripe.GetCustomersCustomerBalanceTransactions/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerBalanceTransactions,
            },
        

             'stripe.GetCustomersCustomerBankAccounts/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerBankAccounts,
            },
        

             'stripe.GetCustomersCustomerCards/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerCards,
            },
        

             'stripe.GetCustomersCustomerCashBalanceTransactions/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerCashBalanceTransactions,
            },
        

             'stripe.GetCustomersCustomerPaymentMethods/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
type: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerPaymentMethods,
            },
        

             'stripe.GetCustomersCustomerSources/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
object: z.string(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerSources,
            },
        

             'stripe.GetCustomersCustomerSubscriptions/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerSubscriptions,
            },
        

             'stripe.GetCustomersCustomerTaxIds/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
customer: z.string()}),
                handler: GetCustomersCustomerTaxIds,
            },
        

             'stripe.GetDisputes/sync': {
                schema: z.object({
                  charge: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_intent: z.string(),
starting_after: z.string()}),
                handler: GetDisputes,
            },
        

             'stripe.GetEvents/sync': {
                schema: z.object({
                  created: z.string(),
delivery_success: z.boolean(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
type: z.string(),
types: z.string()}),
                handler: GetEvents,
            },
        

             'stripe.GetExchangeRates/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetExchangeRates,
            },
        

             'stripe.GetFileLinks/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
expired: z.boolean(),
file: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetFileLinks,
            },
        

             'stripe.GetFiles/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
purpose: z.string(),
starting_after: z.string()}),
                handler: GetFiles,
            },
        

             'stripe.GetFinancialConnectionsAccounts/sync': {
                schema: z.object({
                  account_holder: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
session: z.string(),
starting_after: z.string()}),
                handler: GetFinancialConnectionsAccounts,
            },
        

             'stripe.GetFinancialConnectionsAccountsAccountOwners/sync': {
                schema: z.object({
                  account: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
ownership: z.string(),
starting_after: z.string(),
account: z.string()}),
                handler: GetFinancialConnectionsAccountsAccountOwners,
            },
        

             'stripe.GetIdentityVerificationReports/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
type: z.string(),
verification_session: z.string()}),
                handler: GetIdentityVerificationReports,
            },
        

             'stripe.GetIdentityVerificationSessions/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetIdentityVerificationSessions,
            },
        

             'stripe.GetInvoiceitems/sync': {
                schema: z.object({
                  created: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
invoice: z.string(),
limit: z.number(),
pending: z.boolean(),
starting_after: z.string()}),
                handler: GetInvoiceitems,
            },
        

             'stripe.GetInvoices/sync': {
                schema: z.object({
                  collection_method: z.string(),
created: z.string(),
customer: z.string(),
due_date: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string(),
subscription: z.string()}),
                handler: GetInvoices,
            },
        

             'stripe.GetInvoicesSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetInvoicesSearch,
            },
        

             'stripe.GetInvoicesUpcomingLines/sync': {
                schema: z.object({
                  automatic_tax: z.string(),
coupon: z.string(),
currency: z.string(),
customer: z.string(),
customer_details: z.string(),
discounts: z.string(),
ending_before: z.string(),
expand: z.string(),
invoice_items: z.string(),
limit: z.number(),
schedule: z.string(),
starting_after: z.string(),
subscription: z.string(),
subscription_billing_cycle_anchor: z.string(),
subscription_cancel_at: z.string(),
subscription_cancel_at_period_end: z.boolean(),
subscription_cancel_now: z.boolean(),
subscription_default_tax_rates: z.string(),
subscription_items: z.string(),
subscription_proration_behavior: z.string(),
subscription_proration_date: z.number(),
subscription_resume_at: z.string(),
subscription_start_date: z.number(),
subscription_trial_end: z.string(),
subscription_trial_from_plan: z.boolean()}),
                handler: GetInvoicesUpcomingLines,
            },
        

             'stripe.GetInvoicesInvoiceLines/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
invoice: z.string(),
limit: z.number(),
starting_after: z.string(),
invoice: z.string()}),
                handler: GetInvoicesInvoiceLines,
            },
        

             'stripe.GetIssuingAuthorizations/sync': {
                schema: z.object({
                  card: z.string(),
cardholder: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetIssuingAuthorizations,
            },
        

             'stripe.GetIssuingCardholders/sync': {
                schema: z.object({
                  created: z.string(),
email: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
phone_number: z.string(),
starting_after: z.string(),
status: z.string(),
type: z.string()}),
                handler: GetIssuingCardholders,
            },
        

             'stripe.GetIssuingCards/sync': {
                schema: z.object({
                  cardholder: z.string(),
created: z.string(),
ending_before: z.string(),
exp_month: z.number(),
exp_year: z.number(),
expand: z.string(),
last4: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string(),
type: z.string()}),
                handler: GetIssuingCards,
            },
        

             'stripe.GetIssuingDisputes/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string(),
transaction: z.string()}),
                handler: GetIssuingDisputes,
            },
        

             'stripe.GetIssuingSettlements/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetIssuingSettlements,
            },
        

             'stripe.GetIssuingTransactions/sync': {
                schema: z.object({
                  card: z.string(),
cardholder: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
type: z.string()}),
                handler: GetIssuingTransactions,
            },
        

             'stripe.GetLinkedAccounts/sync': {
                schema: z.object({
                  account_holder: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
session: z.string(),
starting_after: z.string()}),
                handler: GetLinkedAccounts,
            },
        

             'stripe.GetLinkedAccountsAccountOwners/sync': {
                schema: z.object({
                  account: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
ownership: z.string(),
starting_after: z.string(),
account: z.string()}),
                handler: GetLinkedAccountsAccountOwners,
            },
        

             'stripe.GetPaymentIntents/sync': {
                schema: z.object({
                  created: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetPaymentIntents,
            },
        

             'stripe.GetPaymentIntentsSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetPaymentIntentsSearch,
            },
        

             'stripe.GetPaymentLinks/sync': {
                schema: z.object({
                  active: z.boolean(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetPaymentLinks,
            },
        

             'stripe.GetPaymentLinksPaymentLinkLineItems/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_link: z.string(),
starting_after: z.string(),
payment_link: z.string()}),
                handler: GetPaymentLinksPaymentLinkLineItems,
            },
        

             'stripe.GetPaymentMethods/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
type: z.string()}),
                handler: GetPaymentMethods,
            },
        

             'stripe.GetPayouts/sync': {
                schema: z.object({
                  arrival_date: z.string(),
created: z.string(),
destination: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetPayouts,
            },
        

             'stripe.GetPlans/sync': {
                schema: z.object({
                  active: z.boolean(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
product: z.string(),
starting_after: z.string()}),
                handler: GetPlans,
            },
        

             'stripe.GetPrices/sync': {
                schema: z.object({
                  active: z.boolean(),
created: z.string(),
currency: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
lookup_keys: z.string(),
product: z.string(),
recurring: z.string(),
starting_after: z.string(),
type: z.string()}),
                handler: GetPrices,
            },
        

             'stripe.GetPricesSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetPricesSearch,
            },
        

             'stripe.GetProducts/sync': {
                schema: z.object({
                  active: z.boolean(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
ids: z.string(),
limit: z.number(),
shippable: z.boolean(),
starting_after: z.string(),
url: z.string()}),
                handler: GetProducts,
            },
        

             'stripe.GetProductsSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetProductsSearch,
            },
        

             'stripe.GetPromotionCodes/sync': {
                schema: z.object({
                  active: z.boolean(),
code: z.string(),
coupon: z.string(),
created: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetPromotionCodes,
            },
        

             'stripe.GetQuotes/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string(),
test_clock: z.string()}),
                handler: GetQuotes,
            },
        

             'stripe.GetQuotesQuoteComputedUpfrontLineItems/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
quote: z.string(),
starting_after: z.string(),
quote: z.string()}),
                handler: GetQuotesQuoteComputedUpfrontLineItems,
            },
        

             'stripe.GetQuotesQuoteLineItems/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
quote: z.string(),
starting_after: z.string(),
quote: z.string()}),
                handler: GetQuotesQuoteLineItems,
            },
        

             'stripe.GetRadarEarlyFraudWarnings/sync': {
                schema: z.object({
                  charge: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_intent: z.string(),
starting_after: z.string()}),
                handler: GetRadarEarlyFraudWarnings,
            },
        

             'stripe.GetRadarValueListItems/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
value: z.string(),
value_list: z.string()}),
                handler: GetRadarValueListItems,
            },
        

             'stripe.GetRadarValueLists/sync': {
                schema: z.object({
                  alias: z.string(),
contains: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetRadarValueLists,
            },
        

             'stripe.GetRefunds/sync': {
                schema: z.object({
                  charge: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_intent: z.string(),
starting_after: z.string()}),
                handler: GetRefunds,
            },
        

             'stripe.GetReportingReportRuns/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetReportingReportRuns,
            },
        

             'stripe.GetReportingReportTypes/sync': {
                schema: z.object({
                  expand: z.string()}),
                handler: GetReportingReportTypes,
            },
        

             'stripe.GetReviews/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetReviews,
            },
        

             'stripe.GetSetupAttempts/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
setup_intent: z.string(),
starting_after: z.string()}),
                handler: GetSetupAttempts,
            },
        

             'stripe.GetSetupIntents/sync': {
                schema: z.object({
                  attach_to_self: z.boolean(),
created: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
payment_method: z.string(),
starting_after: z.string()}),
                handler: GetSetupIntents,
            },
        

             'stripe.GetShippingRates/sync': {
                schema: z.object({
                  active: z.boolean(),
created: z.string(),
currency: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetShippingRates,
            },
        

             'stripe.GetSigmaScheduledQueryRuns/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetSigmaScheduledQueryRuns,
            },
        

             'stripe.GetSourcesSourceSourceTransactions/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
source: z.string(),
starting_after: z.string(),
source: z.string()}),
                handler: GetSourcesSourceSourceTransactions,
            },
        

             'stripe.GetSubscriptionItems/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
subscription: z.string()}),
                handler: GetSubscriptionItems,
            },
        

             'stripe.GetSubscriptionItemsSubscriptionItemUsageRecordSummaries/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
subscription_item: z.string(),
subscription_item: z.string()}),
                handler: GetSubscriptionItemsSubscriptionItemUsageRecordSummaries,
            },
        

             'stripe.GetSubscriptionSchedules/sync': {
                schema: z.object({
                  canceled_at: z.string(),
completed_at: z.string(),
created: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
released_at: z.string(),
scheduled: z.boolean(),
starting_after: z.string()}),
                handler: GetSubscriptionSchedules,
            },
        

             'stripe.GetSubscriptions/sync': {
                schema: z.object({
                  collection_method: z.string(),
created: z.string(),
current_period_end: z.string(),
current_period_start: z.string(),
customer: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
price: z.string(),
starting_after: z.string(),
status: z.string(),
test_clock: z.string()}),
                handler: GetSubscriptions,
            },
        

             'stripe.GetSubscriptionsSearch/sync': {
                schema: z.object({
                  expand: z.string(),
limit: z.number(),
page: z.string(),
query: z.string()}),
                handler: GetSubscriptionsSearch,
            },
        

             'stripe.GetTaxCalculationsCalculationLineItems/sync': {
                schema: z.object({
                  calculation: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
calculation: z.string()}),
                handler: GetTaxCalculationsCalculationLineItems,
            },
        

             'stripe.GetTaxTransactionsTransactionLineItems/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
transaction: z.string(),
transaction: z.string()}),
                handler: GetTaxTransactionsTransactionLineItems,
            },
        

             'stripe.GetTaxCodes/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetTaxCodes,
            },
        

             'stripe.GetTaxRates/sync': {
                schema: z.object({
                  active: z.boolean(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
inclusive: z.boolean(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetTaxRates,
            },
        

             'stripe.GetTerminalConfigurations/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
is_account_default: z.boolean(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetTerminalConfigurations,
            },
        

             'stripe.GetTerminalLocations/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetTerminalLocations,
            },
        

             'stripe.GetTerminalReaders/sync': {
                schema: z.object({
                  device_type: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
location: z.string(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTerminalReaders,
            },
        

             'stripe.GetTestHelpersTestClocks/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetTestHelpersTestClocks,
            },
        

             'stripe.GetTopups/sync': {
                schema: z.object({
                  amount: z.string(),
created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTopups,
            },
        

             'stripe.GetTransfers/sync': {
                schema: z.object({
                  created: z.string(),
destination: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string(),
transfer_group: z.string()}),
                handler: GetTransfers,
            },
        

             'stripe.GetTransfersIdReversals/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
id: z.string(),
limit: z.number(),
starting_after: z.string(),
id: z.string()}),
                handler: GetTransfersIdReversals,
            },
        

             'stripe.GetTreasuryCreditReversals/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
received_credit: z.string(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryCreditReversals,
            },
        

             'stripe.GetTreasuryDebitReversals/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
received_debit: z.string(),
resolution: z.string(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryDebitReversals,
            },
        

             'stripe.GetTreasuryFinancialAccounts/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetTreasuryFinancialAccounts,
            },
        

             'stripe.GetTreasuryInboundTransfers/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryInboundTransfers,
            },
        

             'stripe.GetTreasuryOutboundPayments/sync': {
                schema: z.object({
                  customer: z.string(),
ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryOutboundPayments,
            },
        

             'stripe.GetTreasuryOutboundTransfers/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryOutboundTransfers,
            },
        

             'stripe.GetTreasuryReceivedCredits/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
linked_flows: z.string(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryReceivedCredits,
            },
        

             'stripe.GetTreasuryReceivedDebits/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
starting_after: z.string(),
status: z.string()}),
                handler: GetTreasuryReceivedDebits,
            },
        

             'stripe.GetTreasuryTransactionEntries/sync': {
                schema: z.object({
                  created: z.string(),
effective_at: z.string(),
ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
order_by: z.string(),
starting_after: z.string(),
transaction: z.string()}),
                handler: GetTreasuryTransactionEntries,
            },
        

             'stripe.GetTreasuryTransactions/sync': {
                schema: z.object({
                  created: z.string(),
ending_before: z.string(),
expand: z.string(),
financial_account: z.string(),
limit: z.number(),
order_by: z.string(),
starting_after: z.string(),
status: z.string(),
status_transitions: z.string()}),
                handler: GetTreasuryTransactions,
            },
        

             'stripe.GetWebhookEndpoints/sync': {
                schema: z.object({
                  ending_before: z.string(),
expand: z.string(),
limit: z.number(),
starting_after: z.string()}),
                handler: GetWebhookEndpoints,
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
        SERVER: `https://connect.stripe.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    