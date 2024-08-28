
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { ad_accounts } from './events/ad_accounts'
import { ad_groupsanalytics } from './events/ad_groupsanalytics'
import { ad_groups_taring_analyticsget } from './events/ad_groups_taring_analyticsget'
import { ad_groups } from './events/ad_groups'
import { adsanalytics } from './events/adsanalytics'
import { ad_taring_analyticsget } from './events/ad_taring_analyticsget'
import { ads } from './events/ads'
import { ad_accountanalytics } from './events/ad_accountanalytics'
import { audience_insights } from './events/audience_insights'
import { audiences } from './events/audiences'
import { bulk_request } from './events/bulk_request'
import { campaignsanalytics } from './events/campaignsanalytics'
import { campaign_taring_analyticsget } from './events/campaign_taring_analyticsget'
import { campaigns } from './events/campaigns'
import { conversion_tagslist } from './events/conversion_tagslist'
import { ocpm_eligible_conversion_tags } from './events/ocpm_eligible_conversion_tags'
import { conversion_tags } from './events/conversion_tags'
import { customer_lists } from './events/customer_lists'
import { audience_insights_scope_and_type } from './events/audience_insights_scope_and_type'
import { country_keywords_metrics } from './events/country_keywords_metrics'
import { lead_form } from './events/lead_form'
import { ad_accounts_subscriptions_by_id } from './events/ad_accounts_subscriptions_by_id'
import { leads_export } from './events/leads_export'
import { analytics_mmm_report } from './events/analytics_mmm_report'
import { order_lines } from './events/order_lines'
import { product_group_promotions } from './events/product_group_promotions'
import { product_groupsanalytics } from './events/product_groupsanalytics'
import { analytics_report } from './events/analytics_report'
import { ssio_accounts } from './events/ssio_accounts'
import { ssio_insertion_orders_status_by_pin_order_id } from './events/ssio_insertion_orders_status_by_pin_order_id'
import { ad_account_taring_analyticsget } from './events/ad_account_taring_analyticsget'
import { terms_of_service } from './events/terms_of_service'
import { boards } from './events/boards'
import { feeds } from './events/feeds'
import { items } from './events/items'
import { items_batch } from './events/items_batch'
import { catalogs_product_groups } from './events/catalogs_product_groups'
import { catalogs_product_groupsproduct_counts_ } from './events/catalogs_product_groupsproduct_counts_'
import { reports } from './events/reports'
import { integrations_commerce } from './events/integrations_commerce'
import { integrations_by_id } from './events/integrations_by_id'
import { media } from './events/media'
import { pins } from './events/pins'
import { pinsanalytics } from './events/pinsanalytics'
import { multi_pinsanalytics } from './events/multi_pinsanalytics'
import { ad_account_countries } from './events/ad_account_countries'
import { delivery_metrics } from './events/delivery_metrics'
import { metrics_ready_state } from './events/metrics_ready_state'
import { interest_taring_optionsget } from './events/interest_taring_optionsget'
import { taring_optionsget } from './events/taring_optionsget'
import { terms_relatedlist } from './events/terms_relatedlist'
import { terms_suggestedlist } from './events/terms_suggestedlist'
import { trending_keywordslist } from './events/trending_keywordslist'
import { user_account } from './events/user_account'
import { user_accountanalytics } from './events/user_accountanalytics'
import { user_accountanalyticstop_pins } from './events/user_accountanalyticstop_pins'
import { user_accountanalyticstop_video_pins } from './events/user_accountanalyticstop_video_pins'
import { website_verification } from './events/website_verification'

type PinterestConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class PinterestIntegration extends Integration {
  config: PinterestConfig;

  constructor({ config }: { config: PinterestConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'PINTEREST',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'pinterest.ad_accounts/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
ad_account_id: z.string()}),
                handler: ad_accounts,
            },
        

             'pinterest.ad_groupsanalytics/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_ad_group_ids_required': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
ad_account_id: z.string()}),
                handler: ad_groupsanalytics,
            },
        

             'pinterest.ad_groups_taring_analyticsget/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_ad_group_ids_required': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_targeting_types': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
'query_attribution_types': z.string(),
ad_account_id: z.string()}),
                handler: ad_groups_taring_analyticsget,
            },
        

             'pinterest.ad_groups/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_ad_group_id': z.string(),
