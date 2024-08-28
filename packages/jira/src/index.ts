
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { Banner } from './events/Banner'
import { CustomFieldConfiguration } from './events/CustomFieldConfiguration'
import { ApplicationRole } from './events/ApplicationRole'
import { AttachmentMeta } from './events/AttachmentMeta'
import { Attachment } from './events/Attachment'
import { expandAttachmentForHumans } from './events/expandAttachmentForHumans'
import { expandAttachmentForMachines } from './events/expandAttachmentForMachines'
import { AuditRecords } from './events/AuditRecords'
import { AllSystemAvatars } from './events/AllSystemAvatars'
import { BulkEditableFields } from './events/BulkEditableFields'
import { BulkOperationProgress } from './events/BulkOperationProgress'
import { AllUserDataClassificationLevels } from './events/AllUserDataClassificationLevels'
import { CommentPropertyKeys } from './events/CommentPropertyKeys'
import { CommentProperty } from './events/CommentProperty'
import { findComponentsForProjects } from './events/findComponentsForProjects'
import { Component } from './events/Component'
import { ComponentRelatedIssues } from './events/ComponentRelatedIssues'
import { Configuration } from './events/Configuration'
import { SelectedTimeTrackingImplementation } from './events/SelectedTimeTrackingImplementation'
import { SharedTimeTrackingConfiguration } from './events/SharedTimeTrackingConfiguration'
import { CustomFieldOption } from './events/CustomFieldOption'
import { AllDashboards } from './events/AllDashboards'
import { AllAvailableDashboardGadgets } from './events/AllAvailableDashboardGadgets'
import { DashboardsPaginated } from './events/DashboardsPaginated'
import { AllGadgets } from './events/AllGadgets'
import { DashboardItemPropertyKeys } from './events/DashboardItemPropertyKeys'
import { DashboardItemProperty } from './events/DashboardItemProperty'
import { Dashboard } from './events/Dashboard'
import { Policy } from './events/Policy'
import { Policies } from './events/Policies'
import { FieldsPaginated } from './events/FieldsPaginated'
import { TrashedFieldsPaginated } from './events/TrashedFieldsPaginated'
import { ContextsForField } from './events/ContextsForField'
import { DefaultValues } from './events/DefaultValues'
import { IssueTypeMappingsForContexts } from './events/IssueTypeMappingsForContexts'
import { ProjectContextMapping } from './events/ProjectContextMapping'
import { OptionsForContext } from './events/OptionsForContext'
import { ContextsForFieldDeprecated } from './events/ContextsForFieldDeprecated'
import { ScreensForField } from './events/ScreensForField'
import { AllIssueFieldOptions } from './events/AllIssueFieldOptions'
import { SelectableIssueFieldOptions } from './events/SelectableIssueFieldOptions'
import { VisibleIssueFieldOptions } from './events/VisibleIssueFieldOptions'
import { IssueFieldOption } from './events/IssueFieldOption'
import { AllFieldConfigurations } from './events/AllFieldConfigurations'
import { FieldConfigurationItems } from './events/FieldConfigurationItems'
import { AllFieldConfigurationSchemes } from './events/AllFieldConfigurationSchemes'
import { FieldConfigurationSchemeMappings } from './events/FieldConfigurationSchemeMappings'
import { FieldConfigurationSchemeProjectMapping } from './events/FieldConfigurationSchemeProjectMapping'
import { DefaultShareScope } from './events/DefaultShareScope'
import { FiltersPaginated } from './events/FiltersPaginated'
import { Filter } from './events/Filter'
import { SharePermission } from './events/SharePermission'
import { Group } from './events/Group'
import { bulkGetGroups } from './events/bulkGetGroups'
import { UsersFromGroup } from './events/UsersFromGroup'
import { findGroups } from './events/findGroups'
import { findUsersAndGroups } from './events/findUsersAndGroups'
import { License } from './events/License'
import { CreateIssueMeta } from './events/CreateIssueMeta'
import { CreateIssueMetaIssueTypes } from './events/CreateIssueMetaIssueTypes'
import { CreateIssueMetaIssueTypeId } from './events/CreateIssueMetaIssueTypeId'
import { IssueLimitReport } from './events/IssueLimitReport'
import { IssuePickerResource } from './events/IssuePickerResource'
import { Issue } from './events/Issue'
import { ChangeLogs } from './events/ChangeLogs'
import { Comments } from './events/Comments'
import { Comment } from './events/Comment'
import { EditIssueMeta } from './events/EditIssueMeta'
import { IssuePropertyKeys } from './events/IssuePropertyKeys'
import { IssueProperty } from './events/IssueProperty'
import { RemoteIssueLinks } from './events/RemoteIssueLinks'
import { RemoteIssueLinkById } from './events/RemoteIssueLinkById'
import { Transitions } from './events/Transitions'
import { Votes } from './events/Votes'
import { IssueWatchers } from './events/IssueWatchers'
import { IssueWorklog } from './events/IssueWorklog'
import { Worklog } from './events/Worklog'
import { WorklogPropertyKeys } from './events/WorklogPropertyKeys'
import { WorklogProperty } from './events/WorklogProperty'
import { IssueLink } from './events/IssueLink'
import { IssueLinkTypes } from './events/IssueLinkTypes'
import { IssueLinkType } from './events/IssueLinkType'
import { IssueSecuritySchemes } from './events/IssueSecuritySchemes'
import { SecurityLevels } from './events/SecurityLevels'
import { SecurityLevelMembers } from './events/SecurityLevelMembers'
import { searchProjectsUsingSecuritySchemes } from './events/searchProjectsUsingSecuritySchemes'
import { searchSecuritySchemes } from './events/searchSecuritySchemes'
import { IssueSecurityScheme } from './events/IssueSecurityScheme'
import { IssueSecurityLevelMembers } from './events/IssueSecurityLevelMembers'
import { IssueType } from './events/IssueType'
import { IssueTypePropertyKeys } from './events/IssueTypePropertyKeys'
import { IssueTypeProperty } from './events/IssueTypeProperty'
import { AllIssueTypeSchemes } from './events/AllIssueTypeSchemes'
import { IssueTypeSchemesMapping } from './events/IssueTypeSchemesMapping'
import { IssueTypeSchemeForProjects } from './events/IssueTypeSchemeForProjects'
import { IssueTypeScreenSchemes } from './events/IssueTypeScreenSchemes'
import { IssueTypeScreenSchemeMappings } from './events/IssueTypeScreenSchemeMappings'
import { IssueTypeScreenSchemeProjectAssociations } from './events/IssueTypeScreenSchemeProjectAssociations'
import { ProjectsForIssueTypeScreenScheme } from './events/ProjectsForIssueTypeScreenScheme'
import { AutoComplete } from './events/AutoComplete'
import { FieldAutoCompleteForQueryString } from './events/FieldAutoCompleteForQueryString'
import { Precomputations } from './events/Precomputations'
import { AllLabels } from './events/AllLabels'
import { ApproximateLicenseCount } from './events/ApproximateLicenseCount'
import { ApproximateApplicationLicenseCount } from './events/ApproximateApplicationLicenseCount'
import { MyPermissions } from './events/MyPermissions'
import { Locale } from './events/Locale'
import { CurrentUser } from './events/CurrentUser'
import { NotificationSchemes } from './events/NotificationSchemes'
import { NotificationSchemeToProjectMappings } from './events/NotificationSchemeToProjectMappings'
import { NotificationScheme } from './events/NotificationScheme'
import { AllPermissions } from './events/AllPermissions'
import { AllPermissionSchemes } from './events/AllPermissionSchemes'
import { PermissionScheme } from './events/PermissionScheme'
import { PermissionSchemeGrants } from './events/PermissionSchemeGrants'
import { PermissionSchemeGrant } from './events/PermissionSchemeGrant'
import { searchPriorities } from './events/searchPriorities'
import { Priority } from './events/Priority'
import { PrioritySchemes } from './events/PrioritySchemes'
import { AvailablePrioritiesByPriorityScheme } from './events/AvailablePrioritiesByPriorityScheme'
import { PrioritiesByPriorityScheme } from './events/PrioritiesByPriorityScheme'
import { ProjectsByPriorityScheme } from './events/ProjectsByPriorityScheme'
import { searchProjects } from './events/searchProjects'
import { ProjectTypeByKey } from './events/ProjectTypeByKey'
import { AccessibleProjectTypeByKey } from './events/AccessibleProjectTypeByKey'
import { Project } from './events/Project'
import { AllProjectAvatars } from './events/AllProjectAvatars'
import { ProjectComponentsPaginated } from './events/ProjectComponentsPaginated'
import { FeaturesForProject } from './events/FeaturesForProject'
import { ProjectPropertyKeys } from './events/ProjectPropertyKeys'
import { ProjectProperty } from './events/ProjectProperty'
import { ProjectRole } from './events/ProjectRole'
import { ProjectVersionsPaginated } from './events/ProjectVersionsPaginated'
import { ProjectEmail } from './events/ProjectEmail'
import { Hierarchy } from './events/Hierarchy'
import { ProjectIssueSecurityScheme } from './events/ProjectIssueSecurityScheme'
import { NotificationSchemeForProject } from './events/NotificationSchemeForProject'
import { AssignedPermissionScheme } from './events/AssignedPermissionScheme'
import { SecurityLevelsForProject } from './events/SecurityLevelsForProject'
import { ProjectCategoryById } from './events/ProjectCategoryById'
import { validateProjectKey } from './events/validateProjectKey'
import { searchResolutions } from './events/searchResolutions'
import { Resolution } from './events/Resolution'
import { ProjectRoleById } from './events/ProjectRoleById'
import { ProjectRoleActorsForRole } from './events/ProjectRoleActorsForRole'
import { Screens } from './events/Screens'
import { ScreenSchemes } from './events/ScreenSchemes'
import { searchForIssuesUsingJql } from './events/searchForIssuesUsingJql'
import { IssueSecurityLevel } from './events/IssueSecurityLevel'
import { ServerInfo } from './events/ServerInfo'
import { Status } from './events/Status'
import { StatusCategory } from './events/StatusCategory'
import { search } from './events/search'
import { Task } from './events/Task'
import { UiModifications } from './events/UiModifications'
import { Avatars } from './events/Avatars'
import { AvatarImageByType } from './events/AvatarImageByType'
import { AvatarImageByID } from './events/AvatarImageByID'
import { AvatarImageByOwner } from './events/AvatarImageByOwner'
import { User } from './events/User'
import { bulkGetUsers } from './events/bulkGetUsers'
import { UserEmail } from './events/UserEmail'
import { UserEmailBulk } from './events/UserEmailBulk'
import { findUsersForPicker } from './events/findUsersForPicker'
import { UserPropertyKeys } from './events/UserPropertyKeys'
import { UserProperty } from './events/UserProperty'
import { findUsersByQuery } from './events/findUsersByQuery'
import { findUserKeysByQuery } from './events/findUserKeysByQuery'
import { Version } from './events/Version'
import { VersionRelatedIssues } from './events/VersionRelatedIssues'
import { VersionUnresolvedIssues } from './events/VersionUnresolvedIssues'
import { DynamicWebhooksForApp } from './events/DynamicWebhooksForApp'
import { FailedWebhooks } from './events/FailedWebhooks'
import { WorkflowTransitionRuleConfigurations } from './events/WorkflowTransitionRuleConfigurations'
import { WorkflowsPaginated } from './events/WorkflowsPaginated'
import { WorkflowTransitionProperties } from './events/WorkflowTransitionProperties'
import { workflowCapabilities } from './events/workflowCapabilities'
import { AllWorkflowSchemes } from './events/AllWorkflowSchemes'
import { WorkflowSchemeProjectAssociations } from './events/WorkflowSchemeProjectAssociations'
import { WorkflowScheme } from './events/WorkflowScheme'
import { DefaultWorkflow } from './events/DefaultWorkflow'
import { WorkflowSchemeDraft } from './events/WorkflowSchemeDraft'
import { DraftDefaultWorkflow } from './events/DraftDefaultWorkflow'
import { WorkflowSchemeDraftIssueType } from './events/WorkflowSchemeDraftIssueType'
import { DraftWorkflow } from './events/DraftWorkflow'
import { WorkflowSchemeIssueType } from './events/WorkflowSchemeIssueType'
import { Workflow } from './events/Workflow'
import { IdsOfWorklogsDeletedSince } from './events/IdsOfWorklogsDeletedSince'
import { IdsOfWorklogsModifiedSince } from './events/IdsOfWorklogsModifiedSince'
import { AddonPropertiesResource.AddonProperties_get } from './events/AddonPropertiesResource.AddonProperties_get'
import { AddonPropertiesResource.AddonProperty_get } from './events/AddonPropertiesResource.AddonProperty_get'
import { DynamicModulesResource.Modules_get } from './events/DynamicModulesResource.Modules_get'

type JiraConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class JiraIntegration extends Integration {
  config: JiraConfig;

  constructor({ config }: { config: JiraConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'JIRA',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'jira.Banner/sync': {
                schema: z.object({}),
                handler: Banner,
            },
        

             'jira.CustomFieldConfiguration/sync': {
                schema: z.object({
                  'fieldIdOrKey': z.string(),
'id': z.string(),
'fieldContextId': z.string(),
'issueId': z.number(),
'projectKeyOrId': z.string(),
'issueTypeId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: CustomFieldConfiguration,
            },
        

             'jira.ApplicationRole/sync': {
                schema: z.object({
                  'key': z.string()}),
                handler: ApplicationRole,
            },
        

             'jira.AttachmentMeta/sync': {
                schema: z.object({}),
                handler: AttachmentMeta,
            },
        

             'jira.Attachment/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: Attachment,
            },
        

             'jira.expandAttachmentForHumans/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: expandAttachmentForHumans,
            },
        

             'jira.expandAttachmentForMachines/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: expandAttachmentForMachines,
            },
        

             'jira.AuditRecords/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number(),
'filter': z.string(),
'from': z.string(),
'to': z.string()}),
                handler: AuditRecords,
            },
        

             'jira.AllSystemAvatars/sync': {
                schema: z.object({
                  'type': z.string()}),
                handler: AllSystemAvatars,
            },
        

             'jira.BulkEditableFields/sync': {
                schema: z.object({
                  'issueIdsOrKeys': z.string(),
'searchText': z.string(),
'endingBefore': z.string(),
'startingAfter': z.string()}),
                handler: BulkEditableFields,
            },
        

             'jira.BulkOperationProgress/sync': {
                schema: z.object({
                  'taskId': z.string()}),
                handler: BulkOperationProgress,
            },
        

             'jira.AllUserDataClassificationLevels/sync': {
                schema: z.object({
                  'status': z.string(),
'orderBy': z.string()}),
                handler: AllUserDataClassificationLevels,
            },
        

             'jira.CommentPropertyKeys/sync': {
                schema: z.object({
                  'commentId': z.string()}),
                handler: CommentPropertyKeys,
            },
        

             'jira.CommentProperty/sync': {
                schema: z.object({
                  'commentId': z.string(),
'propertyKey': z.string()}),
                handler: CommentProperty,
            },
        

             'jira.findComponentsForProjects/sync': {
                schema: z.object({
                  'projectIdsOrKeys': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'query': z.string()}),
                handler: findComponentsForProjects,
            },
        

             'jira.Component/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: Component,
            },
        

             'jira.ComponentRelatedIssues/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: ComponentRelatedIssues,
            },
        

             'jira.Configuration/sync': {
                schema: z.object({}),
                handler: Configuration,
            },
        

             'jira.SelectedTimeTrackingImplementation/sync': {
                schema: z.object({}),
                handler: SelectedTimeTrackingImplementation,
            },
        

             'jira.SharedTimeTrackingConfiguration/sync': {
                schema: z.object({}),
                handler: SharedTimeTrackingConfiguration,
            },
        

             'jira.CustomFieldOption/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: CustomFieldOption,
            },
        

             'jira.AllDashboards/sync': {
                schema: z.object({
                  'filter': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: AllDashboards,
            },
        

             'jira.AllAvailableDashboardGadgets/sync': {
                schema: z.object({}),
                handler: AllAvailableDashboardGadgets,
            },
        

             'jira.DashboardsPaginated/sync': {
                schema: z.object({
                  'dashboardName': z.string(),
'accountId': z.string(),
'owner': z.string(),
'groupname': z.string(),
'groupId': z.string(),
'projectId': z.number(),
'orderBy': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'status': z.string(),
'expand': z.string()}),
                handler: DashboardsPaginated,
            },
        

             'jira.AllGadgets/sync': {
                schema: z.object({
                  'dashboardId': z.string(),
'dashboardId': z.number(),
'moduleKey': z.string(),
'uri': z.string(),
'gadgetId': z.string()}),
                handler: AllGadgets,
            },
        

             'jira.DashboardItemPropertyKeys/sync': {
                schema: z.object({
                  'dashboardId': z.string(),
'itemId': z.string()}),
                handler: DashboardItemPropertyKeys,
            },
        

             'jira.DashboardItemProperty/sync': {
                schema: z.object({
                  'dashboardId': z.string(),
'itemId': z.string(),
'propertyKey': z.string()}),
                handler: DashboardItemProperty,
            },
        

             'jira.Dashboard/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: Dashboard,
            },
        

             'jira.Policy/sync': {
                schema: z.object({}),
                handler: Policy,
            },
        

             'jira.Policies/sync': {
                schema: z.object({
                  'ids': z.string()}),
                handler: Policies,
            },
        

             'jira.FieldsPaginated/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'type': z.string(),
'id': z.string(),
'query': z.string(),
'orderBy': z.string(),
'expand': z.string()}),
                handler: FieldsPaginated,
            },
        

             'jira.TrashedFieldsPaginated/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'query': z.string(),
