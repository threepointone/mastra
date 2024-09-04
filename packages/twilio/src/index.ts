
import { Integration, IntegrationAuth, OpenAPI } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { FetchAccount } from './events/FetchAccount'
import { FetchAddress } from './events/FetchAddress'
import { FetchApplication } from './events/FetchApplication'
import { FetchAuthorizedConnectApp } from './events/FetchAuthorizedConnectApp'
import { FetchAvailablePhoneNumberCountry } from './events/FetchAvailablePhoneNumberCountry'
import { FetchBalance } from './events/FetchBalance'
import { FetchCall } from './events/FetchCall'
import { FetchCallNotification } from './events/FetchCallNotification'
import { FetchCallRecording } from './events/FetchCallRecording'
import { FetchConference } from './events/FetchConference'
import { FetchConferenceRecording } from './events/FetchConferenceRecording'
import { FetchConnectApp } from './events/FetchConnectApp'
import { FetchIncomingPhoneNumber } from './events/FetchIncomingPhoneNumber'
import { FetchIncomingPhoneNumberAssignedAddOn } from './events/FetchIncomingPhoneNumberAssignedAddOn'
import { FetchIncomingPhoneNumberAssignedAddOnExtension } from './events/FetchIncomingPhoneNumberAssignedAddOnExtension'
import { FetchKey } from './events/FetchKey'
import { FetchMedia } from './events/FetchMedia'
import { FetchMember } from './events/FetchMember'
import { FetchMessage } from './events/FetchMessage'
import { FetchNotification } from './events/FetchNotification'
import { FetchOutgoingCallerId } from './events/FetchOutgoingCallerId'
import { FetchParticipant } from './events/FetchParticipant'
import { FetchQueue } from './events/FetchQueue'
import { FetchRecording } from './events/FetchRecording'
import { FetchRecordingAddOnResult } from './events/FetchRecordingAddOnResult'
import { FetchRecordingAddOnResultPayload } from './events/FetchRecordingAddOnResultPayload'
import { FetchRecordingTranscription } from './events/FetchRecordingTranscription'
import { FetchShortCode } from './events/FetchShortCode'
import { FetchSigningKey } from './events/FetchSigningKey'
import { FetchSipAuthCallsCredentialListMapping } from './events/FetchSipAuthCallsCredentialListMapping'
import { FetchSipAuthCallsIpAccessControlListMapping } from './events/FetchSipAuthCallsIpAccessControlListMapping'
import { FetchSipAuthRegistrationsCredentialListMapping } from './events/FetchSipAuthRegistrationsCredentialListMapping'
import { FetchSipCredential } from './events/FetchSipCredential'
import { FetchSipCredentialList } from './events/FetchSipCredentialList'
import { FetchSipCredentialListMapping } from './events/FetchSipCredentialListMapping'
import { FetchSipDomain } from './events/FetchSipDomain'
import { FetchSipIpAccessControlList } from './events/FetchSipIpAccessControlList'
import { FetchSipIpAccessControlListMapping } from './events/FetchSipIpAccessControlListMapping'
import { FetchSipIpAddress } from './events/FetchSipIpAddress'
import { FetchTranscription } from './events/FetchTranscription'
import { FetchUsageTrigger } from './events/FetchUsageTrigger'

type TwilioConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  [key: string]: any;
};

export class TwilioIntegration extends Integration {
  config: TwilioConfig;

  constructor({ config }: { config: TwilioConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'TWILIO',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
      'twilio.FetchAccount/sync': {
        schema: z.object({
          'Sid': z.string()
        }),
        handler: FetchAccount,
      },


      'twilio.FetchAddress/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchAddress,
      },


      'twilio.FetchApplication/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchApplication,
      },


