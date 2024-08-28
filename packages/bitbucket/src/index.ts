
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { subject_types } from './events/subject_types'
import { paginated_hook_events } from './events/paginated_hook_events'
import { paginated_pullrequests } from './events/paginated_pullrequests'
import { paginated_repositories } from './events/paginated_repositories'
import { paginated_repositories } from './events/paginated_repositories'
import { repository } from './events/repository'
import { paginated_branchrestrictions } from './events/paginated_branchrestrictions'
import { branchrestriction } from './events/branchrestriction'
import { branching_model } from './events/branching_model'
import { branching_model_settings } from './events/branching_model_settings'
import { commit } from './events/commit'
import { paginated_commit_comments } from './events/paginated_commit_comments'
import { commit_comment } from './events/commit_comment'
import { CommitHostedPropertyValue } from './events/CommitHostedPropertyValue'
import { PullrequestsForCommit } from './events/PullrequestsForCommit'
import { ReportsForCommit } from './events/ReportsForCommit'
import { Report } from './events/Report'
import { AnnotationsForReport } from './events/AnnotationsForReport'
import { Annotation } from './events/Annotation'
import { paginated_commitstatuses } from './events/paginated_commitstatuses'
import { commitstatus } from './events/commitstatus'
import { paginated_changeset } from './events/paginated_changeset'
import { paginated_changeset } from './events/paginated_changeset'
import { paginated_components } from './events/paginated_components'
import { component } from './events/component'
import { paginated_accounts } from './events/paginated_accounts'
import { account } from './events/account'
import { paginated_deploy_keys } from './events/paginated_deploy_keys'
import { deploy_key } from './events/deploy_key'
import { DeploymentsForRepository } from './events/DeploymentsForRepository'
import { DeploymentForRepository } from './events/DeploymentForRepository'
import { DeploymentVariables } from './events/DeploymentVariables'
import { paginated_diffstats } from './events/paginated_diffstats'
import { effective_repo_branching_model } from './events/effective_repo_branching_model'
import { paginated_default_reviewer_and_type } from './events/paginated_default_reviewer_and_type'
import { EnvironmentsForRepository } from './events/EnvironmentsForRepository'
import { EnvironmentForRepository } from './events/EnvironmentForRepository'
import { paginated_files } from './events/paginated_files'
import { paginated_repositories } from './events/paginated_repositories'
import { paginated_webhook_subscriptions } from './events/paginated_webhook_subscriptions'
import { webhook_subscription } from './events/webhook_subscription'
import { paginated_issues } from './events/paginated_issues'
import { issue_job_status } from './events/issue_job_status'
import { issue } from './events/issue'
import { paginated_issue_attachments } from './events/paginated_issue_attachments'
import { paginated_log_entries } from './events/paginated_log_entries'
import { issue_change } from './events/issue_change'
import { paginated_issue_comments } from './events/paginated_issue_comments'
import { issue_comment } from './events/issue_comment'
import { commit } from './events/commit'
import { paginated_milestones } from './events/paginated_milestones'
import { milestone } from './events/milestone'
import { repository_inheritance_state } from './events/repository_inheritance_state'
import { paginated_repository_group_permissions } from './events/paginated_repository_group_permissions'
import { repository_group_permission } from './events/repository_group_permission'
import { paginated_repository_user_permissions } from './events/paginated_repository_user_permissions'
import { repository_user_permission } from './events/repository_user_permission'
import { PipelinesForRepository } from './events/PipelinesForRepository'
import { RepositoryPipelineCaches } from './events/RepositoryPipelineCaches'
import { RepositoryPipelineCacheContentURI } from './events/RepositoryPipelineCacheContentURI'
import { PipelineForRepository } from './events/PipelineForRepository'
import { PipelineStepsForRepository } from './events/PipelineStepsForRepository'
import { PipelineStepForRepository } from './events/PipelineStepForRepository'
import { RepositoryPipelineConfig } from './events/RepositoryPipelineConfig'
import { RepositoryPipelineSchedules } from './events/RepositoryPipelineSchedules'
import { RepositoryPipelineSchedule } from './events/RepositoryPipelineSchedule'
import { RepositoryPipelineScheduleExecutions } from './events/RepositoryPipelineScheduleExecutions'
import { RepositoryPipelineSshKeyPair } from './events/RepositoryPipelineSshKeyPair'
import { RepositoryPipelineKnownHosts } from './events/RepositoryPipelineKnownHosts'
import { RepositoryPipelineKnownHost } from './events/RepositoryPipelineKnownHost'
import { RepositoryPipelineVariables } from './events/RepositoryPipelineVariables'
import { RepositoryPipelineVariable } from './events/RepositoryPipelineVariable'
import { RepositoryHostedPropertyValue } from './events/RepositoryHostedPropertyValue'
import { paginated_pullrequests } from './events/paginated_pullrequests'
import { pullrequest } from './events/pullrequest'
import { paginated_pullrequest_comments } from './events/paginated_pullrequest_comments'
import { pullrequest_comment } from './events/pullrequest_comment'
import { paginated_commitstatuses } from './events/paginated_commitstatuses'
import { PullRequestHostedPropertyValue } from './events/PullRequestHostedPropertyValue'
import { paginated_refs } from './events/paginated_refs'
import { paginated_branches } from './events/paginated_branches'
import { branch } from './events/branch'
import { paginated_tags } from './events/paginated_tags'
import { tag } from './events/tag'
import { paginated_treeentries } from './events/paginated_treeentries'
import { paginated_treeentries } from './events/paginated_treeentries'
import { paginated_versions } from './events/paginated_versions'
import { version } from './events/version'
import { paginated_accounts } from './events/paginated_accounts'
import { paginated_snippets } from './events/paginated_snippets'
import { paginated_snippets } from './events/paginated_snippets'
import { snippet } from './events/snippet'
import { paginated_snippet_comments } from './events/paginated_snippet_comments'
import { snippet_comment } from './events/snippet_comment'
import { paginated_snippet_commit } from './events/paginated_snippet_commit'
import { snippet_commit } from './events/snippet_commit'
import { paginated_accounts } from './events/paginated_accounts'
import { snippet } from './events/snippet'
import { PipelineVariablesForTeam } from './events/PipelineVariablesForTeam'
import { PipelineVariableForTeam } from './events/PipelineVariableForTeam'
import { searchTeam } from './events/searchTeam'
import { account } from './events/account'
import { paginated_repository_permissions } from './events/paginated_repository_permissions'
import { paginated_workspace_memberships } from './events/paginated_workspace_memberships'
import { account } from './events/account'
import { PipelineVariablesForUser } from './events/PipelineVariablesForUser'
import { PipelineVariableForUser } from './events/PipelineVariableForUser'
import { retrieveUserHostedPropertyValue } from './events/retrieveUserHostedPropertyValue'
import { searchAccount } from './events/searchAccount'
import { paginated_ssh_user_keys } from './events/paginated_ssh_user_keys'
import { ssh_account_key } from './events/ssh_account_key'
import { paginated_workspaces } from './events/paginated_workspaces'
import { workspace } from './events/workspace'
import { paginated_webhook_subscriptions } from './events/paginated_webhook_subscriptions'
import { webhook_subscription } from './events/webhook_subscription'
import { paginated_workspace_memberships } from './events/paginated_workspace_memberships'
import { workspace_membership } from './events/workspace_membership'
import { paginated_workspace_memberships } from './events/paginated_workspace_memberships'
import { paginated_repository_permissions } from './events/paginated_repository_permissions'
import { paginated_repository_permissions } from './events/paginated_repository_permissions'
import { PipelineVariablesForWorkspace } from './events/PipelineVariablesForWorkspace'
import { PipelineVariableForWorkspace } from './events/PipelineVariableForWorkspace'
import { paginated_projects } from './events/paginated_projects'
import { project } from './events/project'
import { project_branching_model } from './events/project_branching_model'
import { branching_model_settings } from './events/branching_model_settings'
import { paginated_default_reviewer_and_type } from './events/paginated_default_reviewer_and_type'
import { user } from './events/user'
import { paginated_project_deploy_keys } from './events/paginated_project_deploy_keys'
import { project_deploy_key } from './events/project_deploy_key'
import { searchWorkspace } from './events/searchWorkspace'

type BitbucketConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class BitbucketIntegration extends Integration {
  config: BitbucketConfig;

  constructor({ config }: { config: BitbucketConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'BITBUCKET',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'bitbucket.subject_types/sync': {
                schema: z.object({}),
                handler: subject_types,
            },
        

             'bitbucket.paginated_hook_events/sync': {
                schema: z.object({
                  subject_type: z.string()}),
                handler: paginated_hook_events,
            },
        

             'bitbucket.paginated_pullrequests/sync': {
                schema: z.object({
                  'state': z.string(),
selected_user: z.string()}),
                handler: paginated_pullrequests,
            },
        

             'bitbucket.paginated_repositories/sync': {
                schema: z.object({
                  'after': z.string(),
'role': z.string(),
'q': z.string(),
'sort': z.string()}),
                handler: paginated_repositories,
            },
        

             'bitbucket.paginated_repositories/sync': {
                schema: z.object({
                  'role': z.string(),
'q': z.string(),
'sort': z.string(),
workspace: z.string()}),
                handler: paginated_repositories,
            },
        

             'bitbucket.repository/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: repository,
            },
        

             'bitbucket.paginated_branchrestrictions/sync': {
                schema: z.object({
                  'kind': z.string(),
'pattern': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_branchrestrictions,
            },
        

             'bitbucket.branchrestriction/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
id: z.string()}),
                handler: branchrestriction,
            },
        

             'bitbucket.branching_model/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: branching_model,
            },
        

             'bitbucket.branching_model_settings/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: branching_model_settings,
            },
        

             'bitbucket.commit/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