'expand': z.string(),
'orderBy': z.string()}),
                handler: TrashedFieldsPaginated,
            },
        

             'jira.ContextsForField/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'isAnyIssueType': z.boolean(),
'isGlobalContext': z.boolean(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: ContextsForField,
            },
        

             'jira.DefaultValues/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: DefaultValues,
            },
        

             'jira.IssueTypeMappingsForContexts/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: IssueTypeMappingsForContexts,
            },
        

             'jira.ProjectContextMapping/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: ProjectContextMapping,
            },
        

             'jira.OptionsForContext/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'contextId': z.number(),
'optionId': z.number(),
'onlyOptions': z.boolean(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: OptionsForContext,
            },
        

             'jira.ContextsForFieldDeprecated/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: ContextsForFieldDeprecated,
            },
        

             'jira.ScreensForField/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'expand': z.string()}),
                handler: ScreensForField,
            },
        

             'jira.AllIssueFieldOptions/sync': {
                schema: z.object({
                  'fieldKey': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: AllIssueFieldOptions,
            },
        

             'jira.SelectableIssueFieldOptions/sync': {
                schema: z.object({
                  'fieldKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.number()}),
                handler: SelectableIssueFieldOptions,
            },
        

             'jira.VisibleIssueFieldOptions/sync': {
                schema: z.object({
                  'fieldKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.number()}),
                handler: VisibleIssueFieldOptions,
            },
        

             'jira.IssueFieldOption/sync': {
                schema: z.object({
                  'fieldKey': z.string(),
'optionId': z.string(),
'optionId': z.number()}),
                handler: IssueFieldOption,
            },
        

             'jira.AllFieldConfigurations/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'isDefault': z.boolean(),
'query': z.string()}),
                handler: AllFieldConfigurations,
            },
        

             'jira.FieldConfigurationItems/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: FieldConfigurationItems,
            },
        

             'jira.AllFieldConfigurationSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string()}),
                handler: AllFieldConfigurationSchemes,
            },
        

             'jira.FieldConfigurationSchemeMappings/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'fieldConfigurationSchemeId': z.string()}),
                handler: FieldConfigurationSchemeMappings,
            },
        

             'jira.FieldConfigurationSchemeProjectMapping/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.string()}),
                handler: FieldConfigurationSchemeProjectMapping,
            },
        

             'jira.DefaultShareScope/sync': {
                schema: z.object({}),
                handler: DefaultShareScope,
            },
        

             'jira.FiltersPaginated/sync': {
                schema: z.object({
                  'filterName': z.string(),
'accountId': z.string(),
'owner': z.string(),
'groupname': z.string(),
'groupId': z.string(),
'projectId': z.number(),
'id': z.string(),
'orderBy': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'expand': z.string(),
'overrideSharePermissions': z.boolean()}),
                handler: FiltersPaginated,
            },
        

             'jira.Filter/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'expand': z.string(),
