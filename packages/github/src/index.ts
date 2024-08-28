
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { metaroot } from './events/metaroot'
import { apps-authenticated } from './events/apps-authenticated'
import { apps-webhook-config-for-app } from './events/apps-webhook-config-for-app'
import { apps-webhook-delivery } from './events/apps-webhook-delivery'
import { apps-installation } from './events/apps-installation'
import { apps-by-slug } from './events/apps-by-slug'
import { codes-of-conduct-conduct-code } from './events/codes-of-conduct-conduct-code'
import { activity-feeds } from './events/activity-feeds'
import { gists } from './events/gists'
import { gists-comment } from './events/gists-comment'
import { gists-revision } from './events/gists-revision'
import { gitignore-template } from './events/gitignore-template'
import { licenses } from './events/licenses'
import { apps-subscription-plan-for-account } from './events/apps-subscription-plan-for-account'
import { apps-subscription-plan-for-account-stubbed } from './events/apps-subscription-plan-for-account-stubbed'
import { meta } from './events/meta'
import { activity-thread } from './events/activity-thread'
import { activity-thread-subscription-for-authenticated-user } from './events/activity-thread-subscription-for-authenticated-user'
import { orgs } from './events/orgs'
import { actions-actions-cache-usage-for-org } from './events/actions-actions-cache-usage-for-org'
import { oidc-oidc-custom-sub-template-for-org } from './events/oidc-oidc-custom-sub-template-for-org'
import { actions-github-actions-permissions-organization } from './events/actions-github-actions-permissions-organization'
import { actions-allowed-actions-organization } from './events/actions-allowed-actions-organization'
import { actions-github-actions-default-workflow-permissions-organization } from './events/actions-github-actions-default-workflow-permissions-organization'
import { actions-required-workflow } from './events/actions-required-workflow'
import { actions-self-hosted-runner-for-org } from './events/actions-self-hosted-runner-for-org'
import { actionslist-labels-for-self-hosted-runner-for-org } from './events/actionslist-labels-for-self-hosted-runner-for-org'
import { actions-org-public-key } from './events/actions-org-public-key'
import { actions-org-secret } from './events/actions-org-secret'
import { actions-org-variable } from './events/actions-org-variable'
import { codespaces-org-public-key } from './events/codespaces-org-public-key'
import { codespaces-org-secret } from './events/codespaces-org-secret'
import { dependabot-org-public-key } from './events/dependabot-org-public-key'
import { dependabot-org-secret } from './events/dependabot-org-secret'
import { orgs-webhook } from './events/orgs-webhook'
import { orgs-webhook-config-for-org } from './events/orgs-webhook-config-for-org'
import { orgs-webhook-delivery } from './events/orgs-webhook-delivery'
import { apps-org-installation } from './events/apps-org-installation'
import { orgs-membership-for-user } from './events/orgs-membership-for-user'
import { migrations-status-for-org } from './events/migrations-status-for-org'
import { packages-package-for-organization } from './events/packages-package-for-organization'
import { packages-package-version-for-organization } from './events/packages-package-version-for-organization'
import { billing-github-actions-billing-org } from './events/billing-github-actions-billing-org'
import { billing-github-packages-billing-org } from './events/billing-github-packages-billing-org'
import { billing-shared-storage-billing-org } from './events/billing-shared-storage-billing-org'
import { teams-by-name } from './events/teams-by-name'
import { teams-discussion-in-org } from './events/teams-discussion-in-org'
import { teams-discussion-comment-in-org } from './events/teams-discussion-comment-in-org'
import { teams-membership-for-user-in-org } from './events/teams-membership-for-user-in-org'
import { teamscheck-permissions-for-project-in-org } from './events/teamscheck-permissions-for-project-in-org'
import { teamscheck-permissions-for-repo-in-org } from './events/teamscheck-permissions-for-repo-in-org'
import { projects-card } from './events/projects-card'
import { projects-column } from './events/projects-column'
import { projects } from './events/projects'
import { projects-permission-for-user } from './events/projects-permission-for-user'
import { rate-limit } from './events/rate-limit'
import { actions-repo-required-workflow } from './events/actions-repo-required-workflow'
import { actions-repo-required-workflow-usage } from './events/actions-repo-required-workflow-usage'
import { repos } from './events/repos'
import { actions-artifact } from './events/actions-artifact'
import { actions-actions-cache-usage } from './events/actions-actions-cache-usage'
import { actions-actions-cache-list } from './events/actions-actions-cache-list'
import { actions-job-for-workflow-run } from './events/actions-job-for-workflow-run'
import { actions-custom-oidc-sub-claim-for-repo } from './events/actions-custom-oidc-sub-claim-for-repo'
import { actions-github-actions-permissions-repository } from './events/actions-github-actions-permissions-repository'
import { actions-workflow-access-to-repository } from './events/actions-workflow-access-to-repository'
import { actions-allowed-actions-repository } from './events/actions-allowed-actions-repository'
import { actions-github-actions-default-workflow-permissions-repository } from './events/actions-github-actions-default-workflow-permissions-repository'
import { actions-self-hosted-runner-for-repo } from './events/actions-self-hosted-runner-for-repo'
import { actionslist-labels-for-self-hosted-runner-for-repo } from './events/actionslist-labels-for-self-hosted-runner-for-repo'
import { actions-workflow-run } from './events/actions-workflow-run'
import { actions-workflow-run-attempt } from './events/actions-workflow-run-attempt'
import { actions-workflow-run-usage } from './events/actions-workflow-run-usage'
import { actions-repo-public-key } from './events/actions-repo-public-key'
import { actions-repo-secret } from './events/actions-repo-secret'
import { actions-repo-variable } from './events/actions-repo-variable'
import { actions-workflow } from './events/actions-workflow'
import { actions-workflow-usage } from './events/actions-workflow-usage'
import { repos-autolink } from './events/repos-autolink'
import { repos-branch } from './events/repos-branch'
import { repos-branch-protection } from './events/repos-branch-protection'
import { repos-admin-branch-protection } from './events/repos-admin-branch-protection'
import { repos-pull-request-review-protection } from './events/repos-pull-request-review-protection'
import { repos-commit-signature-protection } from './events/repos-commit-signature-protection'
import { repos-status-checks-protection } from './events/repos-status-checks-protection'
import { repos-access-restrictions } from './events/repos-access-restrictions'
import { checks } from './events/checks'
import { checks-suite } from './events/checks-suite'
import { code-scanning-alert } from './events/code-scanning-alert'
import { code-scanning-analysis } from './events/code-scanning-analysis'
import { code-scanning-codeql-database } from './events/code-scanning-codeql-database'
import { code-scanning-sarif } from './events/code-scanning-sarif'
import { reposcodeowners-errors } from './events/reposcodeowners-errors'
import { codespaces-repo-public-key } from './events/codespaces-repo-public-key'
import { codespaces-repo-secret } from './events/codespaces-repo-secret'
import { repos-collaborator-permission-level } from './events/repos-collaborator-permission-level'
import { repos-commit-comment } from './events/repos-commit-comment'
import { repos-commit } from './events/repos-commit'
import { repos-combined-status-for-ref } from './events/repos-combined-status-for-ref'
import { repos-community-profile-metrics } from './events/repos-community-profile-metrics'
import { reposcompare-commits } from './events/reposcompare-commits'
import { dependabot-alert } from './events/dependabot-alert'
import { dependabot-repo-public-key } from './events/dependabot-repo-public-key'
import { dependabot-repo-secret } from './events/dependabot-repo-secret'
import { dependency-graphdiff-range } from './events/dependency-graphdiff-range'
import { repos-deployment } from './events/repos-deployment'
import { repos-deployment-status } from './events/repos-deployment-status'
import { repos-environment } from './events/repos-environment'
import { repos-deployment-branch-policy } from './events/repos-deployment-branch-policy'
import { git-blob } from './events/git-blob'
import { git-commit } from './events/git-commit'
import { git-ref } from './events/git-ref'
import { git-tag } from './events/git-tag'
import { git-tree } from './events/git-tree'
import { repos-webhook } from './events/repos-webhook'
import { repos-webhook-config-for-repo } from './events/repos-webhook-config-for-repo'
import { repos-webhook-delivery } from './events/repos-webhook-delivery'
import { migrations-import-status } from './events/migrations-import-status'
import { apps-repo-installation } from './events/apps-repo-installation'
import { issues-comment } from './events/issues-comment'
import { issues-event } from './events/issues-event'
import { issues } from './events/issues'
import { repos-deploy-key } from './events/repos-deploy-key'
import { issues-label } from './events/issues-label'
import { reposlist-languages } from './events/reposlist-languages'
import { licenses-for-repo } from './events/licenses-for-repo'
import { issues-milestone } from './events/issues-milestone'
import { repos-pages } from './events/repos-pages'
import { repos-latest-pages-build } from './events/repos-latest-pages-build'
import { repos-pages-build } from './events/repos-pages-build'
import { repos-pages-health-check } from './events/repos-pages-health-check'
import { pulls-review-comment } from './events/pulls-review-comment'
import { pulls } from './events/pulls'
import { pullslist-requested-reviewers } from './events/pullslist-requested-reviewers'
import { pulls-review } from './events/pulls-review'
import { repos-readme } from './events/repos-readme'
import { repos-readme-in-directory } from './events/repos-readme-in-directory'
import { repos-release-asset } from './events/repos-release-asset'
import { repos-latest-release } from './events/repos-latest-release'
import { repos-release-by-tag } from './events/repos-release-by-tag'
import { repos-release } from './events/repos-release'
import { secret-scanning-alert } from './events/secret-scanning-alert'
import { repos-participation-stats } from './events/repos-participation-stats'
import { activity-repo-subscription } from './events/activity-repo-subscription'
import { repos-all-topics } from './events/repos-all-topics'
import { repos-clones } from './events/repos-clones'
import { repos-views } from './events/repos-views'
import { actions-environment-public-key } from './events/actions-environment-public-key'
import { actions-environment-secret } from './events/actions-environment-secret'
import { actions-environment-variable } from './events/actions-environment-variable'
import { teams-legacy } from './events/teams-legacy'
import { teams-discussion-legacy } from './events/teams-discussion-legacy'
import { teams-discussion-comment-legacy } from './events/teams-discussion-comment-legacy'
import { teams-membership-for-user-legacy } from './events/teams-membership-for-user-legacy'
import { teamscheck-permissions-for-project-legacy } from './events/teamscheck-permissions-for-project-legacy'
import { teamscheck-permissions-for-repo-legacy } from './events/teamscheck-permissions-for-repo-legacy'
import { codespaces-public-key-for-authenticated-user } from './events/codespaces-public-key-for-authenticated-user'
import { codespaces-secret-for-authenticated-user } from './events/codespaces-secret-for-authenticated-user'
import { codespaces-for-authenticated-user } from './events/codespaces-for-authenticated-user'
import { codespaces-export-details-for-authenticated-user } from './events/codespaces-export-details-for-authenticated-user'
import { users-gpg-key-for-authenticated-user } from './events/users-gpg-key-for-authenticated-user'
import { users-public-ssh-key-for-authenticated-user } from './events/users-public-ssh-key-for-authenticated-user'
import { orgs-membership-for-authenticated-user } from './events/orgs-membership-for-authenticated-user'
import { migrations-status-for-authenticated-user } from './events/migrations-status-for-authenticated-user'
import { packages-package-for-authenticated-user } from './events/packages-package-for-authenticated-user'
import { packages-package-version-for-authenticated-user } from './events/packages-package-version-for-authenticated-user'
import { users-ssh-signing-key-for-authenticated-user } from './events/users-ssh-signing-key-for-authenticated-user'
import { users-context-for-user } from './events/users-context-for-user'
import { apps-user-installation } from './events/apps-user-installation'
import { packages-package-for-user } from './events/packages-package-for-user'
import { packages-package-version-for-user } from './events/packages-package-version-for-user'
import { billing-github-actions-billing-user } from './events/billing-github-actions-billing-user'
import { billing-github-packages-billing-user } from './events/billing-github-packages-billing-user'
import { billing-shared-storage-billing-user } from './events/billing-shared-storage-billing-user'

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
        

             'github.apps-authenticated/sync': {
                schema: z.object({}),
                handler: apps-authenticated,
            },
        

             'github.apps-webhook-config-for-app/sync': {
                schema: z.object({}),
                handler: apps-webhook-config-for-app,
            },
        

             'github.apps-webhook-delivery/sync': {
                schema: z.object({
                  'delivery_id': z.string(),
'delivery-id': z.string()}),
                handler: apps-webhook-delivery,
            },
        

             'github.apps-installation/sync': {
                schema: z.object({
                  'installation_id': z.string(),
'installation-id': z.string()}),
                handler: apps-installation,
            },
        

             'github.apps-by-slug/sync': {
                schema: z.object({
                  'app_slug': z.string(),
'app-slug': z.string()}),
                handler: apps-by-slug,
            },
        

             'github.codes-of-conduct-conduct-code/sync': {
                schema: z.object({
                  'key': z.string()}),
                handler: codes-of-conduct-conduct-code,
            },
        

             'github.activity-feeds/sync': {
                schema: z.object({}),
                handler: activity-feeds,
            },
        

             'github.gists/sync': {
                schema: z.object({
                  'gist_id': z.string(),
'gist-id': z.string()}),
                handler: gists,
            },
        

             'github.gists-comment/sync': {
                schema: z.object({
                  'gist_id': z.string(),
'comment_id': z.string(),
'gist-id': z.string(),
'comment-id': z.string()}),
                handler: gists-comment,
            },
        

             'github.gists-revision/sync': {
                schema: z.object({
                  'gist_id': z.string(),
'sha': z.string(),
'gist-id': z.string()}),
                handler: gists-revision,
            },
        

             'github.gitignore-template/sync': {
                schema: z.object({
                  'name': z.string()}),
                handler: gitignore-template,
            },
        

             'github.licenses/sync': {
                schema: z.object({
                  'license': z.string()}),
                handler: licenses,
            },
        

             'github.apps-subscription-plan-for-account/sync': {
                schema: z.object({
                  'account_id': z.string(),
'account-id': z.string()}),
                handler: apps-subscription-plan-for-account,
            },
        

             'github.apps-subscription-plan-for-account-stubbed/sync': {
                schema: z.object({
                  'account_id': z.string(),
'account-id': z.string()}),
                handler: apps-subscription-plan-for-account-stubbed,
            },
        

             'github.meta/sync': {
                schema: z.object({}),
                handler: meta,
            },
        

             'github.activity-thread/sync': {
                schema: z.object({
                  'thread_id': z.string(),
'thread-id': z.string()}),
                handler: activity-thread,
            },
        

             'github.activity-thread-subscription-for-authenticated-user/sync': {
                schema: z.object({
                  'thread_id': z.string(),
'thread-id': z.string()}),
                handler: activity-thread-subscription-for-authenticated-user,
            },
        

             'github.orgs/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: orgs,
            },
        

             'github.actions-actions-cache-usage-for-org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions-actions-cache-usage-for-org,
            },
        

             'github.oidc-oidc-custom-sub-template-for-org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: oidc-oidc-custom-sub-template-for-org,
            },
        

             'github.actions-github-actions-permissions-organization/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions-github-actions-permissions-organization,
            },
        

             'github.actions-allowed-actions-organization/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions-allowed-actions-organization,
            },
        

             'github.actions-github-actions-default-workflow-permissions-organization/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions-github-actions-default-workflow-permissions-organization,
            },
        

             'github.actions-required-workflow/sync': {
                schema: z.object({
                  'org': z.string(),
'required_workflow_id': z.string(),
'required-workflow-id': z.string()}),
                handler: actions-required-workflow,
            },
        

             'github.actions-self-hosted-runner-for-org/sync': {
                schema: z.object({
                  'org': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actions-self-hosted-runner-for-org,
            },
        

             'github.actionslist-labels-for-self-hosted-runner-for-org/sync': {
                schema: z.object({
                  'org': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actionslist-labels-for-self-hosted-runner-for-org,
            },
        

             'github.actions-org-public-key/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: actions-org-public-key,
            },
        

             'github.actions-org-secret/sync': {
                schema: z.object({
                  'org': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: actions-org-secret,
            },
        

             'github.actions-org-variable/sync': {
                schema: z.object({
                  'org': z.string(),
'name': z.string(),
'variable-name': z.string()}),
                handler: actions-org-variable,
            },
        

             'github.codespaces-org-public-key/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: codespaces-org-public-key,
            },
        

             'github.codespaces-org-secret/sync': {
                schema: z.object({
                  'org': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: codespaces-org-secret,
            },
        

             'github.dependabot-org-public-key/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: dependabot-org-public-key,
            },
        

             'github.dependabot-org-secret/sync': {
                schema: z.object({
                  'org': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: dependabot-org-secret,
            },
        

             'github.orgs-webhook/sync': {
                schema: z.object({
                  'org': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: orgs-webhook,
            },
        

             'github.orgs-webhook-config-for-org/sync': {
                schema: z.object({
                  'org': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: orgs-webhook-config-for-org,
            },
        

             'github.orgs-webhook-delivery/sync': {
                schema: z.object({
                  'org': z.string(),
'hook_id': z.string(),
'delivery_id': z.string(),
'hook-id': z.string(),
'delivery-id': z.string()}),
                handler: orgs-webhook-delivery,
            },
        

             'github.apps-org-installation/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: apps-org-installation,
            },
        

             'github.orgs-membership-for-user/sync': {
                schema: z.object({
                  'org': z.string(),
'username': z.string()}),
                handler: orgs-membership-for-user,
            },
        

             'github.migrations-status-for-org/sync': {
                schema: z.object({
                  'org': z.string(),
'migration_id': z.string(),
'migration-id': z.string(),
'exclude': z.string()}),
                handler: migrations-status-for-org,
            },
        

             'github.packages-package-for-organization/sync': {
                schema: z.object({
                  'org': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package-type': z.string(),
'package-name': z.string()}),
                handler: packages-package-for-organization,
            },
        

             'github.packages-package-version-for-organization/sync': {
                schema: z.object({
                  'org': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package_version_id': z.string(),
'package-type': z.string(),
'package-name': z.string(),
'package-version-id': z.string()}),
                handler: packages-package-version-for-organization,
            },
        

             'github.billing-github-actions-billing-org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: billing-github-actions-billing-org,
            },
        

             'github.billing-github-packages-billing-org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: billing-github-packages-billing-org,
            },
        

             'github.billing-shared-storage-billing-org/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: billing-shared-storage-billing-org,
            },
        

             'github.teams-by-name/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'team-slug': z.string()}),
                handler: teams-by-name,
            },
        

             'github.teams-discussion-in-org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'discussion_number': z.string(),
'team-slug': z.string(),
'discussion-number': z.string()}),
                handler: teams-discussion-in-org,
            },
        

             'github.teams-discussion-comment-in-org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'discussion_number': z.string(),
'comment_number': z.string(),
'team-slug': z.string(),
'discussion-number': z.string(),
'comment-number': z.string()}),
                handler: teams-discussion-comment-in-org,
            },
        

             'github.teams-membership-for-user-in-org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'username': z.string(),