commit: z.string()}),
                handler: commit,
            },
        

             'bitbucket.paginated_commit_comments/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string()}),
                handler: paginated_commit_comments,
            },
        

             'bitbucket.commit_comment/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
comment_id: z.string()}),
                handler: commit_comment,
            },
        

             'bitbucket.CommitHostedPropertyValue/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'commit': z.string(),
'app_key': z.string(),
'property_name': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
app_key: z.string(),
property_name: z.string()}),
                handler: CommitHostedPropertyValue,
            },
        

             'bitbucket.PullrequestsForCommit/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'commit': z.string(),
'page': z.number(),
'pagelen': z.number(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string()}),
                handler: PullrequestsForCommit,
            },
        

             'bitbucket.ReportsForCommit/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'commit': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string()}),
                handler: ReportsForCommit,
            },
        

             'bitbucket.Report/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'commit': z.string(),
'reportId': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
reportId: z.string()}),
                handler: Report,
            },
        

             'bitbucket.AnnotationsForReport/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'commit': z.string(),
'reportId': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
reportId: z.string()}),
                handler: AnnotationsForReport,
            },
        

             'bitbucket.Annotation/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'commit': z.string(),
'reportId': z.string(),
'annotationId': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
reportId: z.string(),
annotationId: z.string()}),
                handler: Annotation,
            },
        

             'bitbucket.paginated_commitstatuses/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string()}),
                handler: paginated_commitstatuses,
            },
        

             'bitbucket.commitstatus/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
key: z.string()}),
                handler: commitstatus,
            },
        

             'bitbucket.paginated_changeset/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_changeset,
            },
        

             'bitbucket.paginated_changeset/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
revision: z.string()}),
                handler: paginated_changeset,
            },
        

             'bitbucket.paginated_components/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_components,
            },
        

             'bitbucket.component/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
