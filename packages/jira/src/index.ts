
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { getBanner } from './events/getBanner'
import { getCustomFieldConfiguration } from './events/getCustomFieldConfiguration'
import { getApplicationRole } from './events/getApplicationRole'
import { getAttachmentMeta } from './events/getAttachmentMeta'
import { getAttachment } from './events/getAttachment'
import { expandAttachmentForHumans } from './events/expandAttachmentForHumans'
import { expandAttachmentForMachines } from './events/expandAttachmentForMachines'
import { getAuditRecords } from './events/getAuditRecords'
import { getAllSystemAvatars } from './events/getAllSystemAvatars'
import { getBulkEditableFields } from './events/getBulkEditableFields'
import { getBulkOperationProgress } from './events/getBulkOperationProgress'
import { getAllUserDataClassificationLevels } from './events/getAllUserDataClassificationLevels'
import { getCommentPropertyKeys } from './events/getCommentPropertyKeys'
import { getCommentProperty } from './events/getCommentProperty'
import { findComponentsForProjects } from './events/findComponentsForProjects'
import { getComponent } from './events/getComponent'
import { getComponentRelatedIssues } from './events/getComponentRelatedIssues'
import { getConfiguration } from './events/getConfiguration'
import { getSelectedTimeTrackingImplementation } from './events/getSelectedTimeTrackingImplementation'
import { getSharedTimeTrackingConfiguration } from './events/getSharedTimeTrackingConfiguration'
import { getCustomFieldOption } from './events/getCustomFieldOption'
import { getAllDashboards } from './events/getAllDashboards'
import { getAllAvailableDashboardGadgets } from './events/getAllAvailableDashboardGadgets'
import { getDashboardsPaginated } from './events/getDashboardsPaginated'
import { getAllGadgets } from './events/getAllGadgets'
import { getDashboardItemPropertyKeys } from './events/getDashboardItemPropertyKeys'
import { getDashboardItemProperty } from './events/getDashboardItemProperty'
import { getDashboard } from './events/getDashboard'
import { getPolicy } from './events/getPolicy'
import { getPolicies } from './events/getPolicies'
import { getFieldsPaginated } from './events/getFieldsPaginated'
import { getTrashedFieldsPaginated } from './events/getTrashedFieldsPaginated'
import { getContextsForField } from './events/getContextsForField'
import { getDefaultValues } from './events/getDefaultValues'
import { getIssueTypeMappingsForContexts } from './events/getIssueTypeMappingsForContexts'
import { getProjectContextMapping } from './events/getProjectContextMapping'
import { getOptionsForContext } from './events/getOptionsForContext'
import { getContextsForFieldDeprecated } from './events/getContextsForFieldDeprecated'
import { getScreensForField } from './events/getScreensForField'
import { getAllIssueFieldOptions } from './events/getAllIssueFieldOptions'
import { getSelectableIssueFieldOptions } from './events/getSelectableIssueFieldOptions'
import { getVisibleIssueFieldOptions } from './events/getVisibleIssueFieldOptions'
import { getIssueFieldOption } from './events/getIssueFieldOption'
import { getAllFieldConfigurations } from './events/getAllFieldConfigurations'
import { getFieldConfigurationItems } from './events/getFieldConfigurationItems'
import { getAllFieldConfigurationSchemes } from './events/getAllFieldConfigurationSchemes'
import { getFieldConfigurationSchemeMappings } from './events/getFieldConfigurationSchemeMappings'
import { getFieldConfigurationSchemeProjectMapping } from './events/getFieldConfigurationSchemeProjectMapping'
import { getDefaultShareScope } from './events/getDefaultShareScope'
import { getFiltersPaginated } from './events/getFiltersPaginated'
import { getFilter } from './events/getFilter'
import { getSharePermission } from './events/getSharePermission'
import { getGroup } from './events/getGroup'
import { bulkGetGroups } from './events/bulkGetGroups'
import { getUsersFromGroup } from './events/getUsersFromGroup'
import { findGroups } from './events/findGroups'
import { findUsersAndGroups } from './events/findUsersAndGroups'
import { getLicense } from './events/getLicense'
import { getCreateIssueMeta } from './events/getCreateIssueMeta'
import { getCreateIssueMetaIssueTypes } from './events/getCreateIssueMetaIssueTypes'
import { getCreateIssueMetaIssueTypeId } from './events/getCreateIssueMetaIssueTypeId'
import { getIssueLimitReport } from './events/getIssueLimitReport'
import { getIssuePickerResource } from './events/getIssuePickerResource'
import { getIssue } from './events/getIssue'
import { getChangeLogs } from './events/getChangeLogs'
import { getComments } from './events/getComments'
import { getComment } from './events/getComment'
import { getEditIssueMeta } from './events/getEditIssueMeta'
import { getIssuePropertyKeys } from './events/getIssuePropertyKeys'
import { getIssueProperty } from './events/getIssueProperty'
import { getRemoteIssueLinks } from './events/getRemoteIssueLinks'
import { getRemoteIssueLinkById } from './events/getRemoteIssueLinkById'
import { getTransitions } from './events/getTransitions'
import { getVotes } from './events/getVotes'
import { getIssueWatchers } from './events/getIssueWatchers'
import { getIssueWorklog } from './events/getIssueWorklog'
import { getWorklog } from './events/getWorklog'
import { getWorklogPropertyKeys } from './events/getWorklogPropertyKeys'
import { getWorklogProperty } from './events/getWorklogProperty'
import { getIssueLink } from './events/getIssueLink'
import { getIssueLinkTypes } from './events/getIssueLinkTypes'
import { getIssueLinkType } from './events/getIssueLinkType'
import { getIssueSecuritySchemes } from './events/getIssueSecuritySchemes'
import { getSecurityLevels } from './events/getSecurityLevels'
import { getSecurityLevelMembers } from './events/getSecurityLevelMembers'
import { searchProjectsUsingSecuritySchemes } from './events/searchProjectsUsingSecuritySchemes'
import { searchSecuritySchemes } from './events/searchSecuritySchemes'
import { getIssueSecurityScheme } from './events/getIssueSecurityScheme'
import { getIssueSecurityLevelMembers } from './events/getIssueSecurityLevelMembers'
import { getIssueType } from './events/getIssueType'
import { getIssueTypePropertyKeys } from './events/getIssueTypePropertyKeys'
import { getIssueTypeProperty } from './events/getIssueTypeProperty'
import { getAllIssueTypeSchemes } from './events/getAllIssueTypeSchemes'
import { getIssueTypeSchemesMapping } from './events/getIssueTypeSchemesMapping'
import { getIssueTypeSchemeForProjects } from './events/getIssueTypeSchemeForProjects'
import { getIssueTypeScreenSchemes } from './events/getIssueTypeScreenSchemes'
import { getIssueTypeScreenSchemeMappings } from './events/getIssueTypeScreenSchemeMappings'
import { getIssueTypeScreenSchemeProjectAssociations } from './events/getIssueTypeScreenSchemeProjectAssociations'
import { getProjectsForIssueTypeScreenScheme } from './events/getProjectsForIssueTypeScreenScheme'
import { getAutoComplete } from './events/getAutoComplete'
import { getFieldAutoCompleteForQueryString } from './events/getFieldAutoCompleteForQueryString'
import { getPrecomputations } from './events/getPrecomputations'
import { getAllLabels } from './events/getAllLabels'
import { getApproximateLicenseCount } from './events/getApproximateLicenseCount'
import { getApproximateApplicationLicenseCount } from './events/getApproximateApplicationLicenseCount'
import { getMyPermissions } from './events/getMyPermissions'
import { getLocale } from './events/getLocale'
import { getCurrentUser } from './events/getCurrentUser'
import { getNotificationSchemes } from './events/getNotificationSchemes'
import { getNotificationSchemeToProjectMappings } from './events/getNotificationSchemeToProjectMappings'
import { getNotificationScheme } from './events/getNotificationScheme'
import { getAllPermissions } from './events/getAllPermissions'
import { getAllPermissionSchemes } from './events/getAllPermissionSchemes'
import { getPermissionScheme } from './events/getPermissionScheme'
import { getPermissionSchemeGrants } from './events/getPermissionSchemeGrants'
import { getPermissionSchemeGrant } from './events/getPermissionSchemeGrant'
import { searchPriorities } from './events/searchPriorities'
import { getPriority } from './events/getPriority'
import { getPrioritySchemes } from './events/getPrioritySchemes'
import { getAvailablePrioritiesByPriorityScheme } from './events/getAvailablePrioritiesByPriorityScheme'
import { getPrioritiesByPriorityScheme } from './events/getPrioritiesByPriorityScheme'
import { getProjectsByPriorityScheme } from './events/getProjectsByPriorityScheme'
import { searchProjects } from './events/searchProjects'
import { getProjectTypeByKey } from './events/getProjectTypeByKey'
import { getAccessibleProjectTypeByKey } from './events/getAccessibleProjectTypeByKey'
import { getProject } from './events/getProject'
import { getAllProjectAvatars } from './events/getAllProjectAvatars'
import { getProjectComponentsPaginated } from './events/getProjectComponentsPaginated'
import { getFeaturesForProject } from './events/getFeaturesForProject'
import { getProjectPropertyKeys } from './events/getProjectPropertyKeys'
import { getProjectProperty } from './events/getProjectProperty'
import { getProjectRole } from './events/getProjectRole'
import { getProjectVersionsPaginated } from './events/getProjectVersionsPaginated'
import { getProjectEmail } from './events/getProjectEmail'
import { getHierarchy } from './events/getHierarchy'
import { getProjectIssueSecurityScheme } from './events/getProjectIssueSecurityScheme'
import { getNotificationSchemeForProject } from './events/getNotificationSchemeForProject'
import { getAssignedPermissionScheme } from './events/getAssignedPermissionScheme'
import { getSecurityLevelsForProject } from './events/getSecurityLevelsForProject'
import { getProjectCategoryById } from './events/getProjectCategoryById'
import { validateProjectKey } from './events/validateProjectKey'
import { searchResolutions } from './events/searchResolutions'
import { getResolution } from './events/getResolution'
import { getProjectRoleById } from './events/getProjectRoleById'
import { getProjectRoleActorsForRole } from './events/getProjectRoleActorsForRole'
import { getScreens } from './events/getScreens'
import { getScreenSchemes } from './events/getScreenSchemes'
import { searchForIssuesUsingJql } from './events/searchForIssuesUsingJql'
import { getIssueSecurityLevel } from './events/getIssueSecurityLevel'
import { getServerInfo } from './events/getServerInfo'
import { getStatus } from './events/getStatus'
import { getStatusCategory } from './events/getStatusCategory'
import { search } from './events/search'
import { getTask } from './events/getTask'
import { getUiModifications } from './events/getUiModifications'
import { getAvatars } from './events/getAvatars'
import { getAvatarImageByType } from './events/getAvatarImageByType'
import { getAvatarImageByID } from './events/getAvatarImageByID'
import { getAvatarImageByOwner } from './events/getAvatarImageByOwner'
import { getUser } from './events/getUser'
import { bulkGetUsers } from './events/bulkGetUsers'
import { getUserEmail } from './events/getUserEmail'
import { getUserEmailBulk } from './events/getUserEmailBulk'
import { findUsersForPicker } from './events/findUsersForPicker'
import { getUserPropertyKeys } from './events/getUserPropertyKeys'
import { getUserProperty } from './events/getUserProperty'
import { findUsersByQuery } from './events/findUsersByQuery'
import { findUserKeysByQuery } from './events/findUserKeysByQuery'
import { getVersion } from './events/getVersion'
import { getVersionRelatedIssues } from './events/getVersionRelatedIssues'
import { getVersionUnresolvedIssues } from './events/getVersionUnresolvedIssues'
import { getDynamicWebhooksForApp } from './events/getDynamicWebhooksForApp'
import { getFailedWebhooks } from './events/getFailedWebhooks'
import { getWorkflowTransitionRuleConfigurations } from './events/getWorkflowTransitionRuleConfigurations'
import { getWorkflowsPaginated } from './events/getWorkflowsPaginated'
import { getWorkflowTransitionProperties } from './events/getWorkflowTransitionProperties'
import { workflowCapabilities } from './events/workflowCapabilities'
import { getAllWorkflowSchemes } from './events/getAllWorkflowSchemes'
import { getWorkflowSchemeProjectAssociations } from './events/getWorkflowSchemeProjectAssociations'
import { getWorkflowScheme } from './events/getWorkflowScheme'
import { getDefaultWorkflow } from './events/getDefaultWorkflow'
import { getWorkflowSchemeDraft } from './events/getWorkflowSchemeDraft'
import { getDraftDefaultWorkflow } from './events/getDraftDefaultWorkflow'
import { getWorkflowSchemeDraftIssueType } from './events/getWorkflowSchemeDraftIssueType'
import { getDraftWorkflow } from './events/getDraftWorkflow'
import { getWorkflowSchemeIssueType } from './events/getWorkflowSchemeIssueType'
import { getWorkflow } from './events/getWorkflow'
import { getIdsOfWorklogsDeletedSince } from './events/getIdsOfWorklogsDeletedSince'
import { getIdsOfWorklogsModifiedSince } from './events/getIdsOfWorklogsModifiedSince'
import { AddonPropertiesResource.getAddonProperties_get } from './events/AddonPropertiesResource.getAddonProperties_get'
import { AddonPropertiesResource.getAddonProperty_get } from './events/AddonPropertiesResource.getAddonProperty_get'
import { DynamicModulesResource.getModules_get } from './events/DynamicModulesResource.getModules_get'

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
                handler: getBanner,
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
'maxResults': z.number(),
fieldIdOrKey: z.string()}),
                handler: getCustomFieldConfiguration,
            },
        

             'jira.ApplicationRole/sync': {
                schema: z.object({
                  'key': z.string(),
key: z.string()}),
                handler: getApplicationRole,
            },
        

             'jira.AttachmentMeta/sync': {
                schema: z.object({}),
                handler: getAttachmentMeta,
            },
        

             'jira.Attachment/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getAttachment,
            },
        

             'jira.expandAttachmentForHumans/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: expandAttachmentForHumans,
            },
        

             'jira.expandAttachmentForMachines/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: expandAttachmentForMachines,
            },
        

             'jira.AuditRecords/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number(),