'overrideSharePermissions': z.boolean()}),
                handler: Filter,
            },
        

             'jira.SharePermission/sync': {
                schema: z.object({
                  'id': z.string(),
'permissionId': z.string(),
'id': z.number(),
'permissionId': z.number()}),
                handler: SharePermission,
            },
        

             'jira.Group/sync': {
                schema: z.object({
                  'groupname': z.string(),
'groupId': z.string(),
'expand': z.string()}),
                handler: Group,
            },
        

             'jira.bulkGetGroups/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'groupId': z.string(),
'groupName': z.string(),
'accessType': z.string(),
'applicationKey': z.string()}),
                handler: bulkGetGroups,
            },
        

             'jira.UsersFromGroup/sync': {
                schema: z.object({
                  'groupname': z.string(),
'groupId': z.string(),
'includeInactiveUsers': z.boolean(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: UsersFromGroup,
            },
        

             'jira.findGroups/sync': {
                schema: z.object({
                  'accountId': z.string(),
'query': z.string(),
'exclude': z.string(),
'excludeId': z.string(),
'maxResults': z.number(),
'caseInsensitive': z.boolean(),
'userName': z.string()}),
                handler: findGroups,
            },
        

             'jira.findUsersAndGroups/sync': {
                schema: z.object({
                  'query': z.string(),
'maxResults': z.number(),
'showAvatar': z.boolean(),
'fieldId': z.string(),
'projectId': z.string(),
'issueTypeId': z.string(),
'avatarSize': z.string(),
'caseInsensitive': z.boolean(),
'excludeConnectAddons': z.boolean()}),
                handler: findUsersAndGroups,
            },
        

             'jira.License/sync': {
                schema: z.object({}),
                handler: License,
            },
        

             'jira.CreateIssueMeta/sync': {
                schema: z.object({
                  'projectIds': z.string(),
'projectKeys': z.string(),
'issuetypeIds': z.string(),
'issuetypeNames': z.string(),
'expand': z.string()}),
                handler: CreateIssueMeta,
            },
        

             'jira.CreateIssueMetaIssueTypes/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: CreateIssueMetaIssueTypes,
            },
        

             'jira.CreateIssueMetaIssueTypeId/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'issueTypeId': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: CreateIssueMetaIssueTypeId,
            },
        

             'jira.IssueLimitReport/sync': {
                schema: z.object({
                  'isReturningKeys': z.boolean()}),
                handler: IssueLimitReport,
            },
        

             'jira.IssuePickerResource/sync': {
                schema: z.object({
                  'query': z.string(),
'currentJQL': z.string(),
'currentIssueKey': z.string(),
'currentProjectId': z.string(),
'showSubTasks': z.boolean(),
'showSubTaskParent': z.boolean()}),
                handler: IssuePickerResource,
            },
        

             'jira.Issue/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'fields': z.string(),
'fieldsByKeys': z.boolean(),
'expand': z.string(),
'properties': z.string(),
'updateHistory': z.boolean(),
'failFast': z.boolean()}),
                handler: Issue,
            },
        

             'jira.ChangeLogs/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: ChangeLogs,
            },
        

             'jira.Comments/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'expand': z.string()}),
                handler: Comments,
            },
        

             'jira.Comment/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'id': z.string(),