component_id: z.string()}),
                handler: component,
            },
        

             'bitbucket.paginated_accounts/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_accounts,
            },
        

             'bitbucket.account/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
target_username: z.string()}),
                handler: account,
            },
        

             'bitbucket.paginated_deploy_keys/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_deploy_keys,
            },
        

             'bitbucket.deploy_key/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
key_id: z.string()}),
                handler: deploy_key,
            },
        

             'bitbucket.DeploymentsForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: DeploymentsForRepository,
            },
        

             'bitbucket.DeploymentForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'deployment_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
deployment_uuid: z.string()}),
                handler: DeploymentForRepository,
            },
        

             'bitbucket.DeploymentVariables/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'environment_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
environment_uuid: z.string()}),
                handler: DeploymentVariables,
            },
        

             'bitbucket.paginated_diffstats/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
spec: z.string()}),
                handler: paginated_diffstats,
            },
        

             'bitbucket.effective_repo_branching_model/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: effective_repo_branching_model,
            },
        

             'bitbucket.paginated_default_reviewer_and_type/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_default_reviewer_and_type,
            },
        

             'bitbucket.EnvironmentsForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: EnvironmentsForRepository,
            },
        

             'bitbucket.EnvironmentForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'environment_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
environment_uuid: z.string()}),
                handler: EnvironmentForRepository,
            },
        

             'bitbucket.paginated_files/sync': {
                schema: z.object({
                  'renames': z.string(),
'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
path: z.string()}),
                handler: paginated_files,
            },
        

             'bitbucket.paginated_repositories/sync': {
                schema: z.object({
                  'role': z.string(),
'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_repositories,
            },
        

             'bitbucket.paginated_webhook_subscriptions/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_webhook_subscriptions,
            },
        

             'bitbucket.webhook_subscription/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
uid: z.string()}),
                handler: webhook_subscription,
            },
        

             'bitbucket.paginated_issues/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_issues,
            },
        

             'bitbucket.issue_job_status/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: issue_job_status,
            },
        

             'bitbucket.issue/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
issue_id: z.string()}),
                handler: issue,
            },
        

             'bitbucket.paginated_issue_attachments/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
issue_id: z.string()}),
                handler: paginated_issue_attachments,
            },
        

             'bitbucket.paginated_log_entries/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string(),
issue_id: z.string()}),
                handler: paginated_log_entries,
            },
        

             'bitbucket.issue_change/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
issue_id: z.string(),
change_id: z.string()}),
                handler: issue_change,
            },
        

             'bitbucket.paginated_issue_comments/sync': {
                schema: z.object({
                  'q': z.string(),
workspace: z.string(),
repo_slug: z.string(),
issue_id: z.string()}),
                handler: paginated_issue_comments,
            },
        

             'bitbucket.issue_comment/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
issue_id: z.string(),
comment_id: z.string()}),
                handler: issue_comment,
            },
        

             'bitbucket.commit/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
revspec: z.string()}),
                handler: commit,
            },
        

             'bitbucket.paginated_milestones/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_milestones,
            },
        

             'bitbucket.milestone/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
milestone_id: z.string()}),
                handler: milestone,
            },
        

             'bitbucket.repository_inheritance_state/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: repository_inheritance_state,
            },
        

             'bitbucket.paginated_repository_group_permissions/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_repository_group_permissions,
            },
        

             'bitbucket.repository_group_permission/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
group_slug: z.string()}),
                handler: repository_group_permission,
            },
        

             'bitbucket.paginated_repository_user_permissions/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_repository_user_permissions,
            },
        

             'bitbucket.repository_user_permission/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
selected_user_id: z.string()}),
                handler: repository_user_permission,
            },
        

             'bitbucket.PipelinesForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: PipelinesForRepository,
            },
        

             'bitbucket.RepositoryPipelineCaches/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: RepositoryPipelineCaches,
            },
        

             'bitbucket.RepositoryPipelineCacheContentURI/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'cache_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