'filter': z.string(),
'from': z.string(),
'to': z.string()}),
                handler: getAuditRecords,
            },
        

             'jira.AllSystemAvatars/sync': {
                schema: z.object({
                  'type': z.string(),
type: z.string()}),
                handler: getAllSystemAvatars,
            },
        

             'jira.BulkEditableFields/sync': {
                schema: z.object({
                  'issueIdsOrKeys': z.string(),
'searchText': z.string(),
'endingBefore': z.string(),
'startingAfter': z.string()}),
                handler: getBulkEditableFields,
            },
        

             'jira.BulkOperationProgress/sync': {
                schema: z.object({
                  'taskId': z.string(),
taskId: z.string()}),
                handler: getBulkOperationProgress,
            },
        

             'jira.AllUserDataClassificationLevels/sync': {
                schema: z.object({
                  'status': z.string(),
'orderBy': z.string()}),
                handler: getAllUserDataClassificationLevels,
            },
        

             'jira.CommentPropertyKeys/sync': {
                schema: z.object({
                  'commentId': z.string(),
commentId: z.string()}),
                handler: getCommentPropertyKeys,
            },
        

             'jira.CommentProperty/sync': {
                schema: z.object({
                  'commentId': z.string(),
'propertyKey': z.string(),
commentId: z.string(),
propertyKey: z.string()}),
                handler: getCommentProperty,
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
                  'id': z.string(),
id: z.string()}),
                handler: getComponent,
            },
        

             'jira.ComponentRelatedIssues/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getComponentRelatedIssues,
            },
        

             'jira.Configuration/sync': {
                schema: z.object({}),
                handler: getConfiguration,
            },
        

             'jira.SelectedTimeTrackingImplementation/sync': {
                schema: z.object({}),
                handler: getSelectedTimeTrackingImplementation,
            },
        

             'jira.SharedTimeTrackingConfiguration/sync': {
                schema: z.object({}),
                handler: getSharedTimeTrackingConfiguration,
            },
        

             'jira.CustomFieldOption/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getCustomFieldOption,
            },
        

             'jira.AllDashboards/sync': {
                schema: z.object({
                  'filter': z.string(),
'startAt': z.number(),
'maxResults': z.number()}),
                handler: getAllDashboards,
            },
        

             'jira.AllAvailableDashboardGadgets/sync': {
                schema: z.object({}),
                handler: getAllAvailableDashboardGadgets,
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
                handler: getDashboardsPaginated,
            },
        

             'jira.AllGadgets/sync': {
                schema: z.object({
                  'dashboardId': z.number(),
'moduleKey': z.string(),
'uri': z.string(),
'gadgetId': z.string(),
dashboardId: z.string()}),
                handler: getAllGadgets,
            },
        

             'jira.DashboardItemPropertyKeys/sync': {
                schema: z.object({
                  'dashboardId': z.string(),
'itemId': z.string(),
dashboardId: z.string(),
itemId: z.string()}),
                handler: getDashboardItemPropertyKeys,
            },
        

             'jira.DashboardItemProperty/sync': {
                schema: z.object({
                  'dashboardId': z.string(),
'itemId': z.string(),
'propertyKey': z.string(),
dashboardId: z.string(),
itemId: z.string(),
propertyKey: z.string()}),
                handler: getDashboardItemProperty,
            },
        

             'jira.Dashboard/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getDashboard,
            },
        

             'jira.Policy/sync': {
                schema: z.object({}),
                handler: getPolicy,
            },
        

             'jira.Policies/sync': {
                schema: z.object({
                  'ids': z.string()}),
                handler: getPolicies,
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
                handler: getFieldsPaginated,
            },
        

             'jira.TrashedFieldsPaginated/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'query': z.string(),