'team-slug': z.string()}),
                handler: teams-membership-for-user-in-org,
            },
        

             'github.teamscheck-permissions-for-project-in-org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'project_id': z.string(),
'team-slug': z.string(),
'project-id': z.string()}),
                handler: teamscheck-permissions-for-project-in-org,
            },
        

             'github.teamscheck-permissions-for-repo-in-org/sync': {
                schema: z.object({
                  'org': z.string(),
'team_slug': z.string(),
'owner': z.string(),
'repo': z.string(),
'team-slug': z.string()}),
                handler: teamscheck-permissions-for-repo-in-org,
            },
        

             'github.projects-card/sync': {
                schema: z.object({
                  'card_id': z.string(),
'card-id': z.string()}),
                handler: projects-card,
            },
        

             'github.projects-column/sync': {
                schema: z.object({
                  'column_id': z.string(),
'column-id': z.string()}),
                handler: projects-column,
            },
        

             'github.projects/sync': {
                schema: z.object({
                  'project_id': z.string(),
'project-id': z.string()}),
                handler: projects,
            },
        

             'github.projects-permission-for-user/sync': {
                schema: z.object({
                  'project_id': z.string(),
'username': z.string(),
'project-id': z.string()}),
                handler: projects-permission-for-user,
            },
        

             'github.rate-limit/sync': {
                schema: z.object({}),
                handler: rate-limit,
            },
        

             'github.actions-repo-required-workflow/sync': {
                schema: z.object({
                  'org': z.string(),
'repo': z.string(),
'required_workflow_id_for_repo': z.string(),
'repo-required-workflow-id': z.string()}),
                handler: actions-repo-required-workflow,
            },
        

             'github.actions-repo-required-workflow-usage/sync': {
                schema: z.object({
                  'org': z.string(),
'repo': z.string(),
'required_workflow_id_for_repo': z.string(),
'repo-required-workflow-id': z.string()}),
                handler: actions-repo-required-workflow-usage,
            },
        

             'github.repos/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos,
            },
        

             'github.actions-artifact/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'artifact_id': z.string(),
