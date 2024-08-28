
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { metaroot } from './events/metaroot'
import { apps_authenticated } from './events/apps_authenticated'
import { apps_webhook_config_for_app } from './events/apps_webhook_config_for_app'
import { apps_webhook_delivery } from './events/apps_webhook_delivery'
import { apps_installation } from './events/apps_installation'
import { apps_by_slug } from './events/apps_by_slug'
import { codes_of_conduct_conduct_code } from './events/codes_of_conduct_conduct_code'
import { activity_feeds } from './events/activity_feeds'
import { gists } from './events/gists'
import { gists_comment } from './events/gists_comment'
import { gists_revision } from './events/gists_revision'
import { gitignore_template } from './events/gitignore_template'
import { licenses } from './events/licenses'
import { apps_subscription_plan_for_account } from './events/apps_subscription_plan_for_account'
import { apps_subscription_plan_for_account_stubbed } from './events/apps_subscription_plan_for_account_stubbed'
import { meta } from './events/meta'
import { activity_thread } from './events/activity_thread'
import { activity_thread_subscription_for_authenticated_user } from './events/activity_thread_subscription_for_authenticated_user'
import { orgs } from './events/orgs'
import { actions_actions_cache_usage_for_org } from './events/actions_actions_cache_usage_for_org'
import { oidc_oidc_custom_sub_template_for_org } from './events/oidc_oidc_custom_sub_template_for_org'
import { actions_github_actions_permissions_organization } from './events/actions_github_actions_permissions_organization'
import { actions_allowed_actions_organization } from './events/actions_allowed_actions_organization'
import { actions_github_actions_default_workflow_permissions_organization } from './events/actions_github_actions_default_workflow_permissions_organization'
import { actions_required_workflow } from './events/actions_required_workflow'
import { actions_self_hosted_runner_for_org } from './events/actions_self_hosted_runner_for_org'
import { actionslist_labels_for_self_hosted_runner_for_org } from './events/actionslist_labels_for_self_hosted_runner_for_org'
import { actions_org_public_key } from './events/actions_org_public_key'
import { actions_org_secret } from './events/actions_org_secret'
import { actions_org_variable } from './events/actions_org_variable'
import { codespaces_org_public_key } from './events/codespaces_org_public_key'
import { codespaces_org_secret } from './events/codespaces_org_secret'
import { dependabot_org_public_key } from './events/dependabot_org_public_key'
import { dependabot_org_secret } from './events/dependabot_org_secret'
import { orgs_webhook } from './events/orgs_webhook'
import { orgs_webhook_config_for_org } from './events/orgs_webhook_config_for_org'
import { orgs_webhook_delivery } from './events/orgs_webhook_delivery'
import { apps_org_installation } from './events/apps_org_installation'
import { orgs_membership_for_user } from './events/orgs_membership_for_user'
import { migrations_status_for_org } from './events/migrations_status_for_org'
import { packages_package_for_organization } from './events/packages_package_for_organization'
import { packages_package_version_for_organization } from './events/packages_package_version_for_organization'
import { billing_github_actions_billing_org } from './events/billing_github_actions_billing_org'
import { billing_github_packages_billing_org } from './events/billing_github_packages_billing_org'
import { billing_shared_storage_billing_org } from './events/billing_shared_storage_billing_org'
import { teams_by_name } from './events/teams_by_name'
import { teams_discussion_in_org } from './events/teams_discussion_in_org'
import { teams_discussion_comment_in_org } from './events/teams_discussion_comment_in_org'
import { teams_membership_for_user_in_org } from './events/teams_membership_for_user_in_org'
import { teamscheck_permissions_for_project_in_org } from './events/teamscheck_permissions_for_project_in_org'
import { teamscheck_permissions_for_repo_in_org } from './events/teamscheck_permissions_for_repo_in_org'
import { projects_card } from './events/projects_card'
import { projects_column } from './events/projects_column'
import { projects } from './events/projects'
import { projects_permission_for_user } from './events/projects_permission_for_user'
import { rate_limit } from './events/rate_limit'
import { actions_repo_required_workflow } from './events/actions_repo_required_workflow'
import { actions_repo_required_workflow_usage } from './events/actions_repo_required_workflow_usage'
import { repos } from './events/repos'
import { actions_artifact } from './events/actions_artifact'
import { actions_actions_cache_usage } from './events/actions_actions_cache_usage'
import { actions_actions_cache_list } from './events/actions_actions_cache_list'
import { actions_job_for_workflow_run } from './events/actions_job_for_workflow_run'
import { actions_custom_oidc_sub_claim_for_repo } from './events/actions_custom_oidc_sub_claim_for_repo'
import { actions_github_actions_permissions_repository } from './events/actions_github_actions_permissions_repository'
import { actions_workflow_access_to_repository } from './events/actions_workflow_access_to_repository'
import { actions_allowed_actions_repository } from './events/actions_allowed_actions_repository'
import { actions_github_actions_default_workflow_permissions_repository } from './events/actions_github_actions_default_workflow_permissions_repository'
import { actions_self_hosted_runner_for_repo } from './events/actions_self_hosted_runner_for_repo'
import { actionslist_labels_for_self_hosted_runner_for_repo } from './events/actionslist_labels_for_self_hosted_runner_for_repo'
import { actions_workflow_run } from './events/actions_workflow_run'
import { actions_workflow_run_attempt } from './events/actions_workflow_run_attempt'
import { actions_workflow_run_usage } from './events/actions_workflow_run_usage'
import { actions_repo_public_key } from './events/actions_repo_public_key'
import { actions_repo_secret } from './events/actions_repo_secret'
import { actions_repo_variable } from './events/actions_repo_variable'
import { actions_workflow } from './events/actions_workflow'
import { actions_workflow_usage } from './events/actions_workflow_usage'
import { repos_autolink } from './events/repos_autolink'
import { repos_branch } from './events/repos_branch'
import { repos_branch_protection } from './events/repos_branch_protection'
import { repos_admin_branch_protection } from './events/repos_admin_branch_protection'
import { repos_pull_request_review_protection } from './events/repos_pull_request_review_protection'
import { repos_commit_signature_protection } from './events/repos_commit_signature_protection'
import { repos_status_checks_protection } from './events/repos_status_checks_protection'
import { repos_access_restrictions } from './events/repos_access_restrictions'
import { checks } from './events/checks'
import { checks_suite } from './events/checks_suite'
import { code_scanning_alert } from './events/code_scanning_alert'
import { code_scanning_analysis } from './events/code_scanning_analysis'
import { code_scanning_codeql_database } from './events/code_scanning_codeql_database'
import { code_scanning_sarif } from './events/code_scanning_sarif'
import { reposcodeowners_errors } from './events/reposcodeowners_errors'
import { codespaces_repo_public_key } from './events/codespaces_repo_public_key'
import { codespaces_repo_secret } from './events/codespaces_repo_secret'
import { repos_collaborator_permission_level } from './events/repos_collaborator_permission_level'
import { repos_commit_comment } from './events/repos_commit_comment'
import { repos_commit } from './events/repos_commit'
import { repos_combined_status_for_ref } from './events/repos_combined_status_for_ref'
import { repos_community_profile_metrics } from './events/repos_community_profile_metrics'
import { reposcompare_commits } from './events/reposcompare_commits'
import { dependabot_alert } from './events/dependabot_alert'
import { dependabot_repo_public_key } from './events/dependabot_repo_public_key'
import { dependabot_repo_secret } from './events/dependabot_repo_secret'
import { dependency_graphdiff_range } from './events/dependency_graphdiff_range'
import { repos_deployment } from './events/repos_deployment'
import { repos_deployment_status } from './events/repos_deployment_status'
import { repos_environment } from './events/repos_environment'
import { repos_deployment_branch_policy } from './events/repos_deployment_branch_policy'
import { git_blob } from './events/git_blob'
import { git_commit } from './events/git_commit'
import { git_ref } from './events/git_ref'
import { git_tag } from './events/git_tag'
import { git_tree } from './events/git_tree'
import { repos_webhook } from './events/repos_webhook'
import { repos_webhook_config_for_repo } from './events/repos_webhook_config_for_repo'
import { repos_webhook_delivery } from './events/repos_webhook_delivery'
import { migrations_import_status } from './events/migrations_import_status'
import { apps_repo_installation } from './events/apps_repo_installation'
import { issues_comment } from './events/issues_comment'
import { issues_event } from './events/issues_event'
import { issues } from './events/issues'
import { repos_deploy_key } from './events/repos_deploy_key'
import { issues_label } from './events/issues_label'
import { reposlist_languages } from './events/reposlist_languages'
import { licenses_for_repo } from './events/licenses_for_repo'
import { issues_milestone } from './events/issues_milestone'
import { repos_pages } from './events/repos_pages'
import { repos_latest_pages_build } from './events/repos_latest_pages_build'
import { repos_pages_build } from './events/repos_pages_build'
import { repos_pages_health_check } from './events/repos_pages_health_check'
import { pulls_review_comment } from './events/pulls_review_comment'
import { pulls } from './events/pulls'
import { pullslist_requested_reviewers } from './events/pullslist_requested_reviewers'
import { pulls_review } from './events/pulls_review'
import { repos_readme } from './events/repos_readme'
import { repos_readme_in_directory } from './events/repos_readme_in_directory'
import { repos_release_asset } from './events/repos_release_asset'
import { repos_latest_release } from './events/repos_latest_release'
import { repos_release_by_tag } from './events/repos_release_by_tag'
import { repos_release } from './events/repos_release'
import { secret_scanning_alert } from './events/secret_scanning_alert'
import { repos_participation_stats } from './events/repos_participation_stats'
import { activity_repo_subscription } from './events/activity_repo_subscription'
import { repos_all_topics } from './events/repos_all_topics'
import { repos_clones } from './events/repos_clones'
import { repos_views } from './events/repos_views'
import { actions_environment_public_key } from './events/actions_environment_public_key'
import { actions_environment_secret } from './events/actions_environment_secret'
import { actions_environment_variable } from './events/actions_environment_variable'
import { teams_legacy } from './events/teams_legacy'
import { teams_discussion_legacy } from './events/teams_discussion_legacy'
import { teams_discussion_comment_legacy } from './events/teams_discussion_comment_legacy'
import { teams_membership_for_user_legacy } from './events/teams_membership_for_user_legacy'
import { teamscheck_permissions_for_project_legacy } from './events/teamscheck_permissions_for_project_legacy'
import { teamscheck_permissions_for_repo_legacy } from './events/teamscheck_permissions_for_repo_legacy'
import { codespaces_public_key_for_authenticated_user } from './events/codespaces_public_key_for_authenticated_user'
import { codespaces_secret_for_authenticated_user } from './events/codespaces_secret_for_authenticated_user'
import { codespaces_for_authenticated_user } from './events/codespaces_for_authenticated_user'
import { codespaces_export_details_for_authenticated_user } from './events/codespaces_export_details_for_authenticated_user'
import { users_gpg_key_for_authenticated_user } from './events/users_gpg_key_for_authenticated_user'
import { users_public_ssh_key_for_authenticated_user } from './events/users_public_ssh_key_for_authenticated_user'
import { orgs_membership_for_authenticated_user } from './events/orgs_membership_for_authenticated_user'
import { migrations_status_for_authenticated_user } from './events/migrations_status_for_authenticated_user'
import { packages_package_for_authenticated_user } from './events/packages_package_for_authenticated_user'
import { packages_package_version_for_authenticated_user } from './events/packages_package_version_for_authenticated_user'
import { users_ssh_signing_key_for_authenticated_user } from './events/users_ssh_signing_key_for_authenticated_user'
import { users_context_for_user } from './events/users_context_for_user'
import { apps_user_installation } from './events/apps_user_installation'
import { packages_package_for_user } from './events/packages_package_for_user'
import { packages_package_version_for_user } from './events/packages_package_version_for_user'
import { billing_github_actions_billing_user } from './events/billing_github_actions_billing_user'
import { billing_github_packages_billing_user } from './events/billing_github_packages_billing_user'
import { billing_shared_storage_billing_user } from './events/billing_shared_storage_billing_user'

type GithubConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class GithubIntegration extends Integration {
  config: GithubConfig;

  constructor({ config }: { config: GithubConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'GITHUB',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'github.metaroot/sync': {
                schema: z.object({}),
                handler: metaroot,
            },
        

             'github.apps_authenticated/sync': {
                schema: z.object({}),
                handler: apps_authenticated,
            },
        

             'github.apps_webhook_config_for_app/sync': {
                schema: z.object({}),
                handler: apps_webhook_config_for_app,
            },
        

             'github.apps_webhook_delivery/sync': {
                schema: z.object({
                  'delivery_id': z.string(),
'delivery-id': z.string()}),
                handler: apps_webhook_delivery,
            },
        

             'github.apps_installation/sync': {
                schema: z.object({
                  'installation_id': z.string(),
'installation-id': z.string()}),
                handler: apps_installation,
            },
        

             'github.apps_by_slug/sync': {
                schema: z.object({
                  'app_slug': z.string(),
'app-slug': z.string()}),
                handler: apps_by_slug,
            },
        

             'github.codes_of_conduct_conduct_code/sync': {
                schema: z.object({
                  'key': z.string()}),
                handler: codes_of_conduct_conduct_code,
            },
        

             'github.activity_feeds/sync': {
                schema: z.object({}),
                handler: activity_feeds,
            },
        

             'github.gists/sync': {
                schema: z.object({
                  'gist_id': z.string(),
'gist-id': z.string()}),
                handler: gists,
            },
        

             'github.gists_comment/sync': {
                schema: z.object({
                  'gist_id': z.string(),
'comment_id': z.string(),
'gist-id': z.string(),
'comment-id': z.string()}),
                handler: gists_comment,
            },
        

             'github.gists_revision/sync': {
                schema: z.object({
                  'gist_id': z.string(),
'sha': z.string(),
'gist-id': z.string()}),
                handler: gists_revision,
            },
        

             'github.gitignore_template/sync': {
                schema: z.object({
                  'name': z.string()}),
                handler: gitignore_template,
            },
        

             'github.licenses/sync': {
                schema: z.object({
                  'license': z.string()}),
                handler: licenses,
            },
        

             'github.apps_subscription_plan_for_account/sync': {
                schema: z.object({
                  'account_id': z.string(),
'account-id': z.string()}),
                handler: apps_subscription_plan_for_account,
            },
        

             'github.apps_subscription_plan_for_account_stubbed/sync': {
                schema: z.object({
                  'account_id': z.string(),
'account-id': z.string()}),
                handler: apps_subscription_plan_for_account_stubbed,
            },
        

             'github.meta/sync': {
                schema: z.object({}),
                handler: meta,
            },
        

             'github.activity_thread/sync': {
                schema: z.object({
                  'thread_id': z.string(),
'thread-id': z.string()}),
                handler: activity_thread,
            },
        

             'github.activity_thread_subscription_for_authenticated_user/sync': {
                schema: z.object({
                  'thread_id': z.string(),
'thread-id': z.string()}),
                handler: activity_thread_subscription_for_authenticated_user,
            },
        

             'github.orgs/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: orgs,
            },
        

             'github.actions_actions_cache_usage_for_org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions_actions_cache_usage_for_org,
            },
        

             'github.oidc_oidc_custom_sub_template_for_org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: oidc_oidc_custom_sub_template_for_org,
            },
        

             'github.actions_github_actions_permissions_organization/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions_github_actions_permissions_organization,
            },
        

             'github.actions_allowed_actions_organization/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions_allowed_actions_organization,
            },
        

             'github.actions_github_actions_default_workflow_permissions_organization/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions_github_actions_default_workflow_permissions_organization,
            },
        

             'github.actions_required_workflow/sync': {
                schema: z.object({
                  'org': z.string(),
'required_workflow_id': z.string(),
'required-workflow-id': z.string()}),
                handler: actions_required_workflow,
            },
        

             'github.actions_self_hosted_runner_for_org/sync': {
                schema: z.object({
                  'org': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actions_self_hosted_runner_for_org,
            },
        

             'github.actionslist_labels_for_self_hosted_runner_for_org/sync': {
                schema: z.object({
                  'org': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actionslist_labels_for_self_hosted_runner_for_org,
            },
        

             'github.actions_org_public_key/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions_org_public_key,
            },
        

             'github.actions_org_secret/sync': {
                schema: z.object({
                  'org': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: actions_org_secret,
            },
        

             'github.actions_org_variable/sync': {
                schema: z.object({
                  'org': z.string(),
'name': z.string(),
'variable-name': z.string()}),
                handler: actions_org_variable,
            },
        

             'github.codespaces_org_public_key/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: codespaces_org_public_key,
            },
        

             'github.codespaces_org_secret/sync': {
                schema: z.object({
                  'org': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: codespaces_org_secret,
            },
        

             'github.dependabot_org_public_key/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: dependabot_org_public_key,
            },
        

             'github.dependabot_org_secret/sync': {
                schema: z.object({
                  'org': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: dependabot_org_secret,
            },
        

             'github.orgs_webhook/sync': {
                schema: z.object({
                  'org': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: orgs_webhook,
            },
        

             'github.orgs_webhook_config_for_org/sync': {
                schema: z.object({
                  'org': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: orgs_webhook_config_for_org,
            },
        

             'github.orgs_webhook_delivery/sync': {
                schema: z.object({
                  'org': z.string(),
'hook_id': z.string(),
'delivery_id': z.string(),
'hook-id': z.string(),
'delivery-id': z.string()}),
                handler: orgs_webhook_delivery,
            },
        

             'github.apps_org_installation/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: apps_org_installation,
            },
        

             'github.orgs_membership_for_user/sync': {
                schema: z.object({
                  'org': z.string(),
'username': z.string()}),
                handler: orgs_membership_for_user,
            },
        

             'github.migrations_status_for_org/sync': {
                schema: z.object({
                  'org': z.string(),
'migration_id': z.string(),
'migration-id': z.string(),
'exclude': z.string()}),
                handler: migrations_status_for_org,
            },
        

             'github.packages_package_for_organization/sync': {
                schema: z.object({
                  'org': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package-type': z.string(),
'package-name': z.string()}),
                handler: packages_package_for_organization,
            },
        

             'github.packages_package_version_for_organization/sync': {
                schema: z.object({
                  'org': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package_version_id': z.string(),
'package-type': z.string(),
'package-name': z.string(),
'package-version-id': z.string()}),
                handler: packages_package_version_for_organization,
            },
        

             'github.billing_github_actions_billing_org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: billing_github_actions_billing_org,
            },
        

             'github.billing_github_packages_billing_org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: billing_github_packages_billing_org,
            },
        

             'github.billing_shared_storage_billing_org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: billing_shared_storage_billing_org,
            },
        

             'github.teams_by_name/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'team-slug': z.string()}),
                handler: teams_by_name,
            },
        

             'github.teams_discussion_in_org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'discussion_number': z.string(),
'team-slug': z.string(),
'discussion-number': z.string()}),
                handler: teams_discussion_in_org,
            },
        

             'github.teams_discussion_comment_in_org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'discussion_number': z.string(),
'comment_number': z.string(),
'team-slug': z.string(),
'discussion-number': z.string(),
'comment-number': z.string()}),
                handler: teams_discussion_comment_in_org,
            },
        

             'github.teams_membership_for_user_in_org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'username': z.string(),