'expand': z.string(),
'orderBy': z.string()}),
                handler: getTrashedFieldsPaginated,
            },
        

             'jira.ContextsForField/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'isAnyIssueType': z.boolean(),
'isGlobalContext': z.boolean(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
fieldId: z.string()}),
                handler: getContextsForField,
            },
        

             'jira.DefaultValues/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
fieldId: z.string()}),
                handler: getDefaultValues,
            },
        

             'jira.IssueTypeMappingsForContexts/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
fieldId: z.string()}),
                handler: getIssueTypeMappingsForContexts,
            },
        

             'jira.ProjectContextMapping/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
fieldId: z.string()}),
                handler: getProjectContextMapping,
            },
        

             'jira.OptionsForContext/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'contextId': z.number(),
'optionId': z.number(),
'onlyOptions': z.boolean(),
'startAt': z.number(),
'maxResults': z.number(),
fieldId: z.string(),
contextId: z.string()}),
                handler: getOptionsForContext,
            },
        

             'jira.ContextsForFieldDeprecated/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
fieldId: z.string()}),
                handler: getContextsForFieldDeprecated,
            },
        

             'jira.ScreensForField/sync': {
                schema: z.object({
                  'fieldId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'expand': z.string(),
fieldId: z.string()}),
                handler: getScreensForField,
            },
        

             'jira.AllIssueFieldOptions/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'fieldKey': z.string(),