cache_uuid: z.string()}),
                handler: RepositoryPipelineCacheContentURI,
            },
        

             'bitbucket.PipelineForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'pipeline_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
pipeline_uuid: z.string()}),
                handler: PipelineForRepository,
            },
        

             'bitbucket.PipelineStepsForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'pipeline_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
pipeline_uuid: z.string()}),
                handler: PipelineStepsForRepository,
            },
        

             'bitbucket.PipelineStepForRepository/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'pipeline_uuid': z.string(),
'step_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
pipeline_uuid: z.string(),
step_uuid: z.string()}),
                handler: PipelineStepForRepository,
            },
        

             'bitbucket.RepositoryPipelineConfig/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: RepositoryPipelineConfig,
            },
        

             'bitbucket.RepositoryPipelineSchedules/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: RepositoryPipelineSchedules,
            },
        

             'bitbucket.RepositoryPipelineSchedule/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'schedule_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
schedule_uuid: z.string()}),
                handler: RepositoryPipelineSchedule,
            },
        

             'bitbucket.RepositoryPipelineScheduleExecutions/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'schedule_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
schedule_uuid: z.string()}),
                handler: RepositoryPipelineScheduleExecutions,
            },
        

             'bitbucket.RepositoryPipelineSshKeyPair/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: RepositoryPipelineSshKeyPair,
            },
        

             'bitbucket.RepositoryPipelineKnownHosts/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: RepositoryPipelineKnownHosts,
            },
        

             'bitbucket.RepositoryPipelineKnownHost/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'known_host_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
known_host_uuid: z.string()}),
                handler: RepositoryPipelineKnownHost,
            },
        

             'bitbucket.RepositoryPipelineVariables/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: RepositoryPipelineVariables,
            },
        

             'bitbucket.RepositoryPipelineVariable/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'variable_uuid': z.string(),
workspace: z.string(),
repo_slug: z.string(),
variable_uuid: z.string()}),
                handler: RepositoryPipelineVariable,
            },
        

             'bitbucket.RepositoryHostedPropertyValue/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'app_key': z.string(),
'property_name': z.string(),
workspace: z.string(),
repo_slug: z.string(),
app_key: z.string(),
property_name: z.string()}),
                handler: RepositoryHostedPropertyValue,
            },
        

             'bitbucket.paginated_pullrequests/sync': {
                schema: z.object({
                  'state': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_pullrequests,
            },
        

             'bitbucket.pullrequest/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
pull_request_id: z.string()}),
                handler: pullrequest,
            },
        

             'bitbucket.paginated_pullrequest_comments/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
pull_request_id: z.string()}),
                handler: paginated_pullrequest_comments,
            },
        

             'bitbucket.pullrequest_comment/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
pull_request_id: z.string(),
comment_id: z.string()}),
                handler: pullrequest_comment,
            },
        

             'bitbucket.paginated_commitstatuses/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string(),
pull_request_id: z.string()}),
                handler: paginated_commitstatuses,
            },
        

             'bitbucket.PullRequestHostedPropertyValue/sync': {
                schema: z.object({
                  'workspace': z.string(),
'repo_slug': z.string(),
'pullrequest_id': z.string(),
'app_key': z.string(),
'property_name': z.string(),
workspace: z.string(),
repo_slug: z.string(),
pullrequest_id: z.string(),
app_key: z.string(),
property_name: z.string()}),
                handler: PullRequestHostedPropertyValue,
            },
        

             'bitbucket.paginated_refs/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_refs,
            },
        

             'bitbucket.paginated_branches/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_branches,
            },
        

             'bitbucket.branch/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
name: z.string()}),
                handler: branch,
            },
        

             'bitbucket.paginated_tags/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_tags,
            },
        

             'bitbucket.tag/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
