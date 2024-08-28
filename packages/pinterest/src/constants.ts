import { PropertyType } from '@arkw/core';

export const AccountFields = [
  {
    name: 'account_type',
    displayName: 'account_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'profile_image',
    displayName: 'profile_image',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'website_url',
    displayName: 'website_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'username',
    displayName: 'username',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'about',
    displayName: 'about',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'business_name',
    displayName: 'business_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_count',
    displayName: 'board_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_count',
    displayName: 'pin_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'follower_count',
    displayName: 'follower_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'following_count',
    displayName: 'following_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'monthly_views',
    displayName: 'monthly_views',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ActionTypeFields = [];

export const AdAccountFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'owner',
    displayName: 'owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency',
    displayName: 'currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdAccountAnalyticsResponseFields = [];

export const AdAccountCreateRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'owner_user_id',
    displayName: 'owner_user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdAccountCreateSubscriptionRequestFields = [
  {
    name: 'webhook_url',
    displayName: 'webhook_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lead_form_id',
    displayName: 'lead_form_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token',
    displayName: 'partner_access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token',
    displayName: 'partner_refresh_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_metadata',
    displayName: 'partner_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdAccountCreateSubscriptionResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cryptographic_key',
    displayName: 'cryptographic_key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cryptographic_algorithm',
    displayName: 'cryptographic_algorithm',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdAccountGetSubscriptionResponseFields = [
  {
    name: 'lead_form_id',
    displayName: 'lead_form_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'webhook_url',
    displayName: 'webhook_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_account_id',
    displayName: 'user_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'api_version',
    displayName: 'api_version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cryptographic_key',
    displayName: 'cryptographic_key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cryptographic_algorithm',
    displayName: 'cryptographic_algorithm',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdAccountsCountryResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdAccountsCountryResponseDataFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency',
    displayName: 'currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'index',
    displayName: 'index',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdArrayResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdArrayResponseElementFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdCommonFields = [
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_android_deep_links',
    displayName: 'carousel_android_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_destination_urls',
    displayName: 'carousel_destination_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_ios_deep_links',
    displayName: 'carousel_ios_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_tracking_url',
    displayName: 'click_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'destination_url',
    displayName: 'destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_pin_deleted',
    displayName: 'is_pin_deleted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_removable',
    displayName: 'is_removable',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'view_tracking_url',
    displayName: 'view_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lead_form_id',
    displayName: 'lead_form_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'customizable_cta_type',
    displayName: 'customizable_cta_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'quiz_pin_data',
    displayName: 'quiz_pin_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdCountryFields = [];

export const AdCreateRequestFields = [
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_android_deep_links',
    displayName: 'carousel_android_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_destination_urls',
    displayName: 'carousel_destination_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_ios_deep_links',
    displayName: 'carousel_ios_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_tracking_url',
    displayName: 'click_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'destination_url',
    displayName: 'destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_pin_deleted',
    displayName: 'is_pin_deleted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_removable',
    displayName: 'is_removable',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'view_tracking_url',
    displayName: 'view_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lead_form_id',
    displayName: 'lead_form_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'customizable_cta_type',
    displayName: 'customizable_cta_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'quiz_pin_data',
    displayName: 'quiz_pin_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_id',
    displayName: 'pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsGetRequestFields = [
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsGetRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsFields = [
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsSubmitRequestFields = [
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsSubmitRecordFields = [
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsSubmitUpsertRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_options',
    displayName: 'bid_options',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'update_mask',
    displayName: 'update_mask',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemsSubmitDeleteRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionProcessedItemsFields = [
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionProcessedItemFields = [
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionItemFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_options',
    displayName: 'bid_options',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionKeyFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionOperationFields = [];

export const AdvancedAuctionBidOptionsFields = [
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'app_type_multipliers',
    displayName: 'app_type_multipliers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_multipliers',
    displayName: 'placement_multipliers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdvancedAuctionOperationErrorFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BidInMicroCurrencyFields = [];

export const AppTypeMultipliersFields = [
  {
    name: 'APP_TYPE',
    displayName: 'APP_TYPE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingSpecAppTypeFields = [];

export const PlacementMultipliersFields = [
  {
    name: 'PLACEMENT',
    displayName: 'PLACEMENT',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMaskBidOptionFieldFields = [];

export const AdGroupArrayResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupArrayResponseElementFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupCommonFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_in_micro_currency',
    displayName: 'budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'optimization_goal_metadata',
    displayName: 'optimization_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_type',
    displayName: 'budget_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_spec',
    displayName: 'targeting_spec',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_frequency_cap',
    displayName: 'lifetime_frequency_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pacing_delivery_type',
    displayName: 'pacing_delivery_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_id',
    displayName: 'campaign_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billable_event',
    displayName: 'billable_event',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_strategy_type',
    displayName: 'bid_strategy_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_template_ids',
    displayName: 'targeting_template_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_in_micro_currency',
    displayName: 'budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'optimization_goal_metadata',
    displayName: 'optimization_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_type',
    displayName: 'budget_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_spec',
    displayName: 'targeting_spec',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_frequency_cap',
    displayName: 'lifetime_frequency_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pacing_delivery_type',
    displayName: 'pacing_delivery_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_id',
    displayName: 'campaign_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billable_event',
    displayName: 'billable_event',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_strategy_type',
    displayName: 'bid_strategy_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_template_ids',
    displayName: 'targeting_template_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pacing_delivery_type',
    displayName: 'pacing_delivery_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_type',
    displayName: 'budget_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupResponseFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_in_micro_currency',
    displayName: 'budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'optimization_goal_metadata',
    displayName: 'optimization_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_type',
    displayName: 'budget_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_spec',
    displayName: 'targeting_spec',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_frequency_cap',
    displayName: 'lifetime_frequency_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pacing_delivery_type',
    displayName: 'pacing_delivery_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_id',
    displayName: 'campaign_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billable_event',
    displayName: 'billable_event',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_strategy_type',
    displayName: 'bid_strategy_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_template_ids',
    displayName: 'targeting_template_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'conversion_learning_mode_type',
    displayName: 'conversion_learning_mode_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary_status',
    displayName: 'summary_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'feed_profile_id',
    displayName: 'feed_profile_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'dca_assets',
    displayName: 'dca_assets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupSummaryStatusFields = [];

export const AdGroupUpdateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_in_micro_currency',
    displayName: 'budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'optimization_goal_metadata',
    displayName: 'optimization_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_type',
    displayName: 'budget_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_spec',
    displayName: 'targeting_spec',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_frequency_cap',
    displayName: 'lifetime_frequency_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pacing_delivery_type',
    displayName: 'pacing_delivery_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_id',
    displayName: 'campaign_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billable_event',
    displayName: 'billable_event',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_strategy_type',
    displayName: 'bid_strategy_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_template_ids',
    displayName: 'targeting_template_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupsAnalyticsResponseFields = [];

export const AdGroupAudienceSizingRequestFields = [
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_types',
    displayName: 'creative_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_spec',
    displayName: 'targeting_spec',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_group_ids',
    displayName: 'product_group_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdGroupAudienceSizingResponseFields = [
  {
    name: 'audience_size_lower_bound',
    displayName: 'audience_size_lower_bound',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'audience_size_upper_bound',
    displayName: 'audience_size_upper_bound',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdPinIdFields = [
  {
    name: 'pin_id',
    displayName: 'pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdPreviewRequestFields = [];

export const AdPreviewURLResponseFields = [
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdResponseFields = [
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_android_deep_links',
    displayName: 'carousel_android_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_destination_urls',
    displayName: 'carousel_destination_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_ios_deep_links',
    displayName: 'carousel_ios_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_tracking_url',
    displayName: 'click_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'destination_url',
    displayName: 'destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_pin_deleted',
    displayName: 'is_pin_deleted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_removable',
    displayName: 'is_removable',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'view_tracking_url',
    displayName: 'view_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lead_form_id',
    displayName: 'lead_form_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'customizable_cta_type',
    displayName: 'customizable_cta_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'quiz_pin_data',
    displayName: 'quiz_pin_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_id',
    displayName: 'pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_id',
    displayName: 'campaign_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collection_items_destination_url_template',
    displayName: 'collection_items_destination_url_template',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rejected_reasons',
    displayName: 'rejected_reasons',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rejection_labels',
    displayName: 'rejection_labels',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'review_status',
    displayName: 'review_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary_status',
    displayName: 'summary_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdUpdateRequestFields = [
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_android_deep_links',
    displayName: 'carousel_android_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_destination_urls',
    displayName: 'carousel_destination_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_ios_deep_links',
    displayName: 'carousel_ios_deep_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_tracking_url',
    displayName: 'click_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'destination_url',
    displayName: 'destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_pin_deleted',
    displayName: 'is_pin_deleted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_removable',
    displayName: 'is_removable',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'view_tracking_url',
    displayName: 'view_tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lead_form_id',
    displayName: 'lead_form_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'customizable_cta_type',
    displayName: 'customizable_cta_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'quiz_pin_data',
    displayName: 'quiz_pin_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_id',
    displayName: 'pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsAnalyticsAdTargetingTypeFields = [];

export const AdsAnalyticsCampaignTargetingTypeFields = [];

export const AdsAnalyticsCreateAsyncRequestFields = [
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'granularity',
    displayName: 'granularity',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_window_days',
    displayName: 'click_window_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'engagement_window_days',
    displayName: 'engagement_window_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'view_window_days',
    displayName: 'view_window_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'conversion_report_time',
    displayName: 'conversion_report_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attribution_types',
    displayName: 'attribution_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_ids',
    displayName: 'campaign_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_statuses',
    displayName: 'campaign_statuses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_objective_types',
    displayName: 'campaign_objective_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_group_ids',
    displayName: 'ad_group_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_group_statuses',
    displayName: 'ad_group_statuses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_ids',
    displayName: 'ad_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_statuses',
    displayName: 'ad_statuses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_group_ids',
    displayName: 'product_group_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_group_statuses',
    displayName: 'product_group_statuses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_item_ids',
    displayName: 'product_item_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_types',
    displayName: 'targeting_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metrics_filters',
    displayName: 'metrics_filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'columns',
    displayName: 'columns',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'level',
    displayName: 'level',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report_format',
    displayName: 'report_format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'primary_sort',
    displayName: 'primary_sort',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_hour',
    displayName: 'start_hour',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_hour',
    displayName: 'end_hour',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsAnalyticsCreateAsyncResponseFields = [
  {
    name: 'report_status',
    displayName: 'report_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token',
    displayName: 'token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsAnalyticsFilterColumnFields = [];

export const AdsAnalyticsFilterOperatorFields = [];

export const AdsAnalyticsGetAsyncResponseFields = [
  {
    name: 'report_status',
    displayName: 'report_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsAnalyticsMetricsFilterFields = [
  {
    name: 'field',
    displayName: 'field',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operator',
    displayName: 'operator',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsAnalyticsResponseFields = [];

export const AdsAnalyticsTargetingTypeFields = [];

export const AdsCreditDiscountsResponseFields = [
  {
    name: 'active',
    displayName: 'active',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'advertiser_id',
    displayName: 'advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'discountType',
    displayName: 'discountType',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'discountInMicroCurrency',
    displayName: 'discountInMicroCurrency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'discountCurrency',
    displayName: 'discountCurrency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'remainingDiscountInMicroCurrency',
    displayName: 'remainingDiscountInMicroCurrency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsCreditRedeemRequestFields = [
  {
    name: 'offerCodeHash',
    displayName: 'offerCodeHash',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'validateOnly',
    displayName: 'validateOnly',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AdsCreditRedeemResponseFields = [
  {
    name: 'success',
    displayName: 'success',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errorCode',
    displayName: 'errorCode',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errorMessage',
    displayName: 'errorMessage',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AgeBucketListFields = [];

export const AnalyticsDailyMetricsFields = [
  {
    name: 'data_status',
    displayName: 'data_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date',
    displayName: 'date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metrics',
    displayName: 'metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AnalyticsMetricsResponseFields = [
  {
    name: 'summary_metrics',
    displayName: 'summary_metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_metrics',
    displayName: 'daily_metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AnalyticsResponseFields = [];

export const AssetIdPermissionsFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_type',
    displayName: 'asset_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_info',
    displayName: 'asset_group_info',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AssetIdToPermissionsFields = [];

export const AssetTypeResponseFields = [];

export const AudienceFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'audience_type',
    displayName: 'audience_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rule',
    displayName: 'rule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_timestamp',
    displayName: 'created_timestamp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_timestamp',
    displayName: 'updated_timestamp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceCategoryFields = [
  {
    name: 'key',
    displayName: 'key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ratio',
    displayName: 'ratio',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'index',
    displayName: 'index',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'subcategories',
    displayName: 'subcategories',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceCommonFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rule',
    displayName: 'rule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceCreateCustomRequestFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rule',
    displayName: 'rule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sharing_type',
    displayName: 'sharing_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'data_party',
    displayName: 'data_party',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'category',
    displayName: 'category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceCreateRequestFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rule',
    displayName: 'rule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'audience_type',
    displayName: 'audience_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDataPartyFields = [];

export const AudienceDefinitionFields = [
  {
    name: 'date',
    displayName: 'date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDefinitionResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDefinitionScopeFields = [
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDefinitionTypeFields = [
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDemographicValueFields = [
  {
    name: 'key',
    displayName: 'key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ratio',
    displayName: 'ratio',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDemographicsFields = [
  {
    name: 'ages',
    displayName: 'ages',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'genders',
    displayName: 'genders',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'devices',
    displayName: 'devices',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metros',
    displayName: 'metros',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'countries',
    displayName: 'countries',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceDescriptionFields = [];

export const AudienceInsightCategoryArrayResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceInsightCategoryCommonFields = [
  {
    name: 'key',
    displayName: 'key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ratio',
    displayName: 'ratio',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'index',
    displayName: 'index',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceInsightTypeFields = [];

export const AudienceInsightsResponseFields = [
  {
    name: 'categories',
    displayName: 'categories',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'demographics',
    displayName: 'demographics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date',
    displayName: 'date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_is_upper_bound',
    displayName: 'size_is_upper_bound',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceRuleFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'customer_list_id',
    displayName: 'customer_list_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'engagement_domain',
    displayName: 'engagement_domain',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'engagement_type',
    displayName: 'engagement_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'event',
    displayName: 'event',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'event_data',
    displayName: 'event_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'percentage',
    displayName: 'percentage',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_id',
    displayName: 'pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'prefill',
    displayName: 'prefill',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'retention_days',
    displayName: 'retention_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'seed_id',
    displayName: 'seed_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'visitor_source_id',
    displayName: 'visitor_source_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'event_source',
    displayName: 'event_source',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ingestion_source',
    displayName: 'ingestion_source',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'engager_type',
    displayName: 'engager_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_id',
    displayName: 'campaign_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_id',
    displayName: 'ad_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'objective_type',
    displayName: 'objective_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AudienceShareTypeFields = [];

export const AudienceAccountTypeFields = [];

export const AudienceSharingTypeFields = [];

export const AudienceTypeFields = [];

export const AudienceUpdateOperationTypeFields = [];

export const AudienceUpdateRequestFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rule',
    displayName: 'rule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation_type',
    displayName: 'operation_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AuthRespondInvitesBodyFields = [
  {
    name: 'invites',
    displayName: 'invites',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AvailabilityFilterFields = [
  {
    name: 'AVAILABILITY',
    displayName: 'AVAILABILITY',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BaseInviteDataResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'invite_data',
    displayName: 'invite_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_received_invite',
    displayName: 'is_received_invite',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user',
    displayName: 'user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BatchOperationFields = [];

export const BatchOperationStatusFields = [];

export const BidFloorFields = [
  {
    name: 'bid_floors',
    displayName: 'bid_floors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BidFloorRequestFields = [
  {
    name: 'bid_floor_specs',
    displayName: 'bid_floor_specs',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_spec',
    displayName: 'targeting_spec',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BillingProfilesResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'card_type',
    displayName: 'card_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'advertiser_id',
    displayName: 'advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'payment_method_brand',
    displayName: 'payment_method_brand',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BoardFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_pins_modified_at',
    displayName: 'board_pins_modified_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collaborator_count',
    displayName: 'collaborator_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_count',
    displayName: 'pin_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'follower_count',
    displayName: 'follower_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media',
    displayName: 'media',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'owner',
    displayName: 'owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'privacy',
    displayName: 'privacy',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BoardOwnerFields = [
  {
    name: 'username',
    displayName: 'username',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BoardSectionFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BoardUpdateFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'privacy',
    displayName: 'privacy',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BookClosedResponseFields = [
  {
    name: 'conversion_metrics_ready',
    displayName: 'conversion_metrics_ready',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'non_conversion_metrics_ready',
    displayName: 'non_conversion_metrics_ready',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BrandFilterFields = [
  {
    name: 'BRAND',
    displayName: 'BRAND',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BudgetTypeFields = [];

export const BulkDownloadRequestFields = [
  {
    name: 'entity_types',
    displayName: 'entity_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'entity_ids',
    displayName: 'entity_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_since',
    displayName: 'updated_since',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_filter',
    displayName: 'campaign_filter',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'output_format',
    displayName: 'output_format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BulkDownloadResponseFields = [
  {
    name: 'request_id',
    displayName: 'request_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BulkEntityTypeFields = [];

export const BulkOutputFormatFields = [];

export const BulkReportingJobStatusFields = [];

export const BulkUpsertRequestFields = [
  {
    name: 'create',
    displayName: 'create',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'update',
    displayName: 'update',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BulkUpsertRequestCreateFields = [
  {
    name: 'campaigns',
    displayName: 'campaigns',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_groups',
    displayName: 'ad_groups',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ads',
    displayName: 'ads',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_groups',
    displayName: 'product_groups',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BulkUpsertRequestUpdateFields = [
  {
    name: 'campaigns',
    displayName: 'campaigns',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_groups',
    displayName: 'ad_groups',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ads',
    displayName: 'ads',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_groups',
    displayName: 'product_groups',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BulkUpsertResponseFields = [
  {
    name: 'request_id',
    displayName: 'request_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BulkUpsertStatusFields = [];

export const BulkUpsertStatusResponseFields = [
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'result_url',
    displayName: 'result_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BusinessAccessErrorFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BusinessAccessUserSummaryFields = [
  {
    name: 'email',
    displayName: 'email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'username',
    displayName: 'username',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BusinessAccessRoleFields = [];

export const BusinessMemberAssetsSummaryFields = [
  {
    name: 'ad_accounts',
    displayName: 'ad_accounts',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'profiles',
    displayName: 'profiles',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BusinessRoleCheckModeFields = [];

export const BusinessRoleFields = [];

export const BusinessRoleForMembersFields = [];

export const BusinessRoleResponseFields = [];

export const UpdatePartnerAssetAccessBodyFields = [
  {
    name: 'accesses',
    displayName: 'accesses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeletePartnerAssetAccessBodyFields = [
  {
    name: 'accesses',
    displayName: 'accesses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeletePartnerAssetsResultFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_type',
    displayName: 'asset_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_shared_partner',
    displayName: 'is_shared_partner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_id',
    displayName: 'partner_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeletePartnerAssetsResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMemberResultFields = [
  {
    name: 'business_role',
    displayName: 'business_role',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'member_id',
    displayName: 'member_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMemberResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMemberBusinessRoleBodyFields = [
  {
    name: 'business_role',
    displayName: 'business_role',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'member_id',
    displayName: 'member_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMemberAssetAccessBodyFields = [
  {
    name: 'accesses',
    displayName: 'accesses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignCommonFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignCreateCommonFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_ad_group_budget_in_micro_currency',
    displayName: 'default_ad_group_budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_automated_campaign',
    displayName: 'is_automated_campaign',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignCreateRequestFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_ad_group_budget_in_micro_currency',
    displayName: 'default_ad_group_budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_automated_campaign',
    displayName: 'is_automated_campaign',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_automated_campaign',
    displayName: 'is_automated_campaign',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'objective_type',
    displayName: 'objective_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignCreateResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignCreateResponseDataFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_ad_group_budget_in_micro_currency',
    displayName: 'default_ad_group_budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_automated_campaign',
    displayName: 'is_automated_campaign',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'objective_type',
    displayName: 'objective_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_campaign_budget_optimization',
    displayName: 'is_campaign_budget_optimization',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary_status',
    displayName: 'summary_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'objective_type',
    displayName: 'objective_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignCreateResponseItemFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignIdFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignIsAutomatedCampaignFields = [];

export const CampaignIsCampaignBudgetOptimizationFields = [];

export const CampaignIsFlexibleDailyBudgetsFields = [];

export const CampaignResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'objective_type',
    displayName: 'objective_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_campaign_budget_optimization',
    displayName: 'is_campaign_budget_optimization',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary_status',
    displayName: 'summary_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignSummaryStatusFields = [];

export const CampaignUpdateRequestFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime_spend_cap',
    displayName: 'lifetime_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_spend_cap',
    displayName: 'daily_spend_cap',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_id',
    displayName: 'order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_flexible_daily_budgets',
    displayName: 'is_flexible_daily_budgets',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_ad_group_budget_in_micro_currency',
    displayName: 'default_ad_group_budget_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_automated_campaign',
    displayName: 'is_automated_campaign',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_campaign_budget_optimization',
    displayName: 'is_campaign_budget_optimization',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'objective_type',
    displayName: 'objective_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignUpdateResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CampaignsAnalyticsResponseFields = [];

export const CancelInvitesBodyFields = [
  {
    name: 'invite_ids',
    displayName: 'invite_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogFields = [
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsDbItemFields = [
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreateReportResponseFields = [
  {
    name: 'token',
    displayName: 'token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportFields = [
  {
    name: 'report_status',
    displayName: 'report_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportStatsFields = [
  {
    name: 'report_type',
    displayName: 'report_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportFeedIngestionStatsFields = [
  {
    name: 'report_type',
    displayName: 'report_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code_label',
    displayName: 'code_label',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'occurrences',
    displayName: 'occurrences',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'severity',
    displayName: 'severity',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportDistributionStatsFields = [
  {
    name: 'report_type',
    displayName: 'report_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code_label',
    displayName: 'code_label',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'occurrences',
    displayName: 'occurrences',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ineligible_for_ads',
    displayName: 'ineligible_for_ads',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ineligible_for_organic',
    displayName: 'ineligible_for_organic',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportParametersFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelReportParametersFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report',
    displayName: 'report',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailReportParametersFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report',
    displayName: 'report',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportFeedIngestionFilterFields = [
  {
    name: 'report_type',
    displayName: 'report_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'feed_id',
    displayName: 'feed_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'processing_result_id',
    displayName: 'processing_result_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsReportDistributionIssueFilterFields = [
  {
    name: 'report_type',
    displayName: 'report_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelBatchItemFields = [];

export const CatalogsFeedFields = [];

export const CatalogsCreativeAssetsFeedFields = [
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_country',
    displayName: 'default_country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelFeedFields = [
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailFeedFields = [
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_country',
    displayName: 'default_country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_availability',
    displayName: 'default_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedCredentialsFields = [
  {
    name: 'password',
    displayName: 'password',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'username',
    displayName: 'username',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedIngestionDetailsFields = [
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'info',
    displayName: 'info',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'warnings',
    displayName: 'warnings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedIngestionErrorsFields = [
  {
    name: 'LINE_LEVEL_INTERNAL_ERROR',
    displayName: 'LINE_LEVEL_INTERNAL_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LARGE_PRODUCT_COUNT_DECREASE',
    displayName: 'LARGE_PRODUCT_COUNT_DECREASE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ACCOUNT_FLAGGED',
    displayName: 'ACCOUNT_FLAGGED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LEVEL_INTERNAL_ERROR',
    displayName: 'IMAGE_LEVEL_INTERNAL_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_FILE_NOT_ACCESSIBLE',
    displayName: 'IMAGE_FILE_NOT_ACCESSIBLE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_MALFORMED_URL',
    displayName: 'IMAGE_MALFORMED_URL',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_FILE_NOT_FOUND',
    displayName: 'IMAGE_FILE_NOT_FOUND',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_INVALID_FILE',
    displayName: 'IMAGE_INVALID_FILE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedIngestionInfoFields = [
  {
    name: 'IN_STOCK',
    displayName: 'IN_STOCK',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OUT_OF_STOCK',
    displayName: 'OUT_OF_STOCK',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PREORDER',
    displayName: 'PREORDER',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedIngestionFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'feed_id',
    displayName: 'feed_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedIngestionWarningsFields = [
  {
    name: 'ADDITIONAL_IMAGE_LEVEL_INTERNAL_ERROR',
    displayName: 'ADDITIONAL_IMAGE_LEVEL_INTERNAL_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_FILE_NOT_ACCESSIBLE',
    displayName: 'ADDITIONAL_IMAGE_FILE_NOT_ACCESSIBLE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_MALFORMED_URL',
    displayName: 'ADDITIONAL_IMAGE_MALFORMED_URL',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_FILE_NOT_FOUND',
    displayName: 'ADDITIONAL_IMAGE_FILE_NOT_FOUND',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_INVALID_FILE',
    displayName: 'ADDITIONAL_IMAGE_INVALID_FILE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'HOTEL_PRICE_HEADER_IS_PRESENT',
    displayName: 'HOTEL_PRICE_HEADER_IS_PRESENT',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedProcessingResultFields = [
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ingestion_details',
    displayName: 'ingestion_details',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_counts',
    displayName: 'product_counts',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'validation_details',
    displayName: 'validation_details',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedProcessingScheduleFields = [
  {
    name: 'time',
    displayName: 'time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'timezone',
    displayName: 'timezone',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedProcessingStatusFields = [];

export const CatalogsFeedProductCountsFields = [
  {
    name: 'original',
    displayName: 'original',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ingested',
    displayName: 'ingested',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedValidationDetailsFields = [
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'warnings',
    displayName: 'warnings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedValidationErrorsFields = [
  {
    name: 'FETCH_ERROR',
    displayName: 'FETCH_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'FETCH_INACTIVE_FEED_ERROR',
    displayName: 'FETCH_INACTIVE_FEED_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ENCODING_ERROR',
    displayName: 'ENCODING_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DELIMITER_ERROR',
    displayName: 'DELIMITER_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'REQUIRED_COLUMNS_MISSING',
    displayName: 'REQUIRED_COLUMNS_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DUPLICATE_PRODUCTS',
    displayName: 'DUPLICATE_PRODUCTS',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_INVALID',
    displayName: 'IMAGE_LINK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ITEMID_MISSING',
    displayName: 'ITEMID_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TITLE_MISSING',
    displayName: 'TITLE_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DESCRIPTION_MISSING',
    displayName: 'DESCRIPTION_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_LINK_MISSING',
    displayName: 'PRODUCT_LINK_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_MISSING',
    displayName: 'IMAGE_LINK_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AVAILABILITY_INVALID',
    displayName: 'AVAILABILITY_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_PRICE_INVALID',
    displayName: 'PRODUCT_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LINK_FORMAT_INVALID',
    displayName: 'LINK_FORMAT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PARSE_LINE_ERROR',
    displayName: 'PARSE_LINE_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADWORDS_FORMAT_INVALID',
    displayName: 'ADWORDS_FORMAT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'INTERNAL_SERVICE_ERROR',
    displayName: 'INTERNAL_SERVICE_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'NO_VERIFIED_DOMAIN',
    displayName: 'NO_VERIFIED_DOMAIN',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADULT_INVALID',
    displayName: 'ADULT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_LENGTH_TOO_LONG',
    displayName: 'IMAGE_LINK_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'INVALID_DOMAIN',
    displayName: 'INVALID_DOMAIN',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'FEED_LENGTH_TOO_LONG',
    displayName: 'FEED_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LINK_LENGTH_TOO_LONG',
    displayName: 'LINK_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MALFORMED_XML',
    displayName: 'MALFORMED_XML',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRICE_MISSING',
    displayName: 'PRICE_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'FEED_TOO_SMALL',
    displayName: 'FEED_TOO_SMALL',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MAX_ITEMS_PER_ITEM_GROUP_EXCEEDED',
    displayName: 'MAX_ITEMS_PER_ITEM_GROUP_EXCEEDED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ITEM_MAIN_IMAGE_DOWNLOAD_FAILURE',
    displayName: 'ITEM_MAIN_IMAGE_DOWNLOAD_FAILURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PINJOIN_CONTENT_UNSAFE',
    displayName: 'PINJOIN_CONTENT_UNSAFE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'BLOCKLISTED_IMAGE_SIGNATURE',
    displayName: 'BLOCKLISTED_IMAGE_SIGNATURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LIST_PRICE_INVALID',
    displayName: 'LIST_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRICE_CANNOT_BE_DETERMINED',
    displayName: 'PRICE_CANNOT_BE_DETERMINED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedValidationWarningsFields = [
  {
    name: 'AD_LINK_FORMAT_WARNING',
    displayName: 'AD_LINK_FORMAT_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AD_LINK_SAME_AS_LINK',
    displayName: 'AD_LINK_SAME_AS_LINK',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TITLE_LENGTH_TOO_LONG',
    displayName: 'TITLE_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DESCRIPTION_LENGTH_TOO_LONG',
    displayName: 'DESCRIPTION_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'GENDER_INVALID',
    displayName: 'GENDER_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AGE_GROUP_INVALID',
    displayName: 'AGE_GROUP_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SIZE_TYPE_INVALID',
    displayName: 'SIZE_TYPE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SIZE_SYSTEM_INVALID',
    displayName: 'SIZE_SYSTEM_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LINK_FORMAT_WARNING',
    displayName: 'LINK_FORMAT_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALES_PRICE_INVALID',
    displayName: 'SALES_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_CATEGORY_DEPTH_WARNING',
    displayName: 'PRODUCT_CATEGORY_DEPTH_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADWORDS_FORMAT_WARNING',
    displayName: 'ADWORDS_FORMAT_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADWORDS_SAME_AS_LINK',
    displayName: 'ADWORDS_SAME_AS_LINK',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DUPLICATE_HEADERS',
    displayName: 'DUPLICATE_HEADERS',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'FETCH_SAME_SIGNATURE',
    displayName: 'FETCH_SAME_SIGNATURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_LINK_LENGTH_TOO_LONG',
    displayName: 'ADDITIONAL_IMAGE_LINK_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_LINK_WARNING',
    displayName: 'ADDITIONAL_IMAGE_LINK_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_WARNING',
    displayName: 'IMAGE_LINK_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_INVALID',
    displayName: 'SHIPPING_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TAX_INVALID',
    displayName: 'TAX_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_WEIGHT_INVALID',
    displayName: 'SHIPPING_WEIGHT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'EXPIRATION_DATE_INVALID',
    displayName: 'EXPIRATION_DATE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AVAILABILITY_DATE_INVALID',
    displayName: 'AVAILABILITY_DATE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALE_DATE_INVALID',
    displayName: 'SALE_DATE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'WEIGHT_UNIT_INVALID',
    displayName: 'WEIGHT_UNIT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IS_BUNDLE_INVALID',
    displayName: 'IS_BUNDLE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'UPDATED_TIME_INVALID',
    displayName: 'UPDATED_TIME_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'CUSTOM_LABEL_LENGTH_TOO_LONG',
    displayName: 'CUSTOM_LABEL_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_TYPE_LENGTH_TOO_LONG',
    displayName: 'PRODUCT_TYPE_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TOO_MANY_ADDITIONAL_IMAGE_LINKS',
    displayName: 'TOO_MANY_ADDITIONAL_IMAGE_LINKS',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MULTIPACK_INVALID',
    displayName: 'MULTIPACK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'INDEXED_PRODUCT_COUNT_LARGE_DELTA',
    displayName: 'INDEXED_PRODUCT_COUNT_LARGE_DELTA',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ITEM_ADDITIONAL_IMAGE_DOWNLOAD_FAILURE',
    displayName: 'ITEM_ADDITIONAL_IMAGE_DOWNLOAD_FAILURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_PRODUCT_CATEGORY_MISSING',
    displayName: 'OPTIONAL_PRODUCT_CATEGORY_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_PRODUCT_CATEGORY_INVALID',
    displayName: 'OPTIONAL_PRODUCT_CATEGORY_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_CONDITION_MISSING',
    displayName: 'OPTIONAL_CONDITION_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_CONDITION_INVALID',
    displayName: 'OPTIONAL_CONDITION_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IOS_DEEP_LINK_INVALID',
    displayName: 'IOS_DEEP_LINK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ANDROID_DEEP_LINK_INVALID',
    displayName: 'ANDROID_DEEP_LINK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'UTM_SOURCE_AUTO_CORRECTED',
    displayName: 'UTM_SOURCE_AUTO_CORRECTED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'COUNTRY_DOES_NOT_MAP_TO_CURRENCY',
    displayName: 'COUNTRY_DOES_NOT_MAP_TO_CURRENCY',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MIN_AD_PRICE_INVALID',
    displayName: 'MIN_AD_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'GTIN_INVALID',
    displayName: 'GTIN_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'INCONSISTENT_CURRENCY_VALUES',
    displayName: 'INCONSISTENT_CURRENCY_VALUES',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALES_PRICE_TOO_LOW',
    displayName: 'SALES_PRICE_TOO_LOW',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_WIDTH_INVALID',
    displayName: 'SHIPPING_WIDTH_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_HEIGHT_INVALID',
    displayName: 'SHIPPING_HEIGHT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALES_PRICE_TOO_HIGH',
    displayName: 'SALES_PRICE_TOO_HIGH',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MPN_INVALID',
    displayName: 'MPN_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFeedsCreateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_country',
    displayName: 'default_country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_availability',
    displayName: 'default_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelAttributesFields = [
  {
    name: 'main_image',
    displayName: 'main_image',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'additional_image_link',
    displayName: 'additional_image_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'brand',
    displayName: 'brand',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'latitude',
    displayName: 'latitude',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'longitude',
    displayName: 'longitude',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'neighborhood',
    displayName: 'neighborhood',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'address',
    displayName: 'address',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'category',
    displayName: 'category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'base_price',
    displayName: 'base_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sale_price',
    displayName: 'sale_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'guest_ratings',
    displayName: 'guest_ratings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailFeedsCreateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_country',
    displayName: 'default_country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_availability',
    displayName: 'default_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailItemsFilterFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_ids',
    displayName: 'item_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailItemsPostFilterFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_ids',
    displayName: 'item_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelFeedsCreateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelItemsFilterFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'hotel_ids',
    displayName: 'hotel_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelItemsPostFilterFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'hotel_ids',
    displayName: 'hotel_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsItemsFilterFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_assets_ids',
    displayName: 'creative_assets_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsItemsPostFilterFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_assets_ids',
    displayName: 'creative_assets_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsFeedsCreateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_locale',
    displayName: 'default_locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_country',
    displayName: 'default_country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsVerticalFeedsCreateRequestFields = [];

export const CatalogsCreativeAssetsFeedsUpdateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailFeedsUpdateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_availability',
    displayName: 'default_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelFeedsUpdateRequestFields = [
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsVerticalFeedsUpdateRequestFields = [];

export const CatalogsFeedsUpdateRequestFields = [
  {
    name: 'default_availability',
    displayName: 'default_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'default_currency',
    displayName: 'default_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'format',
    displayName: 'format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'credentials',
    displayName: 'credentials',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'location',
    displayName: 'location',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preferred_processing_schedule',
    displayName: 'preferred_processing_schedule',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsFormatFields = [];

export const CatalogsItemValidationDetailsFields = [
  {
    name: 'attribute_name',
    displayName: 'attribute_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'provided_value',
    displayName: 'provided_value',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemValidationErrorsFields = [
  {
    name: 'ADULT_INVALID',
    displayName: 'ADULT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADWORDS_FORMAT_INVALID',
    displayName: 'ADWORDS_FORMAT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AVAILABILITY_INVALID',
    displayName: 'AVAILABILITY_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'BLOCKLISTED_IMAGE_SIGNATURE',
    displayName: 'BLOCKLISTED_IMAGE_SIGNATURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DESCRIPTION_MISSING',
    displayName: 'DESCRIPTION_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DUPLICATE_PRODUCTS',
    displayName: 'DUPLICATE_PRODUCTS',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_INVALID',
    displayName: 'IMAGE_LINK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_LENGTH_TOO_LONG',
    displayName: 'IMAGE_LINK_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_MISSING',
    displayName: 'IMAGE_LINK_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'INVALID_DOMAIN',
    displayName: 'INVALID_DOMAIN',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ITEMID_MISSING',
    displayName: 'ITEMID_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ITEM_MAIN_IMAGE_DOWNLOAD_FAILURE',
    displayName: 'ITEM_MAIN_IMAGE_DOWNLOAD_FAILURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LINK_FORMAT_INVALID',
    displayName: 'LINK_FORMAT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LINK_LENGTH_TOO_LONG',
    displayName: 'LINK_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LIST_PRICE_INVALID',
    displayName: 'LIST_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MAX_ITEMS_PER_ITEM_GROUP_EXCEEDED',
    displayName: 'MAX_ITEMS_PER_ITEM_GROUP_EXCEEDED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PARSE_LINE_ERROR',
    displayName: 'PARSE_LINE_ERROR',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PINJOIN_CONTENT_UNSAFE',
    displayName: 'PINJOIN_CONTENT_UNSAFE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRICE_CANNOT_BE_DETERMINED',
    displayName: 'PRICE_CANNOT_BE_DETERMINED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRICE_MISSING',
    displayName: 'PRICE_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_LINK_MISSING',
    displayName: 'PRODUCT_LINK_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_PRICE_INVALID',
    displayName: 'PRODUCT_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TITLE_MISSING',
    displayName: 'TITLE_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemValidationIssueFields = [];

export const CatalogsItemValidationIssuesFields = [
  {
    name: 'item_number',
    displayName: 'item_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'warnings',
    displayName: 'warnings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemValidationWarningsFields = [
  {
    name: 'AD_LINK_FORMAT_WARNING',
    displayName: 'AD_LINK_FORMAT_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AD_LINK_SAME_AS_LINK',
    displayName: 'AD_LINK_SAME_AS_LINK',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_LINK_LENGTH_TOO_LONG',
    displayName: 'ADDITIONAL_IMAGE_LINK_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADDITIONAL_IMAGE_LINK_WARNING',
    displayName: 'ADDITIONAL_IMAGE_LINK_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADWORDS_FORMAT_WARNING',
    displayName: 'ADWORDS_FORMAT_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ADWORDS_SAME_AS_LINK',
    displayName: 'ADWORDS_SAME_AS_LINK',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AGE_GROUP_INVALID',
    displayName: 'AGE_GROUP_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SIZE_SYSTEM_INVALID',
    displayName: 'SIZE_SYSTEM_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ANDROID_DEEP_LINK_INVALID',
    displayName: 'ANDROID_DEEP_LINK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AVAILABILITY_DATE_INVALID',
    displayName: 'AVAILABILITY_DATE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'COUNTRY_DOES_NOT_MAP_TO_CURRENCY',
    displayName: 'COUNTRY_DOES_NOT_MAP_TO_CURRENCY',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'CUSTOM_LABEL_LENGTH_TOO_LONG',
    displayName: 'CUSTOM_LABEL_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'DESCRIPTION_LENGTH_TOO_LONG',
    displayName: 'DESCRIPTION_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'EXPIRATION_DATE_INVALID',
    displayName: 'EXPIRATION_DATE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'GENDER_INVALID',
    displayName: 'GENDER_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'GTIN_INVALID',
    displayName: 'GTIN_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IMAGE_LINK_WARNING',
    displayName: 'IMAGE_LINK_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IOS_DEEP_LINK_INVALID',
    displayName: 'IOS_DEEP_LINK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'IS_BUNDLE_INVALID',
    displayName: 'IS_BUNDLE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ITEM_ADDITIONAL_IMAGE_DOWNLOAD_FAILURE',
    displayName: 'ITEM_ADDITIONAL_IMAGE_DOWNLOAD_FAILURE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LINK_FORMAT_WARNING',
    displayName: 'LINK_FORMAT_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MIN_AD_PRICE_INVALID',
    displayName: 'MIN_AD_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MPN_INVALID',
    displayName: 'MPN_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'MULTIPACK_INVALID',
    displayName: 'MULTIPACK_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_CONDITION_INVALID',
    displayName: 'OPTIONAL_CONDITION_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_CONDITION_MISSING',
    displayName: 'OPTIONAL_CONDITION_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_PRODUCT_CATEGORY_INVALID',
    displayName: 'OPTIONAL_PRODUCT_CATEGORY_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'OPTIONAL_PRODUCT_CATEGORY_MISSING',
    displayName: 'OPTIONAL_PRODUCT_CATEGORY_MISSING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_CATEGORY_DEPTH_WARNING',
    displayName: 'PRODUCT_CATEGORY_DEPTH_WARNING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'PRODUCT_TYPE_LENGTH_TOO_LONG',
    displayName: 'PRODUCT_TYPE_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALES_PRICE_INVALID',
    displayName: 'SALES_PRICE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALES_PRICE_TOO_LOW',
    displayName: 'SALES_PRICE_TOO_LOW',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALES_PRICE_TOO_HIGH',
    displayName: 'SALES_PRICE_TOO_HIGH',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SALE_DATE_INVALID',
    displayName: 'SALE_DATE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_INVALID',
    displayName: 'SHIPPING_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_HEIGHT_INVALID',
    displayName: 'SHIPPING_HEIGHT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_WEIGHT_INVALID',
    displayName: 'SHIPPING_WEIGHT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHIPPING_WIDTH_INVALID',
    displayName: 'SHIPPING_WIDTH_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SIZE_TYPE_INVALID',
    displayName: 'SIZE_TYPE_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TAX_INVALID',
    displayName: 'TAX_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TITLE_LENGTH_TOO_LONG',
    displayName: 'TITLE_LENGTH_TOO_LONG',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TOO_MANY_ADDITIONAL_IMAGE_LINKS',
    displayName: 'TOO_MANY_ADDITIONAL_IMAGE_LINKS',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'UTM_SOURCE_AUTO_CORRECTED',
    displayName: 'UTM_SOURCE_AUTO_CORRECTED',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'WEIGHT_UNIT_INVALID',
    displayName: 'WEIGHT_UNIT_INVALID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsBatchFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsFiltersFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsPostFiltersFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsItemsBatchFields = [
  {
    name: 'batch_id',
    displayName: 'batch_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completed_time',
    displayName: 'completed_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelItemsBatchFields = [
  {
    name: 'batch_id',
    displayName: 'batch_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completed_time',
    displayName: 'completed_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailItemsBatchFields = [
  {
    name: 'batch_id',
    displayName: 'batch_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completed_time',
    displayName: 'completed_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsBatchRequestFields = [];

export const CatalogsItemsCreateBatchRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsDeleteBatchRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsDeleteDiscontinuedBatchRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsUpdateBatchRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsItemsUpsertBatchRequestFields = [
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsListProductsByFilterRequestFields = [];

export const CatalogsListProductsByFeedBasedFilterFields = [
  {
    name: 'feed_id',
    displayName: 'feed_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsVerticalsListProductsByCatalogBasedFilterRequestFields = [];

export const CatalogsRetailListProductsByCatalogBasedFilterRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'locale',
    displayName: 'locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelListProductsByCatalogBasedFilterRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsListProductsByCatalogBasedFilterRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsLocaleFields = [];

export const CatalogsProductFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsVerticalProductGroupFields = [];

export const CatalogsCreativeAssetsProductGroupFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductGroupFiltersFields = [];

export const CatalogsCreativeAssetsProductGroupFiltersAllOfFields = [
  {
    name: 'all_of',
    displayName: 'all_of',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductGroupFiltersAnyOfFields = [
  {
    name: 'any_of',
    displayName: 'any_of',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductGroupFilterKeysFields = [];

export const CatalogsCreativeAssetsProductGroupCreateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductGroupUpdateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductGroupFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductGroupFilterKeysFields = [];

export const CatalogsHotelProductGroupFiltersFields = [];

export const CatalogsHotelProductGroupFiltersAllOfFields = [
  {
    name: 'all_of',
    displayName: 'all_of',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductGroupFiltersAnyOfFields = [
  {
    name: 'any_of',
    displayName: 'any_of',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailProductGroupFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_featured',
    displayName: 'is_featured',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_at',
    displayName: 'updated_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'feed_id',
    displayName: 'feed_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'locale',
    displayName: 'locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductGroupCreateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailProductGroupCreateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'locale',
    displayName: 'locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductGroupUpdateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailProductGroupUpdateRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'locale',
    displayName: 'locale',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_featured',
    displayName: 'is_featured',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'feed_id',
    displayName: 'feed_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupCurrencyCriteriaFields = [
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupFilterKeysFields = [];

export const CatalogsProductGroupFiltersFields = [];

export const CatalogsProductGroupFiltersAllOfFields = [
  {
    name: 'all_of',
    displayName: 'all_of',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupFiltersRequestFields = [];

export const CatalogsProductGroupFiltersAnyOfFields = [
  {
    name: 'any_of',
    displayName: 'any_of',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupMultipleCountriesCriteriaFields = [
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupMultipleGenderCriteriaFields = [
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupMultipleMediaTypesCriteriaFields = [
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupMultipleStringCriteriaFields = [
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupMultipleStringListCriteriaFields = [
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupPricingCriteriaFields = [
  {
    name: 'inclusion',
    displayName: 'inclusion',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'values',
    displayName: 'values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'negated',
    displayName: 'negated',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupProductCountsVerticalFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductGroupProductCountsFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'total',
    displayName: 'total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductGroupProductCountsFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'total',
    displayName: 'total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'videos',
    displayName: 'videos',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailProductGroupProductCountsFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'in_stock',
    displayName: 'in_stock',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'out_of_stock',
    displayName: 'out_of_stock',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'preorder',
    displayName: 'preorder',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'total',
    displayName: 'total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'videos',
    displayName: 'videos',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsProductGroupStatusFields = [];

export const CatalogsProductGroupTypeFields = [];

export const CatalogsProductGroupUpdateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_featured',
    displayName: 'is_featured',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters',
    displayName: 'filters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailProductFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin',
    displayName: 'pin',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailProductMetadataFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_group_id',
    displayName: 'item_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'availability',
    displayName: 'availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'price',
    displayName: 'price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sale_price',
    displayName: 'sale_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency',
    displayName: 'currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsStatusFields = [];

export const CatalogsTypeFields = [];

export const CatalogsVerticalBatchRequestFields = [];

export const CatalogsHotelGuestRatingsFields = [
  {
    name: 'score',
    displayName: 'score',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_reviewers',
    displayName: 'number_of_reviewers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'max_score',
    displayName: 'max_score',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'rating_system',
    displayName: 'rating_system',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelItemErrorResponseFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelItemResponseFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pins',
    displayName: 'pins',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsItemErrorResponseFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsItemResponseFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pins',
    displayName: 'pins',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreativeAssetsProcessingRecordFields = [
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'warnings',
    displayName: 'warnings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailBatchRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailItemErrorResponseFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsRetailItemResponseFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pins',
    displayName: 'pins',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreateRetailItemFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpdateRetailItemFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'update_mask',
    displayName: 'update_mask',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpsertRetailItemFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsDeleteRetailItemFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelBatchRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsDeleteHotelItemFields = [
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreateHotelItemFields = [
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpdateHotelItemFields = [
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpsertHotelItemFields = [
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelAddressFields = [
  {
    name: 'addr1',
    displayName: 'addr1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'city',
    displayName: 'city',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'region',
    displayName: 'region',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'postal_code',
    displayName: 'postal_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin',
    displayName: 'pin',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsHotelProductMetadataFields = [
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpdatableHotelAttributesFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'brand',
    displayName: 'brand',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'latitude',
    displayName: 'latitude',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'longitude',
    displayName: 'longitude',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'neighborhood',
    displayName: 'neighborhood',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'address',
    displayName: 'address',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'category',
    displayName: 'category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'base_price',
    displayName: 'base_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sale_price',
    displayName: 'sale_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'guest_ratings',
    displayName: 'guest_ratings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductMetadataFields = [
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'visibility',
    displayName: 'visibility',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsProductFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin',
    displayName: 'pin',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreativeAssetsVisibilityTypeFields = [];

export const CatalogsCreativeAssetsBatchRequestFields = [
  {
    name: 'catalog_type',
    displayName: 'catalog_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'language',
    displayName: 'language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_id',
    displayName: 'catalog_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsBatchItemFields = [];

export const CatalogsCreateCreativeAssetsItemFields = [
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpdateCreativeAssetsItemFields = [
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpsertCreativeAssetsItemFields = [
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsDeleteCreativeAssetsItemFields = [
  {
    name: 'creative_assets_id',
    displayName: 'creative_assets_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation',
    displayName: 'operation',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsUpdatableCreativeAssetsAttributesFields = [
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'google_product_category',
    displayName: 'google_product_category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'visibility',
    displayName: 'visibility',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsCreativeAssetsAttributesFields = [
  {
    name: 'image_link',
    displayName: 'image_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'video_link',
    displayName: 'video_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'google_product_category',
    displayName: 'google_product_category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'visibility',
    displayName: 'visibility',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CatalogsVerticalProductGroupCreateRequestFields = [];

export const CatalogsVerticalProductGroupUpdateRequestFields = [];

export const ConditionFilterFields = [
  {
    name: 'CONDITION',
    displayName: 'CONDITION',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionApiResponseFields = [
  {
    name: 'num_events_received',
    displayName: 'num_events_received',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'num_events_processed',
    displayName: 'num_events_processed',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'events',
    displayName: 'events',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionAttributionWindowDaysFields = [];

export const ConversionEventResponseFields = [
  {
    name: 'conversion_event',
    displayName: 'conversion_event',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'conversion_tag_id',
    displayName: 'conversion_tag_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionEventsFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionEventsUserDataFields = [
  {
    name: 'ph',
    displayName: 'ph',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ge',
    displayName: 'ge',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'db',
    displayName: 'db',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ln',
    displayName: 'ln',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fn',
    displayName: 'fn',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ct',
    displayName: 'ct',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'st',
    displayName: 'st',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'zp',
    displayName: 'zp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'country',
    displayName: 'country',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'external_id',
    displayName: 'external_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_id',
    displayName: 'click_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_id',
    displayName: 'partner_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionReportAttributionTypeFields = [];

export const ConversionReportTimeTypeFields = [];

export const ConversionTagCommonFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code_snippet',
    displayName: 'code_snippet',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'enhanced_match_status',
    displayName: 'enhanced_match_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_fired_time_ms',
    displayName: 'last_fired_time_ms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'configs',
    displayName: 'configs',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionTagConfigsFields = [
  {
    name: 'aem_enabled',
    displayName: 'aem_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'md_frequency',
    displayName: 'md_frequency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'aem_fnln_enabled',
    displayName: 'aem_fnln_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'aem_ph_enabled',
    displayName: 'aem_ph_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'aem_ge_enabled',
    displayName: 'aem_ge_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'aem_db_enabled',
    displayName: 'aem_db_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'aem_loc_enabled',
    displayName: 'aem_loc_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionTagCreateFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionTagListResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionTagResponseFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code_snippet',
    displayName: 'code_snippet',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'enhanced_match_status',
    displayName: 'enhanced_match_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_fired_time_ms',
    displayName: 'last_fired_time_ms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'configs',
    displayName: 'configs',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ConversionTagTypeFields = [];

export const ConversionTagsOcpmEligibleResponseFields = [];

export const CountryFields = [];

export const CountryFilterFields = [
  {
    name: 'COUNTRY',
    displayName: 'COUNTRY',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateAssetAccessRequestBodyFields = [
  {
    name: 'asset_requests',
    displayName: 'asset_requests',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateAssetAccessRequestErrorMessageFields = [];

export const CreateAssetAccessRequestResponseFields = [
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'invites',
    displayName: 'invites',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateAssetGroupBodyFields = [
  {
    name: 'asset_group_name',
    displayName: 'asset_group_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_description',
    displayName: 'asset_group_description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_types',
    displayName: 'asset_group_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateAssetGroupResponseFields = [
  {
    name: 'asset_group',
    displayName: 'asset_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateInvitesResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateMembershipOrPartnershipInvitesBodyFields = [
  {
    name: 'business_role',
    displayName: 'business_role',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'invite_type',
    displayName: 'invite_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'members',
    displayName: 'members',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partners',
    displayName: 'partners',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateMMMReportRequestFields = [
  {
    name: 'report_name',
    displayName: 'report_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'granularity',
    displayName: 'granularity',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'level',
    displayName: 'level',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_types',
    displayName: 'targeting_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'columns',
    displayName: 'columns',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateMMMReportResponseFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreativeTypeFields = [];

export const CurrencyFields = [];

export const CurrencyFilterFields = [
  {
    name: 'CURRENCY',
    displayName: 'CURRENCY',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomColumnIdFields = [];

export const CustomLabel0FilterFields = [
  {
    name: 'CUSTOM_LABEL_0',
    displayName: 'CUSTOM_LABEL_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomLabel1FilterFields = [
  {
    name: 'CUSTOM_LABEL_1',
    displayName: 'CUSTOM_LABEL_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomLabel2FilterFields = [
  {
    name: 'CUSTOM_LABEL_2',
    displayName: 'CUSTOM_LABEL_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomLabel3FilterFields = [
  {
    name: 'CUSTOM_LABEL_3',
    displayName: 'CUSTOM_LABEL_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomLabel4FilterFields = [
  {
    name: 'CUSTOM_LABEL_4',
    displayName: 'CUSTOM_LABEL_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomerListFields = [
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'num_batches',
    displayName: 'num_batches',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'num_removed_user_records',
    displayName: 'num_removed_user_records',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'num_uploaded_user_records',
    displayName: 'num_uploaded_user_records',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomerListRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'records',
    displayName: 'records',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'list_type',
    displayName: 'list_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CustomerListUpdateRequestFields = [
  {
    name: 'records',
    displayName: 'records',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation_type',
    displayName: 'operation_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DataOutputFormatFields = [];

export const DataStatusFields = [];

export const DeleteMemberAccessResultFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'member_id',
    displayName: 'member_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeleteMemberAccessResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeletedMembersResponseFields = [
  {
    name: 'deleted_members',
    displayName: 'deleted_members',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeletePartnersRequestFields = [
  {
    name: 'partner_ids',
    displayName: 'partner_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_type',
    displayName: 'partner_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeletePartnersResponseFields = [
  {
    name: 'deleted_partners',
    displayName: 'deleted_partners',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeliveryMetricsResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DetailedErrorFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'details',
    displayName: 'details',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SummaryPinFields = [
  {
    name: 'media',
    displayName: 'media',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'alt_text',
    displayName: 'alt_text',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const EnhancedMatchStatusTypeFields = [];

export const EntityStatusFields = [];

export const ErrorFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ExceptionFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const FollowUserRequestFields = [
  {
    name: 'auto_follow',
    displayName: 'auto_follow',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GenderFields = [];

export const GenderFilterFields = [
  {
    name: 'GENDER',
    displayName: 'GENDER',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MediaTypeFields = [];

export const MediaTypeFilterFields = [
  {
    name: 'MEDIA_TYPE',
    displayName: 'MEDIA_TYPE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GenderListFields = [];

export const GetAudiencesOrderByFields = [];

export const GetBusinessAssetsResponseFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_type',
    displayName: 'asset_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_info',
    displayName: 'asset_group_info',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GetBusinessAssetTypeResponseFields = [];

export const GetMMMReportResponseFields = [
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GetPartnerAssetsResponseFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_type',
    displayName: 'asset_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_info',
    displayName: 'asset_group_info',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory0FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_0',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory1FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_1',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory2FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_2',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory3FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_3',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory4FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_4',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory5FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_5',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_5',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GoogleProductCategory6FilterFields = [
  {
    name: 'GOOGLE_PRODUCT_CATEGORY_6',
    displayName: 'GOOGLE_PRODUCT_CATEGORY_6',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupReferenceFilterFields = [
  {
    name: 'PRODUCT_GROUP',
    displayName: 'PRODUCT_GROUP',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const GranularityFields = [];

export const GridClickTypeFields = [];

export const HotelIdFilterFields = [
  {
    name: 'HOTEL_ID',
    displayName: 'HOTEL_ID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreativeAssetsIdFilterFields = [
  {
    name: 'CREATIVE_ASSETS_ID',
    displayName: 'CREATIVE_ASSETS_ID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const HotelProcessingRecordFields = [
  {
    name: 'hotel_id',
    displayName: 'hotel_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'warnings',
    displayName: 'warnings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ImageDetailsFields = [
  {
    name: 'width',
    displayName: 'width',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'height',
    displayName: 'height',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ImageMetadataFields = [
  {
    name: 'item_type',
    displayName: 'item_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationLogFields = [
  {
    name: 'client_timestamp',
    displayName: 'client_timestamp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'event_type',
    displayName: 'event_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'log_level',
    displayName: 'log_level',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'external_business_id',
    displayName: 'external_business_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'advertiser_id',
    displayName: 'advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'merchant_id',
    displayName: 'merchant_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tag_id',
    displayName: 'tag_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'feed_profile_id',
    displayName: 'feed_profile_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'app_version_number',
    displayName: 'app_version_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'platform_version_number',
    displayName: 'platform_version_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'error',
    displayName: 'error',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'request',
    displayName: 'request',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationLogClientErrorFields = [
  {
    name: 'cause',
    displayName: 'cause',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'column_number',
    displayName: 'column_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'file_name',
    displayName: 'file_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'line_number',
    displayName: 'line_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message_detail',
    displayName: 'message_detail',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number',
    displayName: 'number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'stack_trace',
    displayName: 'stack_trace',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationLogClientRequestFields = [
  {
    name: 'method',
    displayName: 'method',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'host',
    displayName: 'host',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'path',
    displayName: 'path',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'request_headers',
    displayName: 'request_headers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'response_headers',
    displayName: 'response_headers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'response_status_code',
    displayName: 'response_status_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationLogsInvalidLogResponseFields = [
  {
    name: 'rejected_logs',
    displayName: 'rejected_logs',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationLogsRequestFields = [
  {
    name: 'logs',
    displayName: 'logs',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationLogsSuccessResponseFields = [
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationMetadataFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'external_business_id',
    displayName: 'external_business_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_merchant_id',
    displayName: 'connected_merchant_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_user_id',
    displayName: 'connected_user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_advertiser_id',
    displayName: 'connected_advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_lba_id',
    displayName: 'connected_lba_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_tag_id',
    displayName: 'connected_tag_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token_expiry',
    displayName: 'partner_access_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token_expiry',
    displayName: 'partner_refresh_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scopes',
    displayName: 'scopes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_timestamp',
    displayName: 'created_timestamp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_timestamp',
    displayName: 'updated_timestamp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'additional_id_1',
    displayName: 'additional_id_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_metadata',
    displayName: 'partner_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationRequestFields = [
  {
    name: 'external_business_id',
    displayName: 'external_business_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_merchant_id',
    displayName: 'connected_merchant_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_advertiser_id',
    displayName: 'connected_advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_lba_id',
    displayName: 'connected_lba_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_tag_id',
    displayName: 'connected_tag_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token',
    displayName: 'partner_access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token',
    displayName: 'partner_refresh_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_primary_email',
    displayName: 'partner_primary_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token_expiry',
    displayName: 'partner_access_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token_expiry',
    displayName: 'partner_refresh_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scopes',
    displayName: 'scopes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'additional_id_1',
    displayName: 'additional_id_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_metadata',
    displayName: 'partner_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationRequestPatchFields = [
  {
    name: 'connected_merchant_id',
    displayName: 'connected_merchant_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_advertiser_id',
    displayName: 'connected_advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_lba_id',
    displayName: 'connected_lba_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_tag_id',
    displayName: 'connected_tag_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token',
    displayName: 'partner_access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token',
    displayName: 'partner_refresh_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_primary_email',
    displayName: 'partner_primary_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token_expiry',
    displayName: 'partner_access_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token_expiry',
    displayName: 'partner_refresh_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scopes',
    displayName: 'scopes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'additional_id_1',
    displayName: 'additional_id_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_metadata',
    displayName: 'partner_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const IntegrationRecordFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'external_business_id',
    displayName: 'external_business_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_merchant_id',
    displayName: 'connected_merchant_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_user_id',
    displayName: 'connected_user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_advertiser_id',
    displayName: 'connected_advertiser_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_lba_id',
    displayName: 'connected_lba_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'connected_tag_id',
    displayName: 'connected_tag_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token',
    displayName: 'partner_access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token',
    displayName: 'partner_refresh_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_primary_email',
    displayName: 'partner_primary_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_access_token_expiry',
    displayName: 'partner_access_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_refresh_token_expiry',
    displayName: 'partner_refresh_token_expiry',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scopes',
    displayName: 'scopes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_metadata',
    displayName: 'partner_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'additional_id_1',
    displayName: 'additional_id_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const InterestFields = [
  {
    name: 'canonical_url',
    displayName: 'canonical_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'key',
    displayName: 'key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const InviteAssetsSummaryFields = [
  {
    name: 'ad_accounts',
    displayName: 'ad_accounts',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'profiles',
    displayName: 'profiles',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const InviteExceptionResponseFields = [
  {
    name: 'invite_or_request_id',
    displayName: 'invite_or_request_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'users_or_partner_ids',
    displayName: 'users_or_partner_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const InviteBusinessRoleBindingFields = [
  {
    name: 'created_by_business_id',
    displayName: 'created_by_business_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by_user_id',
    displayName: 'created_by_user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user',
    displayName: 'user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const InviteResponseFields = [
  {
    name: 'assets_summary',
    displayName: 'assets_summary',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'business_roles',
    displayName: 'business_roles',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by_business',
    displayName: 'created_by_business',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by_user',
    displayName: 'created_by_user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const InviteStatusFields = [];

export const InviteTypeFields = [];

export const AssetGroupBindingFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_name',
    displayName: 'asset_group_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_description',
    displayName: 'asset_group_description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_group_types',
    displayName: 'asset_group_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_accounts_ids',
    displayName: 'ad_accounts_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'profiles_ids',
    displayName: 'profiles_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'owner',
    displayName: 'owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by',
    displayName: 'created_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const AssetGroupTypeFields = [];

export const AssetGroupTypesFields = [];

export const ItemAttributesFields = [
  {
    name: 'additional_image_link',
    displayName: 'additional_image_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'image_link',
    displayName: 'image_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'video_link',
    displayName: 'video_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_link',
    displayName: 'ad_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'adult',
    displayName: 'adult',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'age_group',
    displayName: 'age_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'availability',
    displayName: 'availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'average_review_rating',
    displayName: 'average_review_rating',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'brand',
    displayName: 'brand',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'checkout_enabled',
    displayName: 'checkout_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'color',
    displayName: 'color',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'condition',
    displayName: 'condition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'free_shipping_label',
    displayName: 'free_shipping_label',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'free_shipping_limit',
    displayName: 'free_shipping_limit',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'gender',
    displayName: 'gender',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'google_product_category',
    displayName: 'google_product_category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'gtin',
    displayName: 'gtin',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_group_id',
    displayName: 'item_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_updated_time',
    displayName: 'last_updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'material',
    displayName: 'material',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'min_ad_price',
    displayName: 'min_ad_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'mobile_link',
    displayName: 'mobile_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'mpn',
    displayName: 'mpn',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_ratings',
    displayName: 'number_of_ratings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_reviews',
    displayName: 'number_of_reviews',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pattern',
    displayName: 'pattern',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'price',
    displayName: 'price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_type',
    displayName: 'product_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sale_price',
    displayName: 'sale_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping',
    displayName: 'shipping',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_height',
    displayName: 'shipping_height',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_weight',
    displayName: 'shipping_weight',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_width',
    displayName: 'shipping_width',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_system',
    displayName: 'size_system',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_type',
    displayName: 'size_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tax',
    displayName: 'tax',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'variant_names',
    displayName: 'variant_names',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'variant_values',
    displayName: 'variant_values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemAttributesRequestFields = [
  {
    name: 'additional_image_link',
    displayName: 'additional_image_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'image_link',
    displayName: 'image_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'video_link',
    displayName: 'video_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_link',
    displayName: 'ad_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'adult',
    displayName: 'adult',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'age_group',
    displayName: 'age_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'availability',
    displayName: 'availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'average_review_rating',
    displayName: 'average_review_rating',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'brand',
    displayName: 'brand',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'checkout_enabled',
    displayName: 'checkout_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'color',
    displayName: 'color',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'condition',
    displayName: 'condition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'free_shipping_label',
    displayName: 'free_shipping_label',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'free_shipping_limit',
    displayName: 'free_shipping_limit',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'gender',
    displayName: 'gender',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'google_product_category',
    displayName: 'google_product_category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'gtin',
    displayName: 'gtin',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_group_id',
    displayName: 'item_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_updated_time',
    displayName: 'last_updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'material',
    displayName: 'material',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'min_ad_price',
    displayName: 'min_ad_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'mobile_link',
    displayName: 'mobile_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'mpn',
    displayName: 'mpn',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_ratings',
    displayName: 'number_of_ratings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_reviews',
    displayName: 'number_of_reviews',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pattern',
    displayName: 'pattern',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'price',
    displayName: 'price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_type',
    displayName: 'product_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sale_price',
    displayName: 'sale_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping',
    displayName: 'shipping',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_height',
    displayName: 'shipping_height',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_weight',
    displayName: 'shipping_weight',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_width',
    displayName: 'shipping_width',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_system',
    displayName: 'size_system',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_type',
    displayName: 'size_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tax',
    displayName: 'tax',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'variant_names',
    displayName: 'variant_names',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'variant_values',
    displayName: 'variant_values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemBatchRecordFields = [];

export const ItemCreateBatchRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemDeleteBatchRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemDeleteDiscontinuedBatchRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemGroupIdFilterFields = [
  {
    name: 'ITEM_GROUP_ID',
    displayName: 'ITEM_GROUP_ID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemIdFilterFields = [
  {
    name: 'ITEM_ID',
    displayName: 'ITEM_ID',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemProcessingRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'warnings',
    displayName: 'warnings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemProcessingStatusFields = [];

export const ItemResponseFields = [];

export const ItemUpdateBatchRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'update_mask',
    displayName: 'update_mask',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemUpsertBatchRecordFields = [
  {
    name: 'item_id',
    displayName: 'item_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'attributes',
    displayName: 'attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ItemValidationEventFields = [
  {
    name: 'attribute',
    displayName: 'attribute',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordFields = [
  {
    name: 'bid',
    displayName: 'bid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'match_type',
    displayName: 'match_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'value',
    displayName: 'value',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'archived',
    displayName: 'archived',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_id',
    displayName: 'parent_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_type',
    displayName: 'parent_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordErrorFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'error_messages',
    displayName: 'error_messages',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordListFields = [];

export const KeywordMetricsFields = [
  {
    name: 'avg_cpc_in_micro_currency',
    displayName: 'avg_cpc_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keyword_query_volume',
    displayName: 'keyword_query_volume',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordMetricsResponseFields = [
  {
    name: 'keyword',
    displayName: 'keyword',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metrics',
    displayName: 'metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordUpdateFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'archived',
    displayName: 'archived',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid',
    displayName: 'bid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordUpdateBodyFields = [
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordsCommonFields = [
  {
    name: 'bid',
    displayName: 'bid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'match_type',
    displayName: 'match_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'value',
    displayName: 'value',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordsMetricsArrayResponseFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordsRequestFields = [
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_id',
    displayName: 'parent_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const KeywordsResponseFields = [
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const L1InterestListFields = [];

export const LanguageFields = [];

export const LeadFormCommonFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'privacy_policy_link',
    displayName: 'privacy_policy_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_accepted_terms',
    displayName: 'has_accepted_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completion_message',
    displayName: 'completion_message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'disclosure_language',
    displayName: 'disclosure_language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'questions',
    displayName: 'questions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'policy_links',
    displayName: 'policy_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormQuestionFields = [
  {
    name: 'question_type',
    displayName: 'question_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_question_field_type',
    displayName: 'custom_question_field_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_question_label',
    displayName: 'custom_question_label',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_question_options',
    displayName: 'custom_question_options',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormQuestionFieldTypeFields = [];

export const LeadFormQuestionTypeFields = [];

export const LeadFormTestRequestFields = [
  {
    name: 'answers',
    displayName: 'answers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormTestResponseFields = [
  {
    name: 'subscription_id',
    displayName: 'subscription_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormResponseFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'privacy_policy_link',
    displayName: 'privacy_policy_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_accepted_terms',
    displayName: 'has_accepted_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completion_message',
    displayName: 'completion_message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'disclosure_language',
    displayName: 'disclosure_language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'questions',
    displayName: 'questions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'policy_links',
    displayName: 'policy_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormStatusFields = [];

export const LeadFormArrayResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'privacy_policy_link',
    displayName: 'privacy_policy_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_accepted_terms',
    displayName: 'has_accepted_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completion_message',
    displayName: 'completion_message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'disclosure_language',
    displayName: 'disclosure_language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'questions',
    displayName: 'questions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'policy_links',
    displayName: 'policy_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadFormUpdateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'privacy_policy_link',
    displayName: 'privacy_policy_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_accepted_terms',
    displayName: 'has_accepted_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'completion_message',
    displayName: 'completion_message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'disclosure_language',
    displayName: 'disclosure_language',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'questions',
    displayName: 'questions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'policy_links',
    displayName: 'policy_links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadsExportCreateRequestFields = [
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_id',
    displayName: 'ad_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadsExportCreateResponseFields = [
  {
    name: 'leads_export_id',
    displayName: 'leads_export_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LeadsExportStatusFields = [];

export const LeadsExportResponseDataFields = [
  {
    name: 'export_status',
    displayName: 'export_status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'download_url',
    displayName: 'download_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LinkedBusinessFields = [
  {
    name: 'username',
    displayName: 'username',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'image_small_url',
    displayName: 'image_small_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'image_medium_url',
    displayName: 'image_medium_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'image_large_url',
    displayName: 'image_large_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'image_xlarge_url',
    displayName: 'image_xlarge_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MemberBusinessRoleFields = [];

export const MatchTypeFields = [];

export const MatchTypeResponseFields = [];

export const MaxPriceFilterFields = [
  {
    name: 'MAX_PRICE',
    displayName: 'MAX_PRICE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MediaUploadFields = [
  {
    name: 'media_id',
    displayName: 'media_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'upload_url',
    displayName: 'upload_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'upload_parameters',
    displayName: 'upload_parameters',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MediaUploadDetailsFields = [
  {
    name: 'media_id',
    displayName: 'media_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MediaUploadRequestFields = [
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MediaUploadStatusFields = [];

export const MediaUploadTypeFields = [];

export const MembersToDeleteBodyFields = [
  {
    name: 'members',
    displayName: 'members',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MetricsFields = [];

export const MetricsReportingLevelFields = [];

export const MetricsResponseFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PriceFilterFields = [
  {
    name: 'PRICE',
    displayName: 'PRICE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MinPriceFilterFields = [
  {
    name: 'MIN_PRICE',
    displayName: 'MIN_PRICE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MMMReportingColumnFields = [];

export const MMMReportingTargetingTypeFields = [];

export const NonNullableCatalogsCurrencyFields = [];

export const NonNullableProductAvailabilityTypeFields = [];

export const NullableCatalogsItemFieldTypeFields = [];

export const NullableCurrencyFields = [];

export const OauthAccessTokenRequestFields = [
  {
    name: 'grant_type',
    displayName: 'grant_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenRequestCodeFields = [
  {
    name: 'grant_type',
    displayName: 'grant_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenRequestRefreshFields = [
  {
    name: 'grant_type',
    displayName: 'grant_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenRequestClientCredentialsFields = [
  {
    name: 'grant_type',
    displayName: 'grant_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenResponseFields = [
  {
    name: 'response_type',
    displayName: 'response_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenResponseCodeFields = [
  {
    name: 'response_type',
    displayName: 'response_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenResponseEverlastingRefreshFields = [
  {
    name: 'response_type',
    displayName: 'response_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenResponseIntegrationRefreshFields = [
  {
    name: 'response_type',
    displayName: 'response_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenResponseRefreshFields = [
  {
    name: 'response_type',
    displayName: 'response_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OauthAccessTokenResponseClientCredentialsFields = [
  {
    name: 'response_type',
    displayName: 'response_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ObjectiveTypeFields = [];

export const OptimizationGoalMetadataFields = [
  {
    name: 'conversion_tag_v3_goal_metadata',
    displayName: 'conversion_tag_v3_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'frequency_goal_metadata',
    displayName: 'frequency_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scrollup_goal_metadata',
    displayName: 'scrollup_goal_metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OrderLineFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'purchase_order_id',
    displayName: 'purchase_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget',
    displayName: 'budget',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'paid_budget',
    displayName: 'paid_budget',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'paid_type',
    displayName: 'paid_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'campaign_ids',
    displayName: 'campaign_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OrderLineErrorFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'error_messages',
    displayName: 'error_messages',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OrderLinePaidTypeFields = [];

export const OrderLineResponseFields = [
  {
    name: 'errors',
    displayName: 'errors',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line',
    displayName: 'order_line',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OrderLineSingleResponseFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OrderLineStatusFields = [];

export const OrderLinesFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'purchase_order_id',
    displayName: 'purchase_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_time',
    displayName: 'start_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_time',
    displayName: 'end_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget',
    displayName: 'budget',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'paid_budget',
    displayName: 'paid_budget',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'paid_type',
    displayName: 'paid_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OrderLinesArrayResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PacingDeliveryTypeFields = [];

export const PaginatedFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bookmark',
    displayName: 'bookmark',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PermissionsFields = [];

export const PermissionsResponseFields = [];

export const PermissionsWithOwnerFields = [];

export const PinFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'dominant_color',
    displayName: 'dominant_color',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'alt_text',
    displayName: 'alt_text',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_id',
    displayName: 'board_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_section_id',
    displayName: 'board_section_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_owner',
    displayName: 'board_owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_owner',
    displayName: 'is_owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media',
    displayName: 'media',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_source',
    displayName: 'media_source',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_pin_id',
    displayName: 'parent_pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_standard',
    displayName: 'is_standard',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_been_promoted',
    displayName: 'has_been_promoted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'note',
    displayName: 'note',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_metrics',
    displayName: 'pin_metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinAnalyticsMetricsResponseFields = [
  {
    name: 'lifetime_metrics',
    displayName: 'lifetime_metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'daily_metrics',
    displayName: 'daily_metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary_metrics',
    displayName: 'summary_metrics',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinAnalyticsResponseFields = [];

export const BulkPinAnalyticsResponseFields = [];

export const PinCreateFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_at',
    displayName: 'created_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'dominant_color',
    displayName: 'dominant_color',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'alt_text',
    displayName: 'alt_text',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_id',
    displayName: 'board_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_section_id',
    displayName: 'board_section_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_owner',
    displayName: 'board_owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media',
    displayName: 'media',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_source',
    displayName: 'media_source',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_pin_id',
    displayName: 'parent_pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'note',
    displayName: 'note',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaFields = [
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaMetadataFields = [];

export const PinMediaSourceFields = [];

export const PinMediaSourceImageBase64Fields = [
  {
    name: 'source_type',
    displayName: 'source_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_type',
    displayName: 'content_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_standard',
    displayName: 'is_standard',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaSourceImageURLFields = [
  {
    name: 'source_type',
    displayName: 'source_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_standard',
    displayName: 'is_standard',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaSourceImagesBase64Fields = [
  {
    name: 'source_type',
    displayName: 'source_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'index',
    displayName: 'index',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaSourceImagesURLFields = [
  {
    name: 'source_type',
    displayName: 'source_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'index',
    displayName: 'index',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaSourcePinURLFields = [
  {
    name: 'source_type',
    displayName: 'source_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_affiliate_link',
    displayName: 'is_affiliate_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaSourceVideoIDFields = [
  {
    name: 'source_type',
    displayName: 'source_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cover_image_url',
    displayName: 'cover_image_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cover_image_content_type',
    displayName: 'cover_image_content_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cover_image_data',
    displayName: 'cover_image_data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_id',
    displayName: 'media_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_standard',
    displayName: 'is_standard',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaWithImageFields = [
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaWithImageAndVideoFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaWithImagesFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaWithVideoFields = [
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cover_image_url',
    displayName: 'cover_image_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'video_url',
    displayName: 'video_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'duration',
    displayName: 'duration',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'height',
    displayName: 'height',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'width',
    displayName: 'width',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinMediaWithVideosFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_type',
    displayName: 'media_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PinPromotionSummaryStatusFields = [];

export const PinUpdateFields = [
  {
    name: 'alt_text',
    displayName: 'alt_text',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_id',
    displayName: 'board_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'board_section_id',
    displayName: 'board_section_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'carousel_slots',
    displayName: 'carousel_slots',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'note',
    displayName: 'note',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PlacementGroupTypeFields = [];

export const ProductAvailabilityTypeFields = [];

export const ProductGroupAnalyticsResponseFields = [];

export const ProductGroupPromotionFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'included',
    displayName: 'included',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'definition',
    displayName: 'definition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'relative_definition',
    displayName: 'relative_definition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_id',
    displayName: 'parent_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'slideshow_collections_title',
    displayName: 'slideshow_collections_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'slideshow_collections_description',
    displayName: 'slideshow_collections_description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_mdl',
    displayName: 'is_mdl',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_url',
    displayName: 'tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_product_group_id',
    displayName: 'catalog_product_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_product_group_name',
    displayName: 'catalog_product_group_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collections_hero_pin_id',
    displayName: 'collections_hero_pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collections_hero_destination_url',
    displayName: 'collections_hero_destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupPromotionCreateRequestFields = [
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_group_promotion',
    displayName: 'product_group_promotion',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupPromotionCreateRequestElementFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'included',
    displayName: 'included',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'definition',
    displayName: 'definition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'relative_definition',
    displayName: 'relative_definition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_id',
    displayName: 'parent_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'slideshow_collections_title',
    displayName: 'slideshow_collections_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'slideshow_collections_description',
    displayName: 'slideshow_collections_description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_mdl',
    displayName: 'is_mdl',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_url',
    displayName: 'tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_product_group_id',
    displayName: 'catalog_product_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_product_group_name',
    displayName: 'catalog_product_group_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collections_hero_pin_id',
    displayName: 'collections_hero_pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collections_hero_destination_url',
    displayName: 'collections_hero_destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupPromotionResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupPromotionResponseElementFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bid_in_micro_currency',
    displayName: 'bid_in_micro_currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'included',
    displayName: 'included',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'definition',
    displayName: 'definition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'relative_definition',
    displayName: 'relative_definition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_id',
    displayName: 'parent_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'slideshow_collections_title',
    displayName: 'slideshow_collections_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'slideshow_collections_description',
    displayName: 'slideshow_collections_description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_mdl',
    displayName: 'is_mdl',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_url',
    displayName: 'tracking_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_product_group_id',
    displayName: 'catalog_product_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'catalog_product_group_name',
    displayName: 'catalog_product_group_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collections_hero_pin_id',
    displayName: 'collections_hero_pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'collections_hero_destination_url',
    displayName: 'collections_hero_destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grid_click_type',
    displayName: 'grid_click_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creative_type',
    displayName: 'creative_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupPromotionResponseItemFields = [
  {
    name: 'data',
    displayName: 'data',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupPromotionUpdateRequestFields = [
  {
    name: 'ad_group_id',
    displayName: 'ad_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_group_promotion',
    displayName: 'product_group_promotion',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductGroupSummaryStatusFields = [];

export const ProductType0FilterFields = [
  {
    name: 'PRODUCT_TYPE_0',
    displayName: 'PRODUCT_TYPE_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductType1FilterFields = [
  {
    name: 'PRODUCT_TYPE_1',
    displayName: 'PRODUCT_TYPE_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductType2FilterFields = [
  {
    name: 'PRODUCT_TYPE_2',
    displayName: 'PRODUCT_TYPE_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductType3FilterFields = [
  {
    name: 'PRODUCT_TYPE_3',
    displayName: 'PRODUCT_TYPE_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ProductType4FilterFields = [
  {
    name: 'PRODUCT_TYPE_4',
    displayName: 'PRODUCT_TYPE_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const QuizPinDataFields = [
  {
    name: 'questions',
    displayName: 'questions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tie_breaker_type',
    displayName: 'tie_breaker_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tie_breaker_custom_result',
    displayName: 'tie_breaker_custom_result',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const QuizPinOptionFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'text',
    displayName: 'text',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const QuizPinQuestionFields = [
  {
    name: 'question_id',
    displayName: 'question_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'question_text',
    displayName: 'question_text',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'options',
    displayName: 'options',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const QuizPinResultFields = [
  {
    name: 'organic_pin_id',
    displayName: 'organic_pin_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'android_deep_link',
    displayName: 'android_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ios_deep_link',
    displayName: 'ios_deep_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'destination_url',
    displayName: 'destination_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'result_id',
    displayName: 'result_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const RelatedTermsFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'related_term_count',
    displayName: 'related_term_count',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'related_terms_list',
    displayName: 'related_terms_list',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ReportingColumnAsyncFields = [];

export const ResourceIdToRolesFields = [];

export const RespondToInvitesResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const RoleFields = [];

export const SSIOAccountAddressFields = [
  {
    name: 'display',
    displayName: 'display',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'purpose',
    displayName: 'purpose',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'address_id',
    displayName: 'address_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_legal_entity',
    displayName: 'order_legal_entity',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOAccountItemFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'io_terms_id',
    displayName: 'io_terms_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'io_terms',
    displayName: 'io_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'us_terms_id',
    displayName: 'us_terms_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'us_terms',
    displayName: 'us_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'row_terms_id',
    displayName: 'row_terms_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'row_terms',
    displayName: 'row_terms',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'io_type',
    displayName: 'io_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'addresses',
    displayName: 'addresses',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOAccountPMPNameFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOAccountResponseFields = [
  {
    name: 'eligible',
    displayName: 'eligible',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'can_edit',
    displayName: 'can_edit',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billto_infos',
    displayName: 'billto_infos',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency',
    displayName: 'currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pmp_names',
    displayName: 'pmp_names',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'error',
    displayName: 'error',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOCreateInsertionOrderRequestFields = [
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'po_number',
    displayName: 'po_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_amount',
    displayName: 'budget_amount',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_firstname',
    displayName: 'billing_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_lastname',
    displayName: 'billing_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_email',
    displayName: 'billing_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_firstname',
    displayName: 'media_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_lastname',
    displayName: 'media_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_email',
    displayName: 'media_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'agency_link',
    displayName: 'agency_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_email',
    displayName: 'user_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'accepted_terms_time',
    displayName: 'accepted_terms_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pmp_id',
    displayName: 'pmp_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_name',
    displayName: 'order_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_line_type',
    displayName: 'order_line_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'accepted_terms_id',
    displayName: 'accepted_terms_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billto_company_id',
    displayName: 'billto_company_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billto_business_address_id',
    displayName: 'billto_business_address_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billto_billing_address_id',
    displayName: 'billto_billing_address_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'estimated_monthly_spend',
    displayName: 'estimated_monthly_spend',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency_info',
    displayName: 'currency_info',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOCreateInsertionOrderResponseFields = [
  {
    name: 'pin_order_id',
    displayName: 'pin_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOEditInsertionOrderRequestFields = [
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'po_number',
    displayName: 'po_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_amount',
    displayName: 'budget_amount',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_firstname',
    displayName: 'billing_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_lastname',
    displayName: 'billing_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_email',
    displayName: 'billing_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_firstname',
    displayName: 'media_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_lastname',
    displayName: 'media_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_email',
    displayName: 'media_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'agency_link',
    displayName: 'agency_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_email',
    displayName: 'user_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'oracle_line_id',
    displayName: 'oracle_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'salesforce_order_id',
    displayName: 'salesforce_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'salesforce_order_line_id',
    displayName: 'salesforce_order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ads_manager_order_line_id',
    displayName: 'ads_manager_order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOEditInsertionOrderResponseFields = [
  {
    name: 'pin_order_id',
    displayName: 'pin_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOInsertionOrderCommonFields = [
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'po_number',
    displayName: 'po_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_amount',
    displayName: 'budget_amount',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_firstname',
    displayName: 'billing_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_lastname',
    displayName: 'billing_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_email',
    displayName: 'billing_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_firstname',
    displayName: 'media_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_lastname',
    displayName: 'media_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_email',
    displayName: 'media_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'agency_link',
    displayName: 'agency_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_email',
    displayName: 'user_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOInsertionOrderStatusFields = [
  {
    name: 'pin_order_id',
    displayName: 'pin_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creation_time',
    displayName: 'creation_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOInsertionOrderStatusResponseFields = [
  {
    name: 'pin_order_id',
    displayName: 'pin_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creation_time',
    displayName: 'creation_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SSIOOrderLineFields = [
  {
    name: 'salesforce_order_line_id',
    displayName: 'salesforce_order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ads_manager_order_line_id',
    displayName: 'ads_manager_order_line_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pin_order_id',
    displayName: 'pin_order_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_modified_date_time',
    displayName: 'last_modified_date_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'start_date',
    displayName: 'start_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'end_date',
    displayName: 'end_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'bill_to_company_name',
    displayName: 'bill_to_company_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_firstname',
    displayName: 'billing_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_lastname',
    displayName: 'billing_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'billing_contact_email',
    displayName: 'billing_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_email',
    displayName: 'media_contact_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_firstname',
    displayName: 'media_contact_firstname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'media_contact_lastname',
    displayName: 'media_contact_lastname',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency_info',
    displayName: 'currency_info',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'agency_link',
    displayName: 'agency_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'po_number',
    displayName: 'po_number',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'order_name',
    displayName: 'order_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pmp_name',
    displayName: 'pmp_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'accepted_terms_id',
    displayName: 'accepted_terms_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'accepted_terms_time',
    displayName: 'accepted_terms_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'budget_amount',
    displayName: 'budget_amount',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'estimated_monthly_spend',
    displayName: 'estimated_monthly_spend',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SharedAudienceAccountFields = [
  {
    name: 'account_id',
    displayName: 'account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'account_name',
    displayName: 'account_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'account_type',
    displayName: 'account_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shared_on_timestamp',
    displayName: 'shared_on_timestamp',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SingleInterestTargetingOptionResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'child_interests',
    displayName: 'child_interests',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'level',
    displayName: 'level',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingAdvertiserCountryFields = [];

export const TargetingOptionResponseFields = [];

export const TargetingSpecFields = [
  {
    name: 'AGE_BUCKET',
    displayName: 'AGE_BUCKET',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'APPTYPE',
    displayName: 'APPTYPE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AUDIENCE_EXCLUDE',
    displayName: 'AUDIENCE_EXCLUDE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'AUDIENCE_INCLUDE',
    displayName: 'AUDIENCE_INCLUDE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'GENDER',
    displayName: 'GENDER',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'GEO',
    displayName: 'GEO',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'INTEREST',
    displayName: 'INTEREST',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LOCALE',
    displayName: 'LOCALE',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'LOCATION',
    displayName: 'LOCATION',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'SHOPPING_RETARGETING',
    displayName: 'SHOPPING_RETARGETING',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'TARGETING_STRATEGY',
    displayName: 'TARGETING_STRATEGY',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateAudienceSizingFields = [
  {
    name: 'reach_estimate',
    displayName: 'reach_estimate',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateCommonFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_attributes',
    displayName: 'targeting_attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateCreateFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_attributes',
    displayName: 'targeting_attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_attributes',
    displayName: 'targeting_attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateKeywordFields = [
  {
    name: 'match_type',
    displayName: 'match_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'value',
    displayName: 'value',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateGetResponseDataFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_attributes',
    displayName: 'targeting_attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sizing',
    displayName: 'sizing',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'valid',
    displayName: 'valid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateResponseDataFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'auto_targeting_enabled',
    displayName: 'auto_targeting_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'targeting_attributes',
    displayName: 'targeting_attributes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'placement_group',
    displayName: 'placement_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'keywords',
    displayName: 'keywords',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tracking_urls',
    displayName: 'tracking_urls',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sizing',
    displayName: 'sizing',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTemplateUpdateRequestFields = [
  {
    name: 'operation_type',
    displayName: 'operation_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TargetingTypeFilterFields = [
  {
    name: 'targeting_types',
    displayName: 'targeting_types',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplateResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_ids',
    displayName: 'ad_account_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_id',
    displayName: 'user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report_start_relative_days_in_past',
    displayName: 'report_start_relative_days_in_past',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report_end_relative_days_in_past',
    displayName: 'report_end_relative_days_in_past',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_range',
    displayName: 'date_range',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report_level',
    displayName: 'report_level',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'report_format',
    displayName: 'report_format',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'columns',
    displayName: 'columns',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'granularity',
    displayName: 'granularity',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'view_window_days',
    displayName: 'view_window_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click_window_days',
    displayName: 'click_window_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'engagement_window_days',
    displayName: 'engagement_window_days',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'conversion_report_time_type',
    displayName: 'conversion_report_time_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filters_json',
    displayName: 'filters_json',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_owned_by_user',
    displayName: 'is_owned_by_user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_scheduled',
    displayName: 'is_scheduled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'creation_source',
    displayName: 'creation_source',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_deleted',
    displayName: 'is_deleted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'updated_time',
    displayName: 'updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_column_ids',
    displayName: 'custom_column_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ingestion_sources',
    displayName: 'ingestion_sources',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TermsOfServiceFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'html',
    displayName: 'html',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_accepted',
    displayName: 'has_accepted',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'ad_account_id',
    displayName: 'ad_account_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TermsSuggestedResponseFields = [];

export const TopPinsAnalyticsResponseFields = [
  {
    name: 'date_availability',
    displayName: 'date_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pins',
    displayName: 'pins',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sort_by',
    displayName: 'sort_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TopVideoPinsAnalyticsResponseFields = [
  {
    name: 'date_availability',
    displayName: 'date_availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pins',
    displayName: 'pins',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sort_by',
    displayName: 'sort_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TrackingUrlsFields = [
  {
    name: 'impression',
    displayName: 'impression',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'click',
    displayName: 'click',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'engagement',
    displayName: 'engagement',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'buyable_button',
    displayName: 'buyable_button',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'audience_verification',
    displayName: 'audience_verification',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TrendTypeFields = [];

export const TrendingKeywordsResponseFields = [
  {
    name: 'trends',
    displayName: 'trends',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TrendsSupportedRegionFields = [];

export const UpdatableItemAttributesFields = [
  {
    name: 'ad_link',
    displayName: 'ad_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'adult',
    displayName: 'adult',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'age_group',
    displayName: 'age_group',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'availability',
    displayName: 'availability',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'average_review_rating',
    displayName: 'average_review_rating',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'brand',
    displayName: 'brand',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'checkout_enabled',
    displayName: 'checkout_enabled',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'color',
    displayName: 'color',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'condition',
    displayName: 'condition',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_0',
    displayName: 'custom_label_0',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_1',
    displayName: 'custom_label_1',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_2',
    displayName: 'custom_label_2',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_3',
    displayName: 'custom_label_3',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'custom_label_4',
    displayName: 'custom_label_4',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'description',
    displayName: 'description',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'free_shipping_label',
    displayName: 'free_shipping_label',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'free_shipping_limit',
    displayName: 'free_shipping_limit',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'gender',
    displayName: 'gender',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'google_product_category',
    displayName: 'google_product_category',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'gtin',
    displayName: 'gtin',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'item_group_id',
    displayName: 'item_group_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_updated_time',
    displayName: 'last_updated_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'link',
    displayName: 'link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'material',
    displayName: 'material',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'min_ad_price',
    displayName: 'min_ad_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'mobile_link',
    displayName: 'mobile_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'mpn',
    displayName: 'mpn',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_ratings',
    displayName: 'number_of_ratings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'number_of_reviews',
    displayName: 'number_of_reviews',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pattern',
    displayName: 'pattern',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'price',
    displayName: 'price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'product_type',
    displayName: 'product_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sale_price',
    displayName: 'sale_price',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping',
    displayName: 'shipping',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_height',
    displayName: 'shipping_height',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_weight',
    displayName: 'shipping_weight',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shipping_width',
    displayName: 'shipping_width',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size',
    displayName: 'size',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_system',
    displayName: 'size_system',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'size_type',
    displayName: 'size_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tax',
    displayName: 'tax',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'title',
    displayName: 'title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'variant_names',
    displayName: 'variant_names',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'variant_values',
    displayName: 'variant_values',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UserBusinessRoleBindingFields = [
  {
    name: 'assets_summary',
    displayName: 'assets_summary',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'business_roles',
    displayName: 'business_roles',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by_business',
    displayName: 'created_by_business',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by_user',
    displayName: 'created_by_user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_time',
    displayName: 'created_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_shared_partner',
    displayName: 'is_shared_partner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user',
    displayName: 'user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateAssetInvitesRequestItemFields = [
  {
    name: 'invite_id',
    displayName: 'invite_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'invite_type',
    displayName: 'invite_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_id_to_permissions',
    displayName: 'asset_id_to_permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const CreateAssetInvitesRequestFields = [
  {
    name: 'invites',
    displayName: 'invites',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateAssetGroupBodyFields = [
  {
    name: 'asset_groups_to_update',
    displayName: 'asset_groups_to_update',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateAssetGroupResponseFields = [
  {
    name: 'updated_asset_groups',
    displayName: 'updated_asset_groups',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeleteAssetGroupBodyFields = [
  {
    name: 'asset_groups_to_delete',
    displayName: 'asset_groups_to_delete',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeleteAssetGroupResponseFields = [
  {
    name: 'deleted_asset_groups',
    displayName: 'deleted_asset_groups',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'exceptions',
    displayName: 'exceptions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateInvitesResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DeleteInvitesResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMemberAssetsResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UsersForIndividualAssetResponseFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'member_id',
    displayName: 'member_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdateMaskFieldTypeFields = [];

export const UpdatePartnerResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UserFollowingFeedTypeFields = [];

export const UserListOperationTypeFields = [];

export const UserListTypeFields = [];

export const UserSingleAssetBindingFields = [
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user',
    displayName: 'user',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UserSummaryFields = [
  {
    name: 'username',
    displayName: 'username',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UserWebsiteSummaryFields = [
  {
    name: 'website',
    displayName: 'website',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'verified_at',
    displayName: 'verified_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UserWebsiteVerificationCodeFields = [
  {
    name: 'verification_code',
    displayName: 'verification_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'dns_txt_record',
    displayName: 'dns_txt_record',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metatag',
    displayName: 'metatag',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'filename',
    displayName: 'filename',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'file_content',
    displayName: 'file_content',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UserWebsiteVerifyRequestFields = [
  {
    name: 'website',
    displayName: 'website',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'verification_method',
    displayName: 'verification_method',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const VideoMetadataFields = [
  {
    name: 'item_type',
    displayName: 'item_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'cover_image_url',
    displayName: 'cover_image_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'video_url',
    displayName: 'video_url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'duration',
    displayName: 'duration',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'height',
    displayName: 'height',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'width',
    displayName: 'width',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PartnerTypeFields = [];

export const UpdatePartnerAssetsResultFields = [
  {
    name: 'asset_id',
    displayName: 'asset_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'asset_type',
    displayName: 'asset_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'partner_id',
    displayName: 'partner_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const UpdatePartnerAssetsResultsResponseArrayFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SharedAudienceCommonFields = [
  {
    name: 'audience_id',
    displayName: 'audience_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation_type',
    displayName: 'operation_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SharedAudienceFields = [
  {
    name: 'audience_id',
    displayName: 'audience_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation_type',
    displayName: 'operation_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipient_account_ids',
    displayName: 'recipient_account_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BusinessSharedAudienceFields = [
  {
    name: 'audience_id',
    displayName: 'audience_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'operation_type',
    displayName: 'operation_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipient_business_ids',
    displayName: 'recipient_business_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SharedAudienceResponseCommonFields = [
  {
    name: 'audience_id',
    displayName: 'audience_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const SharedAudienceResponseFields = [
  {
    name: 'audience_id',
    displayName: 'audience_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipient_account_ids',
    displayName: 'recipient_account_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const BusinessSharedAudienceResponseFields = [
  {
    name: 'audience_id',
    displayName: 'audience_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'permissions',
    displayName: 'permissions',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipient_business_ids',
    displayName: 'recipient_business_ids',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OperationTypeFields = [];