'team-slug': z.string()}),
                handler: teams_membership_for_user_in_org,
            },
        

             'github.teamscheck_permissions_for_project_in_org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'project_id': z.string(),
'team-slug': z.string(),
'project-id': z.string()}),
                handler: teamscheck_permissions_for_project_in_org,
            },
        

             'github.teamscheck_permissions_for_repo_in_org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'owner': z.string(),
'repo': z.string(),
'team-slug': z.string()}),
                handler: teamscheck_permissions_for_repo_in_org,
            },
        

             'github.projects_card/sync': {
                schema: z.object({
                  'card_id': z.string(),
'card-id': z.string()}),
                handler: projects_card,
            },
        

             'github.projects_column/sync': {
                schema: z.object({
                  'column_id': z.string(),
'column-id': z.string()}),
                handler: projects_column,
            },
        

             'github.projects/sync': {
                schema: z.object({
                  'project_id': z.string(),
'project-id': z.string()}),
                handler: projects,
            },
        

             'github.projects_permission_for_user/sync': {
                schema: z.object({
                  'project_id': z.string(),
'username': z.string(),
'project-id': z.string()}),
                handler: projects_permission_for_user,
            },
        

             'github.rate_limit/sync': {
                schema: z.object({}),
                handler: rate_limit,
            },
        

             'github.actions_repo_required_workflow/sync': {
                schema: z.object({
                  'org': z.string(),
'repo': z.string(),
'required_workflow_id_for_repo': z.string(),
'repo-required-workflow-id': z.string()}),
                handler: actions_repo_required_workflow,
            },
        

             'github.actions_repo_required_workflow_usage/sync': {
                schema: z.object({
                  'org': z.string(),
'repo': z.string(),
'required_workflow_id_for_repo': z.string(),
'repo-required-workflow-id': z.string()}),
                handler: actions_repo_required_workflow_usage,
            },
        

             'github.repos/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos,
            },
        

             'github.actions_artifact/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'artifact_id': z.string(),