name: z.string()}),
                handler: tag,
            },
        

             'bitbucket.paginated_treeentries/sync': {
                schema: z.object({
                  'format': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_treeentries,
            },
        

             'bitbucket.paginated_treeentries/sync': {
                schema: z.object({
                  'format': z.string(),
'q': z.string(),
'sort': z.string(),
'max_depth': z.number(),
workspace: z.string(),
repo_slug: z.string(),
commit: z.string(),
path: z.string()}),
                handler: paginated_treeentries,
            },
        

             'bitbucket.paginated_versions/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_versions,
            },
        

             'bitbucket.version/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string(),
version_id: z.string()}),
                handler: version,
            },
        

             'bitbucket.paginated_accounts/sync': {
                schema: z.object({
                  workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_accounts,
            },
        

             'bitbucket.paginated_snippets/sync': {
                schema: z.object({
                  'role': z.string()}),
                handler: paginated_snippets,
            },
        

             'bitbucket.paginated_snippets/sync': {
                schema: z.object({
                  'role': z.string(),
workspace: z.string()}),
                handler: paginated_snippets,
            },
        

             'bitbucket.snippet/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string()}),
                handler: snippet,
            },
        

             'bitbucket.paginated_snippet_comments/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string()}),
                handler: paginated_snippet_comments,
            },
        

             'bitbucket.snippet_comment/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string(),
comment_id: z.string()}),
                handler: snippet_comment,
            },
        

             'bitbucket.paginated_snippet_commit/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string()}),
                handler: paginated_snippet_commit,
            },
        

             'bitbucket.snippet_commit/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string(),
