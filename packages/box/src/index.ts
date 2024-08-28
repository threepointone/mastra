
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { _collaboration_whitelist_entries } from './events/_collaboration_whitelist_entries'
import { _collaboration_whitelist_entries_id } from './events/_collaboration_whitelist_entries_id'
import { _collaboration_whitelist_exempt_targets } from './events/_collaboration_whitelist_exempt_targets'
import { _collaboration_whitelist_exempt_targets_id } from './events/_collaboration_whitelist_exempt_targets_id'
import { _collaborations } from './events/_collaborations'
import { _collaborations_id } from './events/_collaborations_id'
import { _collections } from './events/_collections'
import { _collections_id_items } from './events/_collections_id_items'
import { _comments_id } from './events/_comments_id'
import { _device_pinners_id } from './events/_device_pinners_id'
import { _enterprises_id_device_pinners } from './events/_enterprises_id_device_pinners'
import { _events } from './events/_events'
import { _file_requests_id } from './events/_file_requests_id'
import { _file_version_legal_holds } from './events/_file_version_legal_holds'
import { _file_version_legal_holds_id } from './events/_file_version_legal_holds_id'
import { _file_version_retentions } from './events/_file_version_retentions'
import { _file_version_retentions_id } from './events/_file_version_retentions_id'
import { _files_upload_sessions_id } from './events/_files_upload_sessions_id'
import { _files_upload_sessions_id_parts } from './events/_files_upload_sessions_id_parts'
import { _files_id } from './events/_files_id'
import { _files_id#get_shared_link } from './events/_files_id#get_shared_link'
import { _files_id_collaborations } from './events/_files_id_collaborations'
import { _files_id_comments } from './events/_files_id_comments'
import { _files_id_metadata } from './events/_files_id_metadata'
import { _files_id_metadata_global_boxSkillsCards } from './events/_files_id_metadata_global_boxSkillsCards'
import { _files_id_tasks } from './events/_files_id_tasks'
import { _files_id_trash } from './events/_files_id_trash'
import { _files_id_versions } from './events/_files_id_versions'
import { _files_id_versions_id } from './events/_files_id_versions_id'
import { _files_id_watermark } from './events/_files_id_watermark'
import { _folder_locks } from './events/_folder_locks'
import { _folders_trash_items } from './events/_folders_trash_items'
import { _folders_id } from './events/_folders_id'
import { _folders_id#get_shared_link } from './events/_folders_id#get_shared_link'
import { _folders_id_collaborations } from './events/_folders_id_collaborations'
import { _folders_id_items } from './events/_folders_id_items'
import { _folders_id_metadata } from './events/_folders_id_metadata'
import { _folders_id_trash } from './events/_folders_id_trash'
import { _folders_id_watermark } from './events/_folders_id_watermark'
import { _group_memberships_id } from './events/_group_memberships_id'
import { _groups } from './events/_groups'
import { _groups_id } from './events/_groups_id'
import { _groups_id_collaborations } from './events/_groups_id_collaborations'
import { _groups_id_memberships } from './events/_groups_id_memberships'
import { _invites_id } from './events/_invites_id'
import { _legal_hold_policies } from './events/_legal_hold_policies'
import { _legal_hold_policies_id } from './events/_legal_hold_policies_id'
import { _legal_hold_policy_assignments } from './events/_legal_hold_policy_assignments'
import { _legal_hold_policy_assignments_id } from './events/_legal_hold_policy_assignments_id'
import { _legal_hold_policy_assignments_id_file_versions_on_hold } from './events/_legal_hold_policy_assignments_id_file_versions_on_hold'
import { _legal_hold_policy_assignments_id_files_on_hold } from './events/_legal_hold_policy_assignments_id_files_on_hold'
import { _metadata_cascade_policies } from './events/_metadata_cascade_policies'
import { _metadata_cascade_policies_id } from './events/_metadata_cascade_policies_id'
import { _metadata_query_indices } from './events/_metadata_query_indices'
import { _metadata_templates } from './events/_metadata_templates'
import { _metadata_templates_enterprise } from './events/_metadata_templates_enterprise'
import { _metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema } from './events/_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema'
import { _metadata_templates_global } from './events/_metadata_templates_global'
import { _metadata_templates_id_id_schema } from './events/_metadata_templates_id_id_schema'
import { _metadata_templates_id } from './events/_metadata_templates_id'
import { _recent_items } from './events/_recent_items'
import { _retention_policies } from './events/_retention_policies'
import { _retention_policies_id } from './events/_retention_policies_id'
import { _retention_policies_id_assignments } from './events/_retention_policies_id_assignments'
import { _retention_policy_assignments_id } from './events/_retention_policy_assignments_id'
import { _retention_policy_assignments_id_file_versions_under_retention } from './events/_retention_policy_assignments_id_file_versions_under_retention'
import { _retention_policy_assignments_id_files_under_retention } from './events/_retention_policy_assignments_id_files_under_retention'
import { _shared_items } from './events/_shared_items'
import { _shared_items#folders } from './events/_shared_items#folders'
import { _shared_items#web_links } from './events/_shared_items#web_links'
import { _shield_information_barrier_reports_id } from './events/_shield_information_barrier_reports_id'
import { _shield_information_barrier_segment_members_id } from './events/_shield_information_barrier_segment_members_id'
import { _shield_information_barrier_segment_restrictions_id } from './events/_shield_information_barrier_segment_restrictions_id'
import { _shield_information_barrier_segments_id } from './events/_shield_information_barrier_segments_id'
import { _shield_information_barriers_id } from './events/_shield_information_barriers_id'
import { _sign_requests } from './events/_sign_requests'
import { _sign_requests_id } from './events/_sign_requests_id'
import { _storage_policies } from './events/_storage_policies'
import { _storage_policies_id } from './events/_storage_policies_id'
import { _storage_policy_assignments } from './events/_storage_policy_assignments'
import { _storage_policy_assignments_id } from './events/_storage_policy_assignments_id'
import { _task_assignments_id } from './events/_task_assignments_id'
import { _tasks_id } from './events/_tasks_id'
import { _tasks_id_assignments } from './events/_tasks_id_assignments'
import { _terms_of_service_user_statuses } from './events/_terms_of_service_user_statuses'
import { _terms_of_services } from './events/_terms_of_services'
import { _terms_of_services_id } from './events/_terms_of_services_id'
import { _users } from './events/_users'
import { _users_me } from './events/_users_me'
import { _users_id } from './events/_users_id'
import { _users_id_email_aliases } from './events/_users_id_email_aliases'
import { _users_id_memberships } from './events/_users_id_memberships'
import { _web_links_id } from './events/_web_links_id'
import { _web_links_id#get_shared_link } from './events/_web_links_id#get_shared_link'
import { _web_links_id_trash } from './events/_web_links_id_trash'
import { _webhooks } from './events/_webhooks'
import { _webhooks_id } from './events/_webhooks_id'
import { _workflows } from './events/_workflows'
import { _zip_downloads_id_status } from './events/_zip_downloads_id_status'

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
                handler: _collaboration_whitelist_entries,
            },
        

             'box._collaboration_whitelist_entries_id/sync': {
                schema: z.object({
                  'collaboration_whitelist_entry_id': z.string(),
collaboration_whitelist_entry_id: z.string()}),
                handler: _collaboration_whitelist_entries_id,
            },
        

             'box._collaboration_whitelist_exempt_targets/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: _collaboration_whitelist_exempt_targets,
            },
        

             'box._collaboration_whitelist_exempt_targets_id/sync': {
                schema: z.object({
                  'collaboration_whitelist_exempt_target_id': z.string(),
collaboration_whitelist_exempt_target_id: z.string()}),
                handler: _collaboration_whitelist_exempt_targets_id,
            },
        

             'box._collaborations/sync': {
                schema: z.object({
                  'status': z.string(),
'fields': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: _collaborations,
            },
        

             'box._collaborations_id/sync': {
                schema: z.object({
                  'collaboration_id': z.string(),
'fields': z.string(),
collaboration_id: z.string()}),
                handler: _collaborations_id,
            },
        

             'box._collections/sync': {
                schema: z.object({
                  'fields': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: _collections,
            },
        

             'box._collections_id_items/sync': {
                schema: z.object({
                  'collection_id': z.string(),
'fields': z.string(),
'offset': z.number(),
'limit': z.number(),
collection_id: z.string()}),
                handler: _collections_id_items,
            },
        

             'box._comments_id/sync': {
                schema: z.object({
                  'comment_id': z.string(),
'fields': z.string(),
comment_id: z.string()}),
                handler: _comments_id,
            },
        

             'box._device_pinners_id/sync': {
                schema: z.object({
                  'device_pinner_id': z.string(),
device_pinner_id: z.string()}),
                handler: _device_pinners_id,
            },
        

             'box._enterprises_id_device_pinners/sync': {
                schema: z.object({
                  'enterprise_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'direction': z.string(),
enterprise_id: z.string()}),
                handler: _enterprises_id_device_pinners,
            },
        

             'box._events/sync': {
                schema: z.object({
                  'stream_type': z.string(),
'stream_position': z.string(),
'limit': z.number(),
'event_type': z.string(),
'created_after': z.string(),
'created_before': z.string()}),
                handler: _events,
            },
        

             'box._file_requests_id/sync': {
                schema: z.object({
                  'file_request_id': z.string(),
file_request_id: z.string()}),
                handler: _file_requests_id,
            },
        

             'box._file_version_legal_holds/sync': {
                schema: z.object({
                  'policy_id': z.string(),
'marker': z.string(),
'limit': z.number()}),
                handler: _file_version_legal_holds,
            },
        

             'box._file_version_legal_holds_id/sync': {
                schema: z.object({
                  'file_version_legal_hold_id': z.string(),
file_version_legal_hold_id: z.string()}),
                handler: _file_version_legal_holds_id,
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
                handler: _file_version_retentions,
            },
        

             'box._file_version_retentions_id/sync': {
                schema: z.object({
                  'file_version_retention_id': z.string(),
file_version_retention_id: z.string()}),
                handler: _file_version_retentions_id,
            },
        

             'box._files_upload_sessions_id/sync': {
                schema: z.object({
                  'upload_session_id': z.string(),
upload_session_id: z.string()}),
                handler: _files_upload_sessions_id,
            },
        

             'box._files_upload_sessions_id_parts/sync': {
                schema: z.object({
                  'upload_session_id': z.string(),
'offset': z.number(),
'limit': z.number(),
upload_session_id: z.string()}),
                handler: _files_upload_sessions_id_parts,
            },
        

             'box._files_id/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'if-none-match': z.string(),
'boxapi': z.string(),
'x-rep-hints': z.string(),
file_id: z.string()}),
                handler: _files_id,
            },
        

             'box._files_id#get_shared_link/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
file_id: z.string()}),
                handler: _files_id#get_shared_link,
            },
        

             'box._files_id_collaborations/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'marker': z.string(),
file_id: z.string()}),
                handler: _files_id_collaborations,
            },
        

             'box._files_id_comments/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'offset': z.number(),