'artifact-id': z.string()}),
                handler: actions-artifact,
            },
        

             'github.actions-actions-cache-usage/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-actions-cache-usage,
            },
        

             'github.actions-actions-cache-list/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'per-page': z.string(),
'page': z.string(),
'git-ref': z.string(),
'actions-cache-key': z.string(),
'actions-cache-list-sort': z.string(),
'direction': z.string()}),
                handler: actions-actions-cache-list,
            },
        

             'github.actions-job-for-workflow-run/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'job_id': z.string(),
'job-id': z.string()}),
                handler: actions-job-for-workflow-run,
            },
        

             'github.actions-custom-oidc-sub-claim-for-repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-custom-oidc-sub-claim-for-repo,
            },
        

             'github.actions-github-actions-permissions-repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-github-actions-permissions-repository,
            },
        

             'github.actions-workflow-access-to-repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-workflow-access-to-repository,
            },
        

             'github.actions-allowed-actions-repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-allowed-actions-repository,
            },
        

             'github.actions-github-actions-default-workflow-permissions-repository/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-github-actions-default-workflow-permissions-repository,
            },
        

             'github.actions-self-hosted-runner-for-repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actions-self-hosted-runner-for-repo,
            },
        

             'github.actionslist-labels-for-self-hosted-runner-for-repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'runner_id': z.string(),