'artifact-id': z.string()}),
                handler: actions_artifact,
            },
        

             'github.actions_actions_cache_usage/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_actions_cache_usage,
            },
        

             'github.actions_actions_cache_list/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'per-page': z.string(),
'page': z.string(),
'git-ref': z.string(),
'actions-cache-key': z.string(),
'actions-cache-list-sort': z.string(),
'direction': z.string()}),
                handler: actions_actions_cache_list,
            },
        

             'github.actions_job_for_workflow_run/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'job_id': z.string(),
'job-id': z.string()}),
                handler: actions_job_for_workflow_run,
            },
        

             'github.actions_custom_oidc_sub_claim_for_repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_custom_oidc_sub_claim_for_repo,
            },
        

             'github.actions_github_actions_permissions_repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_github_actions_permissions_repository,
            },
        

             'github.actions_workflow_access_to_repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_workflow_access_to_repository,
            },
        

             'github.actions_allowed_actions_repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_allowed_actions_repository,
            },
        

             'github.actions_github_actions_default_workflow_permissions_repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_github_actions_default_workflow_permissions_repository,
            },
        

             'github.actions_self_hosted_runner_for_repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actions_self_hosted_runner_for_repo,
            },
        

             'github.actionslist_labels_for_self_hosted_runner_for_repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actionslist_labels_for_self_hosted_runner_for_repo,
            },
        

             'github.actions_workflow_run/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'run_id': z.string(),