file_id: z.string()}),
                handler: _files_id_comments,
            },
        

             'box._files_id_metadata/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: _files_id_metadata,
            },
        

             'box._files_id_metadata_global_boxSkillsCards/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: _files_id_metadata_global_boxSkillsCards,
            },
        

             'box._files_id_tasks/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: _files_id_tasks,
            },
        

             'box._files_id_trash/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
file_id: z.string()}),
                handler: _files_id_trash,
            },
        

             'box._files_id_versions/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'offset': z.number(),
file_id: z.string()}),
                handler: _files_id_versions,
            },
        

             'box._files_id_versions_id/sync': {
                schema: z.object({
                  'file_id': z.string(),
'fields': z.string(),
'file_version_id': z.string(),
file_id: z.string(),
file_version_id: z.string()}),
                handler: _files_id_versions_id,
            },
        

             'box._files_id_watermark/sync': {
                schema: z.object({
                  'file_id': z.string(),
file_id: z.string()}),
                handler: _files_id_watermark,
            },
        

             'box._folder_locks/sync': {
                schema: z.object({
                  'folder_id': z.string()}),
                handler: _folder_locks,
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
                handler: _folders_trash_items,
            },
        

             'box._folders_id/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
'if-none-match': z.string(),
'boxapi': z.string(),
folder_id: z.string()}),
                handler: _folders_id,
            },
        

             'box._folders_id#get_shared_link/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