'runner-id': z.string()}),
                handler: actionslist-labels-for-self-hosted-runner-for-repo,
            },
        

             'github.actions-workflow-run/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'run_id': z.string(),
'run-id': z.string(),
'exclude-pull-requests': z.string()}),
                handler: actions-workflow-run,
            },
        

             'github.actions-workflow-run-attempt/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'run_id': z.string(),
'attempt_number': z.string(),
'run-id': z.string(),
'attempt-number': z.string(),
'exclude-pull-requests': z.string()}),
                handler: actions-workflow-run-attempt,
            },
        

             'github.actions-workflow-run-usage/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'run_id': z.string(),
'run-id': z.string()}),
                handler: actions-workflow-run-usage,
            },
        

             'github.actions-repo-public-key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: actions-repo-public-key,
            },
        

             'github.actions-repo-secret/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: actions-repo-secret,
            },
        

             'github.actions-repo-variable/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'name': z.string(),
'variable-name': z.string()}),
                handler: actions-repo-variable,
            },
        

             'github.actions-workflow/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'workflow_id': z.string(),
'workflow-id': z.string()}),
                handler: actions-workflow,
            },
        

             'github.actions-workflow-usage/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'workflow_id': z.string(),
'workflow-id': z.string()}),
                handler: actions-workflow-usage,
            },
        

             'github.repos-autolink/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'autolink_id': z.string(),