'run-id': z.string(),
'exclude-pull-requests': z.string()}),
                handler: actions_workflow_run,
            },
        

             'github.actions_workflow_run_attempt/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'run_id': z.string(),
'attempt_number': z.string(),
'run-id': z.string(),
'attempt-number': z.string(),
'exclude-pull-requests': z.string()}),
                handler: actions_workflow_run_attempt,
            },
        

             'github.actions_workflow_run_usage/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'run_id': z.string(),
'run-id': z.string()}),
                handler: actions_workflow_run_usage,
            },
        

             'github.actions_repo_public_key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions_repo_public_key,
            },
        

             'github.actions_repo_secret/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: actions_repo_secret,
            },
        

             'github.actions_repo_variable/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'name': z.string(),
'variable-name': z.string()}),
                handler: actions_repo_variable,
            },
        

             'github.actions_workflow/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'workflow_id': z.string(),
'workflow-id': z.string()}),
                handler: actions_workflow,
            },
        

             'github.actions_workflow_usage/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'workflow_id': z.string(),
'workflow-id': z.string()}),
                handler: actions_workflow_usage,
            },
        

             'github.repos_autolink/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'autolink_id': z.string(),
'autolink-id': z.string()}),
                handler: repos_autolink,
            },
        

             'github.repos_branch/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_branch,
            },
        

             'github.repos_branch_protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_branch_protection,
            },
        

             'github.repos_admin_branch_protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_admin_branch_protection,
            },
        

             'github.repos_pull_request_review_protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_pull_request_review_protection,
            },
        

             'github.repos_commit_signature_protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_commit_signature_protection,
            },
        

             'github.repos_status_checks_protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_status_checks_protection,
            },
        

             'github.repos_access_restrictions/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos_access_restrictions,
            },
        

             'github.checks/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'check_run_id': z.string(),