ad_account_id: z.string(),
ad_group_id: z.string()}),
                handler: ad_groups,
            },
        

             'pinterest.adsanalytics/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_ad_ids': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
'pin_ids': z.string(),
'query_campaign_ids': z.string(),
ad_account_id: z.string()}),
                handler: adsanalytics,
            },
        

             'pinterest.ad_taring_analyticsget/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_ad_ids_required': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_ad_targeting_types': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
'query_attribution_types': z.string(),
ad_account_id: z.string()}),
                handler: ad_taring_analyticsget,
            },
        

             'pinterest.ads/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_ad_id': z.string(),
ad_account_id: z.string(),
ad_id: z.string()}),
                handler: ads,
            },
        

             'pinterest.ad_accountanalytics/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
ad_account_id: z.string()}),
                handler: ad_accountanalytics,
            },
        

             'pinterest.audience_insights/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_audience_insight_type': z.string(),
ad_account_id: z.string()}),
                handler: audience_insights,
            },
        

             'pinterest.audiences/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_audience_id': z.string(),
ad_account_id: z.string(),
audience_id: z.string()}),
                handler: audiences,
            },
        

             'pinterest.bulk_request/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_bulk_request_id': z.string(),
'include_details': z.string(),
ad_account_id: z.string(),
bulk_request_id: z.string()}),
                handler: bulk_request,
            },
        

             'pinterest.campaignsanalytics/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_campaign_ids_required': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
ad_account_id: z.string()}),
                handler: campaignsanalytics,
            },
        

             'pinterest.campaign_taring_analyticsget/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_campaign_ids_required': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_campaign_targeting_types': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
'query_attribution_types': z.string(),
ad_account_id: z.string()}),
                handler: campaign_taring_analyticsget,
            },
        

             'pinterest.campaigns/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_campaign_id': z.string(),
ad_account_id: z.string(),
campaign_id: z.string()}),
                handler: campaigns,
            },
        

             'pinterest.conversion_tagslist/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_filter_deleted': z.string(),
ad_account_id: z.string()}),
                handler: conversion_tagslist,
            },
        

             'pinterest.ocpm_eligible_conversion_tags/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
ad_account_id: z.string()}),
                handler: ocpm_eligible_conversion_tags,
            },
        

             'pinterest.conversion_tags/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_conversion_tag_id': z.string(),
ad_account_id: z.string(),
conversion_tag_id: z.string()}),
                handler: conversion_tags,
            },
        

             'pinterest.customer_lists/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_customer_list_id': z.string(),
ad_account_id: z.string(),
customer_list_id: z.string()}),
                handler: customer_lists,
            },
        

             'pinterest.audience_insights_scope_and_type/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
ad_account_id: z.string()}),
                handler: audience_insights_scope_and_type,
            },
        

             'pinterest.country_keywords_metrics/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_country_code': z.string(),
'query_keywords': z.string(),
ad_account_id: z.string()}),
                handler: country_keywords_metrics,
            },
        

             'pinterest.lead_form/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_lead_form_id': z.string(),
ad_account_id: z.string(),
lead_form_id: z.string()}),
                handler: lead_form,
            },
        

             'pinterest.ad_accounts_subscriptions_by_id/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_subscription_id': z.string(),
ad_account_id: z.string(),
subscription_id: z.string()}),
                handler: ad_accounts_subscriptions_by_id,
            },
        

             'pinterest.leads_export/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'leads_export_id': z.string(),
ad_account_id: z.string(),
leads_export_id: z.string()}),
                handler: leads_export,
            },
        

             'pinterest.analytics_mmm_report/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_token_required': z.string(),
ad_account_id: z.string()}),
                handler: analytics_mmm_report,
            },
        

             'pinterest.order_lines/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_order_line_id': z.string(),
ad_account_id: z.string(),
order_line_id: z.string()}),
                handler: order_lines,
            },
        

             'pinterest.product_group_promotions/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_product_group_promotion_id': z.string(),
ad_account_id: z.string(),
product_group_promotion_id: z.string()}),
                handler: product_group_promotions,
            },
        

             'pinterest.product_groupsanalytics/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_product_group_ids_required': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