      'twilio.FetchAuthorizedConnectApp/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ConnectAppSid': z.string()
        }),
        handler: FetchAuthorizedConnectApp,
      },


      'twilio.FetchAvailablePhoneNumberCountry/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'CountryCode': z.string()
        }),
        handler: FetchAvailablePhoneNumberCountry,
      },


      'twilio.FetchBalance/sync': {
        schema: z.object({
          'AccountSid': z.string()
        }),
        handler: FetchBalance,
      },


      'twilio.FetchCall/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchCall,
      },


      'twilio.FetchCallNotification/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'CallSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchCallNotification,
      },


      'twilio.FetchCallRecording/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'CallSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchCallRecording,
      },


      'twilio.FetchConference/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchConference,
      },


      'twilio.FetchConferenceRecording/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ConferenceSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchConferenceRecording,
      },


      'twilio.FetchConnectApp/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchConnectApp,
      },


      'twilio.FetchIncomingPhoneNumber/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchIncomingPhoneNumber,
      },


      'twilio.FetchIncomingPhoneNumberAssignedAddOn/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ResourceSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchIncomingPhoneNumberAssignedAddOn,
      },


      'twilio.FetchIncomingPhoneNumberAssignedAddOnExtension/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ResourceSid': z.string(),
          'AssignedAddOnSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchIncomingPhoneNumberAssignedAddOnExtension,
      },


      'twilio.FetchKey/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchKey,
      },


      'twilio.FetchMedia/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'MessageSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchMedia,
      },


      'twilio.FetchMember/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'QueueSid': z.string(),
          'CallSid': z.string()
        }),
        handler: FetchMember,
      },


      'twilio.FetchMessage/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchMessage,
      },


      'twilio.FetchNotification/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchNotification,
      },


      'twilio.FetchOutgoingCallerId/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchOutgoingCallerId,
      },


      'twilio.FetchParticipant/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ConferenceSid': z.string(),
          'CallSid': z.string()
        }),
        handler: FetchParticipant,
      },


      'twilio.FetchQueue/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchQueue,
      },


      'twilio.FetchRecording/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string(),
          'IncludeSoftDeleted': z.boolean()
        }),
        handler: FetchRecording,
      },


      'twilio.FetchRecordingAddOnResult/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ReferenceSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchRecordingAddOnResult,
      },


      'twilio.FetchRecordingAddOnResultPayload/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'ReferenceSid': z.string(),
          'AddOnResultSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchRecordingAddOnResultPayload,
      },


      'twilio.FetchRecordingTranscription/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'RecordingSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchRecordingTranscription,
      },


      'twilio.FetchShortCode/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchShortCode,
      },


      'twilio.FetchSigningKey/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSigningKey,
      },


      'twilio.FetchSipAuthCallsCredentialListMapping/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'DomainSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipAuthCallsCredentialListMapping,
      },


      'twilio.FetchSipAuthCallsIpAccessControlListMapping/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'DomainSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipAuthCallsIpAccessControlListMapping,
      },


      'twilio.FetchSipAuthRegistrationsCredentialListMapping/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'DomainSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipAuthRegistrationsCredentialListMapping,
      },


      'twilio.FetchSipCredential/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'CredentialListSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipCredential,
      },


      'twilio.FetchSipCredentialList/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipCredentialList,
      },


      'twilio.FetchSipCredentialListMapping/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'DomainSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipCredentialListMapping,
      },


      'twilio.FetchSipDomain/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipDomain,
      },


      'twilio.FetchSipIpAccessControlList/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipIpAccessControlList,
      },


      'twilio.FetchSipIpAccessControlListMapping/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'DomainSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipIpAccessControlListMapping,
      },


      'twilio.FetchSipIpAddress/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'IpAccessControlListSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchSipIpAddress,
      },


      'twilio.FetchTranscription/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchTranscription,
      },


      'twilio.FetchUsageTrigger/sync': {
        schema: z.object({
          'AccountSid': z.string(),
          'Sid': z.string()
        }),
        handler: FetchUsageTrigger,
      },
    }
    return this.events;
  }

  getOpenApiSpec() {
    return openapi as unknown as OpenAPI;
  }

  getApiClient = async ({ referenceId }: { referenceId: string }): Promise<OASClient<NormalizeOAS<typeof openapi>>> => {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId })

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`)
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id)

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: "https://api.twilio.com",
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
      // @ts-ignore
      onConnectionCreated: () => {
        // TODO
      },
      config: {
        INTEGRATION_NAME: this.name,
        AUTH_TYPE: this.config.authType,
        CLIENT_ID: this.config.CLIENT_ID,
        CLIENT_SECRET: this.config.CLIENT_SECRET,
        REDIRECT_URI: this.config.REDIRECT_URI || this.corePresets.redirectURI,
        SERVER: `https://${this.config.subdomain}.okta.com`,
        AUTHORIZATION_ENDPOINT: '/oauth2/v1/authorize',
        TOKEN_ENDPOINT: '/oauth2/v1/token',
        SCOPES: [],
      },
    });
  }
}

