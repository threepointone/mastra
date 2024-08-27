
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { getAttachmentsForObject } from './events/getAttachmentsForObject'
import { getEvents } from './events/getEvents'
import { getGoalRelationships } from './events/getGoalRelationships'
import { getGoals } from './events/getGoals'
import { getParentGoalsForGoal } from './events/getParentGoalsForGoal'
import { getPortfolioMemberships } from './events/getPortfolioMemberships'
import { getPortfolios } from './events/getPortfolios'
import { getCustomFieldSettingsForPortfolio } from './events/getCustomFieldSettingsForPortfolio'
import { getItemsForPortfolio } from './events/getItemsForPortfolio'
import { getPortfolioMembershipsForPortfolio } from './events/getPortfolioMembershipsForPortfolio'
import { getProjectTemplates } from './events/getProjectTemplates'
import { getProjects } from './events/getProjects'
import { getCustomFieldSettingsForProject } from './events/getCustomFieldSettingsForProject'
import { getProjectMembershipsForProject } from './events/getProjectMembershipsForProject'
import { getProjectStatusesForProject } from './events/getProjectStatusesForProject'
import { getSectionsForProject } from './events/getSectionsForProject'
import { getTasksForProject } from './events/getTasksForProject'
import { getTasksForSection } from './events/getTasksForSection'
import { getStatusesForObject } from './events/getStatusesForObject'
import { getTags } from './events/getTags'
import { getTasksForTag } from './events/getTasksForTag'
import { getTasks } from './events/getTasks'
import { getDependenciesForTask } from './events/getDependenciesForTask'
import { getDependentsForTask } from './events/getDependentsForTask'
import { getProjectsForTask } from './events/getProjectsForTask'
import { getSubtasksForTask } from './events/getSubtasksForTask'
import { getTagsForTask } from './events/getTagsForTask'
import { getTeamMemberships } from './events/getTeamMemberships'
import { getProjectTemplatesForTeam } from './events/getProjectTemplatesForTeam'
import { getProjectsForTeam } from './events/getProjectsForTeam'
import { getTeamMembershipsForTeam } from './events/getTeamMembershipsForTeam'
import { getUsersForTeam } from './events/getUsersForTeam'
import { getTimePeriods } from './events/getTimePeriods'
import { getTasksForUserTaskList } from './events/getTasksForUserTaskList'
import { getUsers } from './events/getUsers'
import { getFavoritesForUser } from './events/getFavoritesForUser'
import { getTeamMembershipsForUser } from './events/getTeamMembershipsForUser'
import { getTeamsForUser } from './events/getTeamsForUser'
import { getWorkspaceMembershipsForUser } from './events/getWorkspaceMembershipsForUser'
import { getWebhooks } from './events/getWebhooks'
import { getWorkspaces } from './events/getWorkspaces'
import { getAuditLogEvents } from './events/getAuditLogEvents'
import { getCustomFieldsForWorkspace } from './events/getCustomFieldsForWorkspace'
import { getProjectsForWorkspace } from './events/getProjectsForWorkspace'
import { getTagsForWorkspace } from './events/getTagsForWorkspace'
import { searchTasksForWorkspace } from './events/searchTasksForWorkspace'
import { getTeamsForWorkspace } from './events/getTeamsForWorkspace'
import { typeaheadForWorkspace } from './events/typeaheadForWorkspace'
import { getUsersForWorkspace } from './events/getUsersForWorkspace'
import { getWorkspaceMembershipsForWorkspace } from './events/getWorkspaceMembershipsForWorkspace'

type AsanaConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class AsanaIntegration extends Integration {
  config: AsanaConfig;

  constructor({ config }: { config: AsanaConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'ASANA',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'asana.AttachmentsForObject/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
parent: z.string()}),
                handler: getAttachmentsForObject,
            },
        

             'asana.Events/sync': {
                schema: z.object({}),
                handler: getEvents,
            },
        

             'asana.GoalRelationships/sync': {
                schema: z.object({
                  pretty: z.string(),
fields: z.string(),
supported_goal: z.string(),
resource_subtype: z.string()}),
                handler: getGoalRelationships,
            },
        

             'asana.Goals/sync': {
                schema: z.object({
                  portfolio: z.string(),
project: z.string(),
is_workspace_level: z.boolean(),
team: z.string(),
workspace: z.string(),
time_periods: z.string()}),
                handler: getGoals,
            },
        

             'asana.ParentGoalsForGoal/sync': {
                schema: z.object({
                  goal_gid: z.string()}),
                handler: getParentGoalsForGoal,
            },
        

             'asana.PortfolioMemberships/sync': {
                schema: z.object({}),
                handler: getPortfolioMemberships,
            },
        

             'asana.Portfolios/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
workspace: z.string(),
owner: z.string()}),
                handler: getPortfolios,
            },
        

             'asana.CustomFieldSettingsForPortfolio/sync': {
                schema: z.object({
                  portfolio_gid: z.string()}),
                handler: getCustomFieldSettingsForPortfolio,
            },
        

             'asana.ItemsForPortfolio/sync': {
                schema: z.object({
                  portfolio_gid: z.string()}),
                handler: getItemsForPortfolio,
            },
        

             'asana.PortfolioMembershipsForPortfolio/sync': {
                schema: z.object({
                  portfolio_gid: z.string()}),
                handler: getPortfolioMembershipsForPortfolio,
            },
        

             'asana.ProjectTemplates/sync': {
                schema: z.object({
                  workspace_query_param: z.string(),
team_query_param: z.string(),
limit: z.string(),
offset: z.string()}),
                handler: getProjectTemplates,
            },
        

             'asana.Projects/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
workspace: z.string(),
team: z.string(),
archived_query_param: z.string()}),
                handler: getProjects,
            },
        

             'asana.CustomFieldSettingsForProject/sync': {
                schema: z.object({
                  project_gid: z.string()}),
                handler: getCustomFieldSettingsForProject,
            },
        

             'asana.ProjectMembershipsForProject/sync': {
                schema: z.object({
                  project_gid: z.string()}),
                handler: getProjectMembershipsForProject,
            },
        

             'asana.ProjectStatusesForProject/sync': {
                schema: z.object({
                  project_path_gid: z.string(),
pretty: z.string(),
fields: z.string(),
limit: z.string(),
offset: z.string(),
project_gid: z.string()}),
                handler: getProjectStatusesForProject,
            },
        

             'asana.SectionsForProject/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
project_gid: z.string()}),
                handler: getSectionsForProject,
            },
        

             'asana.TasksForProject/sync': {
                schema: z.object({
                  project_gid: z.string()}),
                handler: getTasksForProject,
            },
        

             'asana.TasksForSection/sync': {
                schema: z.object({
                  section_gid: z.string()}),
                handler: getTasksForSection,
            },
        

             'asana.StatusesForObject/sync': {
                schema: z.object({
                  parent: z.string(),
created_since: z.string()}),
                handler: getStatusesForObject,
            },
        

             'asana.Tags/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
workspace: z.string()}),
                handler: getTags,
            },
        

             'asana.TasksForTag/sync': {
                schema: z.object({
                  tag_gid: z.string()}),
                handler: getTasksForTag,
            },
        

             'asana.Tasks/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
assignee: z.string(),
project: z.string(),
section: z.string(),
workspace: z.string(),
completed_since: z.string(),
modified_since: z.string()}),
                handler: getTasks,
            },
        

             'asana.DependenciesForTask/sync': {
                schema: z.object({
                  task_gid: z.string()}),
                handler: getDependenciesForTask,
            },
        

             'asana.DependentsForTask/sync': {
                schema: z.object({
                  task_gid: z.string()}),
                handler: getDependentsForTask,
            },
        

             'asana.ProjectsForTask/sync': {
                schema: z.object({
                  task_gid: z.string()}),
                handler: getProjectsForTask,
            },
        

             'asana.SubtasksForTask/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