'autolink-id': z.string()}),
                handler: repos-autolink,
            },
        

             'github.repos-branch/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-branch,
            },
        

             'github.repos-branch-protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-branch-protection,
            },
        

             'github.repos-admin-branch-protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-admin-branch-protection,
            },
        

             'github.repos-pull-request-review-protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-pull-request-review-protection,
            },
        

             'github.repos-commit-signature-protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-commit-signature-protection,
            },
        

             'github.repos-status-checks-protection/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-status-checks-protection,
            },
        

             'github.repos-access-restrictions/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'branch': z.string()}),
                handler: repos-access-restrictions,
            },
        

             'github.checks/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'check_run_id': z.string(),
'check-run-id': z.string()}),
                handler: checks,
            },
        

             'github.checks-suite/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'check_suite_id': z.string(),
'check-suite-id': z.string()}),
                handler: checks-suite,
            },
        

             'github.code-scanning-alert/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'alert_number': z.string(),
'alert-number': z.string()}),
                handler: code-scanning-alert,
            },
        

             'github.code-scanning-analysis/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'analysis_id': z.string(),
'analysis_id': z.number()}),
                handler: code-scanning-analysis,
            },
        

             'github.code-scanning-codeql-database/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'language': z.string()}),
                handler: code-scanning-codeql-database,
            },
        

             'github.code-scanning-sarif/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'sarif_id': z.string()}),
                handler: code-scanning-sarif,
            },
        

             'github.reposcodeowners-errors/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string()}),
                handler: reposcodeowners-errors,
            },
        

             'github.codespaces-repo-public-key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: codespaces-repo-public-key,
            },
        

             'github.codespaces-repo-secret/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: codespaces-repo-secret,
            },
        

             'github.repos-collaborator-permission-level/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'username': z.string()}),
                handler: repos-collaborator-permission-level,
            },
        

             'github.repos-commit-comment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'comment_id': z.string(),
