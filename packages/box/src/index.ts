
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { get_collaboration_whitelist_entries } from './events/get_collaboration_whitelist_entries'
import { get_collaboration_whitelist_entries_id } from './events/get_collaboration_whitelist_entries_id'
import { get_collaboration_whitelist_exempt_targets } from './events/get_collaboration_whitelist_exempt_targets'
import { get_collaboration_whitelist_exempt_targets_id } from './events/get_collaboration_whitelist_exempt_targets_id'
import { get_collaborations } from './events/get_collaborations'
import { get_collaborations_id } from './events/get_collaborations_id'
import { get_collections } from './events/get_collections'
import { get_collections_id_items } from './events/get_collections_id_items'
import { get_comments_id } from './events/get_comments_id'
import { get_device_pinners_id } from './events/get_device_pinners_id'
import { get_enterprises_id_device_pinners } from './events/get_enterprises_id_device_pinners'
import { get_events } from './events/get_events'
import { get_file_requests_id } from './events/get_file_requests_id'
import { get_file_version_legal_holds } from './events/get_file_version_legal_holds'
import { get_file_version_legal_holds_id } from './events/get_file_version_legal_holds_id'
import { get_file_version_retentions } from './events/get_file_version_retentions'
import { get_file_version_retentions_id } from './events/get_file_version_retentions_id'
import { get_files_upload_sessions_id } from './events/get_files_upload_sessions_id'
import { get_files_upload_sessions_id_parts } from './events/get_files_upload_sessions_id_parts'
import { get_files_id } from './events/get_files_id'
import { get_files_id#get_shared_link } from './events/get_files_id#get_shared_link'
import { get_files_id_collaborations } from './events/get_files_id_collaborations'
import { get_files_id_comments } from './events/get_files_id_comments'
import { get_files_id_metadata } from './events/get_files_id_metadata'
import { get_files_id_metadata_global_boxSkillsCards } from './events/get_files_id_metadata_global_boxSkillsCards'
import { get_files_id_tasks } from './events/get_files_id_tasks'
import { get_files_id_trash } from './events/get_files_id_trash'
import { get_files_id_versions } from './events/get_files_id_versions'
import { get_files_id_versions_id } from './events/get_files_id_versions_id'
import { get_files_id_watermark } from './events/get_files_id_watermark'
import { get_folder_locks } from './events/get_folder_locks'
import { get_folders_trash_items } from './events/get_folders_trash_items'
import { get_folders_id } from './events/get_folders_id'
import { get_folders_id#get_shared_link } from './events/get_folders_id#get_shared_link'
import { get_folders_id_collaborations } from './events/get_folders_id_collaborations'
import { get_folders_id_items } from './events/get_folders_id_items'
import { get_folders_id_metadata } from './events/get_folders_id_metadata'
import { get_folders_id_trash } from './events/get_folders_id_trash'
import { get_folders_id_watermark } from './events/get_folders_id_watermark'
import { get_group_memberships_id } from './events/get_group_memberships_id'
import { get_groups } from './events/get_groups'
import { get_groups_id } from './events/get_groups_id'
import { get_groups_id_collaborations } from './events/get_groups_id_collaborations'
import { get_groups_id_memberships } from './events/get_groups_id_memberships'
import { get_invites_id } from './events/get_invites_id'
import { get_legal_hold_policies } from './events/get_legal_hold_policies'
import { get_legal_hold_policies_id } from './events/get_legal_hold_policies_id'
import { get_legal_hold_policy_assignments } from './events/get_legal_hold_policy_assignments'
import { get_legal_hold_policy_assignments_id } from './events/get_legal_hold_policy_assignments_id'
import { get_legal_hold_policy_assignments_id_file_versions_on_hold } from './events/get_legal_hold_policy_assignments_id_file_versions_on_hold'
import { get_legal_hold_policy_assignments_id_files_on_hold } from './events/get_legal_hold_policy_assignments_id_files_on_hold'
import { get_metadata_cascade_policies } from './events/get_metadata_cascade_policies'
import { get_metadata_cascade_policies_id } from './events/get_metadata_cascade_policies_id'
import { get_metadata_query_indices } from './events/get_metadata_query_indices'
import { get_metadata_templates } from './events/get_metadata_templates'
import { get_metadata_templates_enterprise } from './events/get_metadata_templates_enterprise'
import { get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema } from './events/get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema'
import { get_metadata_templates_global } from './events/get_metadata_templates_global'
import { get_metadata_templates_id_id_schema } from './events/get_metadata_templates_id_id_schema'
import { get_metadata_templates_id } from './events/get_metadata_templates_id'
import { get_recent_items } from './events/get_recent_items'
import { get_retention_policies } from './events/get_retention_policies'
import { get_retention_policies_id } from './events/get_retention_policies_id'
import { get_retention_policies_id_assignments } from './events/get_retention_policies_id_assignments'
import { get_retention_policy_assignments_id } from './events/get_retention_policy_assignments_id'
import { get_retention_policy_assignments_id_file_versions_under_retention } from './events/get_retention_policy_assignments_id_file_versions_under_retention'
import { get_retention_policy_assignments_id_files_under_retention } from './events/get_retention_policy_assignments_id_files_under_retention'
import { get_shared_items } from './events/get_shared_items'
import { get_shared_items#folders } from './events/get_shared_items#folders'
import { get_shared_items#web_links } from './events/get_shared_items#web_links'
import { get_shield_information_barrier_reports_id } from './events/get_shield_information_barrier_reports_id'
import { get_shield_information_barrier_segment_members_id } from './events/get_shield_information_barrier_segment_members_id'
import { get_shield_information_barrier_segment_restrictions_id } from './events/get_shield_information_barrier_segment_restrictions_id'
import { get_shield_information_barrier_segments_id } from './events/get_shield_information_barrier_segments_id'
import { get_shield_information_barriers_id } from './events/get_shield_information_barriers_id'
import { get_sign_requests } from './events/get_sign_requests'
import { get_sign_requests_id } from './events/get_sign_requests_id'
import { get_storage_policies } from './events/get_storage_policies'
import { get_storage_policies_id } from './events/get_storage_policies_id'
import { get_storage_policy_assignments } from './events/get_storage_policy_assignments'
import { get_storage_policy_assignments_id } from './events/get_storage_policy_assignments_id'
import { get_task_assignments_id } from './events/get_task_assignments_id'
import { get_tasks_id } from './events/get_tasks_id'
import { get_tasks_id_assignments } from './events/get_tasks_id_assignments'
import { get_terms_of_service_user_statuses } from './events/get_terms_of_service_user_statuses'
import { get_terms_of_services } from './events/get_terms_of_services'
import { get_terms_of_services_id } from './events/get_terms_of_services_id'
import { get_users } from './events/get_users'
import { get_users_me } from './events/get_users_me'
import { get_users_id } from './events/get_users_id'
import { get_users_id_email_aliases } from './events/get_users_id_email_aliases'
import { get_users_id_memberships } from './events/get_users_id_memberships'
import { get_web_links_id } from './events/get_web_links_id'
import { get_web_links_id#get_shared_link } from './events/get_web_links_id#get_shared_link'
import { get_web_links_id_trash } from './events/get_web_links_id_trash'
import { get_webhooks } from './events/get_webhooks'
import { get_webhooks_id } from './events/get_webhooks_id'
import { get_workflows } from './events/get_workflows'
import { get_zip_downloads_id_status } from './events/get_zip_downloads_id_status'

type BoxConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BoxIntegration extends Integration {
  config: BoxConfig;

  constructor({ config }: { config: BoxConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BOX',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'box._collaboration_whitelist_entries/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: get_collaboration_whitelist_entries,
            },
        

             'box._collaboration_whitelist_entries_id/sync': {
                schema: z.object({
                  'collaboration_whitelist_entry_id': z.string(),
collaboration_whitelist_entry_id: z.string()}),
                handler: get_collaboration_whitelist_entries_id,
            },
        

             'box._collaboration_whitelist_exempt_targets/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: get_collaboration_whitelist_exempt_targets,
            },
        

             'box._collaboration_whitelist_exempt_targets_id/sync': {
                schema: z.object({
                  'collaboration_whitelist_exempt_target_id': z.string(),
collaboration_whitelist_exempt_target_id: z.string()}),
                handler: get_collaboration_whitelist_exempt_targets_id,
            },
        

             'box._collaborations/sync': {
                schema: z.object({
                  'status': z.string(),
'fields': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: get_collaborations,
            },
        

             'box._collaborations_id/sync': {
                schema: z.object({
                  'collaboration_id': z.string(),
'fields': z.string(),
collaboration_id: z.string()}),
                handler: get_collaborations_id,
            },
        

             'box._collections/sync': {
                schema: z.object({
                  'fields': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: get_collections,
            },
        

             'box._collections_id_items/sync': {
                schema: z.object({
                  'collection_id': z.string(),
'fields': z.string(),
'offset': z.number(),
'limit': z.number(),
collection_id: z.string()}),
                handler: get_collections_id_items,
            },
        

             'box._comments_id/sync': {
                schema: z.object({
                  'comment_id': z.string(),
'fields': z.string(),
comment_id: z.string()}),
                handler: get_comments_id,
            },
        

             'box._device_pinners_id/sync': {
                schema: z.object({
                  'device_pinner_id': z.string(),
device_pinner_id: z.string()}),
                handler: get_device_pinners_id,
            },
        

             'box._enterprises_id_device_pinners/sync': {
                schema: z.object({
                  'enterprise_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'direction': z.string(),
enterprise_id: z.string()}),
                handler: get_enterprises_id_device_pinners,
            },
        

             'box._events/sync': {
                schema: z.object({
                  'stream_type': z.string(),
'stream_position': z.string(),
'limit': z.number(),
'event_type': z.string(),
'created_after': z.string(),
'created_before': z.string()}),
                handler: get_events,
            },
        

             'box._file_requests_id/sync': {
                schema: z.object({
                  'file_request_id': z.string(),
file_request_id: z.string()}),
                handler: get_file_requests_id,
            },
        

             'box._file_version_legal_holds/sync': {
                schema: z.object({
                  'policy_id': z.string(),
'marker': z.string(),
'limit': z.number()}),
                handler: get_file_version_legal_holds,
            },
        

             'box._file_version_legal_holds_id/sync': {
                schema: z.object({
                  'file_version_legal_hold_id': z.string(),
file_version_legal_hold_id: z.string()}),
                handler: get_file_version_legal_holds_id,
            },
        

             'box._file_version_retentions/sync': {
                schema: z.object({
                  'file_id': z.string(),
'file_version_id': z.string(),
'policy_id': z.string(),
'disposition_action': z.string(),
'disposition_before': z.string(),
'disposition_after': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: get_file_version_retentions,
            },
        

             'box._file_version_retentions_id/sync': {
                schema: z.object({
                  'file_version_retention_id': z.string(),
file_version_retention_id: z.string()}),
                handler: get_file_version_retentions_id,
            },
        

             'box._files_upload_sessions_id/sync': {
                schema: z.object({
                  'upload_session_id': z.string(),
upload_session_id: z.string()}),
                handler: get_files_upload_sessions_id,
            },
        

             'box._files_upload_sessions_id_parts/sync': {
                schema: z.object({
                  'upload_session_id': z.string(),
'offset': z.number(),
'limit': z.number(),
upload_session_id: z.string()}),
                handler: get_files_upload_sessions_id_parts,
            },
        

             'box._files_id/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'if-none-match': z.string(),
'boxapi': z.string(),
'x-rep-hints': z.string(),
file_id: z.string()}),
                handler: get_files_id,
            },
        

             'box._files_id#get_shared_link/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
file_id: z.string()}),
                handler: get_files_id#get_shared_link,
            },
        

             'box._files_id_collaborations/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'marker': z.string(),
file_id: z.string()}),
                handler: get_files_id_collaborations,
            },
        

             'box._files_id_comments/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'offset': z.number(),
file_id: z.string()}),
                handler: get_files_id_comments,
            },
        

             'box._files_id_metadata/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: get_files_id_metadata,
            },
        

             'box._files_id_metadata_global_boxSkillsCards/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: get_files_id_metadata_global_boxSkillsCards,
            },
        

             'box._files_id_tasks/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: get_files_id_tasks,
            },
        

             'box._files_id_trash/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