folder_id: z.string()}),
                handler: _folders_id#get_shared_link,
            },
        

             'box._folders_id_collaborations/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
folder_id: z.string()}),
                handler: _folders_id_collaborations,
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
                handler: _folders_id_items,
            },
        

             'box._folders_id_metadata/sync': {
                schema: z.object({
                  'folder_id': z.string(),
folder_id: z.string()}),
                handler: _folders_id_metadata,
            },
        

             'box._folders_id_trash/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'fields': z.string(),
folder_id: z.string()}),
                handler: _folders_id_trash,
            },
        

             'box._folders_id_watermark/sync': {
                schema: z.object({
                  'folder_id': z.string(),
folder_id: z.string()}),
                handler: _folders_id_watermark,
            },
        

             'box._group_memberships_id/sync': {
                schema: z.object({
                  'group_membership_id': z.string(),
'fields': z.string(),
group_membership_id: z.string()}),
                handler: _group_memberships_id,
            },
        

             'box._groups/sync': {
                schema: z.object({
                  'filter_term': z.string(),
'fields': z.string(),
'limit': z.number(),
'offset': z.number()}),
                handler: _groups,
            },
        

             'box._groups_id/sync': {
                schema: z.object({
                  'group_id': z.string(),
'fields': z.string(),
group_id: z.string()}),
                handler: _groups_id,
            },
        

             'box._groups_id_collaborations/sync': {
                schema: z.object({
                  'group_id': z.string(),
'limit': z.number(),
'offset': z.number(),
group_id: z.string()}),
                handler: _groups_id_collaborations,
            },
        

             'box._groups_id_memberships/sync': {
                schema: z.object({
                  'group_id': z.string(),
'limit': z.number(),
'offset': z.number(),
group_id: z.string()}),
                handler: _groups_id_memberships,
            },
        

             'box._invites_id/sync': {
                schema: z.object({
                  'invite_id': z.string(),
'fields': z.string(),
invite_id: z.string()}),
                handler: _invites_id,
            },
        

             'box._legal_hold_policies/sync': {
                schema: z.object({
                  'policy_name': z.string(),
'fields': z.string(),
'marker': z.string(),
'limit': z.number()}),
                handler: _legal_hold_policies,
            },
        

             'box._legal_hold_policies_id/sync': {
                schema: z.object({
                  'legal_hold_policy_id': z.string(),
legal_hold_policy_id: z.string()}),
                handler: _legal_hold_policies_id,
            },
        

             'box._legal_hold_policy_assignments/sync': {
                schema: z.object({
                  'policy_id': z.string(),
'assign_to_type': z.string(),
'assign_to_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'fields': z.string()}),
                handler: _legal_hold_policy_assignments,
            },
        

             'box._legal_hold_policy_assignments_id/sync': {
                schema: z.object({
                  'legal_hold_policy_assignment_id': z.string(),
legal_hold_policy_assignment_id: z.string()}),
                handler: _legal_hold_policy_assignments_id,
            },
        

             'box._legal_hold_policy_assignments_id_file_versions_on_hold/sync': {
                schema: z.object({
                  'legal_hold_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'fields': z.string(),
legal_hold_policy_assignment_id: z.string()}),
                handler: _legal_hold_policy_assignments_id_file_versions_on_hold,
            },
        

             'box._legal_hold_policy_assignments_id_files_on_hold/sync': {
                schema: z.object({
                  'legal_hold_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
'fields': z.string(),
legal_hold_policy_assignment_id: z.string()}),
                handler: _legal_hold_policy_assignments_id_files_on_hold,
            },
        

             'box._metadata_cascade_policies/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'owner_enterprise_id': z.string(),
'marker': z.string(),
'offset': z.number()}),
                handler: _metadata_cascade_policies,
            },
        

             'box._metadata_cascade_policies_id/sync': {
                schema: z.object({
                  'metadata_cascade_policy_id': z.string(),
metadata_cascade_policy_id: z.string()}),
                handler: _metadata_cascade_policies_id,
            },
        

             'box._metadata_query_indices/sync': {
                schema: z.object({
                  'scope': z.string(),
'template_key': z.string()}),
                handler: _metadata_query_indices,
            },
        

             'box._metadata_templates/sync': {
                schema: z.object({
                  'metadata_instance_id': z.string()}),
                handler: _metadata_templates,
            },
        

             'box._metadata_templates_enterprise/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: _metadata_templates_enterprise,
            },
        

             'box._metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema/sync': {
                schema: z.object({}),
                handler: _metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema,
            },
        

             'box._metadata_templates_global/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: _metadata_templates_global,
            },
        

             'box._metadata_templates_id_id_schema/sync': {
                schema: z.object({
                  'scope': z.string(),
'template_key': z.string(),
scope: z.string(),
template_key: z.string()}),
                handler: _metadata_templates_id_id_schema,
            },
        

             'box._metadata_templates_id/sync': {
                schema: z.object({
                  'template_id': z.string(),
template_id: z.string()}),
                handler: _metadata_templates_id,
            },
        

             'box._recent_items/sync': {
                schema: z.object({
                  'fields': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: _recent_items,
            },
        

             'box._retention_policies/sync': {
                schema: z.object({
                  'policy_name': z.string(),
'policy_type': z.string(),
'created_by_user_id': z.string(),
'fields': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: _retention_policies,
            },
        

             'box._retention_policies_id/sync': {
                schema: z.object({
                  'retention_policy_id': z.string(),
'fields': z.string(),
retention_policy_id: z.string()}),
                handler: _retention_policies_id,
            },
        

             'box._retention_policies_id_assignments/sync': {
                schema: z.object({
                  'retention_policy_id': z.string(),
'type': z.string(),
'fields': z.string(),
'marker': z.string(),
'limit': z.number(),
retention_policy_id: z.string()}),
                handler: _retention_policies_id_assignments,
            },
        

             'box._retention_policy_assignments_id/sync': {
                schema: z.object({
                  'retention_policy_assignment_id': z.string(),
'fields': z.string(),
retention_policy_assignment_id: z.string()}),
                handler: _retention_policy_assignments_id,
            },
        

             'box._retention_policy_assignments_id_file_versions_under_retention/sync': {
                schema: z.object({
                  'retention_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
retention_policy_assignment_id: z.string()}),
                handler: _retention_policy_assignments_id_file_versions_under_retention,
            },
        

             'box._retention_policy_assignments_id_files_under_retention/sync': {
                schema: z.object({
                  'retention_policy_assignment_id': z.string(),
'marker': z.string(),
'limit': z.number(),
retention_policy_assignment_id: z.string()}),
                handler: _retention_policy_assignments_id_files_under_retention,
            },
        

             'box._shared_items/sync': {
                schema: z.object({
                  'if-none-match': z.string(),
'fields': z.string(),
'boxapi': z.string()}),
                handler: _shared_items,
            },
        

             'box._shared_items#folders/sync': {
                schema: z.object({
                  'if-none-match': z.string(),
'fields': z.string(),
'boxapi': z.string()}),
                handler: _shared_items#folders,
            },
        

             'box._shared_items#web_links/sync': {
                schema: z.object({
                  'if-none-match': z.string(),
'fields': z.string(),
'boxapi': z.string()}),
                handler: _shared_items#web_links,
            },
        

             'box._shield_information_barrier_reports_id/sync': {
                schema: z.object({
                  'shield_information_barrier_report_id': z.string(),
shield_information_barrier_report_id: z.string()}),
                handler: _shield_information_barrier_reports_id,
            },
        

             'box._shield_information_barrier_segment_members_id/sync': {
                schema: z.object({
                  'shield_information_barrier_segment_member_id': z.string(),
shield_information_barrier_segment_member_id: z.string()}),
                handler: _shield_information_barrier_segment_members_id,
            },
        

             'box._shield_information_barrier_segment_restrictions_id/sync': {
                schema: z.object({
                  'shield_information_barrier_segment_restriction_id': z.string(),
shield_information_barrier_segment_restriction_id: z.string()}),
                handler: _shield_information_barrier_segment_restrictions_id,
            },
        

             'box._shield_information_barrier_segments_id/sync': {
                schema: z.object({
                  'shield_information_barrier_segment_id': z.string(),
shield_information_barrier_segment_id: z.string()}),
                handler: _shield_information_barrier_segments_id,
            },
        

             'box._shield_information_barriers_id/sync': {
                schema: z.object({
                  'shield_information_barrier_id': z.string(),
shield_information_barrier_id: z.string()}),
                handler: _shield_information_barriers_id,
            },
        

             'box._sign_requests/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: _sign_requests,
            },
        

             'box._sign_requests_id/sync': {
                schema: z.object({
                  'sign_request_id': z.string(),
sign_request_id: z.string()}),
                handler: _sign_requests_id,
            },
        

             'box._storage_policies/sync': {
                schema: z.object({
                  'fields': z.string(),
'marker': z.string(),
'limit': z.number()}),
                handler: _storage_policies,
            },
        

             'box._storage_policies_id/sync': {
                schema: z.object({
                  'storage_policy_id': z.string(),
storage_policy_id: z.string()}),
                handler: _storage_policies_id,
            },
        

             'box._storage_policy_assignments/sync': {
                schema: z.object({
                  'marker': z.string(),
'resolved_for_type': z.string(),
'resolved_for_id': z.string()}),
                handler: _storage_policy_assignments,
            },
        

             'box._storage_policy_assignments_id/sync': {
                schema: z.object({
                  'storage_policy_assignment_id': z.string(),
storage_policy_assignment_id: z.string()}),
                handler: _storage_policy_assignments_id,
            },
        

             'box._task_assignments_id/sync': {
                schema: z.object({
                  'task_assignment_id': z.string(),
task_assignment_id: z.string()}),
                handler: _task_assignments_id,
            },
        

             'box._tasks_id/sync': {
                schema: z.object({
                  'task_id': z.string(),
task_id: z.string()}),
                handler: _tasks_id,
            },
        

             'box._tasks_id_assignments/sync': {
                schema: z.object({
                  'task_id': z.string(),
task_id: z.string()}),
                handler: _tasks_id_assignments,
            },
        

             'box._terms_of_service_user_statuses/sync': {
                schema: z.object({
                  'tos_id': z.string(),
'user_id': z.string()}),
                handler: _terms_of_service_user_statuses,
            },
        

             'box._terms_of_services/sync': {
                schema: z.object({
                  'tos_type': z.string()}),
                handler: _terms_of_services,
            },
        

             'box._terms_of_services_id/sync': {
                schema: z.object({
                  'terms_of_service_id': z.string(),
terms_of_service_id: z.string()}),
                handler: _terms_of_services_id,
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
                handler: _users,
            },
        

             'box._users_me/sync': {
                schema: z.object({
                  'fields': z.string()}),
                handler: _users_me,
            },
        

             'box._users_id/sync': {
                schema: z.object({
                  'user_id': z.string(),
'fields': z.string(),
user_id: z.string()}),
                handler: _users_id,
            },
        

             'box._users_id_email_aliases/sync': {
                schema: z.object({
                  'user_id': z.string(),
user_id: z.string()}),
                handler: _users_id_email_aliases,
            },
        

             'box._users_id_memberships/sync': {
                schema: z.object({
                  'user_id': z.string(),
'limit': z.number(),
'offset': z.number(),
user_id: z.string()}),
                handler: _users_id_memberships,
            },
        

             'box._web_links_id/sync': {
                schema: z.object({
                  'web_link_id': z.string(),
'boxapi': z.string(),
web_link_id: z.string()}),
                handler: _web_links_id,
            },
        

             'box._web_links_id#get_shared_link/sync': {
                schema: z.object({
                  'web_link_id': z.string(),
'fields': z.string(),
web_link_id: z.string()}),
                handler: _web_links_id#get_shared_link,
            },
        

             'box._web_links_id_trash/sync': {
                schema: z.object({
                  'web_link_id': z.string(),
'fields': z.string(),
web_link_id: z.string()}),
                handler: _web_links_id_trash,
            },
        

             'box._webhooks/sync': {
                schema: z.object({
                  'marker': z.string(),
'limit': z.number()}),
                handler: _webhooks,
            },
        

             'box._webhooks_id/sync': {
                schema: z.object({
                  'webhook_id': z.string(),
webhook_id: z.string()}),
                handler: _webhooks_id,
            },
        

             'box._workflows/sync': {
                schema: z.object({
                  'folder_id': z.string(),
'trigger_type': z.string(),
'limit': z.number(),
'marker': z.string()}),
                handler: _workflows,
            },
        

             'box._zip_downloads_id_status/sync': {
                schema: z.object({
                  'zip_download_id': z.string(),
zip_download_id: z.string()}),
                handler: _zip_downloads_id_status,
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
    
    