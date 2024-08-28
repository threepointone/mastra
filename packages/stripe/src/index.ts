import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { GetAccount } from './events/GetAccount';
import { GetAccounts } from './events/GetAccounts';
import { GetAccountsAccount } from './events/GetAccountsAccount';
import { GetAccountsAccountBankAccountsId } from './events/GetAccountsAccountBankAccountsId';
import { GetAccountsAccountCapabilities } from './events/GetAccountsAccountCapabilities';
import { GetAccountsAccountCapabilitiesCapability } from './events/GetAccountsAccountCapabilitiesCapability';
import { GetAccountsAccountExternalAccounts } from './events/GetAccountsAccountExternalAccounts';
import { GetAccountsAccountExternalAccountsId } from './events/GetAccountsAccountExternalAccountsId';
import { GetAccountsAccountPeople } from './events/GetAccountsAccountPeople';
import { GetAccountsAccountPeoplePerson } from './events/GetAccountsAccountPeoplePerson';
import { GetAccountsAccountPersons } from './events/GetAccountsAccountPersons';
import { GetAccountsAccountPersonsPerson } from './events/GetAccountsAccountPersonsPerson';
import { GetApplePayDomains } from './events/GetApplePayDomains';
import { GetApplePayDomainsDomain } from './events/GetApplePayDomainsDomain';
import { GetApplicationFees } from './events/GetApplicationFees';
import { GetApplicationFeesFeeRefundsId } from './events/GetApplicationFeesFeeRefundsId';
import { GetApplicationFeesId } from './events/GetApplicationFeesId';
import { GetApplicationFeesIdRefunds } from './events/GetApplicationFeesIdRefunds';
import { GetAppsSecrets } from './events/GetAppsSecrets';
import { GetAppsSecretsFind } from './events/GetAppsSecretsFind';
import { GetBalance } from './events/GetBalance';
import { GetBalanceHistory } from './events/GetBalanceHistory';
import { GetBalanceHistoryId } from './events/GetBalanceHistoryId';
import { GetBalanceTransactions } from './events/GetBalanceTransactions';
import { GetBalanceTransactionsId } from './events/GetBalanceTransactionsId';
import { GetBillingPortalConfigurations } from './events/GetBillingPortalConfigurations';
import { GetBillingPortalConfigurationsConfiguration } from './events/GetBillingPortalConfigurationsConfiguration';
import { GetCharges } from './events/GetCharges';
import { GetChargesCharge } from './events/GetChargesCharge';
import { GetChargesChargeDispute } from './events/GetChargesChargeDispute';
import { GetChargesChargeRefunds } from './events/GetChargesChargeRefunds';
import { GetChargesChargeRefundsRefund } from './events/GetChargesChargeRefundsRefund';
import { GetChargesSearch } from './events/GetChargesSearch';
import { GetCheckoutSessions } from './events/GetCheckoutSessions';
import { GetCheckoutSessionsSession } from './events/GetCheckoutSessionsSession';
import { GetCheckoutSessionsSessionLineItems } from './events/GetCheckoutSessionsSessionLineItems';
import { GetCountrySpecs } from './events/GetCountrySpecs';
import { GetCountrySpecsCountry } from './events/GetCountrySpecsCountry';
import { GetCoupons } from './events/GetCoupons';
import { GetCouponsCoupon } from './events/GetCouponsCoupon';
import { GetCreditNotes } from './events/GetCreditNotes';
import { GetCreditNotesCreditNoteLines } from './events/GetCreditNotesCreditNoteLines';
import { GetCreditNotesId } from './events/GetCreditNotesId';
import { GetCreditNotesPreview } from './events/GetCreditNotesPreview';
import { GetCreditNotesPreviewLines } from './events/GetCreditNotesPreviewLines';
import { GetCustomers } from './events/GetCustomers';
import { GetCustomersCustomerBalanceTransactions } from './events/GetCustomersCustomerBalanceTransactions';
import { GetCustomersCustomerBalanceTransactionsTransaction } from './events/GetCustomersCustomerBalanceTransactionsTransaction';
import { GetCustomersCustomerBankAccounts } from './events/GetCustomersCustomerBankAccounts';
import { GetCustomersCustomerBankAccountsId } from './events/GetCustomersCustomerBankAccountsId';
import { GetCustomersCustomerCards } from './events/GetCustomersCustomerCards';
import { GetCustomersCustomerCardsId } from './events/GetCustomersCustomerCardsId';
import { GetCustomersCustomerCashBalance } from './events/GetCustomersCustomerCashBalance';
import { GetCustomersCustomerCashBalanceTransactions } from './events/GetCustomersCustomerCashBalanceTransactions';
import { GetCustomersCustomerCashBalanceTransactionsTransaction } from './events/GetCustomersCustomerCashBalanceTransactionsTransaction';
import { GetCustomersCustomerDiscount } from './events/GetCustomersCustomerDiscount';
import { GetCustomersCustomerPaymentMethods } from './events/GetCustomersCustomerPaymentMethods';
import { GetCustomersCustomerPaymentMethodsPaymentMethod } from './events/GetCustomersCustomerPaymentMethodsPaymentMethod';
import { GetCustomersCustomerSources } from './events/GetCustomersCustomerSources';
import { GetCustomersCustomerSourcesId } from './events/GetCustomersCustomerSourcesId';
import { GetCustomersCustomerSubscriptions } from './events/GetCustomersCustomerSubscriptions';
import { GetCustomersCustomerSubscriptionsSubscriptionExposedId } from './events/GetCustomersCustomerSubscriptionsSubscriptionExposedId';
import { GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount } from './events/GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount';
import { GetCustomersCustomerTaxIds } from './events/GetCustomersCustomerTaxIds';
import { GetCustomersCustomerTaxIdsId } from './events/GetCustomersCustomerTaxIdsId';
import { GetCustomersSearch } from './events/GetCustomersSearch';
import { GetDisputes } from './events/GetDisputes';
import { GetDisputesDispute } from './events/GetDisputesDispute';
import { GetEvents } from './events/GetEvents';
import { GetEventsId } from './events/GetEventsId';
import { GetExchangeRates } from './events/GetExchangeRates';
import { GetExchangeRatesRateId } from './events/GetExchangeRatesRateId';
import { GetFileLinks } from './events/GetFileLinks';
import { GetFileLinksLink } from './events/GetFileLinksLink';
import { GetFiles } from './events/GetFiles';
import { GetFilesFile } from './events/GetFilesFile';
import { GetFinancialConnectionsAccounts } from './events/GetFinancialConnectionsAccounts';
import { GetFinancialConnectionsAccountsAccount } from './events/GetFinancialConnectionsAccountsAccount';
import { GetFinancialConnectionsAccountsAccountOwners } from './events/GetFinancialConnectionsAccountsAccountOwners';
import { GetFinancialConnectionsSessionsSession } from './events/GetFinancialConnectionsSessionsSession';
import { GetIdentityVerificationReports } from './events/GetIdentityVerificationReports';
import { GetIdentityVerificationReportsReport } from './events/GetIdentityVerificationReportsReport';
import { GetIdentityVerificationSessions } from './events/GetIdentityVerificationSessions';
import { GetIdentityVerificationSessionsSession } from './events/GetIdentityVerificationSessionsSession';
import { GetInvoiceitems } from './events/GetInvoiceitems';
import { GetInvoiceitemsInvoiceitem } from './events/GetInvoiceitemsInvoiceitem';
import { GetInvoices } from './events/GetInvoices';
import { GetInvoicesInvoice } from './events/GetInvoicesInvoice';
import { GetInvoicesInvoiceLines } from './events/GetInvoicesInvoiceLines';
import { GetInvoicesSearch } from './events/GetInvoicesSearch';
import { GetInvoicesUpcoming } from './events/GetInvoicesUpcoming';
import { GetInvoicesUpcomingLines } from './events/GetInvoicesUpcomingLines';
import { GetIssuingAuthorizations } from './events/GetIssuingAuthorizations';
import { GetIssuingAuthorizationsAuthorization } from './events/GetIssuingAuthorizationsAuthorization';
import { GetIssuingCardholders } from './events/GetIssuingCardholders';
import { GetIssuingCardholdersCardholder } from './events/GetIssuingCardholdersCardholder';
import { GetIssuingCards } from './events/GetIssuingCards';
import { GetIssuingCardsCard } from './events/GetIssuingCardsCard';
import { GetIssuingDisputes } from './events/GetIssuingDisputes';
import { GetIssuingDisputesDispute } from './events/GetIssuingDisputesDispute';
import { GetIssuingSettlements } from './events/GetIssuingSettlements';
import { GetIssuingSettlementsSettlement } from './events/GetIssuingSettlementsSettlement';
import { GetIssuingTransactions } from './events/GetIssuingTransactions';
import { GetIssuingTransactionsTransaction } from './events/GetIssuingTransactionsTransaction';
import { GetLinkAccountSessionsSession } from './events/GetLinkAccountSessionsSession';
import { GetLinkedAccounts } from './events/GetLinkedAccounts';
import { GetLinkedAccountsAccount } from './events/GetLinkedAccountsAccount';
import { GetLinkedAccountsAccountOwners } from './events/GetLinkedAccountsAccountOwners';
import { GetMandatesMandate } from './events/GetMandatesMandate';
import { GetPaymentIntents } from './events/GetPaymentIntents';
import { GetPaymentIntentsIntent } from './events/GetPaymentIntentsIntent';
import { GetPaymentIntentsSearch } from './events/GetPaymentIntentsSearch';
import { GetPaymentLinks } from './events/GetPaymentLinks';
import { GetPaymentLinksPaymentLink } from './events/GetPaymentLinksPaymentLink';
import { GetPaymentLinksPaymentLinkLineItems } from './events/GetPaymentLinksPaymentLinkLineItems';
import { GetPaymentMethods } from './events/GetPaymentMethods';
import { GetPaymentMethodsPaymentMethod } from './events/GetPaymentMethodsPaymentMethod';
import { GetPayouts } from './events/GetPayouts';
import { GetPayoutsPayout } from './events/GetPayoutsPayout';
import { GetPlans } from './events/GetPlans';
import { GetPlansPlan } from './events/GetPlansPlan';
import { GetPrices } from './events/GetPrices';
import { GetPricesPrice } from './events/GetPricesPrice';
import { GetPricesSearch } from './events/GetPricesSearch';
import { GetProducts } from './events/GetProducts';
import { GetProductsId } from './events/GetProductsId';
import { GetProductsSearch } from './events/GetProductsSearch';
import { GetPromotionCodes } from './events/GetPromotionCodes';
import { GetPromotionCodesPromotionCode } from './events/GetPromotionCodesPromotionCode';
import { GetQuotes } from './events/GetQuotes';
import { GetQuotesQuote } from './events/GetQuotesQuote';
import { GetQuotesQuoteComputedUpfrontLineItems } from './events/GetQuotesQuoteComputedUpfrontLineItems';
import { GetQuotesQuoteLineItems } from './events/GetQuotesQuoteLineItems';
import { GetRadarEarlyFraudWarnings } from './events/GetRadarEarlyFraudWarnings';
import { GetRadarEarlyFraudWarningsEarlyFraudWarning } from './events/GetRadarEarlyFraudWarningsEarlyFraudWarning';
import { GetRadarValueListItems } from './events/GetRadarValueListItems';
import { GetRadarValueListItemsItem } from './events/GetRadarValueListItemsItem';
import { GetRadarValueLists } from './events/GetRadarValueLists';
import { GetRadarValueListsValueList } from './events/GetRadarValueListsValueList';
import { GetRefunds } from './events/GetRefunds';
import { GetRefundsRefund } from './events/GetRefundsRefund';
import { GetReportingReportRuns } from './events/GetReportingReportRuns';
import { GetReportingReportRunsReportRun } from './events/GetReportingReportRunsReportRun';
import { GetReportingReportTypes } from './events/GetReportingReportTypes';
import { GetReportingReportTypesReportType } from './events/GetReportingReportTypesReportType';
import { GetReviews } from './events/GetReviews';
import { GetReviewsReview } from './events/GetReviewsReview';
import { GetSetupAttempts } from './events/GetSetupAttempts';
import { GetSetupIntents } from './events/GetSetupIntents';
import { GetSetupIntentsIntent } from './events/GetSetupIntentsIntent';
import { GetShippingRates } from './events/GetShippingRates';
import { GetShippingRatesShippingRateToken } from './events/GetShippingRatesShippingRateToken';
import { GetSigmaScheduledQueryRuns } from './events/GetSigmaScheduledQueryRuns';
import { GetSigmaScheduledQueryRunsScheduledQueryRun } from './events/GetSigmaScheduledQueryRunsScheduledQueryRun';
import { GetSourcesSource } from './events/GetSourcesSource';
import { GetSourcesSourceMandateNotificationsMandateNotification } from './events/GetSourcesSourceMandateNotificationsMandateNotification';
import { GetSourcesSourceSourceTransactions } from './events/GetSourcesSourceSourceTransactions';
import { GetSourcesSourceSourceTransactionsSourceTransaction } from './events/GetSourcesSourceSourceTransactionsSourceTransaction';
import { GetSubscriptionItems } from './events/GetSubscriptionItems';
import { GetSubscriptionItemsItem } from './events/GetSubscriptionItemsItem';
import { GetSubscriptionItemsSubscriptionItemUsageRecordSummaries } from './events/GetSubscriptionItemsSubscriptionItemUsageRecordSummaries';
import { GetSubscriptionSchedules } from './events/GetSubscriptionSchedules';
import { GetSubscriptionSchedulesSchedule } from './events/GetSubscriptionSchedulesSchedule';
import { GetSubscriptions } from './events/GetSubscriptions';
import { GetSubscriptionsSearch } from './events/GetSubscriptionsSearch';
import { GetSubscriptionsSubscriptionExposedId } from './events/GetSubscriptionsSubscriptionExposedId';
import { GetTaxCalculationsCalculationLineItems } from './events/GetTaxCalculationsCalculationLineItems';
import { GetTaxCodes } from './events/GetTaxCodes';
import { GetTaxCodesId } from './events/GetTaxCodesId';
import { GetTaxRates } from './events/GetTaxRates';
import { GetTaxRatesTaxRate } from './events/GetTaxRatesTaxRate';
import { GetTaxTransactionsTransaction } from './events/GetTaxTransactionsTransaction';
import { GetTaxTransactionsTransactionLineItems } from './events/GetTaxTransactionsTransactionLineItems';
import { GetTerminalConfigurations } from './events/GetTerminalConfigurations';
import { GetTerminalLocations } from './events/GetTerminalLocations';
import { GetTerminalReaders } from './events/GetTerminalReaders';
import { GetTestHelpersTestClocks } from './events/GetTestHelpersTestClocks';
import { GetTestHelpersTestClocksTestClock } from './events/GetTestHelpersTestClocksTestClock';
import { GetTokensToken } from './events/GetTokensToken';
import { GetTopups } from './events/GetTopups';
import { GetTopupsTopup } from './events/GetTopupsTopup';
import { GetTransfers } from './events/GetTransfers';
import { GetTransfersIdReversals } from './events/GetTransfersIdReversals';
import { GetTransfersTransfer } from './events/GetTransfersTransfer';
import { GetTransfersTransferReversalsId } from './events/GetTransfersTransferReversalsId';
import { GetTreasuryCreditReversals } from './events/GetTreasuryCreditReversals';
import { GetTreasuryCreditReversalsCreditReversal } from './events/GetTreasuryCreditReversalsCreditReversal';
import { GetTreasuryDebitReversals } from './events/GetTreasuryDebitReversals';
import { GetTreasuryDebitReversalsDebitReversal } from './events/GetTreasuryDebitReversalsDebitReversal';
import { GetTreasuryFinancialAccounts } from './events/GetTreasuryFinancialAccounts';
import { GetTreasuryFinancialAccountsFinancialAccount } from './events/GetTreasuryFinancialAccountsFinancialAccount';
import { GetTreasuryFinancialAccountsFinancialAccountFeatures } from './events/GetTreasuryFinancialAccountsFinancialAccountFeatures';
import { GetTreasuryInboundTransfers } from './events/GetTreasuryInboundTransfers';
import { GetTreasuryInboundTransfersId } from './events/GetTreasuryInboundTransfersId';
import { GetTreasuryOutboundPayments } from './events/GetTreasuryOutboundPayments';
import { GetTreasuryOutboundPaymentsId } from './events/GetTreasuryOutboundPaymentsId';
import { GetTreasuryOutboundTransfers } from './events/GetTreasuryOutboundTransfers';
import { GetTreasuryOutboundTransfersOutboundTransfer } from './events/GetTreasuryOutboundTransfersOutboundTransfer';
import { GetTreasuryReceivedCredits } from './events/GetTreasuryReceivedCredits';
import { GetTreasuryReceivedCreditsId } from './events/GetTreasuryReceivedCreditsId';
import { GetTreasuryReceivedDebits } from './events/GetTreasuryReceivedDebits';
import { GetTreasuryReceivedDebitsId } from './events/GetTreasuryReceivedDebitsId';
import { GetTreasuryTransactionEntries } from './events/GetTreasuryTransactionEntries';
import { GetTreasuryTransactionEntriesId } from './events/GetTreasuryTransactionEntriesId';
import { GetTreasuryTransactions } from './events/GetTreasuryTransactions';
import { GetTreasuryTransactionsId } from './events/GetTreasuryTransactionsId';
import { GetWebhookEndpoints } from './events/GetWebhookEndpoints';
import { GetWebhookEndpointsWebhookEndpoint } from './events/GetWebhookEndpointsWebhookEndpoint';
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
      'stripe.GetAccount/sync': {
        schema: z.object({
          expand: z.string(),
        }),
        handler: GetAccount,
      },

      'stripe.GetAccounts/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetAccounts,
      },

      'stripe.GetAccountsAccount/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          account: z.string(),
        }),
        handler: GetAccountsAccount,
      },

      'stripe.GetAccountsAccountBankAccountsId/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          id: z.string(),
          account: z.string(),
          id: z.string(),
        }),
        handler: GetAccountsAccountBankAccountsId,
      },

      'stripe.GetAccountsAccountCapabilities/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          account: z.string(),
        }),
        handler: GetAccountsAccountCapabilities,
      },

      'stripe.GetAccountsAccountCapabilitiesCapability/sync': {
        schema: z.object({
          account: z.string(),
          capability: z.string(),
          expand: z.string(),
          account: z.string(),
          capability: z.string(),
        }),
        handler: GetAccountsAccountCapabilitiesCapability,
      },

      'stripe.GetAccountsAccountExternalAccounts/sync': {
        schema: z.object({
          account: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          account: z.string(),
        }),
        handler: GetAccountsAccountExternalAccounts,
      },

      'stripe.GetAccountsAccountExternalAccountsId/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          id: z.string(),
          account: z.string(),
          id: z.string(),
        }),
        handler: GetAccountsAccountExternalAccountsId,
      },

      'stripe.GetAccountsAccountPeople/sync': {
        schema: z.object({
          account: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          relationship: z.string(),
          starting_after: z.string(),
          account: z.string(),
        }),
        handler: GetAccountsAccountPeople,
      },

      'stripe.GetAccountsAccountPeoplePerson/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          person: z.string(),
          account: z.string(),
          person: z.string(),
        }),
        handler: GetAccountsAccountPeoplePerson,
      },

      'stripe.GetAccountsAccountPersons/sync': {
        schema: z.object({
          account: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          relationship: z.string(),
          starting_after: z.string(),
          account: z.string(),
        }),
        handler: GetAccountsAccountPersons,
      },

      'stripe.GetAccountsAccountPersonsPerson/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          person: z.string(),
          account: z.string(),
          person: z.string(),
        }),
        handler: GetAccountsAccountPersonsPerson,
      },

      'stripe.GetApplePayDomains/sync': {
        schema: z.object({
          domain_name: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetApplePayDomains,
      },

      'stripe.GetApplePayDomainsDomain/sync': {
        schema: z.object({
          domain: z.string(),
          expand: z.string(),
          domain: z.string(),
        }),
        handler: GetApplePayDomainsDomain,
      },

      'stripe.GetApplicationFees/sync': {
        schema: z.object({
          charge: z.string(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetApplicationFees,
      },

      'stripe.GetApplicationFeesFeeRefundsId/sync': {
        schema: z.object({
          expand: z.string(),
          fee: z.string(),
          id: z.string(),
          fee: z.string(),
          id: z.string(),
        }),
        handler: GetApplicationFeesFeeRefundsId,
      },

      'stripe.GetApplicationFeesId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetApplicationFeesId,
      },

      'stripe.GetApplicationFeesIdRefunds/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          id: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          id: z.string(),
        }),
        handler: GetApplicationFeesIdRefunds,
      },

      'stripe.GetAppsSecrets/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          scope: z.string(),
          starting_after: z.string(),
        }),
        handler: GetAppsSecrets,
      },

      'stripe.GetAppsSecretsFind/sync': {
        schema: z.object({
          expand: z.string(),
          name: z.string(),
          scope: z.string(),
        }),
        handler: GetAppsSecretsFind,
      },

      'stripe.GetBalance/sync': {
        schema: z.object({
          expand: z.string(),
        }),
        handler: GetBalance,
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
          type: z.string(),
        }),
        handler: GetBalanceHistory,
      },

      'stripe.GetBalanceHistoryId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetBalanceHistoryId,
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
          type: z.string(),
        }),
        handler: GetBalanceTransactions,
      },

      'stripe.GetBalanceTransactionsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetBalanceTransactionsId,
      },

      'stripe.GetBillingPortalConfigurations/sync': {
        schema: z.object({
          active: z.boolean(),
          ending_before: z.string(),
          expand: z.string(),
          is_default: z.boolean(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetBillingPortalConfigurations,
      },

      'stripe.GetBillingPortalConfigurationsConfiguration/sync': {
        schema: z.object({
          configuration: z.string(),
          expand: z.string(),
          configuration: z.string(),
        }),
        handler: GetBillingPortalConfigurationsConfiguration,
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
          transfer_group: z.string(),
        }),
        handler: GetCharges,
      },

      'stripe.GetChargesSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetChargesSearch,
      },

      'stripe.GetChargesCharge/sync': {
        schema: z.object({
          charge: z.string(),
          expand: z.string(),
          charge: z.string(),
        }),
        handler: GetChargesCharge,
      },

      'stripe.GetChargesChargeDispute/sync': {
        schema: z.object({
          charge: z.string(),
          expand: z.string(),
          charge: z.string(),
        }),
        handler: GetChargesChargeDispute,
      },

      'stripe.GetChargesChargeRefunds/sync': {
        schema: z.object({
          charge: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          charge: z.string(),
        }),
        handler: GetChargesChargeRefunds,
      },

      'stripe.GetChargesChargeRefundsRefund/sync': {
        schema: z.object({
          charge: z.string(),
          expand: z.string(),
          refund: z.string(),
          charge: z.string(),
          refund: z.string(),
        }),
        handler: GetChargesChargeRefundsRefund,
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
          subscription: z.string(),
        }),
        handler: GetCheckoutSessions,
      },

      'stripe.GetCheckoutSessionsSession/sync': {
        schema: z.object({
          expand: z.string(),
          session: z.string(),
          session: z.string(),
        }),
        handler: GetCheckoutSessionsSession,
      },

      'stripe.GetCheckoutSessionsSessionLineItems/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          session: z.string(),
          starting_after: z.string(),
          session: z.string(),
        }),
        handler: GetCheckoutSessionsSessionLineItems,
      },

      'stripe.GetCountrySpecs/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetCountrySpecs,
      },

      'stripe.GetCountrySpecsCountry/sync': {
        schema: z.object({
          country: z.string(),
          expand: z.string(),
          country: z.string(),
        }),
        handler: GetCountrySpecsCountry,
      },

      'stripe.GetCoupons/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetCoupons,
      },

      'stripe.GetCouponsCoupon/sync': {
        schema: z.object({
          coupon: z.string(),
          expand: z.string(),
          coupon: z.string(),
        }),
        handler: GetCouponsCoupon,
      },

      'stripe.GetCreditNotes/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          invoice: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetCreditNotes,
      },

      'stripe.GetCreditNotesPreview/sync': {
        schema: z.object({
          amount: z.number(),
          credit_amount: z.number(),
          expand: z.string(),
          invoice: z.string(),
          lines: z.string(),
          memo: z.string(),
          metadata: z.string(),
          out_of_band_amount: z.number(),
          reason: z.string(),
          refund: z.string(),
          refund_amount: z.number(),
          shipping_cost: z.string(),
        }),
        handler: GetCreditNotesPreview,
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
          starting_after: z.string(),
        }),
        handler: GetCreditNotesPreviewLines,
      },

      'stripe.GetCreditNotesCreditNoteLines/sync': {
        schema: z.object({
          credit_note: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          credit_note: z.string(),
        }),
        handler: GetCreditNotesCreditNoteLines,
      },

      'stripe.GetCreditNotesId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetCreditNotesId,
      },

      'stripe.GetCustomers/sync': {
        schema: z.object({
          created: z.string(),
          email: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          test_clock: z.string(),
        }),
        handler: GetCustomers,
      },

      'stripe.GetCustomersSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetCustomersSearch,
      },

      'stripe.GetCustomersCustomerBalanceTransactions/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerBalanceTransactions,
      },

      'stripe.GetCustomersCustomerBalanceTransactionsTransaction/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          transaction: z.string(),
          customer: z.string(),
          transaction: z.string(),
        }),
        handler: GetCustomersCustomerBalanceTransactionsTransaction,
      },

      'stripe.GetCustomersCustomerBankAccounts/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerBankAccounts,
      },

      'stripe.GetCustomersCustomerBankAccountsId/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          id: z.string(),
          customer: z.string(),
          id: z.string(),
        }),
        handler: GetCustomersCustomerBankAccountsId,
      },

      'stripe.GetCustomersCustomerCards/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerCards,
      },

      'stripe.GetCustomersCustomerCardsId/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          id: z.string(),
          customer: z.string(),
          id: z.string(),
        }),
        handler: GetCustomersCustomerCardsId,
      },

      'stripe.GetCustomersCustomerCashBalance/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerCashBalance,
      },

      'stripe.GetCustomersCustomerCashBalanceTransactions/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerCashBalanceTransactions,
      },

      'stripe.GetCustomersCustomerCashBalanceTransactionsTransaction/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          transaction: z.string(),
          customer: z.string(),
          transaction: z.string(),
        }),
        handler: GetCustomersCustomerCashBalanceTransactionsTransaction,
      },

      'stripe.GetCustomersCustomerDiscount/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerDiscount,
      },

      'stripe.GetCustomersCustomerPaymentMethods/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          type: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerPaymentMethods,
      },

      'stripe.GetCustomersCustomerPaymentMethodsPaymentMethod/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          payment_method: z.string(),
          customer: z.string(),
          payment_method: z.string(),
        }),
        handler: GetCustomersCustomerPaymentMethodsPaymentMethod,
      },

      'stripe.GetCustomersCustomerSources/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          object: z.string(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerSources,
      },

      'stripe.GetCustomersCustomerSourcesId/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          id: z.string(),
          customer: z.string(),
          id: z.string(),
        }),
        handler: GetCustomersCustomerSourcesId,
      },

      'stripe.GetCustomersCustomerSubscriptions/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerSubscriptions,
      },

      'stripe.GetCustomersCustomerSubscriptionsSubscriptionExposedId/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          subscription_exposed_id: z.string(),
          customer: z.string(),
          subscription_exposed_id: z.string(),
        }),
        handler: GetCustomersCustomerSubscriptionsSubscriptionExposedId,
      },

      'stripe.GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          subscription_exposed_id: z.string(),
          customer: z.string(),
          subscription_exposed_id: z.string(),
        }),
        handler: GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount,
      },

      'stripe.GetCustomersCustomerTaxIds/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          customer: z.string(),
        }),
        handler: GetCustomersCustomerTaxIds,
      },

      'stripe.GetCustomersCustomerTaxIdsId/sync': {
        schema: z.object({
          customer: z.string(),
          expand: z.string(),
          id: z.string(),
          customer: z.string(),
          id: z.string(),
        }),
        handler: GetCustomersCustomerTaxIdsId,
      },

      'stripe.GetDisputes/sync': {
        schema: z.object({
          charge: z.string(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          payment_intent: z.string(),
          starting_after: z.string(),
        }),
        handler: GetDisputes,
      },

      'stripe.GetDisputesDispute/sync': {
        schema: z.object({
          dispute: z.string(),
          expand: z.string(),
          dispute: z.string(),
        }),
        handler: GetDisputesDispute,
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
          types: z.string(),
        }),
        handler: GetEvents,
      },

      'stripe.GetEventsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetEventsId,
      },

      'stripe.GetExchangeRates/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetExchangeRates,
      },

      'stripe.GetExchangeRatesRateId/sync': {
        schema: z.object({
          expand: z.string(),
          rate_id: z.string(),
          rate_id: z.string(),
        }),
        handler: GetExchangeRatesRateId,
      },

      'stripe.GetFileLinks/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          expired: z.boolean(),
          file: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetFileLinks,
      },

      'stripe.GetFileLinksLink/sync': {
        schema: z.object({
          expand: z.string(),
          link: z.string(),
          link: z.string(),
        }),
        handler: GetFileLinksLink,
      },

      'stripe.GetFiles/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          purpose: z.string(),
          starting_after: z.string(),
        }),
        handler: GetFiles,
      },

      'stripe.GetFilesFile/sync': {
        schema: z.object({
          expand: z.string(),
          file: z.string(),
          file: z.string(),
        }),
        handler: GetFilesFile,
      },

      'stripe.GetFinancialConnectionsAccounts/sync': {
        schema: z.object({
          account_holder: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          session: z.string(),
          starting_after: z.string(),
        }),
        handler: GetFinancialConnectionsAccounts,
      },

      'stripe.GetFinancialConnectionsAccountsAccount/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          account: z.string(),
        }),
        handler: GetFinancialConnectionsAccountsAccount,
      },

      'stripe.GetFinancialConnectionsAccountsAccountOwners/sync': {
        schema: z.object({
          account: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          ownership: z.string(),
          starting_after: z.string(),
          account: z.string(),
        }),
        handler: GetFinancialConnectionsAccountsAccountOwners,
      },

      'stripe.GetFinancialConnectionsSessionsSession/sync': {
        schema: z.object({
          expand: z.string(),
          session: z.string(),
          session: z.string(),
        }),
        handler: GetFinancialConnectionsSessionsSession,
      },

      'stripe.GetIdentityVerificationReports/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          type: z.string(),
          verification_session: z.string(),
        }),
        handler: GetIdentityVerificationReports,
      },

      'stripe.GetIdentityVerificationReportsReport/sync': {
        schema: z.object({
          expand: z.string(),
          report: z.string(),
          report: z.string(),
        }),
        handler: GetIdentityVerificationReportsReport,
      },

      'stripe.GetIdentityVerificationSessions/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetIdentityVerificationSessions,
      },

      'stripe.GetIdentityVerificationSessionsSession/sync': {
        schema: z.object({
          expand: z.string(),
          session: z.string(),
          session: z.string(),
        }),
        handler: GetIdentityVerificationSessionsSession,
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
          starting_after: z.string(),
        }),
        handler: GetInvoiceitems,
      },

      'stripe.GetInvoiceitemsInvoiceitem/sync': {
        schema: z.object({
          expand: z.string(),
          invoiceitem: z.string(),
          invoiceitem: z.string(),
        }),
        handler: GetInvoiceitemsInvoiceitem,
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
          subscription: z.string(),
        }),
        handler: GetInvoices,
      },

      'stripe.GetInvoicesSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetInvoicesSearch,
      },

      'stripe.GetInvoicesUpcoming/sync': {
        schema: z.object({
          automatic_tax: z.string(),
          coupon: z.string(),
          currency: z.string(),
          customer: z.string(),
          customer_details: z.string(),
          discounts: z.string(),
          expand: z.string(),
          invoice_items: z.string(),
          schedule: z.string(),
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
          subscription_trial_from_plan: z.boolean(),
        }),
        handler: GetInvoicesUpcoming,
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
          subscription_trial_from_plan: z.boolean(),
        }),
        handler: GetInvoicesUpcomingLines,
      },

      'stripe.GetInvoicesInvoice/sync': {
        schema: z.object({
          expand: z.string(),
          invoice: z.string(),
          invoice: z.string(),
        }),
        handler: GetInvoicesInvoice,
      },

      'stripe.GetInvoicesInvoiceLines/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          invoice: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          invoice: z.string(),
        }),
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
          status: z.string(),
        }),
        handler: GetIssuingAuthorizations,
      },

      'stripe.GetIssuingAuthorizationsAuthorization/sync': {
        schema: z.object({
          authorization: z.string(),
          expand: z.string(),
          authorization: z.string(),
        }),
        handler: GetIssuingAuthorizationsAuthorization,
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
          type: z.string(),
        }),
        handler: GetIssuingCardholders,
      },

      'stripe.GetIssuingCardholdersCardholder/sync': {
        schema: z.object({
          cardholder: z.string(),
          expand: z.string(),
          cardholder: z.string(),
        }),
        handler: GetIssuingCardholdersCardholder,
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
          type: z.string(),
        }),
        handler: GetIssuingCards,
      },

      'stripe.GetIssuingCardsCard/sync': {
        schema: z.object({
          card: z.string(),
          expand: z.string(),
          card: z.string(),
        }),
        handler: GetIssuingCardsCard,
      },

      'stripe.GetIssuingDisputes/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
          transaction: z.string(),
        }),
        handler: GetIssuingDisputes,
      },

      'stripe.GetIssuingDisputesDispute/sync': {
        schema: z.object({
          dispute: z.string(),
          expand: z.string(),
          dispute: z.string(),
        }),
        handler: GetIssuingDisputesDispute,
      },

      'stripe.GetIssuingSettlements/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetIssuingSettlements,
      },

      'stripe.GetIssuingSettlementsSettlement/sync': {
        schema: z.object({
          expand: z.string(),
          settlement: z.string(),
          settlement: z.string(),
        }),
        handler: GetIssuingSettlementsSettlement,
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
          type: z.string(),
        }),
        handler: GetIssuingTransactions,
      },

      'stripe.GetIssuingTransactionsTransaction/sync': {
        schema: z.object({
          expand: z.string(),
          transaction: z.string(),
          transaction: z.string(),
        }),
        handler: GetIssuingTransactionsTransaction,
      },

      'stripe.GetLinkAccountSessionsSession/sync': {
        schema: z.object({
          expand: z.string(),
          session: z.string(),
          session: z.string(),
        }),
        handler: GetLinkAccountSessionsSession,
      },

      'stripe.GetLinkedAccounts/sync': {
        schema: z.object({
          account_holder: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          session: z.string(),
          starting_after: z.string(),
        }),
        handler: GetLinkedAccounts,
      },

      'stripe.GetLinkedAccountsAccount/sync': {
        schema: z.object({
          account: z.string(),
          expand: z.string(),
          account: z.string(),
        }),
        handler: GetLinkedAccountsAccount,
      },

      'stripe.GetLinkedAccountsAccountOwners/sync': {
        schema: z.object({
          account: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          ownership: z.string(),
          starting_after: z.string(),
          account: z.string(),
        }),
        handler: GetLinkedAccountsAccountOwners,
      },

      'stripe.GetMandatesMandate/sync': {
        schema: z.object({
          expand: z.string(),
          mandate: z.string(),
          mandate: z.string(),
        }),
        handler: GetMandatesMandate,
      },

      'stripe.GetPaymentIntents/sync': {
        schema: z.object({
          created: z.string(),
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetPaymentIntents,
      },

      'stripe.GetPaymentIntentsSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetPaymentIntentsSearch,
      },

      'stripe.GetPaymentIntentsIntent/sync': {
        schema: z.object({
          client_secret: z.string(),
          expand: z.string(),
          intent: z.string(),
          intent: z.string(),
        }),
        handler: GetPaymentIntentsIntent,
      },

      'stripe.GetPaymentLinks/sync': {
        schema: z.object({
          active: z.boolean(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetPaymentLinks,
      },

      'stripe.GetPaymentLinksPaymentLink/sync': {
        schema: z.object({
          expand: z.string(),
          payment_link: z.string(),
          payment_link: z.string(),
        }),
        handler: GetPaymentLinksPaymentLink,
      },

      'stripe.GetPaymentLinksPaymentLinkLineItems/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          payment_link: z.string(),
          starting_after: z.string(),
          payment_link: z.string(),
        }),
        handler: GetPaymentLinksPaymentLinkLineItems,
      },

      'stripe.GetPaymentMethods/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          type: z.string(),
        }),
        handler: GetPaymentMethods,
      },

      'stripe.GetPaymentMethodsPaymentMethod/sync': {
        schema: z.object({
          expand: z.string(),
          payment_method: z.string(),
          payment_method: z.string(),
        }),
        handler: GetPaymentMethodsPaymentMethod,
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
          status: z.string(),
        }),
        handler: GetPayouts,
      },

      'stripe.GetPayoutsPayout/sync': {
        schema: z.object({
          expand: z.string(),
          payout: z.string(),
          payout: z.string(),
        }),
        handler: GetPayoutsPayout,
      },

      'stripe.GetPlans/sync': {
        schema: z.object({
          active: z.boolean(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          product: z.string(),
          starting_after: z.string(),
        }),
        handler: GetPlans,
      },

      'stripe.GetPlansPlan/sync': {
        schema: z.object({
          expand: z.string(),
          plan: z.string(),
          plan: z.string(),
        }),
        handler: GetPlansPlan,
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
          type: z.string(),
        }),
        handler: GetPrices,
      },

      'stripe.GetPricesSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetPricesSearch,
      },

      'stripe.GetPricesPrice/sync': {
        schema: z.object({
          expand: z.string(),
          price: z.string(),
          price: z.string(),
        }),
        handler: GetPricesPrice,
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
          url: z.string(),
        }),
        handler: GetProducts,
      },

      'stripe.GetProductsSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetProductsSearch,
      },

      'stripe.GetProductsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetProductsId,
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
          starting_after: z.string(),
        }),
        handler: GetPromotionCodes,
      },

      'stripe.GetPromotionCodesPromotionCode/sync': {
        schema: z.object({
          expand: z.string(),
          promotion_code: z.string(),
          promotion_code: z.string(),
        }),
        handler: GetPromotionCodesPromotionCode,
      },

      'stripe.GetQuotes/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
          test_clock: z.string(),
        }),
        handler: GetQuotes,
      },

      'stripe.GetQuotesQuote/sync': {
        schema: z.object({
          expand: z.string(),
          quote: z.string(),
          quote: z.string(),
        }),
        handler: GetQuotesQuote,
      },

      'stripe.GetQuotesQuoteComputedUpfrontLineItems/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          quote: z.string(),
          starting_after: z.string(),
          quote: z.string(),
        }),
        handler: GetQuotesQuoteComputedUpfrontLineItems,
      },

      'stripe.GetQuotesQuoteLineItems/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          quote: z.string(),
          starting_after: z.string(),
          quote: z.string(),
        }),
        handler: GetQuotesQuoteLineItems,
      },

      'stripe.GetRadarEarlyFraudWarnings/sync': {
        schema: z.object({
          charge: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          payment_intent: z.string(),
          starting_after: z.string(),
        }),
        handler: GetRadarEarlyFraudWarnings,
      },

      'stripe.GetRadarEarlyFraudWarningsEarlyFraudWarning/sync': {
        schema: z.object({
          early_fraud_warning: z.string(),
          expand: z.string(),
          early_fraud_warning: z.string(),
        }),
        handler: GetRadarEarlyFraudWarningsEarlyFraudWarning,
      },

      'stripe.GetRadarValueListItems/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          value: z.string(),
          value_list: z.string(),
        }),
        handler: GetRadarValueListItems,
      },

      'stripe.GetRadarValueListItemsItem/sync': {
        schema: z.object({
          expand: z.string(),
          item: z.string(),
          item: z.string(),
        }),
        handler: GetRadarValueListItemsItem,
      },

      'stripe.GetRadarValueLists/sync': {
        schema: z.object({
          alias: z.string(),
          contains: z.string(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetRadarValueLists,
      },

      'stripe.GetRadarValueListsValueList/sync': {
        schema: z.object({
          expand: z.string(),
          value_list: z.string(),
          value_list: z.string(),
        }),
        handler: GetRadarValueListsValueList,
      },

      'stripe.GetRefunds/sync': {
        schema: z.object({
          charge: z.string(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          payment_intent: z.string(),
          starting_after: z.string(),
        }),
        handler: GetRefunds,
      },

      'stripe.GetRefundsRefund/sync': {
        schema: z.object({
          expand: z.string(),
          refund: z.string(),
          refund: z.string(),
        }),
        handler: GetRefundsRefund,
      },

      'stripe.GetReportingReportRuns/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetReportingReportRuns,
      },

      'stripe.GetReportingReportRunsReportRun/sync': {
        schema: z.object({
          expand: z.string(),
          report_run: z.string(),
          report_run: z.string(),
        }),
        handler: GetReportingReportRunsReportRun,
      },

      'stripe.GetReportingReportTypes/sync': {
        schema: z.object({
          expand: z.string(),
        }),
        handler: GetReportingReportTypes,
      },

      'stripe.GetReportingReportTypesReportType/sync': {
        schema: z.object({
          expand: z.string(),
          report_type: z.string(),
          report_type: z.string(),
        }),
        handler: GetReportingReportTypesReportType,
      },

      'stripe.GetReviews/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetReviews,
      },

      'stripe.GetReviewsReview/sync': {
        schema: z.object({
          expand: z.string(),
          review: z.string(),
          review: z.string(),
        }),
        handler: GetReviewsReview,
      },

      'stripe.GetSetupAttempts/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          setup_intent: z.string(),
          starting_after: z.string(),
        }),
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
          starting_after: z.string(),
        }),
        handler: GetSetupIntents,
      },

      'stripe.GetSetupIntentsIntent/sync': {
        schema: z.object({
          client_secret: z.string(),
          expand: z.string(),
          intent: z.string(),
          intent: z.string(),
        }),
        handler: GetSetupIntentsIntent,
      },

      'stripe.GetShippingRates/sync': {
        schema: z.object({
          active: z.boolean(),
          created: z.string(),
          currency: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetShippingRates,
      },

      'stripe.GetShippingRatesShippingRateToken/sync': {
        schema: z.object({
          expand: z.string(),
          shipping_rate_token: z.string(),
          shipping_rate_token: z.string(),
        }),
        handler: GetShippingRatesShippingRateToken,
      },

      'stripe.GetSigmaScheduledQueryRuns/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetSigmaScheduledQueryRuns,
      },

      'stripe.GetSigmaScheduledQueryRunsScheduledQueryRun/sync': {
        schema: z.object({
          expand: z.string(),
          scheduled_query_run: z.string(),
          scheduled_query_run: z.string(),
        }),
        handler: GetSigmaScheduledQueryRunsScheduledQueryRun,
      },

      'stripe.GetSourcesSource/sync': {
        schema: z.object({
          client_secret: z.string(),
          expand: z.string(),
          source: z.string(),
          source: z.string(),
        }),
        handler: GetSourcesSource,
      },

      'stripe.GetSourcesSourceMandateNotificationsMandateNotification/sync': {
        schema: z.object({
          expand: z.string(),
          mandate_notification: z.string(),
          source: z.string(),
          source: z.string(),
          mandate_notification: z.string(),
        }),
        handler: GetSourcesSourceMandateNotificationsMandateNotification,
      },

      'stripe.GetSourcesSourceSourceTransactions/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          source: z.string(),
          starting_after: z.string(),
          source: z.string(),
        }),
        handler: GetSourcesSourceSourceTransactions,
      },

      'stripe.GetSourcesSourceSourceTransactionsSourceTransaction/sync': {
        schema: z.object({
          expand: z.string(),
          source: z.string(),
          source_transaction: z.string(),
          source: z.string(),
          source_transaction: z.string(),
        }),
        handler: GetSourcesSourceSourceTransactionsSourceTransaction,
      },

      'stripe.GetSubscriptionItems/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          subscription: z.string(),
        }),
        handler: GetSubscriptionItems,
      },

      'stripe.GetSubscriptionItemsItem/sync': {
        schema: z.object({
          expand: z.string(),
          item: z.string(),
          item: z.string(),
        }),
        handler: GetSubscriptionItemsItem,
      },

      'stripe.GetSubscriptionItemsSubscriptionItemUsageRecordSummaries/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          subscription_item: z.string(),
          subscription_item: z.string(),
        }),
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
          starting_after: z.string(),
        }),
        handler: GetSubscriptionSchedules,
      },

      'stripe.GetSubscriptionSchedulesSchedule/sync': {
        schema: z.object({
          expand: z.string(),
          schedule: z.string(),
          schedule: z.string(),
        }),
        handler: GetSubscriptionSchedulesSchedule,
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
          test_clock: z.string(),
        }),
        handler: GetSubscriptions,
      },

      'stripe.GetSubscriptionsSearch/sync': {
        schema: z.object({
          expand: z.string(),
          limit: z.number(),
          page: z.string(),
          query: z.string(),
        }),
        handler: GetSubscriptionsSearch,
      },

      'stripe.GetSubscriptionsSubscriptionExposedId/sync': {
        schema: z.object({
          expand: z.string(),
          subscription_exposed_id: z.string(),
          subscription_exposed_id: z.string(),
        }),
        handler: GetSubscriptionsSubscriptionExposedId,
      },

      'stripe.GetTaxCalculationsCalculationLineItems/sync': {
        schema: z.object({
          calculation: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          calculation: z.string(),
        }),
        handler: GetTaxCalculationsCalculationLineItems,
      },

      'stripe.GetTaxTransactionsTransaction/sync': {
        schema: z.object({
          expand: z.string(),
          transaction: z.string(),
          transaction: z.string(),
        }),
        handler: GetTaxTransactionsTransaction,
      },

      'stripe.GetTaxTransactionsTransactionLineItems/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          transaction: z.string(),
          transaction: z.string(),
        }),
        handler: GetTaxTransactionsTransactionLineItems,
      },

      'stripe.GetTaxCodes/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetTaxCodes,
      },

      'stripe.GetTaxCodesId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTaxCodesId,
      },

      'stripe.GetTaxRates/sync': {
        schema: z.object({
          active: z.boolean(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          inclusive: z.boolean(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetTaxRates,
      },

      'stripe.GetTaxRatesTaxRate/sync': {
        schema: z.object({
          expand: z.string(),
          tax_rate: z.string(),
          tax_rate: z.string(),
        }),
        handler: GetTaxRatesTaxRate,
      },

      'stripe.GetTerminalConfigurations/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          is_account_default: z.boolean(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetTerminalConfigurations,
      },

      'stripe.GetTerminalLocations/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
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
          status: z.string(),
        }),
        handler: GetTerminalReaders,
      },

      'stripe.GetTestHelpersTestClocks/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetTestHelpersTestClocks,
      },

      'stripe.GetTestHelpersTestClocksTestClock/sync': {
        schema: z.object({
          expand: z.string(),
          test_clock: z.string(),
          test_clock: z.string(),
        }),
        handler: GetTestHelpersTestClocksTestClock,
      },

      'stripe.GetTokensToken/sync': {
        schema: z.object({
          expand: z.string(),
          token: z.string(),
          token: z.string(),
        }),
        handler: GetTokensToken,
      },

      'stripe.GetTopups/sync': {
        schema: z.object({
          amount: z.string(),
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTopups,
      },

      'stripe.GetTopupsTopup/sync': {
        schema: z.object({
          expand: z.string(),
          topup: z.string(),
          topup: z.string(),
        }),
        handler: GetTopupsTopup,
      },

      'stripe.GetTransfers/sync': {
        schema: z.object({
          created: z.string(),
          destination: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          transfer_group: z.string(),
        }),
        handler: GetTransfers,
      },

      'stripe.GetTransfersIdReversals/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          id: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          id: z.string(),
        }),
        handler: GetTransfersIdReversals,
      },

      'stripe.GetTransfersTransfer/sync': {
        schema: z.object({
          expand: z.string(),
          transfer: z.string(),
          transfer: z.string(),
        }),
        handler: GetTransfersTransfer,
      },

      'stripe.GetTransfersTransferReversalsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          transfer: z.string(),
          transfer: z.string(),
          id: z.string(),
        }),
        handler: GetTransfersTransferReversalsId,
      },

      'stripe.GetTreasuryCreditReversals/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          financial_account: z.string(),
          limit: z.number(),
          received_credit: z.string(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTreasuryCreditReversals,
      },

      'stripe.GetTreasuryCreditReversalsCreditReversal/sync': {
        schema: z.object({
          credit_reversal: z.string(),
          expand: z.string(),
          credit_reversal: z.string(),
        }),
        handler: GetTreasuryCreditReversalsCreditReversal,
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
          status: z.string(),
        }),
        handler: GetTreasuryDebitReversals,
      },

      'stripe.GetTreasuryDebitReversalsDebitReversal/sync': {
        schema: z.object({
          debit_reversal: z.string(),
          expand: z.string(),
          debit_reversal: z.string(),
        }),
        handler: GetTreasuryDebitReversalsDebitReversal,
      },

      'stripe.GetTreasuryFinancialAccounts/sync': {
        schema: z.object({
          created: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetTreasuryFinancialAccounts,
      },

      'stripe.GetTreasuryFinancialAccountsFinancialAccount/sync': {
        schema: z.object({
          expand: z.string(),
          financial_account: z.string(),
          financial_account: z.string(),
        }),
        handler: GetTreasuryFinancialAccountsFinancialAccount,
      },

      'stripe.GetTreasuryFinancialAccountsFinancialAccountFeatures/sync': {
        schema: z.object({
          expand: z.string(),
          financial_account: z.string(),
          financial_account: z.string(),
        }),
        handler: GetTreasuryFinancialAccountsFinancialAccountFeatures,
      },

      'stripe.GetTreasuryInboundTransfers/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          financial_account: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTreasuryInboundTransfers,
      },

      'stripe.GetTreasuryInboundTransfersId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTreasuryInboundTransfersId,
      },

      'stripe.GetTreasuryOutboundPayments/sync': {
        schema: z.object({
          customer: z.string(),
          ending_before: z.string(),
          expand: z.string(),
          financial_account: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTreasuryOutboundPayments,
      },

      'stripe.GetTreasuryOutboundPaymentsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTreasuryOutboundPaymentsId,
      },

      'stripe.GetTreasuryOutboundTransfers/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          financial_account: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTreasuryOutboundTransfers,
      },

      'stripe.GetTreasuryOutboundTransfersOutboundTransfer/sync': {
        schema: z.object({
          expand: z.string(),
          outbound_transfer: z.string(),
          outbound_transfer: z.string(),
        }),
        handler: GetTreasuryOutboundTransfersOutboundTransfer,
      },

      'stripe.GetTreasuryReceivedCredits/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          financial_account: z.string(),
          limit: z.number(),
          linked_flows: z.string(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTreasuryReceivedCredits,
      },

      'stripe.GetTreasuryReceivedCreditsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTreasuryReceivedCreditsId,
      },

      'stripe.GetTreasuryReceivedDebits/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          financial_account: z.string(),
          limit: z.number(),
          starting_after: z.string(),
          status: z.string(),
        }),
        handler: GetTreasuryReceivedDebits,
      },

      'stripe.GetTreasuryReceivedDebitsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTreasuryReceivedDebitsId,
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
          transaction: z.string(),
        }),
        handler: GetTreasuryTransactionEntries,
      },

      'stripe.GetTreasuryTransactionEntriesId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTreasuryTransactionEntriesId,
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
          status_transitions: z.string(),
        }),
        handler: GetTreasuryTransactions,
      },

      'stripe.GetTreasuryTransactionsId/sync': {
        schema: z.object({
          expand: z.string(),
          id: z.string(),
          id: z.string(),
        }),
        handler: GetTreasuryTransactionsId,
      },

      'stripe.GetWebhookEndpoints/sync': {
        schema: z.object({
          ending_before: z.string(),
          expand: z.string(),
          limit: z.number(),
          starting_after: z.string(),
        }),
        handler: GetWebhookEndpoints,
      },

      'stripe.GetWebhookEndpointsWebhookEndpoint/sync': {
        schema: z.object({
          expand: z.string(),
          webhook_endpoint: z.string(),
          webhook_endpoint: z.string(),
        }),
        handler: GetWebhookEndpointsWebhookEndpoint,
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