fieldKey: z.string()}),
                handler: getAllIssueFieldOptions,
            },
        

             'jira.SelectableIssueFieldOptions/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.number(),
'fieldKey': z.string(),
fieldKey: z.string()}),
                handler: getSelectableIssueFieldOptions,
            },
        

             'jira.VisibleIssueFieldOptions/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.number(),
'fieldKey': z.string(),
fieldKey: z.string()}),
                handler: getVisibleIssueFieldOptions,
            },
        

             'jira.IssueFieldOption/sync': {
                schema: z.object({
                  'fieldKey': z.string(),
'optionId': z.number(),
fieldKey: z.string(),
optionId: z.string()}),
                handler: getIssueFieldOption,
            },
        

             'jira.AllFieldConfigurations/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'isDefault': z.boolean(),
'query': z.string()}),
                handler: getAllFieldConfigurations,
            },
        

             'jira.FieldConfigurationItems/sync': {
                schema: z.object({
                  'id': z.number(),
'startAt': z.number(),
'maxResults': z.number(),
id: z.string()}),
                handler: getFieldConfigurationItems,
            },
        

             'jira.AllFieldConfigurationSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string()}),
                handler: getAllFieldConfigurationSchemes,
            },
        

             'jira.FieldConfigurationSchemeMappings/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'fieldConfigurationSchemeId': z.string()}),
                handler: getFieldConfigurationSchemeMappings,
            },
        

             'jira.FieldConfigurationSchemeProjectMapping/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.string()}),
                handler: getFieldConfigurationSchemeProjectMapping,
            },
        

             'jira.DefaultShareScope/sync': {
                schema: z.object({}),
                handler: getDefaultShareScope,
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
                handler: getFiltersPaginated,
            },
        

             'jira.Filter/sync': {
                schema: z.object({
                  'id': z.number(),
'expand': z.string(),
'overrideSharePermissions': z.boolean(),
id: z.string()}),
                handler: getFilter,
            },
        

             'jira.SharePermission/sync': {
                schema: z.object({
                  'id': z.number(),
'permissionId': z.number(),
id: z.string(),
permissionId: z.string()}),
                handler: getSharePermission,
            },
        

             'jira.Group/sync': {
                schema: z.object({
                  'groupname': z.string(),
'groupId': z.string(),
'expand': z.string()}),
                handler: getGroup,
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
                handler: getUsersFromGroup,
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
                handler: getLicense,
            },
        

             'jira.CreateIssueMeta/sync': {
                schema: z.object({
                  'projectIds': z.string(),
'projectKeys': z.string(),
'issuetypeIds': z.string(),
'issuetypeNames': z.string(),
'expand': z.string()}),
                handler: getCreateIssueMeta,
            },
        

             'jira.CreateIssueMetaIssueTypes/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