'comment-id': z.string()}),
                handler: repos-commit-comment,
            },
        

             'github.repos-commit/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string(),
'page': z.string(),
'per-page': z.string()}),
                handler: repos-commit,
            },
        

             'github.repos-combined-status-for-ref/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string(),
'per-page': z.string(),
'page': z.string()}),
                handler: repos-combined-status-for-ref,
            },
        

             'github.repos-community-profile-metrics/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos-community-profile-metrics,
            },
        

             'github.reposcompare-commits/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'basehead': z.string(),
'page': z.string(),
'per-page': z.string()}),
                handler: reposcompare-commits,
            },
        

             'github.dependabot-alert/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'alert_number': z.string(),
'dependabot-alert-number': z.string()}),
                handler: dependabot-alert,
            },
        

             'github.dependabot-repo-public-key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: dependabot-repo-public-key,
            },
        

             'github.dependabot-repo-secret/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'secret_name': z.string(),
'secret-name': z.string()}),
                handler: dependabot-repo-secret,
            },
        

             'github.dependency-graphdiff-range/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'basehead': z.string(),
'manifest-path': z.string()}),
                handler: dependency-graphdiff-range,
            },
        

             'github.repos-deployment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'deployment_id': z.string(),
'deployment-id': z.string()}),
                handler: repos-deployment,
            },
        

             'github.repos-deployment-status/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'deployment_id': z.string(),
'status_id': z.string(),
'deployment-id': z.string(),
'status_id': z.number()}),
                handler: repos-deployment-status,
            },
        

             'github.repos-environment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'environment_name': z.string(),
'environment-name': z.string()}),
                handler: repos-environment,
            },
        

             'github.repos-deployment-branch-policy/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'environment_name': z.string(),
'branch_policy_id': z.string(),
'environment-name': z.string(),
'branch-policy-id': z.string()}),
                handler: repos-deployment-branch-policy,
            },
        

             'github.git-blob/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'file_sha': z.string()}),
                handler: git-blob,
            },
        

             'github.git-commit/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'commit_sha': z.string(),
'commit-sha': z.string()}),
                handler: git-commit,
            },
        

             'github.git-ref/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string()}),
                handler: git-ref,
            },
        

             'github.git-tag/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'tag_sha': z.string()}),
                handler: git-tag,
            },
        

             'github.git-tree/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'tree_sha': z.string(),
'recursive': z.string()}),
                handler: git-tree,
            },
        

             'github.repos-webhook/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: repos-webhook,
            },
        

             'github.repos-webhook-config-for-repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'hook_id': z.string(),
