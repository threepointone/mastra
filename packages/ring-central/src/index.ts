
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { Topology } from './events/Topology'
import { AllTopologies } from './events/AllTopologies'
import { AllAttachments } from './events/AllAttachments'
import { Attachment } from './events/Attachment'
import { AllCategories } from './events/AllCategories'
import { Category } from './events/Category'
import { AllChannels } from './events/AllChannels'
import { Channel } from './events/Channel'
import { AllCommunities } from './events/AllCommunities'
import { Community } from './events/Community'
import { AllSources } from './events/AllSources'
import { Source } from './events/Source'
import { AllThreads } from './events/AllThreads'
import { Thread } from './events/Thread'
import { openThread } from './events/openThread'
import { AllContents } from './events/AllContents'
import { Content } from './events/Content'
import { AllCustomFields } from './events/AllCustomFields'
import { CustomField } from './events/CustomField'
import { AllEvents } from './events/AllEvents'
import { Event } from './events/Event'
import { AllFolders } from './events/AllFolders'
import { Folder } from './events/Folder'
import { AllIdentities } from './events/AllIdentities'
import { Identity } from './events/Identity'
import { AllIdentityGroups } from './events/AllIdentityGroups'
import { IdentityGroup } from './events/IdentityGroup'
import { AllInterventionComments } from './events/AllInterventionComments'
import { InterventionComment } from './events/InterventionComment'
import { AllInterventions } from './events/AllInterventions'
import { Intervention } from './events/Intervention'
import { AllPresenceStatus } from './events/AllPresenceStatus'
import { PresenceStatus } from './events/PresenceStatus'
import { AllReplyAssistantEntries } from './events/AllReplyAssistantEntries'
import { ReplyAssistantEntry } from './events/ReplyAssistantEntry'
import { AllReplyAssistantGroups } from './events/AllReplyAssistantGroups'
import { ReplyAssistantGroup } from './events/ReplyAssistantGroup'
import { AllReplyAssistantVersions } from './events/AllReplyAssistantVersions'
import { ReplyAssistantVersion } from './events/ReplyAssistantVersion'
import { AllRoles } from './events/AllRoles'
import { Role } from './events/Role'
import { AllSettings } from './events/AllSettings'
import { AllSurveys } from './events/AllSurveys'
import { Survey } from './events/Survey'
import { SurveyResponse } from './events/SurveyResponse'
import { AgentStatus } from './events/AgentStatus'
import { AllTags } from './events/AllTags'
import { Tag } from './events/Tag'
import { AllTasks } from './events/AllTasks'
import { Task } from './events/Task'
import { AllTeams } from './events/AllTeams'
import { Team } from './events/Team'
import { AllTimeSheets } from './events/AllTimeSheets'
import { TimeSheet } from './events/TimeSheet'
import { AllUserCapacities } from './events/AllUserCapacities'
import { UserCapacity } from './events/UserCapacity'
import { AllUsers } from './events/AllUsers'
import { User } from './events/User'
import { UserSourcesPermissions } from './events/UserSourcesPermissions'
import { AllUserSignatures } from './events/AllUserSignatures'
import { UserSignature } from './events/UserSignature'
import { AllWebhooks } from './events/AllWebhooks'
import { Webhook } from './events/Webhook'

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
                  'topologyId': z.string()}),
                handler: Topology,
            },
        

             'ring-central.AllTopologies/sync': {
                schema: z.object({}),
                handler: AllTopologies,
            },
        

             'ring-central.AllAttachments/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number(),