'expand': z.string()}),
                handler: Comment,
            },
        

             'jira.EditIssueMeta/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'overrideScreenSecurity': z.boolean(),
'overrideEditableFlag': z.boolean()}),
                handler: EditIssueMeta,
            },
        

             'jira.IssuePropertyKeys/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string()}),
                handler: IssuePropertyKeys,
            },
        

             'jira.IssueProperty/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'propertyKey': z.string()}),
                handler: IssueProperty,
            },
        

             'jira.RemoteIssueLinks/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'globalId': z.string()}),
                handler: RemoteIssueLinks,
            },
        

             'jira.RemoteIssueLinkById/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'linkId': z.string()}),
                handler: RemoteIssueLinkById,
            },
        

             'jira.Transitions/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'expand': z.string(),
'transitionId': z.string(),
'skipRemoteOnlyCondition': z.boolean(),
'includeUnavailableTransitions': z.boolean(),
'sortByOpsBarAndStatus': z.boolean()}),
                handler: Transitions,
            },
        

             'jira.Votes/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string()}),
                handler: Votes,
            },
        

             'jira.IssueWatchers/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string()}),
                handler: IssueWatchers,
            },
        

             'jira.IssueWorklog/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'startedAfter': z.number(),
'startedBefore': z.number(),
'expand': z.string()}),
                handler: IssueWorklog,
            },
        

             'jira.Worklog/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'id': z.string(),
'expand': z.string()}),
                handler: Worklog,
            },
        

             'jira.WorklogPropertyKeys/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'worklogId': z.string()}),
                handler: WorklogPropertyKeys,
            },
        

             'jira.WorklogProperty/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'worklogId': z.string(),
'propertyKey': z.string()}),
                handler: WorklogProperty,
            },
        

             'jira.IssueLink/sync': {
                schema: z.object({
                  'linkId': z.string()}),
                handler: IssueLink,
            },
        

             'jira.IssueLinkTypes/sync': {
                schema: z.object({}),
                handler: IssueLinkTypes,
            },
        

             'jira.IssueLinkType/sync': {
                schema: z.object({
                  'issueLinkTypeId': z.string()}),
                handler: IssueLinkType,
            },
        

             'jira.IssueSecuritySchemes/sync': {
                schema: z.object({}),
                handler: IssueSecuritySchemes,
            },
        

             'jira.SecurityLevels/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'schemeId': z.string(),
'onlyDefault': z.boolean()}),
                handler: SecurityLevels,
            },
        

             'jira.SecurityLevelMembers/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'schemeId': z.string(),
'levelId': z.string(),
'expand': z.string()}),
                handler: SecurityLevelMembers,
            },
        

             'jira.searchProjectsUsingSecuritySchemes/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'issueSecuritySchemeId': z.string(),
'projectId': z.string()}),
                handler: searchProjectsUsingSecuritySchemes,
            },
        

             'jira.searchSecuritySchemes/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'projectId': z.string()}),
                handler: searchSecuritySchemes,
            },
        

             'jira.IssueSecurityScheme/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: IssueSecurityScheme,
            },
        

             'jira.IssueSecurityLevelMembers/sync': {
                schema: z.object({
                  'issueSecuritySchemeId': z.string(),
'issueSecuritySchemeId': z.number(),
'startAt': z.number(),
'maxResults': z.number(),
'issueSecurityLevelId': z.string(),
'expand': z.string()}),
                handler: IssueSecurityLevelMembers,
            },
        

             'jira.IssueType/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: IssueType,
            },
        

             'jira.IssueTypePropertyKeys/sync': {
                schema: z.object({
                  'issueTypeId': z.string()}),
                handler: IssueTypePropertyKeys,
            },
        

             'jira.IssueTypeProperty/sync': {
                schema: z.object({
                  'issueTypeId': z.string(),
'propertyKey': z.string()}),
                handler: IssueTypeProperty,
            },
        

             'jira.AllIssueTypeSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'orderBy': z.string(),
'expand': z.string(),
'queryString': z.string()}),
                handler: AllIssueTypeSchemes,
            },
        

             'jira.IssueTypeSchemesMapping/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'issueTypeSchemeId': z.string()}),
                handler: IssueTypeSchemesMapping,
            },
        

             'jira.IssueTypeSchemeForProjects/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.string()}),
                handler: IssueTypeSchemeForProjects,
            },
        

             'jira.IssueTypeScreenSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'queryString': z.string(),