ad_account_id: z.string()}),
                handler: product_groupsanalytics,
            },
        

             'pinterest.analytics_report/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_token_required': z.string(),
ad_account_id: z.string()}),
                handler: analytics_report,
            },
        

             'pinterest.ssio_accounts/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
ad_account_id: z.string()}),
                handler: ssio_accounts,
            },
        

             'pinterest.ssio_insertion_orders_status_by_pin_order_id/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'path_pin_order_id': z.string(),
ad_account_id: z.string(),
pin_order_id: z.string()}),
                handler: ssio_insertion_orders_status_by_pin_order_id,
            },
        

             'pinterest.ad_account_taring_analyticsget/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_targeting_types': z.string(),
'query_columns': z.string(),
'query_granularity': z.string(),
'query_conversion_attribution_click_window_days': z.string(),
'query_conversion_attribution_engagement_window_days': z.string(),
'query_conversion_attribution_view_window_days': z.string(),
'query_conversion_attribution_conversion_report_time': z.string(),
'query_attribution_types': z.string(),
ad_account_id: z.string()}),
                handler: ad_account_taring_analyticsget,
            },
        

             'pinterest.terms_of_service/sync': {
                schema: z.object({
                  'path_ad_account_id': z.string(),
'query_include_html': z.string(),
'query_tos_type': z.string(),
ad_account_id: z.string()}),
                handler: terms_of_service,
            },
        

             'pinterest.boards/sync': {
                schema: z.object({
                  'path_board_id': z.string(),
'query_ad_account_id': z.string(),
board_id: z.string()}),
                handler: boards,
            },
        

             'pinterest.feeds/sync': {
                schema: z.object({
                  'path_catalogs_feed_id': z.string(),
'query_ad_account_id': z.string(),
feed_id: z.string()}),
                handler: feeds,
            },
        

             'pinterest.items/sync': {
                schema: z.object({
                  'query_ad_account_id': z.string(),
'query_catalogs_items_country': z.string(),
'query_catalogs_items_language': z.string(),
'query_catalogs_items': z.string(),
'query_catalogs_items_filters': z.string()}),
                handler: items,
            },
        

             'pinterest.items_batch/sync': {
                schema: z.object({
                  'path_catalogs_items_batch_id': z.string(),
'query_ad_account_id': z.string(),
batch_id: z.string()}),
                handler: items_batch,
            },
        

             'pinterest.catalogs_product_groups/sync': {
                schema: z.object({
                  'path_catalogs_product_group_id': z.string(),
'query_ad_account_id': z.string(),
product_group_id: z.string()}),
                handler: catalogs_product_groups,
            },
        

             'pinterest.catalogs_product_groupsproduct_counts_/sync': {
                schema: z.object({
                  'path_catalogs_product_group_id': z.string(),
'query_ad_account_id': z.string(),
product_group_id: z.string()}),
                handler: catalogs_product_groupsproduct_counts_,
            },
        

             'pinterest.reports/sync': {
                schema: z.object({
                  'query_ad_account_id': z.string(),
'query_catalogs_report_token': z.string()}),
                handler: reports,
            },
        

             'pinterest.integrations_commerce/sync': {
                schema: z.object({
                  'path_external_business_id': z.string(),
external_business_id: z.string()}),
                handler: integrations_commerce,
            },
        

             'pinterest.integrations_by_id/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: integrations_by_id,
            },
        

             'pinterest.media/sync': {
                schema: z.object({
                  'path_media_id': z.string(),
media_id: z.string()}),
                handler: media,
            },
        

             'pinterest.pins/sync': {
                schema: z.object({
                  'path_pin_id': z.string(),
'query_pin_metrics': z.string(),
'query_ad_account_id': z.string(),
pin_id: z.string()}),
                handler: pins,
            },
        

             'pinterest.pinsanalytics/sync': {
                schema: z.object({
                  'path_pin_id': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_app_types': z.string(),
'query_pin_analytics_metric_types': z.string(),
'query_split_field_pins': z.string(),
'query_ad_account_id': z.string(),
pin_id: z.string()}),
                handler: pinsanalytics,
            },
        

             'pinterest.multi_pinsanalytics/sync': {
                schema: z.object({
                  'query_required_pin_ids': z.string(),
'query_start_date': z.string(),
'query_end_date': z.string(),
'query_app_types': z.string(),
'metric_types': z.string(),
'query_ad_account_id': z.string()}),
                handler: multi_pinsanalytics,
            },
        

             'pinterest.ad_account_countries/sync': {
                schema: z.object({}),
                handler: ad_account_countries,
            },
        

             'pinterest.delivery_metrics/sync': {
                schema: z.object({
                  'query_report_type': z.string()}),
                handler: delivery_metrics,
            },
        

             'pinterest.metrics_ready_state/sync': {
                schema: z.object({
                  'date': z.string()}),
                handler: metrics_ready_state,
            },
        

             'pinterest.interest_taring_optionsget/sync': {
                schema: z.object({
                  'path_interest_id': z.string(),
interest_id: z.string()}),
                handler: interest_taring_optionsget,
            },
        

             'pinterest.taring_optionsget/sync': {
                schema: z.object({
                  'path_targeting_type': z.string(),
'query_client_id': z.string(),
'query_oauth_signature': z.string(),
'query_timestamp': z.string(),
'query_ad_account_id': z.string(),
targeting_type: z.string()}),
                handler: taring_optionsget,
            },
        

             'pinterest.terms_relatedlist/sync': {
                schema: z.object({
                  'query_list_input_terms': z.string()}),
                handler: terms_relatedlist,
            },
        

             'pinterest.terms_suggestedlist/sync': {
                schema: z.object({
                  'query_input_term': z.string(),
'query_term_limit': z.string()}),
                handler: terms_suggestedlist,
            },
        

             'pinterest.trending_keywordslist/sync': {
                schema: z.object({
                  'path_trend_region': z.string(),
'path_trend_type': z.string(),
'query_interest_list': z.string(),
'query_gender_list': z.string(),
'query_age_bucket_list': z.string(),
'include_keywords': z.string(),
'query_normalize_against_group': z.string(),
'query_trending_keyword_limit': z.string(),
region: z.string(),
trend_type: z.string()}),
                handler: trending_keywordslist,
            },
        

             'pinterest.user_account/sync': {
                schema: z.object({
                  'query_ad_account_id': z.string()}),
                handler: user_account,
            },
        

             'pinterest.user_accountanalytics/sync': {
                schema: z.object({
                  'query_start_date': z.string(),
'query_end_date': z.string(),
'query_from_claimed_content': z.string(),
'query_pin_format': z.string(),
'query_app_types': z.string(),
'query_content_type': z.string(),
'query_source': z.string(),
'query_metric_types': z.string(),
'query_split_field_user_account': z.string(),
'query_ad_account_id': z.string()}),
                handler: user_accountanalytics,
            },
        

             'pinterest.user_accountanalyticstop_pins/sync': {
                schema: z.object({
                  'query_start_date': z.string(),
'query_end_date': z.string(),
'query_sort_by': z.string(),
'query_from_claimed_content': z.string(),
'query_pin_format': z.string(),
'query_app_types': z.string(),
'query_content_type': z.string(),
'query_source': z.string(),
'query_metric_types': z.string(),
'query_num_of_pins': z.string(),
'query_created_in_last_n_days': z.string(),
'query_ad_account_id': z.string()}),
                handler: user_accountanalyticstop_pins,
            },
        

             'pinterest.user_accountanalyticstop_video_pins/sync': {
                schema: z.object({
                  'query_start_date': z.string(),
'query_end_date': z.string(),
'query_video_pin_sort_by': z.string(),
'query_from_claimed_content': z.string(),
'query_pin_format': z.string(),
'query_app_types': z.string(),
'query_content_type': z.string(),
'query_source': z.string(),
'query_video_pin_metric_types': z.string(),
'query_num_of_pins': z.string(),
'query_created_in_last_n_days': z.string(),
'query_ad_account_id': z.string()}),
                handler: user_accountanalyticstop_video_pins,
            },
        

             'pinterest.website_verification/sync': {
                schema: z.object({
                  'query_ad_account_id': z.string()}),
                handler: website_verification,
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
        SERVER: `https://www.pinterest.com`,
        AUTHORIZATION_ENDPOINT: '/oauth',
        TOKEN_ENDPOINT: '/v5/oauth/token',
        SCOPES: [],
      },
    });
  }
}

    