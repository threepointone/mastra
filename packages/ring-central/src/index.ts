
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { getTopology } from './events/getTopology'
import { getAllTopologies } from './events/getAllTopologies'
import { getAllAttachments } from './events/getAllAttachments'
import { getAttachment } from './events/getAttachment'
import { getAllCategories } from './events/getAllCategories'
import { getCategory } from './events/getCategory'
import { getAllChannels } from './events/getAllChannels'
import { getChannel } from './events/getChannel'
import { getAllCommunities } from './events/getAllCommunities'
import { getCommunity } from './events/getCommunity'
import { getAllSources } from './events/getAllSources'
import { getSource } from './events/getSource'
import { getAllThreads } from './events/getAllThreads'
import { getThread } from './events/getThread'
import { openThread } from './events/openThread'
import { getAllContents } from './events/getAllContents'
import { getContent } from './events/getContent'
import { getAllCustomFields } from './events/getAllCustomFields'
import { getCustomField } from './events/getCustomField'
import { getAllEvents } from './events/getAllEvents'
import { getEvent } from './events/getEvent'
import { getAllFolders } from './events/getAllFolders'
import { getFolder } from './events/getFolder'
import { getAllIdentities } from './events/getAllIdentities'
import { getIdentity } from './events/getIdentity'
import { getAllIdentityGroups } from './events/getAllIdentityGroups'
import { getIdentityGroup } from './events/getIdentityGroup'
import { getAllInterventionComments } from './events/getAllInterventionComments'
import { getInterventionComment } from './events/getInterventionComment'
import { getAllInterventions } from './events/getAllInterventions'
import { getIntervention } from './events/getIntervention'
import { getAllPresenceStatus } from './events/getAllPresenceStatus'
import { getPresenceStatus } from './events/getPresenceStatus'
import { getAllReplyAssistantEntries } from './events/getAllReplyAssistantEntries'
import { getReplyAssistantEntry } from './events/getReplyAssistantEntry'
import { getAllReplyAssistantGroups } from './events/getAllReplyAssistantGroups'
import { getReplyAssistantGroup } from './events/getReplyAssistantGroup'
import { getAllReplyAssistantVersions } from './events/getAllReplyAssistantVersions'
import { getReplyAssistantVersion } from './events/getReplyAssistantVersion'
import { getAllRoles } from './events/getAllRoles'
import { getRole } from './events/getRole'
import { getAllSettings } from './events/getAllSettings'
import { getAllSurveys } from './events/getAllSurveys'
import { getSurvey } from './events/getSurvey'
import { getSurveyResponse } from './events/getSurveyResponse'
import { getAgentStatus } from './events/getAgentStatus'
import { getAllTags } from './events/getAllTags'
import { getTag } from './events/getTag'
import { getAllTasks } from './events/getAllTasks'
import { getTask } from './events/getTask'
import { getAllTeams } from './events/getAllTeams'
import { getTeam } from './events/getTeam'
import { getAllTimeSheets } from './events/getAllTimeSheets'
import { getTimeSheet } from './events/getTimeSheet'
import { getAllUserCapacities } from './events/getAllUserCapacities'
import { getUserCapacity } from './events/getUserCapacity'
import { getAllUsers } from './events/getAllUsers'
import { getUser } from './events/getUser'
import { getUserSourcesPermissions } from './events/getUserSourcesPermissions'
import { getAllUserSignatures } from './events/getAllUserSignatures'
import { getUserSignature } from './events/getUserSignature'
import { getAllWebhooks } from './events/getAllWebhooks'
import { getWebhook } from './events/getWebhook'