'orderBy': z.string(),
'expand': z.string()}),
                handler: IssueTypeScreenSchemes,
            },
        

             'jira.IssueTypeScreenSchemeMappings/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'issueTypeScreenSchemeId': z.string()}),
                handler: IssueTypeScreenSchemeMappings,
            },
        

             'jira.IssueTypeScreenSchemeProjectAssociations/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.string()}),
                handler: IssueTypeScreenSchemeProjectAssociations,
            },
        

             'jira.ProjectsForIssueTypeScreenScheme/sync': {
                schema: z.object({
                  'issueTypeScreenSchemeId': z.string(),
'issueTypeScreenSchemeId': z.number(),
'startAt': z.number(),
'maxResults': z.number(),
'query': z.string()}),
                handler: ProjectsForIssueTypeScreenScheme,
            },
        

             'jira.AutoComplete/sync': {
                schema: z.object({}),
                handler: AutoComplete,
            },
        

             'jira.FieldAutoCompleteForQueryString/sync': {
                schema: z.object({
                  'fieldName': z.string(),
'fieldValue': z.string(),
'predicateName': z.string(),
'predicateValue': z.string()}),
                handler: FieldAutoCompleteForQueryString,
            },
        

             'jira.Precomputations/sync': {
                schema: z.object({
                  'functionKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string()}),
                handler: Precomputations,
            },
        

             'jira.AllLabels/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number()}),
                handler: AllLabels,
            },
        

             'jira.ApproximateLicenseCount/sync': {
                schema: z.object({}),
                handler: ApproximateLicenseCount,
            },
        

             'jira.ApproximateApplicationLicenseCount/sync': {
                schema: z.object({
                  'applicationKey': z.string()}),
                handler: ApproximateApplicationLicenseCount,
            },
        

             'jira.MyPermissions/sync': {
                schema: z.object({
                  'projectKey': z.string(),
'projectId': z.string(),
'issueKey': z.string(),
'issueId': z.string(),
'permissions': z.string(),
'projectUuid': z.string(),
'projectConfigurationUuid': z.string(),
'commentId': z.string()}),
                handler: MyPermissions,
            },
        

             'jira.Locale/sync': {
                schema: z.object({}),
                handler: Locale,
            },
        

             'jira.CurrentUser/sync': {
                schema: z.object({
                  'expand': z.string()}),
                handler: CurrentUser,
            },
        

             'jira.NotificationSchemes/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'projectId': z.string(),
'onlyDefault': z.boolean(),
'expand': z.string()}),
                handler: NotificationSchemes,
            },
        

             'jira.NotificationSchemeToProjectMappings/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'notificationSchemeId': z.string(),
'projectId': z.string()}),
                handler: NotificationSchemeToProjectMappings,
            },
        

             'jira.NotificationScheme/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'expand': z.string()}),
                handler: NotificationScheme,
            },
        

             'jira.AllPermissions/sync': {
                schema: z.object({}),
                handler: AllPermissions,
            },
        

             'jira.AllPermissionSchemes/sync': {
                schema: z.object({
                  'expand': z.string()}),
                handler: AllPermissionSchemes,
            },
        

             'jira.PermissionScheme/sync': {
                schema: z.object({
                  'schemeId': z.string(),
'schemeId': z.number(),
'expand': z.string()}),
                handler: PermissionScheme,
            },
        

             'jira.PermissionSchemeGrants/sync': {
                schema: z.object({
                  'schemeId': z.string(),
'schemeId': z.number(),
'expand': z.string()}),
                handler: PermissionSchemeGrants,
            },
        

             'jira.PermissionSchemeGrant/sync': {
                schema: z.object({
                  'schemeId': z.string(),
'permissionId': z.string(),
'schemeId': z.number(),
'permissionId': z.number(),
'expand': z.string()}),
                handler: PermissionSchemeGrant,
            },
        

             'jira.searchPriorities/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'projectId': z.string(),
'priorityName': z.string(),
'onlyDefault': z.boolean(),
'expand': z.string()}),
                handler: searchPriorities,
            },
        

             'jira.Priority/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: Priority,
            },
        

             'jira.PrioritySchemes/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'priorityId': z.string(),
'schemeId': z.string(),
'schemeName': z.string(),
'onlyDefault': z.boolean(),
'orderBy': z.string(),
'expand': z.string()}),
                handler: PrioritySchemes,
            },
        

             'jira.AvailablePrioritiesByPriorityScheme/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'query': z.string(),
'schemeId': z.string(),
'exclude': z.string()}),
                handler: AvailablePrioritiesByPriorityScheme,
            },
        

             'jira.PrioritiesByPriorityScheme/sync': {
                schema: z.object({
                  'schemeId': z.string(),
'startAt': z.string(),
'maxResults': z.string()}),
                handler: PrioritiesByPriorityScheme,
            },
        

             'jira.ProjectsByPriorityScheme/sync': {
                schema: z.object({
                  'schemeId': z.string(),
'startAt': z.string(),
'maxResults': z.string(),
'projectId': z.string(),
'query': z.string()}),
                handler: ProjectsByPriorityScheme,
            },
        

             'jira.searchProjects/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'id': z.string(),