projectIdOrKey: z.string()}),
                handler: getCreateIssueMetaIssueTypes,
            },
        

             'jira.CreateIssueMetaIssueTypeId/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'issueTypeId': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
projectIdOrKey: z.string(),
issueTypeId: z.string()}),
                handler: getCreateIssueMetaIssueTypeId,
            },
        

             'jira.IssueLimitReport/sync': {
                schema: z.object({
                  'isReturningKeys': z.boolean()}),
                handler: getIssueLimitReport,
            },
        

             'jira.IssuePickerResource/sync': {
                schema: z.object({
                  'query': z.string(),
'currentJQL': z.string(),
'currentIssueKey': z.string(),
'currentProjectId': z.string(),
'showSubTasks': z.boolean(),
'showSubTaskParent': z.boolean()}),
                handler: getIssuePickerResource,
            },
        

             'jira.Issue/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'fields': z.string(),
'fieldsByKeys': z.boolean(),
'expand': z.string(),
'properties': z.string(),
'updateHistory': z.boolean(),
'failFast': z.boolean(),
issueIdOrKey: z.string()}),
                handler: getIssue,
            },
        

             'jira.ChangeLogs/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
issueIdOrKey: z.string()}),
                handler: getChangeLogs,
            },
        

             'jira.Comments/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'expand': z.string(),
issueIdOrKey: z.string()}),
                handler: getComments,
            },
        

             'jira.Comment/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'id': z.string(),
'expand': z.string(),
issueIdOrKey: z.string(),
id: z.string()}),
                handler: getComment,
            },
        

             'jira.EditIssueMeta/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'overrideScreenSecurity': z.boolean(),
'overrideEditableFlag': z.boolean(),
issueIdOrKey: z.string()}),
                handler: getEditIssueMeta,
            },
        

             'jira.IssuePropertyKeys/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
issueIdOrKey: z.string()}),
                handler: getIssuePropertyKeys,
            },
        

             'jira.IssueProperty/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'propertyKey': z.string(),
issueIdOrKey: z.string(),
propertyKey: z.string()}),
                handler: getIssueProperty,
            },
        

             'jira.RemoteIssueLinks/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'globalId': z.string(),
issueIdOrKey: z.string()}),
                handler: getRemoteIssueLinks,
            },
        

             'jira.RemoteIssueLinkById/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'linkId': z.string(),
issueIdOrKey: z.string(),
linkId: z.string()}),
                handler: getRemoteIssueLinkById,
            },
        

             'jira.Transitions/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'expand': z.string(),
'transitionId': z.string(),
'skipRemoteOnlyCondition': z.boolean(),
'includeUnavailableTransitions': z.boolean(),
'sortByOpsBarAndStatus': z.boolean(),
issueIdOrKey: z.string()}),
                handler: getTransitions,
            },
        

             'jira.Votes/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
issueIdOrKey: z.string()}),
                handler: getVotes,
            },
        

             'jira.IssueWatchers/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
issueIdOrKey: z.string()}),
                handler: getIssueWatchers,
            },
        

             'jira.IssueWorklog/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'startedAfter': z.number(),
'startedBefore': z.number(),
'expand': z.string(),
issueIdOrKey: z.string()}),
                handler: getIssueWorklog,
            },
        

             'jira.Worklog/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'id': z.string(),
'expand': z.string(),
issueIdOrKey: z.string(),
id: z.string()}),
                handler: getWorklog,
            },
        

             'jira.WorklogPropertyKeys/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'worklogId': z.string(),
issueIdOrKey: z.string(),
worklogId: z.string()}),
                handler: getWorklogPropertyKeys,
            },
        

             'jira.WorklogProperty/sync': {
                schema: z.object({
                  'issueIdOrKey': z.string(),
'worklogId': z.string(),
'propertyKey': z.string(),
issueIdOrKey: z.string(),
worklogId: z.string(),
propertyKey: z.string()}),
                handler: getWorklogProperty,
            },
        

             'jira.IssueLink/sync': {
                schema: z.object({
                  'linkId': z.string(),
linkId: z.string()}),
                handler: getIssueLink,
            },
        

             'jira.IssueLinkTypes/sync': {
                schema: z.object({}),
                handler: getIssueLinkTypes,
            },
        

             'jira.IssueLinkType/sync': {
                schema: z.object({
                  'issueLinkTypeId': z.string(),
issueLinkTypeId: z.string()}),
                handler: getIssueLinkType,
            },
        

             'jira.IssueSecuritySchemes/sync': {
                schema: z.object({}),
                handler: getIssueSecuritySchemes,
            },
        

             'jira.SecurityLevels/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'schemeId': z.string(),
'onlyDefault': z.boolean()}),
                handler: getSecurityLevels,
            },
        

             'jira.SecurityLevelMembers/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'schemeId': z.string(),
