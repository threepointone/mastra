
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { RetrieveEmployee } from './events/RetrieveEmployee'
import { RetrieveEmployeeRole } from './events/RetrieveEmployeeRole'
import { RetrieveOrder } from './events/RetrieveOrder'
import { RetrievePayment } from './events/RetrievePayment'
import { RetrieveSettlement } from './events/RetrieveSettlement'
import { ListBankAccounts } from './events/ListBankAccounts'
import { GetBankAccountByV1Id } from './events/GetBankAccountByV1Id'
import { GetBankAccount } from './events/GetBankAccount'
import { RetrieveBusinessBookingProfile } from './events/RetrieveBusinessBookingProfile'
import { ListTeamMemberBookingProfiles } from './events/ListTeamMemberBookingProfiles'
import { RetrieveTeamMemberBookingProfile } from './events/RetrieveTeamMemberBookingProfile'
import { RetrieveBooking } from './events/RetrieveBooking'
import { ListCards } from './events/ListCards'
import { RetrieveCard } from './events/RetrieveCard'
import { ListCashDrawerShifts } from './events/ListCashDrawerShifts'
import { RetrieveCashDrawerShift } from './events/RetrieveCashDrawerShift'
import { ListCashDrawerShiftEvents } from './events/ListCashDrawerShiftEvents'
import { CatalogInfo } from './events/CatalogInfo'
import { ListCatalog } from './events/ListCatalog'
import { RetrieveCatalogObject } from './events/RetrieveCatalogObject'
import { ListCustomers } from './events/ListCustomers'
import { ListCustomerGroups } from './events/ListCustomerGroups'
import { RetrieveCustomerGroup } from './events/RetrieveCustomerGroup'
import { ListCustomerSegments } from './events/ListCustomerSegments'
import { RetrieveCustomerSegment } from './events/RetrieveCustomerSegment'
import { RetrieveCustomer } from './events/RetrieveCustomer'
import { ListDeviceCodes } from './events/ListDeviceCodes'
import { GetDeviceCode } from './events/GetDeviceCode'
import { ListDisputes } from './events/ListDisputes'
import { RetrieveDispute } from './events/RetrieveDispute'
import { ListDisputeEvidence } from './events/ListDisputeEvidence'
import { RetrieveDisputeEvidence } from './events/RetrieveDisputeEvidence'
import { ListEmployeesResponse } from './events/ListEmployeesResponse'
import { RetrieveEmployeeResponse } from './events/RetrieveEmployeeResponse'
import { ListGiftCards } from './events/ListGiftCards'
import { ListGiftCardActivities } from './events/ListGiftCardActivities'
import { RetrieveGiftCard } from './events/RetrieveGiftCard'
import { DeprecatedRetrieveInventoryAdjustment } from './events/DeprecatedRetrieveInventoryAdjustment'
import { RetrieveInventoryAdjustment } from './events/RetrieveInventoryAdjustment'
import { DeprecatedRetrieveInventoryPhysicalCount } from './events/DeprecatedRetrieveInventoryPhysicalCount'
import { RetrieveInventoryPhysicalCount } from './events/RetrieveInventoryPhysicalCount'
import { RetrieveInventoryTransfer } from './events/RetrieveInventoryTransfer'
import { RetrieveInventoryCount } from './events/RetrieveInventoryCount'
import { RetrieveInventoryChanges } from './events/RetrieveInventoryChanges'
import { ListInvoices } from './events/ListInvoices'
import { GetInvoice } from './events/GetInvoice'
import { ListBreakTypes } from './events/ListBreakTypes'
import { GetBreakType } from './events/GetBreakType'
import { ListEmployeeWages } from './events/ListEmployeeWages'
import { GetEmployeeWage } from './events/GetEmployeeWage'
import { GetShift } from './events/GetShift'
import { ListTeamMemberWages } from './events/ListTeamMemberWages'
import { GetTeamMemberWage } from './events/GetTeamMemberWage'
import { ListWorkweekConfigs } from './events/ListWorkweekConfigs'
import { ListLocations } from './events/ListLocations'
import { RetrieveLocation } from './events/RetrieveLocation'
import { ListRefundsResponse } from './events/ListRefundsResponse'
import { ListTransactions } from './events/ListTransactions'
import { RetrieveTransaction } from './events/RetrieveTransaction'
import { RetrieveLoyaltyAccount } from './events/RetrieveLoyaltyAccount'
import { ListLoyaltyPrograms } from './events/ListLoyaltyPrograms'
import { RetrieveLoyaltyProgram } from './events/RetrieveLoyaltyProgram'
import { RetrieveLoyaltyReward } from './events/RetrieveLoyaltyReward'
import { ListMerchants } from './events/ListMerchants'
import { RetrieveMerchant } from './events/RetrieveMerchant'
import { RetrieveOrderResponse } from './events/RetrieveOrderResponse'
import { ListPaymentsResponse } from './events/ListPaymentsResponse'
import { GetPayment } from './events/GetPayment'
import { ListPaymentRefunds } from './events/ListPaymentRefunds'
import { GetPaymentRefund } from './events/GetPaymentRefund'
import { ListSites } from './events/ListSites'
import { RetrieveSnippet } from './events/RetrieveSnippet'
import { RetrieveSubscription } from './events/RetrieveSubscription'
import { ListSubscriptionEvents } from './events/ListSubscriptionEvents'
import { RetrieveTeamMember } from './events/RetrieveTeamMember'
import { RetrieveWageSetting } from './events/RetrieveWageSetting'
import { GetTerminalCheckout } from './events/GetTerminalCheckout'
import { GetTerminalRefund } from './events/GetTerminalRefund'

type SquareupConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SquareupIntegration extends Integration {
  config: SquareupConfig;

  constructor({ config }: { config: SquareupConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SQUAREUP',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'squareup.RetrieveEmployee/sync': {
                schema: z.object({
                  'employee_id': z.string()}),
                handler: RetrieveEmployee,
            },
        

             'squareup.RetrieveEmployeeRole/sync': {
                schema: z.object({
                  'role_id': z.string()}),
                handler: RetrieveEmployeeRole,
            },
        

             'squareup.RetrieveOrder/sync': {
                schema: z.object({
                  'location_id': z.string(),
'order_id': z.string()}),
                handler: RetrieveOrder,
            },
        

             'squareup.RetrievePayment/sync': {
                schema: z.object({
                  'location_id': z.string(),
'payment_id': z.string()}),
                handler: RetrievePayment,
            },
        

             'squareup.RetrieveSettlement/sync': {
                schema: z.object({
                  'location_id': z.string(),
'settlement_id': z.string()}),
                handler: RetrieveSettlement,
            },
        

             'squareup.ListBankAccounts/sync': {
                schema: z.object({
                  'cursor': z.string(),
'limit': z.number(),
'location_id': z.string()}),
                handler: ListBankAccounts,
            },
        

             'squareup.GetBankAccountByV1Id/sync': {
                schema: z.object({
                  'v1_bank_account_id': z.string()}),
                handler: GetBankAccountByV1Id,
            },
        

             'squareup.GetBankAccount/sync': {
                schema: z.object({
                  'bank_account_id': z.string()}),
                handler: GetBankAccount,
            },
        

             'squareup.RetrieveBusinessBookingProfile/sync': {
                schema: z.object({}),
                handler: RetrieveBusinessBookingProfile,
            },
        

             'squareup.ListTeamMemberBookingProfiles/sync': {
                schema: z.object({
                  'bookable_only': z.boolean(),
'limit': z.number(),
'cursor': z.string(),
'location_id': z.string()}),
                handler: ListTeamMemberBookingProfiles,
            },
        

             'squareup.RetrieveTeamMemberBookingProfile/sync': {
                schema: z.object({
                  'team_member_id': z.string()}),
                handler: RetrieveTeamMemberBookingProfile,
            },
        

             'squareup.RetrieveBooking/sync': {
                schema: z.object({
                  'booking_id': z.string()}),
                handler: RetrieveBooking,
            },
        

             'squareup.ListCards/sync': {
                schema: z.object({
                  'cursor': z.string(),
'customer_id': z.string(),
'include_disabled': z.boolean(),
'reference_id': z.string(),
'sort_order': z.string()}),
                handler: ListCards,
            },
        

             'squareup.RetrieveCard/sync': {
                schema: z.object({
                  'card_id': z.string()}),
                handler: RetrieveCard,
            },
        

             'squareup.ListCashDrawerShifts/sync': {
                schema: z.object({
                  'location_id': z.string(),
'sort_order': z.string(),
'begin_time': z.string(),
'end_time': z.string(),
'limit': z.number(),
'cursor': z.string()}),
                handler: ListCashDrawerShifts,
            },
        

             'squareup.RetrieveCashDrawerShift/sync': {
                schema: z.object({
                  'shift_id': z.string(),
'location_id': z.string()}),
                handler: RetrieveCashDrawerShift,
            },
        

             'squareup.ListCashDrawerShiftEvents/sync': {
                schema: z.object({
                  'shift_id': z.string(),
'location_id': z.string(),
'limit': z.number(),
'cursor': z.string()}),
                handler: ListCashDrawerShiftEvents,
            },
        

             'squareup.CatalogInfo/sync': {
                schema: z.object({}),
                handler: CatalogInfo,
            },
        

             'squareup.ListCatalog/sync': {
                schema: z.object({
                  'cursor': z.string(),
'types': z.string(),
'catalog_version': z.number()}),
                handler: ListCatalog,
            },
        

             'squareup.RetrieveCatalogObject/sync': {
                schema: z.object({
                  'object_id': z.string(),
'include_related_objects': z.boolean(),
'catalog_version': z.number()}),
                handler: RetrieveCatalogObject,
            },
        

             'squareup.ListCustomers/sync': {
                schema: z.object({
                  'cursor': z.string(),
'limit': z.number(),
'sort_field': z.string(),
'sort_order': z.string()}),
                handler: ListCustomers,
            },
        

             'squareup.ListCustomerGroups/sync': {
                schema: z.object({
                  'cursor': z.string(),
'limit': z.number()}),
                handler: ListCustomerGroups,
            },
        

             'squareup.RetrieveCustomerGroup/sync': {
                schema: z.object({
                  'group_id': z.string()}),
                handler: RetrieveCustomerGroup,
            },
        

             'squareup.ListCustomerSegments/sync': {
                schema: z.object({
                  'cursor': z.string(),
'limit': z.number()}),
                handler: ListCustomerSegments,
            },
        

             'squareup.RetrieveCustomerSegment/sync': {
                schema: z.object({
                  'segment_id': z.string()}),
                handler: RetrieveCustomerSegment,
            },
        

             'squareup.RetrieveCustomer/sync': {
                schema: z.object({
                  'customer_id': z.string()}),
                handler: RetrieveCustomer,
            },
        

             'squareup.ListDeviceCodes/sync': {
                schema: z.object({
                  'cursor': z.string(),
'location_id': z.string(),
'product_type': z.string(),
'status': z.string()}),
                handler: ListDeviceCodes,
            },
        

             'squareup.GetDeviceCode/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: GetDeviceCode,
            },
        

             'squareup.ListDisputes/sync': {
                schema: z.object({
                  'cursor': z.string(),
'states': z.string(),
'location_id': z.string()}),
                handler: ListDisputes,
            },
        

             'squareup.RetrieveDispute/sync': {
                schema: z.object({
                  'dispute_id': z.string()}),
                handler: RetrieveDispute,
            },
        

             'squareup.ListDisputeEvidence/sync': {
                schema: z.object({
                  'dispute_id': z.string(),
'cursor': z.string()}),
                handler: ListDisputeEvidence,
            },
        

             'squareup.RetrieveDisputeEvidence/sync': {
                schema: z.object({
                  'dispute_id': z.string(),
'evidence_id': z.string()}),
                handler: RetrieveDisputeEvidence,
            },
        

             'squareup.ListEmployeesResponse/sync': {
                schema: z.object({
                  'location_id': z.string(),
'status': z.string(),
'limit': z.number(),
'cursor': z.string()}),
                handler: ListEmployeesResponse,
            },
        

             'squareup.RetrieveEmployeeResponse/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: RetrieveEmployeeResponse,
            },
        

             'squareup.ListGiftCards/sync': {
                schema: z.object({
                  'type': z.string(),
'state': z.string(),
'limit': z.number(),
'cursor': z.string(),
'customer_id': z.string()}),
                handler: ListGiftCards,
            },
        

             'squareup.ListGiftCardActivities/sync': {
                schema: z.object({
                  'gift_card_id': z.string(),
'type': z.string(),
'location_id': z.string(),
'begin_time': z.string(),
'end_time': z.string(),
'limit': z.number(),
'cursor': z.string(),
'sort_order': z.string()}),
                handler: ListGiftCardActivities,
            },
        

             'squareup.RetrieveGiftCard/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: RetrieveGiftCard,
            },
        

             'squareup.DeprecatedRetrieveInventoryAdjustment/sync': {
                schema: z.object({
                  'adjustment_id': z.string()}),
                handler: DeprecatedRetrieveInventoryAdjustment,
            },
        

             'squareup.RetrieveInventoryAdjustment/sync': {
                schema: z.object({
                  'adjustment_id': z.string()}),
                handler: RetrieveInventoryAdjustment,
            },
        

             'squareup.DeprecatedRetrieveInventoryPhysicalCount/sync': {
                schema: z.object({
                  'physical_count_id': z.string()}),
                handler: DeprecatedRetrieveInventoryPhysicalCount,
            },
        

             'squareup.RetrieveInventoryPhysicalCount/sync': {
                schema: z.object({
                  'physical_count_id': z.string()}),
                handler: RetrieveInventoryPhysicalCount,
            },
        

             'squareup.RetrieveInventoryTransfer/sync': {
                schema: z.object({
                  'transfer_id': z.string()}),
                handler: RetrieveInventoryTransfer,
            },
        

             'squareup.RetrieveInventoryCount/sync': {
                schema: z.object({
                  'catalog_object_id': z.string(),
'location_ids': z.string(),
'cursor': z.string()}),
                handler: RetrieveInventoryCount,
            },
        

             'squareup.RetrieveInventoryChanges/sync': {
                schema: z.object({
                  'catalog_object_id': z.string(),
'location_ids': z.string(),
'cursor': z.string()}),
                handler: RetrieveInventoryChanges,
            },
        

             'squareup.ListInvoices/sync': {
                schema: z.object({
                  'location_id': z.string(),
'cursor': z.string(),
'limit': z.number()}),
                handler: ListInvoices,
            },
        

             'squareup.GetInvoice/sync': {
                schema: z.object({
                  'invoice_id': z.string()}),
                handler: GetInvoice,
            },
        

             'squareup.ListBreakTypes/sync': {
                schema: z.object({
                  'location_id': z.string(),
'limit': z.number(),
'cursor': z.string()}),
                handler: ListBreakTypes,
            },
        

             'squareup.GetBreakType/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: GetBreakType,
            },
        

             'squareup.ListEmployeeWages/sync': {
                schema: z.object({
                  'employee_id': z.string(),
'limit': z.number(),
'cursor': z.string()}),
                handler: ListEmployeeWages,
            },
        

             'squareup.GetEmployeeWage/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: GetEmployeeWage,
            },
        

             'squareup.GetShift/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: GetShift,
            },
        

             'squareup.ListTeamMemberWages/sync': {
                schema: z.object({
                  'team_member_id': z.string(),
'limit': z.number(),
'cursor': z.string()}),
                handler: ListTeamMemberWages,
            },
        

             'squareup.GetTeamMemberWage/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: GetTeamMemberWage,
            },
        

             'squareup.ListWorkweekConfigs/sync': {
                schema: z.object({
                  'limit': z.number(),
'cursor': z.string()}),
                handler: ListWorkweekConfigs,
            },
        

             'squareup.ListLocations/sync': {
                schema: z.object({}),
                handler: ListLocations,
            },
        

             'squareup.RetrieveLocation/sync': {
                schema: z.object({
                  'location_id': z.string()}),
                handler: RetrieveLocation,
            },
        

             'squareup.ListRefundsResponse/sync': {
                schema: z.object({
                  'location_id': z.string(),
'begin_time': z.string(),
'end_time': z.string(),
'sort_order': z.string(),
'cursor': z.string()}),
                handler: ListRefundsResponse,
            },
        

             'squareup.ListTransactions/sync': {
                schema: z.object({
                  'location_id': z.string(),
'begin_time': z.string(),
'end_time': z.string(),
'sort_order': z.string(),
'cursor': z.string()}),
                handler: ListTransactions,
            },
        

             'squareup.RetrieveTransaction/sync': {
                schema: z.object({
                  'location_id': z.string(),
'transaction_id': z.string()}),
                handler: RetrieveTransaction,
            },
        

             'squareup.RetrieveLoyaltyAccount/sync': {
                schema: z.object({
                  'account_id': z.string()}),
                handler: RetrieveLoyaltyAccount,
            },
        

             'squareup.ListLoyaltyPrograms/sync': {
                schema: z.object({}),
                handler: ListLoyaltyPrograms,
            },
        

             'squareup.RetrieveLoyaltyProgram/sync': {
                schema: z.object({
                  'program_id': z.string()}),
                handler: RetrieveLoyaltyProgram,
            },
        

             'squareup.RetrieveLoyaltyReward/sync': {
                schema: z.object({
                  'reward_id': z.string()}),
                handler: RetrieveLoyaltyReward,
            },
        

             'squareup.ListMerchants/sync': {
                schema: z.object({
                  'cursor': z.number()}),
                handler: ListMerchants,
            },
        

             'squareup.RetrieveMerchant/sync': {
                schema: z.object({
                  'merchant_id': z.string()}),
                handler: RetrieveMerchant,
            },
        

             'squareup.RetrieveOrderResponse/sync': {
                schema: z.object({
                  'order_id': z.string()}),
                handler: RetrieveOrderResponse,
            },
        

             'squareup.ListPaymentsResponse/sync': {
                schema: z.object({
                  'begin_time': z.string(),
'end_time': z.string(),
'sort_order': z.string(),
'cursor': z.string(),
'location_id': z.string(),
'total': z.number(),
'last_4': z.string(),
'card_brand': z.string(),
'limit': z.number()}),
                handler: ListPaymentsResponse,
            },
        

             'squareup.GetPayment/sync': {
                schema: z.object({
                  'payment_id': z.string()}),
                handler: GetPayment,
            },
        

             'squareup.ListPaymentRefunds/sync': {
                schema: z.object({
                  'begin_time': z.string(),
'end_time': z.string(),
'sort_order': z.string(),
'cursor': z.string(),
'location_id': z.string(),
'status': z.string(),
'source_type': z.string(),
'limit': z.number()}),
                handler: ListPaymentRefunds,
            },
        

             'squareup.GetPaymentRefund/sync': {
                schema: z.object({
                  'refund_id': z.string()}),
                handler: GetPaymentRefund,
            },
        

             'squareup.ListSites/sync': {
                schema: z.object({}),
                handler: ListSites,
            },
        

             'squareup.RetrieveSnippet/sync': {
                schema: z.object({
                  'site_id': z.string()}),
                handler: RetrieveSnippet,
            },
        

             'squareup.RetrieveSubscription/sync': {
                schema: z.object({
                  'subscription_id': z.string()}),
                handler: RetrieveSubscription,
            },
        

             'squareup.ListSubscriptionEvents/sync': {
                schema: z.object({
                  'subscription_id': z.string(),
'cursor': z.string(),
'limit': z.number()}),
                handler: ListSubscriptionEvents,
            },
        

             'squareup.RetrieveTeamMember/sync': {
                schema: z.object({
                  'team_member_id': z.string()}),
                handler: RetrieveTeamMember,
            },
        

             'squareup.RetrieveWageSetting/sync': {
                schema: z.object({
                  'team_member_id': z.string()}),
                handler: RetrieveWageSetting,
            },
        

             'squareup.GetTerminalCheckout/sync': {
                schema: z.object({
                  'checkout_id': z.string()}),
                handler: GetTerminalCheckout,
            },
        

             'squareup.GetTerminalRefund/sync': {
                schema: z.object({
                  'terminal_refund_id': z.string()}),
                handler: GetTerminalRefund,
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
        SERVER: `https://connect.squareup.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/token',
        SCOPES: [],
      },
    });
  }
}

    