file_id: z.string()}),
                handler: get_files_id_trash,
            },
        

             'box._files_id_versions/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'offset': z.number(),
file_id: z.string()}),
                handler: get_files_id_versions,
            },
        

             'box._files_id_versions_id/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'file_version_id': z.string(),
file_id: z.string(),
file_version_id: z.string()}),
                handler: get_files_id_versions_id,
            },
        

             'box._files_id_watermark/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: get_files_id_watermark,
            },
        

             'box._folder_locks/sync': {
                schema: z.object({
                  'folder_id': z.string()}),
                handler: get_folder_locks,
            },
        

             'box._folders_trash_items/sync': {
                schema: z.object({
                  'fields': z.string(),
'limit': z.number(),
'offset': z.number(),
'usemarker': z.boolean(),
'marker': z.string(),
'direction': z.string(),
'sort': z.string()}),
                handler: get_folders_trash_items,
            },
        

             'box._folders_id/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
'if-none-match': z.string(),
'boxapi': z.string(),
folder_id: z.string()}),
                handler: get_folders_id,
            },
        

             'box._folders_id#get_shared_link/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
folder_id: z.string()}),
                handler: get_folders_id#get_shared_link,
            },
        

             'box._folders_id_collaborations/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
folder_id: z.string()}),
                handler: get_folders_id_collaborations,
            },
        

             'box._folders_id_items/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