'hook-id': z.string()}),
                handler: repos-webhook-config-for-repo,
            },
        

             'github.repos-webhook-delivery/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'hook_id': z.string(),
'delivery_id': z.string(),
'hook-id': z.string(),
'delivery-id': z.string()}),
                handler: repos-webhook-delivery,
            },
        

             'github.migrations-import-status/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: migrations-import-status,
            },
        

             'github.apps-repo-installation/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: apps-repo-installation,
            },
        

             'github.issues-comment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'comment_id': z.string(),
'comment-id': z.string()}),
                handler: issues-comment,
            },
        

             'github.issues-event/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'event_id': z.string(),
'event_id': z.number()}),
                handler: issues-event,
            },
        

             'github.issues/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'issue_number': z.string(),
'issue-number': z.string()}),
                handler: issues,
            },
        

             'github.repos-deploy-key/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'key_id': z.string(),
'key-id': z.string()}),
                handler: repos-deploy-key,
            },
        

             'github.issues-label/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'name': z.string()}),
                handler: issues-label,
            },
        

             'github.reposlist-languages/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: reposlist-languages,
            },
        

             'github.licenses-for-repo/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: licenses-for-repo,
            },
        

             'github.issues-milestone/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'milestone_number': z.string(),
'milestone-number': z.string()}),
                handler: issues-milestone,
            },
        

             'github.repos-pages/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos-pages,
            },
        

             'github.repos-latest-pages-build/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos-latest-pages-build,
            },
        

             'github.repos-pages-build/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'build_id': z.string(),
'build_id': z.number()}),
                handler: repos-pages-build,
            },
        

             'github.repos-pages-health-check/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos-pages-health-check,
            },
        

             'github.pulls-review-comment/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'comment_id': z.string(),
'comment-id': z.string()}),
                handler: pulls-review-comment,
            },
        

             'github.pulls/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'pull_number': z.string(),
'pull-number': z.string()}),
                handler: pulls,
            },
        

             'github.pullslist-requested-reviewers/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'pull_number': z.string(),
'pull-number': z.string()}),
                handler: pullslist-requested-reviewers,
            },
        

             'github.pulls-review/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'pull_number': z.string(),
'review_id': z.string(),
'pull-number': z.string(),
'review-id': z.string()}),
                handler: pulls-review,
            },
        

             'github.repos-readme/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'ref': z.string()}),
                handler: repos-readme,
            },
        

             'github.repos-readme-in-directory/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'dir': z.string(),
'ref': z.string()}),
                handler: repos-readme-in-directory,
            },
        

             'github.repos-release-asset/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'asset_id': z.string(),
'asset-id': z.string()}),
                handler: repos-release-asset,
            },
        

             'github.repos-latest-release/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos-latest-release,
            },
        

             'github.repos-release-by-tag/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'tag': z.string()}),
                handler: repos-release-by-tag,
            },
        

             'github.repos-release/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'release_id': z.string(),
'release-id': z.string()}),
                handler: repos-release,
            },
        

             'github.secret-scanning-alert/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'alert_number': z.string(),
'alert-number': z.string()}),
                handler: secret-scanning-alert,
            },
        

             'github.repos-participation-stats/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: repos-participation-stats,
            },
        

             'github.activity-repo-subscription/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string()}),
                handler: activity-repo-subscription,
            },
        

             'github.repos-all-topics/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'page': z.string(),
'per-page': z.string()}),
                handler: repos-all-topics,
            },
        

             'github.repos-clones/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'per': z.string()}),
                handler: repos-clones,
            },
        

             'github.repos-views/sync': {
                schema: z.object({
                  'owner': z.string(),
'repo': z.string(),
'per': z.string()}),
                handler: repos-views,
            },
        

             'github.actions-environment-public-key/sync': {
                schema: z.object({
                  'repository_id': z.string(),
'environment_name': z.string(),
'repository-id': z.string(),
'environment-name': z.string()}),
                handler: actions-environment-public-key,
            },
        

             'github.actions-environment-secret/sync': {
                schema: z.object({
                  'repository_id': z.string(),
'environment_name': z.string(),
'secret_name': z.string(),
'repository-id': z.string(),
'environment-name': z.string(),
'secret-name': z.string()}),
                handler: actions-environment-secret,
            },
        

             'github.actions-environment-variable/sync': {
                schema: z.object({
                  'repository_id': z.string(),
'environment_name': z.string(),
'name': z.string(),
'repository-id': z.string(),
'environment-name': z.string(),
'variable-name': z.string()}),
                handler: actions-environment-variable,
            },
        

             'github.teams-legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'team-id': z.string()}),
                handler: teams-legacy,
            },
        

             'github.teams-discussion-legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'discussion_number': z.string(),
