import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { GetAccounts } from './events/GetAccounts';
import { GetAccountsAccountCapabilities } from './events/GetAccountsAccountCapabilities';
import { GetAccountsAccountExternalAccounts } from './events/GetAccountsAccountExternalAccounts';
import { GetAccountsAccountPeople } from './events/GetAccountsAccountPeople';
import { GetAccountsAccountPersons } from './events/GetAccountsAccountPersons';
import { GetApplePayDomains } from './events/GetApplePayDomains';
import { GetApplicationFees } from './events/GetApplicationFees';
import { GetApplicationFeesIdRefunds } from './events/GetApplicationFeesIdRefunds';
import { GetAppsSecrets } from './events/GetAppsSecrets';
import { GetBalanceHistory } from './events/GetBalanceHistory';
import { GetBalanceTransactions } from './events/GetBalanceTransactions';
import { GetBillingPortalConfigurations } from './events/GetBillingPortalConfigurations';
import { GetCharges } from './events/GetCharges';
import { GetChargesChargeRefunds } from './events/GetChargesChargeRefunds';
import { GetChargesSearch } from './events/GetChargesSearch';
import { GetCheckoutSessions } from './events/GetCheckoutSessions';
import { GetCheckoutSessionsSessionLineItems } from './events/GetCheckoutSessionsSessionLineItems';
import { GetCountrySpecs } from './events/GetCountrySpecs';
import { GetCoupons } from './events/GetCoupons';
import { GetCreditNotes } from './events/GetCreditNotes';
import { GetCreditNotesCreditNoteLines } from './events/GetCreditNotesCreditNoteLines';
import { GetCreditNotesPreviewLines } from './events/GetCreditNotesPreviewLines';
import { GetCustomers } from './events/GetCustomers';
import { GetCustomersCustomerBalanceTransactions } from './events/GetCustomersCustomerBalanceTransactions';
import { GetCustomersCustomerBankAccounts } from './events/GetCustomersCustomerBankAccounts';
import { GetCustomersCustomerCards } from './events/GetCustomersCustomerCards';
import { GetCustomersCustomerCashBalanceTransactions } from './events/GetCustomersCustomerCashBalanceTransactions';
import { GetCustomersCustomerPaymentMethods } from './events/GetCustomersCustomerPaymentMethods';
import { GetCustomersCustomerSources } from './events/GetCustomersCustomerSources';
import { GetCustomersCustomerSubscriptions } from './events/GetCustomersCustomerSubscriptions';
import { GetCustomersCustomerTaxIds } from './events/GetCustomersCustomerTaxIds';
import { GetCustomersSearch } from './events/GetCustomersSearch';
import { GetDisputes } from './events/GetDisputes';
import { GetEvents } from './events/GetEvents';
import { GetExchangeRates } from './events/GetExchangeRates';
import { GetFileLinks } from './events/GetFileLinks';
import { GetFiles } from './events/GetFiles';
import { GetFinancialConnectionsAccounts } from './events/GetFinancialConnectionsAccounts';
import { GetFinancialConnectionsAccountsAccountOwners } from './events/GetFinancialConnectionsAccountsAccountOwners';
import { GetIdentityVerificationReports } from './events/GetIdentityVerificationReports';
import { GetIdentityVerificationSessions } from './events/GetIdentityVerificationSessions';
import { GetInvoiceitems } from './events/GetInvoiceitems';
import { GetInvoices } from './events/GetInvoices';
import { GetInvoicesInvoiceLines } from './events/GetInvoicesInvoiceLines';
import { GetInvoicesSearch } from './events/GetInvoicesSearch';
import { GetInvoicesUpcomingLines } from './events/GetInvoicesUpcomingLines';
import { GetIssuingAuthorizations } from './events/GetIssuingAuthorizations';
import { GetIssuingCardholders } from './events/GetIssuingCardholders';
import { GetIssuingCards } from './events/GetIssuingCards';
import { GetIssuingDisputes } from './events/GetIssuingDisputes';
import { GetIssuingSettlements } from './events/GetIssuingSettlements';
import { GetIssuingTransactions } from './events/GetIssuingTransactions';
import { GetLinkedAccounts } from './events/GetLinkedAccounts';
import { GetLinkedAccountsAccountOwners } from './events/GetLinkedAccountsAccountOwners';
import { GetPaymentIntents } from './events/GetPaymentIntents';
import { GetPaymentIntentsSearch } from './events/GetPaymentIntentsSearch';
import { GetPaymentLinks } from './events/GetPaymentLinks';
import { GetPaymentLinksPaymentLinkLineItems } from './events/GetPaymentLinksPaymentLinkLineItems';
import { GetPaymentMethods } from './events/GetPaymentMethods';
import { GetPayouts } from './events/GetPayouts';
import { GetPlans } from './events/GetPlans';
import { GetPrices } from './events/GetPrices';
import { GetPricesSearch } from './events/GetPricesSearch';
import { GetProducts } from './events/GetProducts';
import { GetProductsSearch } from './events/GetProductsSearch';
import { GetPromotionCodes } from './events/GetPromotionCodes';
import { GetQuotes } from './events/GetQuotes';
import { GetQuotesQuoteComputedUpfrontLineItems } from './events/GetQuotesQuoteComputedUpfrontLineItems';
import { GetQuotesQuoteLineItems } from './events/GetQuotesQuoteLineItems';
import { GetRadarEarlyFraudWarnings } from './events/GetRadarEarlyFraudWarnings';
import { GetRadarValueListItems } from './events/GetRadarValueListItems';
import { GetRadarValueLists } from './events/GetRadarValueLists';
import { GetRefunds } from './events/GetRefunds';
import { GetReportingReportRuns } from './events/GetReportingReportRuns';
import { GetReportingReportTypes } from './events/GetReportingReportTypes';
import { GetReviews } from './events/GetReviews';
import { GetSetupAttempts } from './events/GetSetupAttempts';
import { GetSetupIntents } from './events/GetSetupIntents';
import { GetShippingRates } from './events/GetShippingRates';
import { GetSigmaScheduledQueryRuns } from './events/GetSigmaScheduledQueryRuns';
import { GetSourcesSourceSourceTransactions } from './events/GetSourcesSourceSourceTransactions';
import { GetSubscriptionItems } from './events/GetSubscriptionItems';
import { GetSubscriptionItemsSubscriptionItemUsageRecordSummaries } from './events/GetSubscriptionItemsSubscriptionItemUsageRecordSummaries';
import { GetSubscriptionSchedules } from './events/GetSubscriptionSchedules';
import { GetSubscriptions } from './events/GetSubscriptions';
import { GetSubscriptionsSearch } from './events/GetSubscriptionsSearch';
import { GetTaxCalculationsCalculationLineItems } from './events/GetTaxCalculationsCalculationLineItems';
import { GetTaxCodes } from './events/GetTaxCodes';
import { GetTaxRates } from './events/GetTaxRates';
import { GetTaxTransactionsTransactionLineItems } from './events/GetTaxTransactionsTransactionLineItems';
import { GetTerminalConfigurations } from './events/GetTerminalConfigurations';
import { GetTerminalLocations } from './events/GetTerminalLocations';
import { GetTerminalReaders } from './events/GetTerminalReaders';
import { GetTestHelpersTestClocks } from './events/GetTestHelpersTestClocks';
import { GetTopups } from './events/GetTopups';
import { GetTransfers } from './events/GetTransfers';
import { GetTransfersIdReversals } from './events/GetTransfersIdReversals';
import { GetTreasuryCreditReversals } from './events/GetTreasuryCreditReversals';
import { GetTreasuryDebitReversals } from './events/GetTreasuryDebitReversals';
import { GetTreasuryFinancialAccounts } from './events/GetTreasuryFinancialAccounts';
import { GetTreasuryInboundTransfers } from './events/GetTreasuryInboundTransfers';
import { GetTreasuryOutboundPayments } from './events/GetTreasuryOutboundPayments';
import { GetTreasuryOutboundTransfers } from './events/GetTreasuryOutboundTransfers';
import { GetTreasuryReceivedCredits } from './events/GetTreasuryReceivedCredits';
import { GetTreasuryReceivedDebits } from './events/GetTreasuryReceivedDebits';
import { GetTreasuryTransactionEntries } from './events/GetTreasuryTransactionEntries';
import { GetTreasuryTransactions } from './events/GetTreasuryTransactions';
import { GetWebhookEndpoints } from './events/GetWebhookEndpoints';
import type openapi from './openapi';

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
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'stripe.account/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetAccounts,
      },

      'stripe.capability/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetAccountsAccountCapabilities,
      },

      'stripe.undefined/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetAccountsAccountExternalAccounts,
      },

      'stripe.person/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetAccountsAccountPeople,
      },

      'stripe.person/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetAccountsAccountPersons,
      },

      'stripe.apple_pay_domain/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetApplePayDomains,
      },

      'stripe.application_fee/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetApplicationFees,
      },

      'stripe.fee_refund/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetApplicationFeesIdRefunds,
      },

      'stripe.apps.secret/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetAppsSecrets,
      },

      'stripe.balance_transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetBalanceHistory,
      },

      'stripe.balance_transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetBalanceTransactions,
      },

      'stripe.billing_portal.configuration/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetBillingPortalConfigurations,
      },

      'stripe.charge/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCharges,
      },

      'stripe.charge/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetChargesSearch,
      },

      'stripe.refund/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetChargesChargeRefunds,
      },

      'stripe.checkout.session/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCheckoutSessions,
      },

      'stripe.item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCheckoutSessionsSessionLineItems,
      },

      'stripe.country_spec/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCountrySpecs,
      },

      'stripe.coupon/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCoupons,
      },

      'stripe.credit_note/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCreditNotes,
      },

      'stripe.credit_note_line_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCreditNotesPreviewLines,
      },

      'stripe.credit_note_line_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCreditNotesCreditNoteLines,
      },

      'stripe.customer/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomers,
      },

      'stripe.customer/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersSearch,
      },

      'stripe.customer_balance_transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerBalanceTransactions,
      },

      'stripe.bank_account/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerBankAccounts,
      },

      'stripe.card/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerCards,
      },

      'stripe.customer_cash_balance_transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerCashBalanceTransactions,
      },

      'stripe.payment_method/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerPaymentMethods,
      },

      'stripe.undefined/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerSources,
      },

      'stripe.subscription/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerSubscriptions,
      },

      'stripe.tax_id/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetCustomersCustomerTaxIds,
      },

      'stripe.dispute/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetDisputes,
      },

      'stripe.event/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetEvents,
      },

      'stripe.exchange_rate/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetExchangeRates,
      },

      'stripe.file_link/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetFileLinks,
      },

      'stripe.file/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetFiles,
      },

      'stripe.financial_connections.account/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetFinancialConnectionsAccounts,
      },

      'stripe.financial_connections.account_owner/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetFinancialConnectionsAccountsAccountOwners,
      },

      'stripe.identity.verification_report/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIdentityVerificationReports,
      },

      'stripe.identity.verification_session/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIdentityVerificationSessions,
      },

      'stripe.invoiceitem/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetInvoiceitems,
      },

      'stripe.invoice/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetInvoices,
      },

      'stripe.invoice/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetInvoicesSearch,
      },

      'stripe.line_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetInvoicesUpcomingLines,
      },

      'stripe.line_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetInvoicesInvoiceLines,
      },

      'stripe.issuing.authorization/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIssuingAuthorizations,
      },

      'stripe.issuing.cardholder/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIssuingCardholders,
      },

      'stripe.issuing.card/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIssuingCards,
      },

      'stripe.issuing.dispute/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIssuingDisputes,
      },

      'stripe.issuing.settlement/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIssuingSettlements,
      },

      'stripe.issuing.transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetIssuingTransactions,
      },

      'stripe.financial_connections.account/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetLinkedAccounts,
      },

      'stripe.financial_connections.account_owner/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetLinkedAccountsAccountOwners,
      },

      'stripe.payment_intent/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPaymentIntents,
      },

      'stripe.payment_intent/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPaymentIntentsSearch,
      },

      'stripe.payment_link/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPaymentLinks,
      },

      'stripe.item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPaymentLinksPaymentLinkLineItems,
      },

      'stripe.payment_method/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPaymentMethods,
      },

      'stripe.payout/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPayouts,
      },

      'stripe.plan/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPlans,
      },

      'stripe.price/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPrices,
      },

      'stripe.price/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPricesSearch,
      },

      'stripe.product/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetProducts,
      },

      'stripe.product/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetProductsSearch,
      },

      'stripe.promotion_code/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetPromotionCodes,
      },

      'stripe.quote/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetQuotes,
      },

      'stripe.item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetQuotesQuoteComputedUpfrontLineItems,
      },

      'stripe.item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetQuotesQuoteLineItems,
      },

      'stripe.radar.early_fraud_warning/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetRadarEarlyFraudWarnings,
      },

      'stripe.radar.value_list_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetRadarValueListItems,
      },

      'stripe.radar.value_list/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetRadarValueLists,
      },

      'stripe.refund/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetRefunds,
      },

      'stripe.reporting.report_run/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetReportingReportRuns,
      },

      'stripe.reporting.report_type/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetReportingReportTypes,
      },

      'stripe.review/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetReviews,
      },

      'stripe.setup_attempt/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSetupAttempts,
      },

      'stripe.setup_intent/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSetupIntents,
      },

      'stripe.shipping_rate/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetShippingRates,
      },

      'stripe.scheduled_query_run/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSigmaScheduledQueryRuns,
      },

      'stripe.source_transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSourcesSourceSourceTransactions,
      },

      'stripe.subscription_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSubscriptionItems,
      },

      'stripe.usage_record_summary/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSubscriptionItemsSubscriptionItemUsageRecordSummaries,
      },

      'stripe.subscription_schedule/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSubscriptionSchedules,
      },

      'stripe.subscription/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSubscriptions,
      },

      'stripe.subscription/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetSubscriptionsSearch,
      },

      'stripe.tax.calculation_line_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTaxCalculationsCalculationLineItems,
      },

      'stripe.tax.transaction_line_item/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTaxTransactionsTransactionLineItems,
      },

      'stripe.tax_code/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTaxCodes,
      },

      'stripe.tax_rate/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTaxRates,
      },

      'stripe.terminal.configuration/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTerminalConfigurations,
      },

      'stripe.terminal.location/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTerminalLocations,
      },

      'stripe.terminal.reader/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTerminalReaders,
      },

      'stripe.test_helpers.test_clock/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTestHelpersTestClocks,
      },

      'stripe.topup/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTopups,
      },

      'stripe.transfer/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTransfers,
      },

      'stripe.transfer_reversal/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTransfersIdReversals,
      },

      'stripe.treasury.credit_reversal/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryCreditReversals,
      },

      'stripe.treasury.debit_reversal/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryDebitReversals,
      },

      'stripe.treasury.financial_account/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryFinancialAccounts,
      },

      'stripe.treasury.inbound_transfer/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryInboundTransfers,
      },

      'stripe.treasury.outbound_payment/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryOutboundPayments,
      },

      'stripe.treasury.outbound_transfer/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryOutboundTransfers,
      },

      'stripe.treasury.received_credit/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryReceivedCredits,
      },

      'stripe.treasury.received_debit/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryReceivedDebits,
      },

      'stripe.treasury.transaction_entry/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryTransactionEntries,
      },

      'stripe.treasury.transaction/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetTreasuryTransactions,
      },

      'stripe.webhook_endpoint/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: GetWebhookEndpoints,
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
        SERVER: `https://connect.stripe.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
