import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets';
import { z } from 'zod';

import { getAttachmentsForObject } from './events/getAttachmentsForObject';
import { getAuditLogEvents } from './events/getAuditLogEvents';
import { getCustomFieldSettingsForPortfolio } from './events/getCustomFieldSettingsForPortfolio';
import { getCustomFieldSettingsForProject } from './events/getCustomFieldSettingsForProject';
import { getCustomFieldsForWorkspace } from './events/getCustomFieldsForWorkspace';
import { getDependenciesForTask } from './events/getDependenciesForTask';
import { getDependentsForTask } from './events/getDependentsForTask';
import { getEvents } from './events/getEvents';
import { getFavoritesForUser } from './events/getFavoritesForUser';
import { getGoalRelationships } from './events/getGoalRelationships';
import { getGoals } from './events/getGoals';
import { getItemsForPortfolio } from './events/getItemsForPortfolio';
import { getParentGoalsForGoal } from './events/getParentGoalsForGoal';
import { getPortfolioMemberships } from './events/getPortfolioMemberships';
import { getPortfolioMembershipsForPortfolio } from './events/getPortfolioMembershipsForPortfolio';
import { getPortfolios } from './events/getPortfolios';
import { getProjectMembershipsForProject } from './events/getProjectMembershipsForProject';
import { getProjectStatusesForProject } from './events/getProjectStatusesForProject';
import { getProjectTemplates } from './events/getProjectTemplates';
import { getProjectTemplatesForTeam } from './events/getProjectTemplatesForTeam';
import { getProjects } from './events/getProjects';
import { getProjectsForTask } from './events/getProjectsForTask';
import { getProjectsForTeam } from './events/getProjectsForTeam';
import { getProjectsForWorkspace } from './events/getProjectsForWorkspace';
import { getSectionsForProject } from './events/getSectionsForProject';
import { getStatusesForObject } from './events/getStatusesForObject';
import { getSubtasksForTask } from './events/getSubtasksForTask';
import { getTags } from './events/getTags';
import { getTagsForTask } from './events/getTagsForTask';
import { getTagsForWorkspace } from './events/getTagsForWorkspace';
import { getTasks } from './events/getTasks';
import { getTasksForProject } from './events/getTasksForProject';
import { getTasksForSection } from './events/getTasksForSection';
import { getTasksForTag } from './events/getTasksForTag';
import { getTasksForUserTaskList } from './events/getTasksForUserTaskList';
import { getTeamMemberships } from './events/getTeamMemberships';
import { getTeamMembershipsForTeam } from './events/getTeamMembershipsForTeam';
import { getTeamMembershipsForUser } from './events/getTeamMembershipsForUser';
import { getTeamsForUser } from './events/getTeamsForUser';
import { getTeamsForWorkspace } from './events/getTeamsForWorkspace';
import { getTimePeriods } from './events/getTimePeriods';
import { getUsers } from './events/getUsers';
import { getUsersForTeam } from './events/getUsersForTeam';
import { getUsersForWorkspace } from './events/getUsersForWorkspace';
import { getWebhooks } from './events/getWebhooks';
import { getWorkspaceMembershipsForUser } from './events/getWorkspaceMembershipsForUser';
import { getWorkspaceMembershipsForWorkspace } from './events/getWorkspaceMembershipsForWorkspace';
import { getWorkspaces } from './events/getWorkspaces';
import { searchTasksForWorkspace } from './events/searchTasksForWorkspace';
import { typeaheadForWorkspace } from './events/typeaheadForWorkspace';
import type openapi from './openapi';

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
      logoUrl: 'TODO',
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'asana.AttachmentCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getAttachmentsForObject,
      },

      'asana.EventResponse/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getEvents,
      },

      'asana.GoalRelationshipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getGoalRelationships,
      },

      'asana.GoalCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getGoals,
      },

      'asana.GoalCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getParentGoalsForGoal,
      },

      'asana.PortfolioMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getPortfolioMemberships,
      },

      'asana.PortfolioCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getPortfolios,
      },

      'asana.CustomFieldSettingResponse/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getCustomFieldSettingsForPortfolio,
      },

      'asana.ProjectCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getItemsForPortfolio,
      },

      'asana.PortfolioMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getPortfolioMembershipsForPortfolio,
      },

      'asana.ProjectTemplateCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectTemplates,
      },

      'asana.ProjectCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjects,
      },

      'asana.CustomFieldSettingResponse/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getCustomFieldSettingsForProject,
      },

      'asana.ProjectMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectMembershipsForProject,
      },

      'asana.ProjectStatusCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectStatusesForProject,
      },

      'asana.SectionCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getSectionsForProject,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTasksForProject,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTasksForSection,
      },

      'asana.StatusUpdateCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getStatusesForObject,
      },

      'asana.TagCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTags,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTasksForTag,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTasks,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getDependenciesForTask,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getDependentsForTask,
      },

      'asana.ProjectCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectsForTask,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getSubtasksForTask,
      },

      'asana.TagCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTagsForTask,
      },

      'asana.TeamMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTeamMemberships,
      },

      'asana.ProjectTemplateCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectTemplatesForTeam,
      },

      'asana.ProjectCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectsForTeam,
      },

      'asana.TeamMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTeamMembershipsForTeam,
      },

      'asana.UserCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getUsersForTeam,
      },

      'asana.TimePeriodCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTimePeriods,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTasksForUserTaskList,
      },

      'asana.UserCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getUsers,
      },

      'asana.AsanaNamedResource/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getFavoritesForUser,
      },

      'asana.TeamMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTeamMembershipsForUser,
      },

      'asana.TeamCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTeamsForUser,
      },

      'asana.WorkspaceMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getWorkspaceMembershipsForUser,
      },

      'asana.WebhookResponse/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getWebhooks,
      },

      'asana.WorkspaceCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getWorkspaces,
      },

      'asana.AuditLogEvent/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getAuditLogEvents,
      },

      'asana.CustomFieldResponse/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getCustomFieldsForWorkspace,
      },

      'asana.ProjectCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getProjectsForWorkspace,
      },

      'asana.TagCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTagsForWorkspace,
      },

      'asana.TaskCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: searchTasksForWorkspace,
      },

      'asana.TeamCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getTeamsForWorkspace,
      },

      'asana.AsanaNamedResource/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: typeaheadForWorkspace,
      },

      'asana.UserCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getUsersForWorkspace,
      },

      'asana.WorkspaceMembershipCompact/sync': {
        schema: z.object({
          emails: z.record(z.any()),
          entityType: z.string(),
        }),
        handler: getWorkspaceMembershipsForWorkspace,
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
        SERVER: `https://app.asana.com`,
        AUTHORIZATION_ENDPOINT: '/-/oauth_authorize',
        TOKEN_ENDPOINT: '/-/oauth_token',
        SCOPES: [],
      },
    });
  }
}
