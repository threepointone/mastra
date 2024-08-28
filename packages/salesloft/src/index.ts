
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { AccountStage } from './events/AccountStage'
import { AccountTier } from './events/AccountTier'
import { Account } from './events/Account'
import { CallInstruction } from './events/CallInstruction'
import { Action } from './events/Action'
import { Call } from './events/Call'
import { Email } from './events/Email'
import { ActivityHistory } from './events/ActivityHistory'
import { BulkJob } from './events/BulkJob'
import { CadenceExport } from './events/CadenceExport'
import { CadenceMembership } from './events/CadenceMembership'
import { Cadence } from './events/Cadence'
import { CallDataRecord } from './events/CallDataRecord'
import { CrmActivity } from './events/CrmActivity'
import { CustomField } from './events/CustomField'
import { CustomRole } from './events/CustomRole'
import { EmailTemplate } from './events/EmailTemplate'
import { Group } from './events/Group'
import { Import } from './events/Import'
import { User } from './events/User'
import { MimeEmailPayload } from './events/MimeEmailPayload'
import { Note } from './events/Note'
import { Person } from './events/Person'
import { PersonStage } from './events/PersonStage'
import { PhoneNumberAssignment } from './events/PhoneNumberAssignment'
import { RecordingSetting } from './events/RecordingSetting'
import { SavedListView } from './events/SavedListView'
import { Step } from './events/Step'
import { Step } from './events/Step'
import { Team } from './events/Team'
import { TeamTemplate } from './events/TeamTemplate'
import { User } from './events/User'
import { Subscription } from './events/Subscription'

type SalesloftConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class SalesloftIntegration extends Integration {
  config: SalesloftConfig;

  constructor({ config }: { config: SalesloftConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'SALESLOFT',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'salesloft.AccountStage/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: AccountStage,
            },
        

             'salesloft.AccountTier/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: AccountTier,
            },
        

             'salesloft.Account/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Account,
            },
        

             'salesloft.CallInstruction/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CallInstruction,
            },
        

             'salesloft.Action/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Action,
            },
        

             'salesloft.Call/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Call,
            },
        

             'salesloft.Email/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Email,
            },
        

             'salesloft.ActivityHistory/sync': {
                schema: z.object({
                  'per_page': z.number(),
'page': z.number(),
'include_paging_counts': z.boolean(),
'sort_by': z.string(),
'sort_direction': z.string(),
'type': z.string(),
'_resource': z.string(),
'occurred_at': z.string(),
'pinned': z.boolean(),
'resource_type': z.string(),
'resource_id': z.string(),
'updated_at': z.string(),
'user_guid': z.string()}),
                handler: ActivityHistory,
            },
        

             'salesloft.BulkJob/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: BulkJob,
            },
        

             'salesloft.CadenceExport/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CadenceExport,
            },
        

             'salesloft.CadenceMembership/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CadenceMembership,
            },
        

             'salesloft.Cadence/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Cadence,
            },
        

             'salesloft.CallDataRecord/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CallDataRecord,
            },
        

             'salesloft.CrmActivity/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CrmActivity,
            },
        

             'salesloft.CustomField/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CustomField,
            },
        

             'salesloft.CustomRole/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: CustomRole,
            },
        

             'salesloft.EmailTemplate/sync': {
                schema: z.object({
                  'id': z.string(),
'include_signature': z.boolean(),
id: z.string()}),
                handler: EmailTemplate,
            },
        

             'salesloft.Group/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Group,
            },
        

             'salesloft.Import/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Import,
            },
        

             'salesloft.User/sync': {
                schema: z.object({}),
                handler: User,
            },
        

             'salesloft.MimeEmailPayload/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: MimeEmailPayload,
            },
        

             'salesloft.Note/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Note,
            },
        

             'salesloft.Person/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Person,
            },
        

             'salesloft.PersonStage/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: PersonStage,
            },
        

             'salesloft.PhoneNumberAssignment/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: PhoneNumberAssignment,
            },
        

             'salesloft.RecordingSetting/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: RecordingSetting,
            },
        

             'salesloft.SavedListView/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: SavedListView,
            },
        

             'salesloft.Step/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Step,
            },
        

             'salesloft.Step/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: Step,
            },
        

             'salesloft.Team/sync': {
                schema: z.object({}),
                handler: Team,
            },
        

             'salesloft.TeamTemplate/sync': {
                schema: z.object({
                  'id': z.string(),
'include_signature': z.boolean(),
id: z.string()}),
                handler: TeamTemplate,
            },
        

             'salesloft.User/sync': {
                schema: z.object({
                  'id': z.string(),
id: z.string()}),
                handler: User,
            },
        

             'salesloft.Subscription/sync': {
                schema: z.object({
                  'id': z.number(),
id: z.string()}),
                handler: Subscription,
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
        SERVER: `https://accounts.salesloft.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    