'team-id': z.string(),
'discussion-number': z.string()}),
                handler: teams-discussion-legacy,
            },
        

             'github.teams-discussion-comment-legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'discussion_number': z.string(),
'comment_number': z.string(),
'team-id': z.string(),
'discussion-number': z.string(),
'comment-number': z.string()}),
                handler: teams-discussion-comment-legacy,
            },
        

             'github.teams-membership-for-user-legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'username': z.string(),
'team-id': z.string()}),
                handler: teams-membership-for-user-legacy,
            },
        

             'github.teamscheck-permissions-for-project-legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'project_id': z.string(),
'team-id': z.string(),
'project-id': z.string()}),
                handler: teamscheck-permissions-for-project-legacy,
            },
        

             'github.teamscheck-permissions-for-repo-legacy/sync': {
                schema: z.object({
                  'team_id': z.string(),
'owner': z.string(),
'repo': z.string(),
'team-id': z.string()}),
                handler: teamscheck-permissions-for-repo-legacy,
            },
        

             'github.codespaces-public-key-for-authenticated-user/sync': {
                schema: z.object({}),
                handler: codespaces-public-key-for-authenticated-user,
            },
        

             'github.codespaces-secret-for-authenticated-user/sync': {
                schema: z.object({
                  'secret_name': z.string(),
'secret-name': z.string()}),
                handler: codespaces-secret-for-authenticated-user,
            },
        

             'github.codespaces-for-authenticated-user/sync': {
                schema: z.object({
                  'codespace_name': z.string(),
'codespace-name': z.string()}),
                handler: codespaces-for-authenticated-user,
            },
        

             'github.codespaces-export-details-for-authenticated-user/sync': {
                schema: z.object({
                  'codespace_name': z.string(),
'export_id': z.string(),
'codespace-name': z.string(),
'export-id': z.string()}),
                handler: codespaces-export-details-for-authenticated-user,
            },
        

             'github.users-gpg-key-for-authenticated-user/sync': {
                schema: z.object({
                  'gpg_key_id': z.string(),
'gpg-key-id': z.string()}),
                handler: users-gpg-key-for-authenticated-user,
            },
        

             'github.users-public-ssh-key-for-authenticated-user/sync': {
                schema: z.object({
                  'key_id': z.string(),
'key-id': z.string()}),
                handler: users-public-ssh-key-for-authenticated-user,
            },
        

             'github.orgs-membership-for-authenticated-user/sync': {
                schema: z.object({
                  'org': z.string()}),
                handler: orgs-membership-for-authenticated-user,
            },
        

             'github.migrations-status-for-authenticated-user/sync': {
                schema: z.object({
                  'migration_id': z.string(),
'migration-id': z.string(),
'exclude': z.string()}),
                handler: migrations-status-for-authenticated-user,
            },
        

             'github.packages-package-for-authenticated-user/sync': {
                schema: z.object({
                  'package_type': z.string(),
'package_name': z.string(),
'package-type': z.string(),
'package-name': z.string()}),
                handler: packages-package-for-authenticated-user,
            },
        

             'github.packages-package-version-for-authenticated-user/sync': {
                schema: z.object({
                  'package_type': z.string(),
'package_name': z.string(),
'package_version_id': z.string(),
'package-type': z.string(),
'package-name': z.string(),
'package-version-id': z.string()}),
                handler: packages-package-version-for-authenticated-user,
            },
        

             'github.users-ssh-signing-key-for-authenticated-user/sync': {
                schema: z.object({
                  'ssh_signing_key_id': z.string(),
'ssh-signing-key-id': z.string()}),
                handler: users-ssh-signing-key-for-authenticated-user,
            },
        

             'github.users-context-for-user/sync': {
                schema: z.object({
                  'username': z.string(),
'subject_type': z.string(),
'subject_id': z.string()}),
                handler: users-context-for-user,
            },
        

             'github.apps-user-installation/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: apps-user-installation,
            },
        

             'github.packages-package-for-user/sync': {
                schema: z.object({
                  'username': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package-type': z.string(),
'package-name': z.string()}),
                handler: packages-package-for-user,
            },
        

             'github.packages-package-version-for-user/sync': {
                schema: z.object({
                  'username': z.string(),
'package_type': z.string(),
'package_name': z.string(),
'package_version_id': z.string(),
'package-type': z.string(),
'package-name': z.string(),
'package-version-id': z.string()}),
                handler: packages-package-version-for-user,
            },
        

             'github.billing-github-actions-billing-user/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: billing-github-actions-billing-user,
            },
        

             'github.billing-github-packages-billing-user/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: billing-github-packages-billing-user,
            },
        

             'github.billing-shared-storage-billing-user/sync': {
                schema: z.object({
                  'username': z.string()}),
                handler: billing-shared-storage-billing-user,
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

    