'keys': z.string(),
'query': z.string(),
'typeKey': z.string(),
'categoryId': z.number(),
'action': z.string(),
'expand': z.string(),
'status': z.string(),
'properties': z.string(),
'propertyQuery': z.string()}),
                handler: searchProjects,
            },
        

             'jira.ProjectTypeByKey/sync': {
                schema: z.object({
                  'projectTypeKey': z.string()}),
                handler: ProjectTypeByKey,
            },
        

             'jira.AccessibleProjectTypeByKey/sync': {
                schema: z.object({
                  'projectTypeKey': z.string()}),
                handler: AccessibleProjectTypeByKey,
            },
        

             'jira.Project/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'expand': z.string(),
'properties': z.string()}),
                handler: Project,
            },
        

             'jira.AllProjectAvatars/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string()}),
                handler: AllProjectAvatars,
            },
        

             'jira.ProjectComponentsPaginated/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'componentSource': z.string(),
'query': z.string()}),
                handler: ProjectComponentsPaginated,
            },
        

             'jira.FeaturesForProject/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string()}),
                handler: FeaturesForProject,
            },
        

             'jira.ProjectPropertyKeys/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string()}),
                handler: ProjectPropertyKeys,
            },
        

             'jira.ProjectProperty/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'propertyKey': z.string()}),
                handler: ProjectProperty,
            },
        

             'jira.ProjectRole/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'id': z.string(),
'id': z.number(),
'excludeInactiveUsers': z.boolean()}),
                handler: ProjectRole,
            },
        

             'jira.ProjectVersionsPaginated/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'query': z.string(),
'status': z.string(),
'expand': z.string()}),
                handler: ProjectVersionsPaginated,
            },
        

             'jira.ProjectEmail/sync': {
                schema: z.object({
                  'projectId': z.string(),
'projectId': z.number()}),
                handler: ProjectEmail,
            },
        

             'jira.Hierarchy/sync': {
                schema: z.object({
                  'projectId': z.string(),
'projectId': z.number()}),
                handler: Hierarchy,
            },
        

             'jira.ProjectIssueSecurityScheme/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string()}),
                handler: ProjectIssueSecurityScheme,
            },
        

             'jira.NotificationSchemeForProject/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string(),
'expand': z.string()}),
                handler: NotificationSchemeForProject,
            },
        

             'jira.AssignedPermissionScheme/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string(),
'expand': z.string()}),
                handler: AssignedPermissionScheme,
            },
        

             'jira.SecurityLevelsForProject/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string()}),
                handler: SecurityLevelsForProject,
            },
        

             'jira.ProjectCategoryById/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: ProjectCategoryById,
            },
        

             'jira.validateProjectKey/sync': {
                schema: z.object({
                  'key': z.string()}),
                handler: validateProjectKey,
            },
        

             'jira.searchResolutions/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'onlyDefault': z.boolean()}),
                handler: searchResolutions,
            },
        

             'jira.Resolution/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: Resolution,
            },
        

             'jira.ProjectRoleById/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: ProjectRoleById,
            },
        

             'jira.ProjectRoleActorsForRole/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: ProjectRoleActorsForRole,
            },
        

             'jira.Screens/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'queryString': z.string(),
'scope': z.string(),
'orderBy': z.string()}),
                handler: Screens,
            },
        

             'jira.ScreenSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'expand': z.string(),
'queryString': z.string(),
'orderBy': z.string()}),
                handler: ScreenSchemes,
            },
        

             'jira.searchForIssuesUsingJql/sync': {
                schema: z.object({
                  'jql': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'validateQuery': z.string(),
'fields': z.string(),
'expand': z.string(),
'properties': z.string(),
'fieldsByKeys': z.boolean(),
'failFast': z.boolean()}),
                handler: searchForIssuesUsingJql,
            },
        

             'jira.IssueSecurityLevel/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: IssueSecurityLevel,
            },
        

             'jira.ServerInfo/sync': {
                schema: z.object({}),
                handler: ServerInfo,
            },
        

             'jira.Status/sync': {
                schema: z.object({
                  'idOrName': z.string()}),
                handler: Status,
            },
        

             'jira.StatusCategory/sync': {
                schema: z.object({
                  'idOrKey': z.string()}),
                handler: StatusCategory,
            },
        

             'jira.search/sync': {
                schema: z.object({
                  'expand': z.string(),
'projectId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'searchString': z.string(),
'statusCategory': z.string()}),
                handler: search,
            },
        

             'jira.Task/sync': {
                schema: z.object({
                  'taskId': z.string()}),
                handler: Task,
            },
        

             'jira.UiModifications/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'expand': z.string()}),
                handler: UiModifications,
            },
        

             'jira.Avatars/sync': {
                schema: z.object({
                  'type': z.string(),
'entityId': z.string()}),
                handler: Avatars,
            },
        

             'jira.AvatarImageByType/sync': {
                schema: z.object({
                  'type': z.string(),
'size': z.string(),
'format': z.string()}),
                handler: AvatarImageByType,
            },
        

             'jira.AvatarImageByID/sync': {
                schema: z.object({
                  'type': z.string(),
'id': z.string(),
'id': z.number(),
'size': z.string(),
'format': z.string()}),
                handler: AvatarImageByID,
            },
        

             'jira.AvatarImageByOwner/sync': {
                schema: z.object({
                  'type': z.string(),
'entityId': z.string(),
'size': z.string(),
'format': z.string()}),
                handler: AvatarImageByOwner,
            },
        

             'jira.User/sync': {
                schema: z.object({
                  'accountId': z.string(),
'username': z.string(),
'key': z.string(),
'expand': z.string()}),
                handler: User,
            },
        

             'jira.bulkGetUsers/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'username': z.string(),