'usemarker': z.boolean(),
'marker': z.string(),
'offset': z.number(),
'limit': z.number(),
'boxapi': z.string(),
'sort': z.string(),
'direction': z.string(),
folder_id: z.string()}),
                handler: get_folders_id_items,
            },
        

             'box._folders_id_metadata/sync': {
                schema: z.object({
                  'folder_id': z.string(),
folder_id: z.string()}),
                handler: get_folders_id_metadata,
            },
        

             'box._folders_id_trash/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
folder_id: z.string()}),
                handler: get_folders_id_trash,
            },
        

             'box._folders_id_watermark/sync': {
                schema: z.object({
                  'folder_id': z.string(),
folder_id: z.string()}),
                handler: get_folders_id_watermark,
            },
        

             'box._group_memberships_id/sync': {
                schema: z.object({
                  'group_membership_id': z.string(),
'fields': z.string(),
group_membership_id: z.string()}),
                handler: get_group_memberships_id,
            },
        

             'box._groups/sync': {
                schema: z.object({
                  'filter_term': z.string(),
'fields': z.string(),
'limit': z.number(),
'offset': z.number()}),
                handler: get_groups,
            },
        

             'box._groups_id/sync': {
                schema: z.object({
                  'group_id': z.string(),
'fields': z.string(),
group_id: z.string()}),
                handler: get_groups_id,
            },
        

             'box._groups_id_collaborations/sync': {
                schema: z.object({
                  'group_id': z.string(),
'limit': z.number(),
'offset': z.number(),
group_id: z.string()}),
                handler: get_groups_id_collaborations,
            },
        

             'box._groups_id_memberships/sync': {
                schema: z.object({
                  'group_id': z.string(),
'limit': z.number(),
'offset': z.number(),
group_id: z.string()}),
                handler: get_groups_id_memberships,
            },
        

             'box._invites_id/sync': {
                schema: z.object({
                  'invite_id': z.string(),
'fields': z.string(),
invite_id: z.string()}),
                handler: get_invites_id,
            },
        

             'box._legal_hold_policies/sync': {
                schema: z.object({
                  'policy_name': z.string(),
'fields': z.string(),
'marker': z.string(),
'limit': z.number()}),
                handler: get_legal_hold_policies,
            },
        

             'box._legal_hold_policies_id/sync': {
                schema: z.object({
                  'legal_hold_policy_id': z.string(),
legal_hold_policy_id: z.string()}),
                handler: get_legal_hold_policies_id,
            },
        

             'box._legal_hold_policy_assignments/sync': {
                schema: z.object({
                  'policy_id': z.string(),
'assign_to_type': z.string(),
'assign_to_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'fields': z.string()}),
                handler: get_legal_hold_policy_assignments,
            },
        

             'box._legal_hold_policy_assignments_id/sync': {
                schema: z.object({
                  'legal_hold_policy_assignment_id': z.string(),
legal_hold_policy_assignment_id: z.string()}),
                handler: get_legal_hold_policy_assignments_id,
            },
        

             'box._legal_hold_policy_assignments_id_file_versions_on_hold/sync': {
                schema: z.object({
                  'legal_hold_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'fields': z.string(),
legal_hold_policy_assignment_id: z.string()}),
                handler: get_legal_hold_policy_assignments_id_file_versions_on_hold,
            },
        

             'box._legal_hold_policy_assignments_id_files_on_hold/sync': {
                schema: z.object({
                  'legal_hold_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'fields': z.string(),
legal_hold_policy_assignment_id: z.string()}),
                handler: get_legal_hold_policy_assignments_id_files_on_hold,
            },
        

             'box._metadata_cascade_policies/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'owner_enterprise_id': z.string(),
'marker': z.string(),
'offset': z.number()}),
                handler: get_metadata_cascade_policies,
            },
        

             'box._metadata_cascade_policies_id/sync': {
                schema: z.object({
                  'metadata_cascade_policy_id': z.string(),
metadata_cascade_policy_id: z.string()}),
                handler: get_metadata_cascade_policies_id,
            },
        

             'box._metadata_query_indices/sync': {
                schema: z.object({
                  'scope': z.string(),
'template_key': z.string()}),
                handler: get_metadata_query_indices,
            },
        

             'box._metadata_templates/sync': {
                schema: z.object({
                  'metadata_instance_id': z.string()}),
                handler: get_metadata_templates,
            },
        

             'box._metadata_templates_enterprise/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: get_metadata_templates_enterprise,
            },
        

             'box._metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema/sync': {
                schema: z.object({}),
                handler: get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema,
            },
        

             'box._metadata_templates_global/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: get_metadata_templates_global,
            },
        

             'box._metadata_templates_id_id_schema/sync': {
                schema: z.object({
                  'scope': z.string(),
'template_key': z.string(),
scope: z.string(),
template_key: z.string()}),
                handler: get_metadata_templates_id_id_schema,
            },
        

             'box._metadata_templates_id/sync': {
                schema: z.object({
                  'template_id': z.string(),
template_id: z.string()}),
                handler: get_metadata_templates_id,
            },
        

             'box._recent_items/sync': {
                schema: z.object({
                  'fields': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: get_recent_items,
            },
        

             'box._retention_policies/sync': {
                schema: z.object({
                  'policy_name': z.string(),
'policy_type': z.string(),
'created_by_user_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: get_retention_policies,
            },
        

             'box._retention_policies_id/sync': {
                schema: z.object({
                  'retention_policy_id': z.string(),
'fields': z.string(),
retention_policy_id: z.string()}),
                handler: get_retention_policies_id,
            },
        

             'box._retention_policies_id_assignments/sync': {
                schema: z.object({
                  'retention_policy_id': z.string(),
'type': z.string(),
'fields': z.string(),
'marker': z.string(),
'limit': z.number(),
retention_policy_id: z.string()}),
                handler: get_retention_policies_id_assignments,
            },
        

             'box._retention_policy_assignments_id/sync': {
                schema: z.object({
                  'retention_policy_assignment_id': z.string(),
'fields': z.string(),
retention_policy_assignment_id: z.string()}),
                handler: get_retention_policy_assignments_id,
            },
        

             'box._retention_policy_assignments_id_file_versions_under_retention/sync': {
                schema: z.object({
                  'retention_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
retention_policy_assignment_id: z.string()}),
                handler: get_retention_policy_assignments_id_file_versions_under_retention,
            },
        

             'box._retention_policy_assignments_id_files_under_retention/sync': {
                schema: z.object({
                  'retention_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
retention_policy_assignment_id: z.string()}),
                handler: get_retention_policy_assignments_id_files_under_retention,
            },
        

             'box._shared_items/sync': {
                schema: z.object({
                  'if-none-match': z.string(),
'fields': z.string(),
'boxapi': z.string()}),
                handler: get_shared_items,
            },
        

             'box._shared_items#folders/sync': {
                schema: z.object({
                  'if-none-match': z.string(),
'fields': z.string(),
'boxapi': z.string()}),
                handler: get_shared_items#folders,
            },
        

             'box._shared_items#web_links/sync': {
                schema: z.object({
                  'if-none-match': z.string(),
'fields': z.string(),
'boxapi': z.string()}),
                handler: get_shared_items#web_links,
            },
        

             'box._shield_information_barrier_reports_id/sync': {
                schema: z.object({
                  'shield_information_barrier_report_id': z.string(),
shield_information_barrier_report_id: z.string()}),
                handler: get_shield_information_barrier_reports_id,
            },
        

             'box._shield_information_barrier_segment_members_id/sync': {
                schema: z.object({
                  'shield_information_barrier_segment_member_id': z.string(),
shield_information_barrier_segment_member_id: z.string()}),
                handler: get_shield_information_barrier_segment_members_id,
            },
        

             'box._shield_information_barrier_segment_restrictions_id/sync': {
                schema: z.object({
                  'shield_information_barrier_segment_restriction_id': z.string(),
shield_information_barrier_segment_restriction_id: z.string()}),
                handler: get_shield_information_barrier_segment_restrictions_id,
            },
        

             'box._shield_information_barrier_segments_id/sync': {
                schema: z.object({
                  'shield_information_barrier_segment_id': z.string(),
shield_information_barrier_segment_id: z.string()}),
                handler: get_shield_information_barrier_segments_id,
            },
        

             'box._shield_information_barriers_id/sync': {
                schema: z.object({
                  'shield_information_barrier_id': z.string(),
shield_information_barrier_id: z.string()}),
                handler: get_shield_information_barriers_id,
            },
        

             'box._sign_requests/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: get_sign_requests,
            },
        

             'box._sign_requests_id/sync': {
                schema: z.object({
                  'sign_request_id': z.string(),
sign_request_id: z.string()}),
                handler: get_sign_requests_id,
            },
        

             'box._storage_policies/sync': {
                schema: z.object({
                  'fields': z.string(),
'marker': z.string(),
'limit': z.number()}),
                handler: get_storage_policies,
            },
        

             'box._storage_policies_id/sync': {
                schema: z.object({
                  'storage_policy_id': z.string(),
storage_policy_id: z.string()}),
                handler: get_storage_policies_id,
            },
        

             'box._storage_policy_assignments/sync': {
                schema: z.object({
                  'marker': z.string(),
'resolved_for_type': z.string(),
'resolved_for_id': z.string()}),
                handler: get_storage_policy_assignments,
            },
        

             'box._storage_policy_assignments_id/sync': {
                schema: z.object({
                  'storage_policy_assignment_id': z.string(),
storage_policy_assignment_id: z.string()}),
                handler: get_storage_policy_assignments_id,
            },
        

             'box._task_assignments_id/sync': {
                schema: z.object({
                  'task_assignment_id': z.string(),
task_assignment_id: z.string()}),
                handler: get_task_assignments_id,
            },
        

             'box._tasks_id/sync': {
                schema: z.object({
                  'task_id': z.string(),
task_id: z.string()}),
                handler: get_tasks_id,
            },
        

             'box._tasks_id_assignments/sync': {
                schema: z.object({
                  'task_id': z.string(),
task_id: z.string()}),
                handler: get_tasks_id_assignments,
            },
        

             'box._terms_of_service_user_statuses/sync': {
                schema: z.object({
                  'tos_id': z.string(),
'user_id': z.string()}),
                handler: get_terms_of_service_user_statuses,
            },
        

             'box._terms_of_services/sync': {
                schema: z.object({
                  'tos_type': z.string()}),
                handler: get_terms_of_services,
            },
        

             'box._terms_of_services_id/sync': {
                schema: z.object({
                  'terms_of_service_id': z.string(),
terms_of_service_id: z.string()}),
                handler: get_terms_of_services_id,
            },
        

             'box._users/sync': {
                schema: z.object({
                  'filter_term': z.string(),
'user_type': z.string(),
'external_app_user_id': z.string(),
'fields': z.string(),
'offset': z.number(),
'limit': z.number(),
'usemarker': z.boolean(),
'marker': z.string()}),
                handler: get_users,
            },
        

             'box._users_me/sync': {
                schema: z.object({
                  'fields': z.string()}),
                handler: get_users_me,
            },
        

             'box._users_id/sync': {
                schema: z.object({
                  'user_id': z.string(),
'fields': z.string(),
user_id: z.string()}),
                handler: get_users_id,
            },
        

             'box._users_id_email_aliases/sync': {
                schema: z.object({
                  'user_id': z.string(),
user_id: z.string()}),
                handler: get_users_id_email_aliases,
            },
        

             'box._users_id_memberships/sync': {
                schema: z.object({
                  'user_id': z.string(),
'limit': z.number(),
'offset': z.number(),
user_id: z.string()}),
                handler: get_users_id_memberships,
            },
        

             'box._web_links_id/sync': {
                schema: z.object({
                  'web_link_id': z.string(),
'boxapi': z.string(),
web_link_id: z.string()}),
                handler: get_web_links_id,
            },
        

             'box._web_links_id#get_shared_link/sync': {
                schema: z.object({
                  'web_link_id': z.string(),
'fields': z.string(),
web_link_id: z.string()}),
                handler: get_web_links_id#get_shared_link,
            },
        

             'box._web_links_id_trash/sync': {
                schema: z.object({
                  'web_link_id': z.string(),
'fields': z.string(),
web_link_id: z.string()}),
                handler: get_web_links_id_trash,
            },
        

             'box._webhooks/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: get_webhooks,
            },
        

             'box._webhooks_id/sync': {
                schema: z.object({
                  'webhook_id': z.string(),
webhook_id: z.string()}),
                handler: get_webhooks_id,
            },
        

             'box._workflows/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'trigger_type': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: get_workflows,
            },
        

             'box._zip_downloads_id_status/sync': {
                schema: z.object({
                  'zip_download_id': z.string(),
zip_download_id: z.string()}),
                handler: get_zip_downloads_id_status,
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
        SERVER: `https://account.box.com`,
        AUTHORIZATION_ENDPOINT: '/api/oauth2/authorize',
        TOKEN_ENDPOINT: '/oauth2/token',
        SCOPES: [],
      },
    });
  }
}
    
    