revision: z.string()}),
                handler: snippet_commit,
            },
        

             'bitbucket.paginated_accounts/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string()}),
                handler: paginated_accounts,
            },
        

             'bitbucket.snippet/sync': {
                schema: z.object({
                  workspace: z.string(),
encoded_id: z.string(),
node_id: z.string()}),
                handler: snippet,
            },
        

             'bitbucket.PipelineVariablesForTeam/sync': {
                schema: z.object({
                  'username': z.string(),
username: z.string()}),
                handler: PipelineVariablesForTeam,
            },
        

             'bitbucket.PipelineVariableForTeam/sync': {
                schema: z.object({
                  'username': z.string(),
'variable_uuid': z.string(),
username: z.string(),
variable_uuid: z.string()}),
                handler: PipelineVariableForTeam,
            },
        

             'bitbucket.searchTeam/sync': {
                schema: z.object({
                  'username': z.string(),
'search_query': z.string(),
'page': z.number(),
'pagelen': z.number(),
username: z.string()}),
                handler: searchTeam,
            },
        

             'bitbucket.account/sync': {
                schema: z.object({}),
                handler: account,
            },
        

             'bitbucket.paginated_repository_permissions/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string()}),
                handler: paginated_repository_permissions,
            },
        

             'bitbucket.paginated_workspace_memberships/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string()}),
                handler: paginated_workspace_memberships,
            },
        

             'bitbucket.account/sync': {
                schema: z.object({
                  selected_user: z.string()}),
                handler: account,
            },
        

             'bitbucket.PipelineVariablesForUser/sync': {
                schema: z.object({
                  'selected_user': z.string(),
selected_user: z.string()}),
                handler: PipelineVariablesForUser,
            },
        

             'bitbucket.PipelineVariableForUser/sync': {
                schema: z.object({
                  'selected_user': z.string(),
'variable_uuid': z.string(),
selected_user: z.string(),
variable_uuid: z.string()}),
                handler: PipelineVariableForUser,
            },
        

             'bitbucket.retrieveUserHostedPropertyValue/sync': {
                schema: z.object({
                  'selected_user': z.string(),
'app_key': z.string(),
'property_name': z.string(),
selected_user: z.string(),
app_key: z.string(),
property_name: z.string()}),
                handler: retrieveUserHostedPropertyValue,
            },
        

             'bitbucket.searchAccount/sync': {
                schema: z.object({
                  'selected_user': z.string(),
'search_query': z.string(),
'page': z.number(),
'pagelen': z.number(),
selected_user: z.string()}),
                handler: searchAccount,
            },
        

             'bitbucket.paginated_ssh_user_keys/sync': {
                schema: z.object({
                  selected_user: z.string()}),
                handler: paginated_ssh_user_keys,
            },
        

             'bitbucket.ssh_account_key/sync': {
                schema: z.object({
                  selected_user: z.string(),
key_id: z.string()}),
                handler: ssh_account_key,
            },
        

             'bitbucket.paginated_workspaces/sync': {
                schema: z.object({
                  'role': z.string(),
'q': z.string(),
'sort': z.string()}),
                handler: paginated_workspaces,
            },
        

             'bitbucket.workspace/sync': {
                schema: z.object({
                  workspace: z.string()}),
                handler: workspace,
            },
        

             'bitbucket.paginated_webhook_subscriptions/sync': {
                schema: z.object({
                  workspace: z.string()}),
                handler: paginated_webhook_subscriptions,
            },
        

             'bitbucket.webhook_subscription/sync': {
                schema: z.object({
                  workspace: z.string(),
uid: z.string()}),
                handler: webhook_subscription,
            },
        

             'bitbucket.paginated_workspace_memberships/sync': {
                schema: z.object({
                  workspace: z.string()}),
                handler: paginated_workspace_memberships,
            },
        

             'bitbucket.workspace_membership/sync': {
                schema: z.object({
                  workspace: z.string(),
member: z.string()}),
                handler: workspace_membership,
            },
        

             'bitbucket.paginated_workspace_memberships/sync': {
                schema: z.object({
                  'q': z.string(),
workspace: z.string()}),
                handler: paginated_workspace_memberships,
            },
        

             'bitbucket.paginated_repository_permissions/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string()}),
                handler: paginated_repository_permissions,
            },
        

             'bitbucket.paginated_repository_permissions/sync': {
                schema: z.object({
                  'q': z.string(),
'sort': z.string(),
workspace: z.string(),
repo_slug: z.string()}),
                handler: paginated_repository_permissions,
            },
        

             'bitbucket.PipelineVariablesForWorkspace/sync': {
                schema: z.object({
                  'workspace': z.string(),
workspace: z.string()}),
                handler: PipelineVariablesForWorkspace,
            },
        

             'bitbucket.PipelineVariableForWorkspace/sync': {
                schema: z.object({
                  'workspace': z.string(),
'variable_uuid': z.string(),
workspace: z.string(),
variable_uuid: z.string()}),
                handler: PipelineVariableForWorkspace,
            },
        

             'bitbucket.paginated_projects/sync': {
                schema: z.object({
                  workspace: z.string()}),
                handler: paginated_projects,
            },
        

             'bitbucket.project/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string()}),
                handler: project,
            },
        

             'bitbucket.project_branching_model/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string()}),
                handler: project_branching_model,
            },
        

             'bitbucket.branching_model_settings/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string()}),
                handler: branching_model_settings,
            },
        

             'bitbucket.paginated_default_reviewer_and_type/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string()}),
                handler: paginated_default_reviewer_and_type,
            },
        

             'bitbucket.user/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string(),
selected_user: z.string()}),
                handler: user,
            },
        

             'bitbucket.paginated_project_deploy_keys/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string()}),
                handler: paginated_project_deploy_keys,
            },
        

             'bitbucket.project_deploy_key/sync': {
                schema: z.object({
                  workspace: z.string(),
project_key: z.string(),
key_id: z.string()}),
                handler: project_deploy_key,
            },
        

             'bitbucket.searchWorkspace/sync': {
                schema: z.object({
                  'workspace': z.string(),
'search_query': z.string(),
'page': z.number(),
'pagelen': z.number(),
workspace: z.string()}),
                handler: searchWorkspace,
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
        SERVER: `https://bitbucket.org`,
        AUTHORIZATION_ENDPOINT: '/site/oauth2/authorize',
        TOKEN_ENDPOINT: '/site/oauth2/access_token',
        SCOPES: [],
      },
    });
  }
}
    
    