'levelId': z.string(),
'expand': z.string()}),
                handler: getSecurityLevelMembers,
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
                  'id': z.number(),
id: z.string()}),
                handler: getIssueSecurityScheme,
            },
        

             'jira.IssueSecurityLevelMembers/sync': {
                schema: z.object({
                  'issueSecuritySchemeId': z.number(),
'startAt': z.number(),
'maxResults': z.number(),
'issueSecurityLevelId': z.string(),
'expand': z.string(),
issueSecuritySchemeId: z.string()}),
                handler: getIssueSecurityLevelMembers,
            },
        

             'jira.IssueType/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getIssueType,
            },
        

             'jira.IssueTypePropertyKeys/sync': {
                schema: z.object({
                  'issueTypeId': z.string(),
issueTypeId: z.string()}),
                handler: getIssueTypePropertyKeys,
            },
        

             'jira.IssueTypeProperty/sync': {
                schema: z.object({
                  'issueTypeId': z.string(),
'propertyKey': z.string(),
issueTypeId: z.string(),
propertyKey: z.string()}),
                handler: getIssueTypeProperty,
            },
        

             'jira.AllIssueTypeSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'orderBy': z.string(),
'expand': z.string(),
'queryString': z.string()}),
                handler: getAllIssueTypeSchemes,
            },
        

             'jira.IssueTypeSchemesMapping/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'issueTypeSchemeId': z.string()}),
                handler: getIssueTypeSchemesMapping,
            },
        

             'jira.IssueTypeSchemeForProjects/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.string()}),
                handler: getIssueTypeSchemeForProjects,
            },
        

             'jira.IssueTypeScreenSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'queryString': z.string(),
'orderBy': z.string(),
'expand': z.string()}),
                handler: getIssueTypeScreenSchemes,
            },
        

             'jira.IssueTypeScreenSchemeMappings/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'issueTypeScreenSchemeId': z.string()}),
                handler: getIssueTypeScreenSchemeMappings,
            },
        

             'jira.IssueTypeScreenSchemeProjectAssociations/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'projectId': z.string()}),
                handler: getIssueTypeScreenSchemeProjectAssociations,
            },
        

             'jira.ProjectsForIssueTypeScreenScheme/sync': {
                schema: z.object({
                  'issueTypeScreenSchemeId': z.number(),
'startAt': z.number(),
'maxResults': z.number(),
'query': z.string(),
issueTypeScreenSchemeId: z.string()}),
                handler: getProjectsForIssueTypeScreenScheme,
            },
        

             'jira.AutoComplete/sync': {
                schema: z.object({}),
                handler: getAutoComplete,
            },
        

             'jira.FieldAutoCompleteForQueryString/sync': {
                schema: z.object({
                  'fieldName': z.string(),
'fieldValue': z.string(),
'predicateName': z.string(),
'predicateValue': z.string()}),
                handler: getFieldAutoCompleteForQueryString,
            },
        

             'jira.Precomputations/sync': {
                schema: z.object({
                  'functionKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string()}),
                handler: getPrecomputations,
            },
        

             'jira.AllLabels/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number()}),
                handler: getAllLabels,
            },
        

             'jira.ApproximateLicenseCount/sync': {
                schema: z.object({}),
                handler: getApproximateLicenseCount,
            },
        

             'jira.ApproximateApplicationLicenseCount/sync': {
                schema: z.object({
                  'applicationKey': z.string(),
applicationKey: z.string()}),
                handler: getApproximateApplicationLicenseCount,
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
                handler: getMyPermissions,
            },
        

             'jira.Locale/sync': {
                schema: z.object({}),
                handler: getLocale,
            },
        

             'jira.CurrentUser/sync': {
                schema: z.object({
                  'expand': z.string()}),
                handler: getCurrentUser,
            },
        

             'jira.NotificationSchemes/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'id': z.string(),
'projectId': z.string(),
'onlyDefault': z.boolean(),
'expand': z.string()}),
                handler: getNotificationSchemes,
            },
        

             'jira.NotificationSchemeToProjectMappings/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'notificationSchemeId': z.string(),
'projectId': z.string()}),
                handler: getNotificationSchemeToProjectMappings,
            },
        

             'jira.NotificationScheme/sync': {
                schema: z.object({
                  'id': z.number(),
'expand': z.string(),
id: z.string()}),
                handler: getNotificationScheme,
            },
        

             'jira.AllPermissions/sync': {
                schema: z.object({}),
                handler: getAllPermissions,
            },
        

             'jira.AllPermissionSchemes/sync': {
                schema: z.object({
                  'expand': z.string()}),
                handler: getAllPermissionSchemes,
            },
        

             'jira.PermissionScheme/sync': {
                schema: z.object({
                  'schemeId': z.number(),
'expand': z.string(),
schemeId: z.string()}),
                handler: getPermissionScheme,
            },
        

             'jira.PermissionSchemeGrants/sync': {
                schema: z.object({
                  'schemeId': z.number(),
'expand': z.string(),
schemeId: z.string()}),
                handler: getPermissionSchemeGrants,
            },
        

             'jira.PermissionSchemeGrant/sync': {
                schema: z.object({
                  'schemeId': z.number(),
'permissionId': z.number(),
'expand': z.string(),
schemeId: z.string(),
permissionId: z.string()}),
                handler: getPermissionSchemeGrant,
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
                  'id': z.string(),
id: z.string()}),
                handler: getPriority,
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
                handler: getPrioritySchemes,
            },
        

             'jira.AvailablePrioritiesByPriorityScheme/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'query': z.string(),