'check-run-id': z.string()}),
                handler: checks,
            },
        

             'github.checks_suite/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'check_suite_id': z.string(),
'check-suite-id': z.string()}),
                handler: checks_suite,
            },
        

             'github.code_scanning_alert/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'alert_number': z.string(),
'alert-number': z.string()}),
                handler: code_scanning_alert,
            },
        

             'github.code_scanning_analysis/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'analysis_id': z.string(),
'analysis_id': z.number()}),
                handler: code_scanning_analysis,
            },
        

             'github.code_scanning_codeql_database/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'language': z.string()}),
                handler: code_scanning_codeql_database,
            },
        

             'github.code_scanning_sarif/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'sarif_id': z.string()}),
                handler: code_scanning_sarif,
            },
        

             'github.reposcodeowners_errors/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string()}),
                handler: reposcodeowners_errors,
            },
        

             'github.codespaces_repo_public_key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: codespaces_repo_public_key,
            },
        

             'github.codespaces_repo_secret/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: codespaces_repo_secret,
            },
        

             'github.repos_collaborator_permission_level/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'username': z.string()}),
                handler: repos_collaborator_permission_level,
            },
        

             'github.repos_commit_comment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'comment_id': z.string(),
'comment-id': z.string()}),
                handler: repos_commit_comment,
            },
        

             'github.repos_commit/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string(),
'page': z.string(),
'per-page': z.string()}),
                handler: repos_commit,
            },
        

             'github.repos_combined_status_for_ref/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string(),
'per-page': z.string(),
'page': z.string()}),
                handler: repos_combined_status_for_ref,
            },
        

             'github.repos_community_profile_metrics/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos_community_profile_metrics,
            },
        

             'github.reposcompare_commits/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'basehead': z.string(),
'page': z.string(),
'per-page': z.string()}),
                handler: reposcompare_commits,
            },
        

             'github.dependabot_alert/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'alert_number': z.string(),
'dependabot-alert-number': z.string()}),
                handler: dependabot_alert,
            },
        

             'github.dependabot_repo_public_key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: dependabot_repo_public_key,
            },
        

             'github.dependabot_repo_secret/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: dependabot_repo_secret,
            },
        

             'github.dependency_graphdiff_range/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'basehead': z.string(),
'manifest-path': z.string()}),
                handler: dependency_graphdiff_range,
            },
        

             'github.repos_deployment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'deployment_id': z.string(),
'deployment-id': z.string()}),
                handler: repos_deployment,
            },
        

             'github.repos_deployment_status/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'deployment_id': z.string(),
'status_id': z.string(),
'deployment-id': z.string(),
'status_id': z.number()}),
                handler: repos_deployment_status,
            },
        

             'github.repos_environment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'environment_name': z.string(),
'environment-name': z.string()}),
                handler: repos_environment,
            },
        

             'github.repos_deployment_branch_policy/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'environment_name': z.string(),
'branch_policy_id': z.string(),
'environment-name': z.string(),
'branch-policy-id': z.string()}),
                handler: repos_deployment_branch_policy,
            },
        

             'github.git_blob/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'file_sha': z.string()}),
                handler: git_blob,
            },
        

             'github.git_commit/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'commit_sha': z.string(),
'commit-sha': z.string()}),
                handler: git_commit,
            },
        

             'github.git_ref/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string()}),
                handler: git_ref,
            },
        

             'github.git_tag/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'tag_sha': z.string()}),
                handler: git_tag,
            },
        

             'github.git_tree/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'tree_sha': z.string(),