'extension': z.string(),
'created_before': z.string(),
'created_after': z.string()}),
                handler: AllAttachments,
            },
        

             'ring-central.Attachment/sync': {
                schema: z.object({
                  'attachmentId': z.string()}),
                handler: Attachment,
            },
        

             'ring-central.AllCategories/sync': {
                schema: z.object({
                  'ids': z.string(),
'parent_id': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllCategories,
            },
        

             'ring-central.Category/sync': {
                schema: z.object({
                  'categoryId': z.string()}),
                handler: Category,
            },
        

             'ring-central.AllChannels/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllChannels,
            },
        

             'ring-central.Channel/sync': {
                schema: z.object({
                  'channelId': z.string()}),
                handler: Channel,
            },
        

             'ring-central.AllCommunities/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllCommunities,
            },
        

             'ring-central.Community/sync': {
                schema: z.object({
                  'communityId': z.string()}),
                handler: Community,
            },
        

             'ring-central.AllSources/sync': {
                schema: z.object({
                  'permission': z.string(),
'offset': z.number(),
'active': z.boolean(),
'limit': z.number()}),
                handler: AllSources,
            },
        

             'ring-central.Source/sync': {
                schema: z.object({
                  'sourceId': z.string()}),
                handler: Source,
            },
        

             'ring-central.AllThreads/sync': {
                schema: z.object({
                  'q': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllThreads,
            },
        

             'ring-central.Thread/sync': {
                schema: z.object({
                  'threadId': z.string()}),
                handler: Thread,
            },
        

             'ring-central.openThread/sync': {
                schema: z.object({
                  'threadId': z.string()}),
                handler: openThread,
            },
        

             'ring-central.AllContents/sync': {
                schema: z.object({
                  'q': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllContents,
            },
        

             'ring-central.Content/sync': {
                schema: z.object({
                  'contentId': z.string()}),
                handler: Content,
            },
        

             'ring-central.AllCustomFields/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllCustomFields,
            },
        

             'ring-central.CustomField/sync': {
                schema: z.object({
                  'customFieldId': z.string()}),
                handler: CustomField,
            },
        

             'ring-central.AllEvents/sync': {
                schema: z.object({
                  'q': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllEvents,
            },
        

             'ring-central.Event/sync': {
                schema: z.object({
                  'eventId': z.string()}),
                handler: Event,
            },
        

             'ring-central.AllFolders/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllFolders,
            },
        

             'ring-central.Folder/sync': {
                schema: z.object({
                  'folderId': z.string()}),
                handler: Folder,
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
                handler: AllIdentities,
            },
        

             'ring-central.Identity/sync': {
                schema: z.object({
                  'identityId': z.string()}),
                handler: Identity,
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
                handler: AllIdentityGroups,
            },
        

             'ring-central.IdentityGroup/sync': {
                schema: z.object({
                  'identityGroupId': z.string()}),
                handler: IdentityGroup,
            },
        

             'ring-central.AllInterventionComments/sync': {
                schema: z.object({
                  'intervention_id': z.string(),
'thread_id': z.string(),
'user_id': z.string(),
'identity_id': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllInterventionComments,
            },
        

             'ring-central.InterventionComment/sync': {
                schema: z.object({
                  'interventionCommentId': z.string()}),
                handler: InterventionComment,
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
                handler: AllInterventions,
            },
        

             'ring-central.Intervention/sync': {
                schema: z.object({
                  'interventionId': z.string()}),
                handler: Intervention,
            },
        

             'ring-central.AllPresenceStatus/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllPresenceStatus,
            },
        

             'ring-central.PresenceStatus/sync': {
                schema: z.object({
                  'presenceStatusId': z.string()}),
                handler: PresenceStatus,
            },
        

             'ring-central.AllReplyAssistantEntries/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllReplyAssistantEntries,
            },
        

             'ring-central.ReplyAssistantEntry/sync': {
                schema: z.object({
                  'replyAssistantEntryId': z.string()}),
                handler: ReplyAssistantEntry,
            },
        

             'ring-central.AllReplyAssistantGroups/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllReplyAssistantGroups,
            },
        

             'ring-central.ReplyAssistantGroup/sync': {
                schema: z.object({
                  'replyAssistantGroupId': z.string()}),
                handler: ReplyAssistantGroup,
            },
        

             'ring-central.AllReplyAssistantVersions/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllReplyAssistantVersions,
            },
        

             'ring-central.ReplyAssistantVersion/sync': {
                schema: z.object({
                  'replyAssistantVersionId': z.string()}),
                handler: ReplyAssistantVersion,
            },
        

             'ring-central.AllRoles/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllRoles,
            },
        

             'ring-central.Role/sync': {
                schema: z.object({
                  'roleId': z.string()}),
                handler: Role,
            },
        

             'ring-central.AllSettings/sync': {
                schema: z.object({}),
                handler: AllSettings,
            },
        

             'ring-central.AllSurveys/sync': {
                schema: z.object({}),
                handler: AllSurveys,
            },
        

             'ring-central.Survey/sync': {
                schema: z.object({
                  'surveyId': z.string()}),
                handler: Survey,
            },
        

             'ring-central.SurveyResponse/sync': {
                schema: z.object({
                  'surveyResponseId': z.string()}),
                handler: SurveyResponse,
            },
        

             'ring-central.AgentStatus/sync': {
                schema: z.object({
                  'agentId': z.string()}),
                handler: AgentStatus,
            },
        

             'ring-central.AllTags/sync': {
                schema: z.object({
                  'ids': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllTags,
            },
        

             'ring-central.Tag/sync': {
                schema: z.object({
                  'tagId': z.string()}),
                handler: Tag,
            },
        

             'ring-central.AllTasks/sync': {
                schema: z.object({
                  'queue': z.string(),
'channel_id': z.string(),
'step': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllTasks,
            },
        

             'ring-central.Task/sync': {
                schema: z.object({
                  'taskId': z.string()}),
                handler: Task,
            },
        

             'ring-central.AllTeams/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllTeams,
            },
        

             'ring-central.Team/sync': {
                schema: z.object({
                  'teamId': z.string()}),
                handler: Team,
            },
        

             'ring-central.AllTimeSheets/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllTimeSheets,
            },
        

             'ring-central.TimeSheet/sync': {
                schema: z.object({
                  'timeSheetId': z.string()}),
                handler: TimeSheet,
            },
        

             'ring-central.AllUserCapacities/sync': {
                schema: z.object({
                  'offset': z.number(),
'limit': z.number()}),
                handler: AllUserCapacities,
            },
        

             'ring-central.UserCapacity/sync': {
                schema: z.object({
                  'userCapacityId': z.string()}),
                handler: UserCapacity,
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
                handler: AllUsers,
            },
        

             'ring-central.User/sync': {
                schema: z.object({
                  'userId': z.string()}),
                handler: User,
            },
        

             'ring-central.UserSourcesPermissions/sync': {
                schema: z.object({
                  'userId': z.string()}),
                handler: UserSourcesPermissions,
            },
        

             'ring-central.AllUserSignatures/sync': {
                schema: z.object({
                  'userId': z.string()}),
                handler: AllUserSignatures,
            },
        

             'ring-central.UserSignature/sync': {
                schema: z.object({
                  'userId': z.string(),
'signatureId': z.string()}),
                handler: UserSignature,
            },
        

             'ring-central.AllWebhooks/sync': {
                schema: z.object({
                  'access_token': z.string(),
'offset': z.number(),
'limit': z.number()}),
                handler: AllWebhooks,
            },
        

             'ring-central.Webhook/sync': {
                schema: z.object({
                  'webhookId': z.string(),
'access_token': z.string()}),
                handler: Webhook,
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
        SERVER: `https://platform.ringcentral.com`,
        AUTHORIZATION_ENDPOINT: '/restapi/oauth/authorize',
        TOKEN_ENDPOINT: '/restapi/oauth/token',
        SCOPES: [],
      },
    });
  }
}

    