'schemeId': z.string(),
'exclude': z.string()}),
                handler: getAvailablePrioritiesByPriorityScheme,
            },
        

             'jira.PrioritiesByPriorityScheme/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'schemeId': z.string(),
schemeId: z.string()}),
                handler: getPrioritiesByPriorityScheme,
            },
        

             'jira.ProjectsByPriorityScheme/sync': {
                schema: z.object({
                  'startAt': z.string(),
'maxResults': z.string(),
'projectId': z.string(),
'schemeId': z.string(),
'query': z.string(),
schemeId: z.string()}),
                handler: getProjectsByPriorityScheme,
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
                  'projectTypeKey': z.string(),
projectTypeKey: z.string()}),
                handler: getProjectTypeByKey,
            },
        

             'jira.AccessibleProjectTypeByKey/sync': {
                schema: z.object({
                  'projectTypeKey': z.string(),
projectTypeKey: z.string()}),
                handler: getAccessibleProjectTypeByKey,
            },
        

             'jira.Project/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'expand': z.string(),
'properties': z.string(),
projectIdOrKey: z.string()}),
                handler: getProject,
            },
        

             'jira.AllProjectAvatars/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
projectIdOrKey: z.string()}),
                handler: getAllProjectAvatars,
            },
        

             'jira.ProjectComponentsPaginated/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'componentSource': z.string(),
'query': z.string(),
projectIdOrKey: z.string()}),
                handler: getProjectComponentsPaginated,
            },
        

             'jira.FeaturesForProject/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
projectIdOrKey: z.string()}),
                handler: getFeaturesForProject,
            },
        

             'jira.ProjectPropertyKeys/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
projectIdOrKey: z.string()}),
                handler: getProjectPropertyKeys,
            },
        

             'jira.ProjectProperty/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'propertyKey': z.string(),
projectIdOrKey: z.string(),
propertyKey: z.string()}),
                handler: getProjectProperty,
            },
        

             'jira.ProjectRole/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'id': z.number(),
'excludeInactiveUsers': z.boolean(),
projectIdOrKey: z.string(),
id: z.string()}),
                handler: getProjectRole,
            },
        

             'jira.ProjectVersionsPaginated/sync': {
                schema: z.object({
                  'projectIdOrKey': z.string(),
'startAt': z.number(),
'maxResults': z.number(),
'orderBy': z.string(),
'query': z.string(),
'status': z.string(),
'expand': z.string(),
projectIdOrKey: z.string()}),
                handler: getProjectVersionsPaginated,
            },
        

             'jira.ProjectEmail/sync': {
                schema: z.object({
                  'projectId': z.number(),
projectId: z.string()}),
                handler: getProjectEmail,
            },
        

             'jira.Hierarchy/sync': {
                schema: z.object({
                  'projectId': z.number(),
projectId: z.string()}),
                handler: getHierarchy,
            },
        

             'jira.ProjectIssueSecurityScheme/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string(),
projectKeyOrId: z.string()}),
                handler: getProjectIssueSecurityScheme,
            },
        

             'jira.NotificationSchemeForProject/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string(),
'expand': z.string(),
projectKeyOrId: z.string()}),
                handler: getNotificationSchemeForProject,
            },
        

             'jira.AssignedPermissionScheme/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string(),
'expand': z.string(),
projectKeyOrId: z.string()}),
                handler: getAssignedPermissionScheme,
            },
        

             'jira.SecurityLevelsForProject/sync': {
                schema: z.object({
                  'projectKeyOrId': z.string(),
projectKeyOrId: z.string()}),
                handler: getSecurityLevelsForProject,
            },
        

             'jira.ProjectCategoryById/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: getProjectCategoryById,
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
                  'id': z.string(),
id: z.string()}),
                handler: getResolution,
            },
        

             'jira.ProjectRoleById/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: getProjectRoleById,
            },
        

             'jira.ProjectRoleActorsForRole/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: getProjectRoleActorsForRole,
            },
        

             'jira.Screens/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'queryString': z.string(),
'scope': z.string(),
'orderBy': z.string()}),
                handler: getScreens,
            },
        

             'jira.ScreenSchemes/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'id': z.string(),
'expand': z.string(),
'queryString': z.string(),
'orderBy': z.string()}),
                handler: getScreenSchemes,
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
                  'id': z.string(),
id: z.string()}),
                handler: getIssueSecurityLevel,
            },
        

             'jira.ServerInfo/sync': {
                schema: z.object({}),
                handler: getServerInfo,
            },
        

             'jira.Status/sync': {
                schema: z.object({
                  'idOrName': z.string(),
idOrName: z.string()}),
                handler: getStatus,
            },
        

             'jira.StatusCategory/sync': {
                schema: z.object({
                  'idOrKey': z.string(),
idOrKey: z.string()}),
                handler: getStatusCategory,
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
                  'taskId': z.string(),
taskId: z.string()}),
                handler: getTask,
            },
        

             'jira.UiModifications/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number(),