'recursive': z.string()}),
                handler: git_tree,
            },
        

             'github.repos_webhook/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: repos_webhook,
            },
        

             'github.repos_webhook_config_for_repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: repos_webhook_config_for_repo,
            },
        

             'github.repos_webhook_delivery/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'hook_id': z.string(),
'delivery_id': z.string(),
'hook-id': z.string(),
'delivery-id': z.string()}),
                handler: repos_webhook_delivery,
            },
        

             'github.migrations_import_status/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: migrations_import_status,
            },
        

             'github.apps_repo_installation/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: apps_repo_installation,
            },
        

             'github.issues_comment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'comment_id': z.string(),
'comment-id': z.string()}),
                handler: issues_comment,
            },
        

             'github.issues_event/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'event_id': z.string(),
'event_id': z.number()}),
                handler: issues_event,
            },
        

             'github.issues/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'issue_number': z.string(),
'issue-number': z.string()}),
                handler: issues,
            },
        

             'github.repos_deploy_key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'key_id': z.string(),
'key-id': z.string()}),
                handler: repos_deploy_key,
            },
        

             'github.issues_label/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'name': z.string()}),
                handler: issues_label,
            },
        

             'github.reposlist_languages/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: reposlist_languages,
            },
        

             'github.licenses_for_repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: licenses_for_repo,
            },
        

             'github.issues_milestone/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'milestone_number': z.string(),
'milestone-number': z.string()}),
                handler: issues_milestone,
            },
        

             'github.repos_pages/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos_pages,
            },
        

             'github.repos_latest_pages_build/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos_latest_pages_build,
            },
        

             'github.repos_pages_build/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'build_id': z.string(),
'build_id': z.number()}),
                handler: repos_pages_build,
            },
        

             'github.repos_pages_health_check/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos_pages_health_check,
            },
        

             'github.pulls_review_comment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'comment_id': z.string(),
'comment-id': z.string()}),
                handler: pulls_review_comment,
            },
        

             'github.pulls/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'pull_number': z.string(),
'pull-number': z.string()}),
                handler: pulls,
            },
        

             'github.pullslist_requested_reviewers/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'pull_number': z.string(),
'pull-number': z.string()}),
                handler: pullslist_requested_reviewers,
            },
        

             'github.pulls_review/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'pull_number': z.string(),
'review_id': z.string(),
'pull-number': z.string(),
'review-id': z.string()}),
                handler: pulls_review,
            },
        

             'github.repos_readme/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string()}),
                handler: repos_readme,
            },
        

             'github.repos_readme_in_directory/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'dir': z.string(),
'ref': z.string()}),
                handler: repos_readme_in_directory,
            },
        

             'github.repos_release_asset/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'asset_id': z.string(),
'asset-id': z.string()}),
                handler: repos_release_asset,
            },
        

             'github.repos_latest_release/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos_latest_release,
            },
        

             'github.repos_release_by_tag/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'tag': z.string()}),
                handler: repos_release_by_tag,
            },
        

             'github.repos_release/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'release_id': z.string(),
'release-id': z.string()}),
                handler: repos_release,
            },
        

             'github.secret_scanning_alert/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'alert_number': z.string(),
'alert-number': z.string()}),
                handler: secret_scanning_alert,
            },
        

             'github.repos_participation_stats/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos_participation_stats,
            },
        

             'github.activity_repo_subscription/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: activity_repo_subscription,
            },
        

             'github.repos_all_topics/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'page': z.string(),
'per-page': z.string()}),
                handler: repos_all_topics,
            },
        

             'github.repos_clones/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'per': z.string()}),
                handler: repos_clones,
            },
        

             'github.repos_views/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'per': z.string()}),
                handler: repos_views,
            },
        

             'github.actions_environment_public_key/sync': {
                schema: z.object({
                  'repository_id': z.string(),
'environment_name': z.string(),
'repository-id': z.string(),
'environment-name': z.string()}),
                handler: actions_environment_public_key,
            },
        

             'github.actions_environment_secret/sync': {
                schema: z.object({
                  'repository_id': z.string(),
'environment_name': z.string(),
'secret_name': z.string(),
'repository-id': z.string(),
'environment-name': z.string(),
'secret-name': z.string()}),
                handler: actions_environment_secret,
            },
        

             'github.actions_environment_variable/sync': {
                schema: z.object({
                  'repository_id': z.string(),
'environment_name': z.string(),
'name': z.string(),
'repository-id': z.string(),
'environment-name': z.string(),
'variable-name': z.string()}),
                handler: actions_environment_variable,
            },
        

             'github.teams_legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'team-id': z.string()}),
                handler: teams_legacy,
            },
        

             'github.teams_discussion_legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'discussion_number': z.string(),