'key': z.string(),
'accountId': z.string()}),
                handler: bulkGetUsers,
            },
        

             'jira.UserEmail/sync': {
                schema: z.object({
                  'accountId': z.string()}),
                handler: UserEmail,
            },
        

             'jira.UserEmailBulk/sync': {
                schema: z.object({
                  'accountId': z.string()}),
                handler: UserEmailBulk,
            },
        

             'jira.findUsersForPicker/sync': {
                schema: z.object({
                  'query': z.string(),
'maxResults': z.number(),
'showAvatar': z.boolean(),
'exclude': z.string(),
'excludeAccountIds': z.string(),
'avatarSize': z.string(),
'excludeConnectUsers': z.boolean()}),
                handler: findUsersForPicker,
            },
        

             'jira.UserPropertyKeys/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userKey': z.string(),
'username': z.string()}),
                handler: UserPropertyKeys,
            },
        

             'jira.UserProperty/sync': {
                schema: z.object({
                  'propertyKey': z.string(),
'accountId': z.string(),
'userKey': z.string(),
'username': z.string()}),
                handler: UserProperty,
            },
        

             'jira.findUsersByQuery/sync': {
                schema: z.object({
                  'query': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: findUsersByQuery,
            },
        

             'jira.findUserKeysByQuery/sync': {
                schema: z.object({
                  'query': z.string(),
'startAt': z.number(),
'maxResult': z.number()}),
                handler: findUserKeysByQuery,
            },
        

             'jira.Version/sync': {
                schema: z.object({
                  'id': z.string(),
'expand': z.string()}),
                handler: Version,
            },
        

             'jira.VersionRelatedIssues/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: VersionRelatedIssues,
            },
        

             'jira.VersionUnresolvedIssues/sync': {
                schema: z.object({
                  'id': z.string()}),
                handler: VersionUnresolvedIssues,
            },
        

             'jira.DynamicWebhooksForApp/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number()}),
                handler: DynamicWebhooksForApp,
            },
        

             'jira.FailedWebhooks/sync': {
                schema: z.object({
                  'maxResults': z.number(),
'after': z.number()}),
                handler: FailedWebhooks,
            },
        

             'jira.WorkflowTransitionRuleConfigurations/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'types': z.string(),
'keys': z.string(),
'workflowNames': z.string(),
'withTags': z.string(),
'draft': z.boolean(),
'expand': z.string()}),
                handler: WorkflowTransitionRuleConfigurations,
            },
        

             'jira.WorkflowsPaginated/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'workflowName': z.string(),
'expand': z.string(),
'queryString': z.string(),
'orderBy': z.string(),
'isActive': z.boolean()}),
                handler: WorkflowsPaginated,
            },
        

             'jira.WorkflowTransitionProperties/sync': {
                schema: z.object({
                  'transitionId': z.string(),
'transitionId': z.number(),
'includeReservedKeys': z.boolean(),
'key': z.string(),
'workflowName': z.string(),
'workflowMode': z.string()}),
                handler: WorkflowTransitionProperties,
            },
        

             'jira.workflowCapabilities/sync': {
                schema: z.object({
                  'workflowId': z.string(),
'projectId': z.string(),
'issueTypeId': z.string()}),
                handler: workflowCapabilities,
            },
        

             'jira.AllWorkflowSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number()}),
                handler: AllWorkflowSchemes,
            },
        

             'jira.WorkflowSchemeProjectAssociations/sync': {
                schema: z.object({
                  'projectId': z.string()}),
                handler: WorkflowSchemeProjectAssociations,
            },
        

             'jira.WorkflowScheme/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'returnDraftIfExists': z.boolean()}),
                handler: WorkflowScheme,
            },
        

             'jira.DefaultWorkflow/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'returnDraftIfExists': z.boolean()}),
                handler: DefaultWorkflow,
            },
        

             'jira.WorkflowSchemeDraft/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: WorkflowSchemeDraft,
            },
        

             'jira.DraftDefaultWorkflow/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number()}),
                handler: DraftDefaultWorkflow,
            },
        

             'jira.WorkflowSchemeDraftIssueType/sync': {
                schema: z.object({
                  'id': z.string(),
'issueType': z.string(),
'id': z.number()}),
                handler: WorkflowSchemeDraftIssueType,
            },
        

             'jira.DraftWorkflow/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'workflowName': z.string()}),
                handler: DraftWorkflow,
            },
        

             'jira.WorkflowSchemeIssueType/sync': {
                schema: z.object({
                  'id': z.string(),
'issueType': z.string(),
'id': z.number(),
'returnDraftIfExists': z.boolean()}),
                handler: WorkflowSchemeIssueType,
            },
        

             'jira.Workflow/sync': {
                schema: z.object({
                  'id': z.string(),
'id': z.number(),
'workflowName': z.string(),
'returnDraftIfExists': z.boolean()}),
                handler: Workflow,
            },
        

             'jira.IdsOfWorklogsDeletedSince/sync': {
                schema: z.object({
                  'since': z.number()}),
                handler: IdsOfWorklogsDeletedSince,
            },
        

             'jira.IdsOfWorklogsModifiedSince/sync': {
                schema: z.object({
                  'since': z.number(),
'expand': z.string()}),
                handler: IdsOfWorklogsModifiedSince,
            },
        

             'jira.AddonPropertiesResource.AddonProperties_get/sync': {
                schema: z.object({
                  'addonKey': z.string()}),
                handler: AddonPropertiesResource.AddonProperties_get,
            },
        

             'jira.AddonPropertiesResource.AddonProperty_get/sync': {
                schema: z.object({
                  'addonKey': z.string(),
'propertyKey': z.string()}),
                handler: AddonPropertiesResource.AddonProperty_get,
            },
        

             'jira.DynamicModulesResource.Modules_get/sync': {
                schema: z.object({}),
                handler: DynamicModulesResource.Modules_get,
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
        SERVER: `https://auth.atlassian.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}

    