'expand': z.string()}),
                handler: getUiModifications,
            },
        

             'jira.Avatars/sync': {
                schema: z.object({
                  'type': z.string(),
'entityId': z.string(),
type: z.string(),
entityId: z.string()}),
                handler: getAvatars,
            },
        

             'jira.AvatarImageByType/sync': {
                schema: z.object({
                  'type': z.string(),
'size': z.string(),
'format': z.string(),
type: z.string()}),
                handler: getAvatarImageByType,
            },
        

             'jira.AvatarImageByID/sync': {
                schema: z.object({
                  'type': z.string(),
'id': z.number(),
'size': z.string(),
'format': z.string(),
type: z.string(),
id: z.string()}),
                handler: getAvatarImageByID,
            },
        

             'jira.AvatarImageByOwner/sync': {
                schema: z.object({
                  'type': z.string(),
'entityId': z.string(),
'size': z.string(),
'format': z.string(),
type: z.string(),
entityId: z.string()}),
                handler: getAvatarImageByOwner,
            },
        

             'jira.User/sync': {
                schema: z.object({
                  'accountId': z.string(),
'username': z.string(),
'key': z.string(),
'expand': z.string()}),
                handler: getUser,
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
                handler: getUserEmail,
            },
        

             'jira.UserEmailBulk/sync': {
                schema: z.object({
                  'accountId': z.string()}),
                handler: getUserEmailBulk,
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
                handler: getUserPropertyKeys,
            },
        

             'jira.UserProperty/sync': {
                schema: z.object({
                  'accountId': z.string(),
'userKey': z.string(),
'username': z.string(),
'propertyKey': z.string(),
propertyKey: z.string()}),
                handler: getUserProperty,
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
'expand': z.string(),
id: z.string()}),
                handler: getVersion,
            },
        

             'jira.VersionRelatedIssues/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getVersionRelatedIssues,
            },
        

             'jira.VersionUnresolvedIssues/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: getVersionUnresolvedIssues,
            },
        

             'jira.DynamicWebhooksForApp/sync': {
                schema: z.object({
                  'startAt': z.number(),
'maxResults': z.number()}),
                handler: getDynamicWebhooksForApp,
            },
        

             'jira.FailedWebhooks/sync': {
                schema: z.object({
                  'maxResults': z.number(),
'after': z.number()}),
                handler: getFailedWebhooks,
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
                handler: getWorkflowTransitionRuleConfigurations,
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
                handler: getWorkflowsPaginated,
            },
        

             'jira.WorkflowTransitionProperties/sync': {
                schema: z.object({
                  'transitionId': z.number(),
'includeReservedKeys': z.boolean(),
'key': z.string(),
'workflowName': z.string(),
'workflowMode': z.string(),
transitionId: z.string()}),
                handler: getWorkflowTransitionProperties,
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
                handler: getAllWorkflowSchemes,
            },
        

             'jira.WorkflowSchemeProjectAssociations/sync': {
                schema: z.object({
                  'projectId': z.string()}),
                handler: getWorkflowSchemeProjectAssociations,
            },
        

             'jira.WorkflowScheme/sync': {
                schema: z.object({
                  'id': z.number(),
'returnDraftIfExists': z.boolean(),
id: z.string()}),
                handler: getWorkflowScheme,
            },
        

             'jira.DefaultWorkflow/sync': {
                schema: z.object({
                  'id': z.number(),
'returnDraftIfExists': z.boolean(),
id: z.string()}),
                handler: getDefaultWorkflow,
            },
        

             'jira.WorkflowSchemeDraft/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: getWorkflowSchemeDraft,
            },
        

             'jira.DraftDefaultWorkflow/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: getDraftDefaultWorkflow,
            },
        

             'jira.WorkflowSchemeDraftIssueType/sync': {
                schema: z.object({
                  'id': z.number(),
'issueType': z.string(),
id: z.string(),
issueType: z.string()}),
                handler: getWorkflowSchemeDraftIssueType,
            },
        

             'jira.DraftWorkflow/sync': {
                schema: z.object({
                  'id': z.number(),
'workflowName': z.string(),
id: z.string()}),
                handler: getDraftWorkflow,
            },
        

             'jira.WorkflowSchemeIssueType/sync': {
                schema: z.object({
                  'id': z.number(),
'issueType': z.string(),
'returnDraftIfExists': z.boolean(),
id: z.string(),
issueType: z.string()}),
                handler: getWorkflowSchemeIssueType,
            },
        

             'jira.Workflow/sync': {
                schema: z.object({
                  'id': z.number(),
'workflowName': z.string(),
'returnDraftIfExists': z.boolean(),
id: z.string()}),
                handler: getWorkflow,
            },
        

             'jira.IdsOfWorklogsDeletedSince/sync': {
                schema: z.object({
                  'since': z.number()}),
                handler: getIdsOfWorklogsDeletedSince,
            },
        

             'jira.IdsOfWorklogsModifiedSince/sync': {
                schema: z.object({
                  'since': z.number(),
'expand': z.string()}),
                handler: getIdsOfWorklogsModifiedSince,
            },
        

             'jira.AddonPropertiesResource.AddonProperties_get/sync': {
                schema: z.object({
                  'addonKey': z.string(),
addonKey: z.string()}),
                handler: AddonPropertiesResource.getAddonProperties_get,
            },
        

             'jira.AddonPropertiesResource.AddonProperty_get/sync': {
                schema: z.object({
                  'addonKey': z.string(),
'propertyKey': z.string(),
addonKey: z.string(),
propertyKey: z.string()}),
                handler: AddonPropertiesResource.getAddonProperty_get,
            },
        

             'jira.DynamicModulesResource.Modules_get/sync': {
                schema: z.object({}),
                handler: DynamicModulesResource.getModules_get,
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
        SERVER: `https://auth.atlassian.com`,
        AUTHORIZATION_ENDPOINT: '/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    