type Ring-centralConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class Ring-centralIntegration extends Integration {
  config: Ring-centralConfig;

  constructor({ config }: { config: Ring-centralConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'RING-CENTRAL',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'ring-central.Topology/sync': {
                schema: z.object({
                  'topologyId': z.string(),
topologyId: z.string()}),
                handler: getTopology,
            },
        

             'ring-central.AllTopologies/sync': {
                schema: z.object({}),
                handler: getAllTopologies,
            },
        

             'ring-central.AllAttachments/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number(),
'extension': z.string(),
'created_before': z.string(),
'created_after': z.string()}),
                handler: getAllAttachments,
            },
        

             'ring-central.Attachment/sync': {
                schema: z.object({
                  'attachmentId': z.string(),
attachmentId: z.string()}),
                handler: getAttachment,
            },
        

             'ring-central.AllCategories/sync': {
                schema: z.object({
                  'ids': z.string(),
'parent_id': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllCategories,
            },
        

             'ring-central.Category/sync': {
                schema: z.object({
                  'categoryId': z.string(),
categoryId: z.string()}),
                handler: getCategory,
            },
        

             'ring-central.AllChannels/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllChannels,
            },
        

             'ring-central.Channel/sync': {
                schema: z.object({
                  'channelId': z.string(),
channelId: z.string()}),
                handler: getChannel,
            },
        

             'ring-central.AllCommunities/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllCommunities,
            },
        

             'ring-central.Community/sync': {
                schema: z.object({
                  'communityId': z.string(),
communityId: z.string()}),
                handler: getCommunity,
            },
        

             'ring-central.AllSources/sync': {
                schema: z.object({
                  'permission': z.string(),
'offset': z.number(),
'active': z.boolean(),
'limit': z.number()}),
                handler: getAllSources,
            },
        

             'ring-central.Source/sync': {
                schema: z.object({
                  'sourceId': z.string(),
sourceId: z.string()}),
                handler: getSource,
            },
        

             'ring-central.AllThreads/sync': {
                schema: z.object({
                  'q': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllThreads,
            },
        

             'ring-central.Thread/sync': {
                schema: z.object({
                  'threadId': z.string(),
threadId: z.string()}),
                handler: getThread,
            },
        

             'ring-central.openThread/sync': {
                schema: z.object({
                  'threadId': z.string(),
threadId: z.string()}),
                handler: openThread,
            },
        

             'ring-central.AllContents/sync': {
                schema: z.object({
                  'q': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllContents,
            },
        

             'ring-central.Content/sync': {
                schema: z.object({
                  'contentId': z.string(),
contentId: z.string()}),
                handler: getContent,
            },
        

             'ring-central.AllCustomFields/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllCustomFields,
            },
        

             'ring-central.CustomField/sync': {
                schema: z.object({
                  'customFieldId': z.string(),
customFieldId: z.string()}),
                handler: getCustomField,
            },
        

             'ring-central.AllEvents/sync': {
                schema: z.object({
                  'q': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllEvents,
            },
        

             'ring-central.Event/sync': {
                schema: z.object({
                  'eventId': z.string(),
eventId: z.string()}),
                handler: getEvent,
            },
        

             'ring-central.AllFolders/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllFolders,
            },
        

             'ring-central.Folder/sync': {
                schema: z.object({
                  'folderId': z.string(),
folderId: z.string()}),
                handler: getFolder,
            },
        

             'ring-central.AllIdentities/sync': {
                schema: z.object({
                  'community_id': z.string(),
'source_id': z.string(),
'identity_group_id': z.string(),
'identity_group_ids': z.string(),
'user_id': z.string(),
'sort': z.string(),
'foreign_id': z.string(),
'uuid': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllIdentities,
            },
        

             'ring-central.Identity/sync': {
                schema: z.object({
                  'identityId': z.string(),
identityId: z.string()}),
                handler: getIdentity,
            },
        

             'ring-central.AllIdentityGroups/sync': {
                schema: z.object({
                  'firstname': z.string(),
'lastname': z.string(),
'email': z.string(),
'uuid': z.string(),
'ids': z.string(),
'sort': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllIdentityGroups,
            },
        

             'ring-central.IdentityGroup/sync': {
                schema: z.object({
                  'identityGroupId': z.string(),
identityGroupId: z.string()}),
                handler: getIdentityGroup,
            },
        

             'ring-central.AllInterventionComments/sync': {
                schema: z.object({
                  'intervention_id': z.string(),
'thread_id': z.string(),
'user_id': z.string(),
'identity_id': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllInterventionComments,
            },
        

             'ring-central.InterventionComment/sync': {
                schema: z.object({
                  'interventionCommentId': z.string(),
interventionCommentId: z.string()}),
                handler: getInterventionComment,
            },
        

             'ring-central.AllInterventions/sync': {
                schema: z.object({
                  'thread_id': z.string(),
'user_id': z.string(),
'identity_group_id': z.string(),
'identity_id': z.string(),
'status': z.string(),
'sort': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllInterventions,
            },
        

             'ring-central.Intervention/sync': {
                schema: z.object({
                  'interventionId': z.string(),
interventionId: z.string()}),
                handler: getIntervention,
            },
        

             'ring-central.AllPresenceStatus/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllPresenceStatus,
            },
        

             'ring-central.PresenceStatus/sync': {
                schema: z.object({
                  'presenceStatusId': z.string(),
presenceStatusId: z.string()}),
                handler: getPresenceStatus,
            },
        

             'ring-central.AllReplyAssistantEntries/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllReplyAssistantEntries,
            },
        

             'ring-central.ReplyAssistantEntry/sync': {
                schema: z.object({
                  'replyAssistantEntryId': z.string(),
replyAssistantEntryId: z.string()}),
                handler: getReplyAssistantEntry,
            },
        

             'ring-central.AllReplyAssistantGroups/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllReplyAssistantGroups,
            },
        

             'ring-central.ReplyAssistantGroup/sync': {
                schema: z.object({
                  'replyAssistantGroupId': z.string(),
replyAssistantGroupId: z.string()}),
                handler: getReplyAssistantGroup,
            },
        

             'ring-central.AllReplyAssistantVersions/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllReplyAssistantVersions,
            },
        

             'ring-central.ReplyAssistantVersion/sync': {
                schema: z.object({
                  'replyAssistantVersionId': z.string(),
replyAssistantVersionId: z.string()}),
                handler: getReplyAssistantVersion,
            },
        

             'ring-central.AllRoles/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllRoles,
            },
        

             'ring-central.Role/sync': {
                schema: z.object({
                  'roleId': z.string(),
roleId: z.string()}),
                handler: getRole,
            },
        

             'ring-central.AllSettings/sync': {
                schema: z.object({}),
                handler: getAllSettings,
            },
        

             'ring-central.AllSurveys/sync': {
                schema: z.object({}),
                handler: getAllSurveys,
            },
        

             'ring-central.Survey/sync': {
                schema: z.object({
                  'surveyId': z.string(),
surveyId: z.string()}),
                handler: getSurvey,
            },
        

             'ring-central.SurveyResponse/sync': {
                schema: z.object({
                  'surveyResponseId': z.string(),
surveyResponseId: z.string()}),
                handler: getSurveyResponse,
            },
        

             'ring-central.AgentStatus/sync': {
                schema: z.object({
                  'agentId': z.string(),
agentId: z.string()}),
                handler: getAgentStatus,
            },
        

             'ring-central.AllTags/sync': {
                schema: z.object({
                  'ids': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllTags,
            },
        

             'ring-central.Tag/sync': {
                schema: z.object({
                  'tagId': z.string(),
tagId: z.string()}),
                handler: getTag,
            },
        

             'ring-central.AllTasks/sync': {
                schema: z.object({
                  'queue': z.string(),
'channel_id': z.string(),
'step': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllTasks,
            },
        

             'ring-central.Task/sync': {
                schema: z.object({
                  'taskId': z.string(),
taskId: z.string()}),
                handler: getTask,
            },
        

             'ring-central.AllTeams/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllTeams,
            },
        

             'ring-central.Team/sync': {
                schema: z.object({
                  'teamId': z.string(),
teamId: z.string()}),
                handler: getTeam,
            },
        

             'ring-central.AllTimeSheets/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllTimeSheets,
            },
        

             'ring-central.TimeSheet/sync': {
                schema: z.object({
                  'timeSheetId': z.string(),
timeSheetId: z.string()}),
                handler: getTimeSheet,
            },
        

             'ring-central.AllUserCapacities/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: getAllUserCapacities,
            },
        

             'ring-central.UserCapacity/sync': {
                schema: z.object({
                  'userCapacityId': z.string(),
userCapacityId: z.string()}),
                handler: getUserCapacity,
            },
        

             'ring-central.AllUsers/sync': {
                schema: z.object({
                  'email': z.string(),
'category_id': z.string(),
'identity_id': z.string(),
'external_id': z.string(),
'role_id': z.string(),
'team_id': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllUsers,
            },
        

             'ring-central.User/sync': {
                schema: z.object({
                  'userId': z.string(),
userId: z.string()}),
                handler: getUser,
            },
        

             'ring-central.UserSourcesPermissions/sync': {
                schema: z.object({
                  'userId': z.string(),
userId: z.string()}),
                handler: getUserSourcesPermissions,
            },
        

             'ring-central.AllUserSignatures/sync': {
                schema: z.object({
                  'userId': z.string(),
userId: z.string()}),
                handler: getAllUserSignatures,
            },
        

             'ring-central.UserSignature/sync': {
                schema: z.object({
                  'userId': z.string(),
'signatureId': z.string(),
userId: z.string(),
signatureId: z.string()}),
                handler: getUserSignature,
            },
        

             'ring-central.AllWebhooks/sync': {
                schema: z.object({
                  'access_token': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: getAllWebhooks,
            },
        

             'ring-central.Webhook/sync': {
                schema: z.object({
                  'webhookId': z.string(),
'access_token': z.string(),
webhookId: z.string()}),
                handler: getWebhook,
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
        SERVER: `https://platform.ringcentral.com`,
        AUTHORIZATION_ENDPOINT: '/restapi/oauth/authorize',
        TOKEN_ENDPOINT: '/restapi/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    