'team-id': z.string(),
'discussion-number': z.string()}),
                handler: teams_discussion_legacy,
            },
        

             'github.teams_discussion_comment_legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'discussion_number': z.string(),
'comment_number': z.string(),
'team-id': z.string(),
'discussion-number': z.string(),
'comment-number': z.string()}),
                handler: teams_discussion_comment_legacy,
            },
        

             'github.teams_membership_for_user_legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'username': z.string(),
'team-id': z.string()}),
                handler: teams_membership_for_user_legacy,
            },
        

             'github.teamscheck_permissions_for_project_legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'project_id': z.string(),
'team-id': z.string(),
'project-id': z.string()}),
                handler: teamscheck_permissions_for_project_legacy,
            },
        

             'github.teamscheck_permissions_for_repo_legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'owner': z.string(),
'repo': z.string(),
'team-id': z.string()}),
                handler: teamscheck_permissions_for_repo_legacy,
            },
        

             'github.codespaces_public_key_for_authenticated_user/sync': {
                schema: z.object({}),
                handler: codespaces_public_key_for_authenticated_user,
            },
        

             'github.codespaces_secret_for_authenticated_user/sync': {
                schema: z.object({
                  'secret_name': z.string(),
'secret-name': z.string()}),
                handler: codespaces_secret_for_authenticated_user,
            },
        

             'github.codespaces_for_authenticated_user/sync': {
                schema: z.object({
                  'codespace_name': z.string(),
'codespace-name': z.string()}),
                handler: codespaces_for_authenticated_user,
            },
        

             'github.codespaces_export_details_for_authenticated_user/sync': {
                schema: z.object({
                  'codespace_name': z.string(),
'export_id': z.string(),
'codespace-name': z.string(),
'export-id': z.string()}),
                handler: codespaces_export_details_for_authenticated_user,
            },
        

             'github.users_gpg_key_for_authenticated_user/sync': {
                schema: z.object({
                  'gpg_key_id': z.string(),
'gpg-key-id': z.string()}),
                handler: users_gpg_key_for_authenticated_user,
            },
        

             'github.users_public_ssh_key_for_authenticated_user/sync': {
                schema: z.object({
                  'key_id': z.string(),
'key-id': z.string()}),
                handler: users_public_ssh_key_for_authenticated_user,
            },
        

             'github.orgs_membership_for_authenticated_user/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: orgs_membership_for_authenticated_user,
            },
        

             'github.migrations_status_for_authenticated_user/sync': {
                schema: z.object({
                  'migration_id': z.string(),
'migration-id': z.string(),
'exclude': z.string()}),
                handler: migrations_status_for_authenticated_user,
            },
        

             'github.packages_package_for_authenticated_user/sync': {
                schema: z.object({
                  'package_type': z.string(),
'package_name': z.string(),
'package-type': z.string(),
'package-name': z.string()}),
                handler: packages_package_for_authenticated_user,
            },
        

             'github.packages_package_version_for_authenticated_user/sync': {
                schema: z.object({
                  'package_type': z.string(),
'package_name': z.string(),
'package_version_id': z.string(),
'package-type': z.string(),
'package-name': z.string(),
'package-version-id': z.string()}),
                handler: packages_package_version_for_authenticated_user,
            },
        

             'github.users_ssh_signing_key_for_authenticated_user/sync': {
                schema: z.object({
                  'ssh_signing_key_id': z.string(),
'ssh-signing-key-id': z.string()}),
                handler: users_ssh_signing_key_for_authenticated_user,
            },
        

             'github.users_context_for_user/sync': {
                schema: z.object({
                  'username': z.string(),
'subject_type': z.string(),
'subject_id': z.string()}),
                handler: users_context_for_user,
            },
        

             'github.apps_user_installation/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: apps_user_installation,
            },
        

             'github.packages_package_for_user/sync': {
                schema: z.object({
                  'username': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package-type': z.string(),
'package-name': z.string()}),
                handler: packages_package_for_user,
            },
        

             'github.packages_package_version_for_user/sync': {
                schema: z.object({
                  'username': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package_version_id': z.string(),
'package-type': z.string(),
'package-name': z.string(),
'package-version-id': z.string()}),
                handler: packages_package_version_for_user,
            },
        

             'github.billing_github_actions_billing_user/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: billing_github_actions_billing_user,
            },
        

             'github.billing_github_packages_billing_user/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: billing_github_packages_billing_user,
            },
        

             'github.billing_shared_storage_billing_user/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: billing_shared_storage_billing_user,
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
        SERVER: `https://github.com`,
        AUTHORIZATION_ENDPOINT: '/login/oauth/authorize',
        TOKEN_ENDPOINT: '/login/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}

    