task_gid: z.string()}),
                handler: getSubtasksForTask,
            },
        

             'asana.TagsForTask/sync': {
                schema: z.object({
                  task_gid: z.string()}),
                handler: getTagsForTask,
            },
        

             'asana.TeamMemberships/sync': {
                schema: z.object({
                  team: z.string(),
user: z.string(),
workspace: z.string()}),
                handler: getTeamMemberships,
            },
        

             'asana.ProjectTemplatesForTeam/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
team_gid: z.string()}),
                handler: getProjectTemplatesForTeam,
            },
        

             'asana.ProjectsForTeam/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
archived_query_param: z.string(),
team_gid: z.string()}),
                handler: getProjectsForTeam,
            },
        

             'asana.TeamMembershipsForTeam/sync': {
                schema: z.object({
                  team_gid: z.string()}),
                handler: getTeamMembershipsForTeam,
            },
        

             'asana.UsersForTeam/sync': {
                schema: z.object({
                  team_gid: z.string()}),
                handler: getUsersForTeam,
            },
        

             'asana.TimePeriods/sync': {
                schema: z.object({
                  start_on: z.string(),
end_on: z.string(),
workspace: z.string()}),
                handler: getTimePeriods,
            },
        

             'asana.TasksForUserTaskList/sync': {
                schema: z.object({
                  user_task_list_gid: z.string()}),
                handler: getTasksForUserTaskList,
            },
        

             'asana.Users/sync': {
                schema: z.object({}),
                handler: getUsers,
            },
        

             'asana.FavoritesForUser/sync': {
                schema: z.object({
                  user_gid: z.string()}),
                handler: getFavoritesForUser,
            },
        

             'asana.TeamMembershipsForUser/sync': {
                schema: z.object({
                  workspace: z.string(),
user_gid: z.string()}),
                handler: getTeamMembershipsForUser,
            },
        

             'asana.TeamsForUser/sync': {
                schema: z.object({
                  user_gid: z.string()}),
                handler: getTeamsForUser,
            },
        

             'asana.WorkspaceMembershipsForUser/sync': {
                schema: z.object({
                  user_gid: z.string()}),
                handler: getWorkspaceMembershipsForUser,
            },
        

             'asana.Webhooks/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
workspace: z.string(),
resource: z.string()}),
                handler: getWebhooks,
            },
        

             'asana.Workspaces/sync': {
                schema: z.object({}),
                handler: getWorkspaces,
            },
        

             'asana.AuditLogEvents/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: getAuditLogEvents,
            },
        

             'asana.CustomFieldsForWorkspace/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: getCustomFieldsForWorkspace,
            },
        

             'asana.ProjectsForWorkspace/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
archived_query_param: z.string(),
workspace_gid: z.string()}),
                handler: getProjectsForWorkspace,
            },
        

             'asana.TagsForWorkspace/sync': {
                schema: z.object({
                  limit: z.string(),
offset: z.string(),
workspace_gid: z.string()}),
                handler: getTagsForWorkspace,
            },
        

             'asana.searchTasksForWorkspace/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: searchTasksForWorkspace,
            },
        

             'asana.TeamsForWorkspace/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: getTeamsForWorkspace,
            },
        

             'asana.typeaheadForWorkspace/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: typeaheadForWorkspace,
            },
        

             'asana.UsersForWorkspace/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: getUsersForWorkspace,
            },
        

             'asana.WorkspaceMembershipsForWorkspace/sync': {
                schema: z.object({
                  workspace_gid: z.string()}),
                handler: getWorkspaceMembershipsForWorkspace,
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
        SERVER: `https://app.asana.com`,
        AUTHORIZATION_ENDPOINT: '/-/oauth_authorize',
        TOKEN_ENDPOINT: '/-/oauth_token',
        SCOPES: [],
      },
    });
  }
}
    
    