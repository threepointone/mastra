import { AsanaIntegration } from '@arkw/asana';
import { Config, IntegrationCredentialType, SystemEventHandler } from '@arkw/core';
import { GoogleIntegration } from '@arkw/google';
import { SlackIntegration } from '@arkw/slack';
import { TwilioIntegration } from '@arkw/twilio';
import { z } from 'zod';

export const redirectHost = process.env.APP_URL;

const mySystemEventHandler: SystemEventHandler<GoogleIntegration> = ({ eventKey, getIntegration }) => ({
  id: 'my-system-event-handler',
  event: eventKey,
  executor: async ({ event, step }) => {
    console.log({
      getIntegration,
      eventKey,
    });

    const integration = getIntegration('GOOGLE');
    const client = await integration.getApiClient({ referenceId: event.user.referenceId });

    const data = await client.gmail.users.messages.list({
      userId: 'me',
    });

    const records = data?.data?.messages?.map(r => {
      return {
        externalId: r.id,
        data: r,
        entityType: 'DERO_MESSAGES_UPDATED',
      };
    });

    integration.dataLayer?.syncData({
      data: records,
      name: 'GOOGLE',
      properties: [
        {
          name: 'id',
          type: 'SINGLE_LINE_TEXT',
          displayName: 'ID',
          order: 0,
        },
      ],
      referenceId: event.user.referenceId,
      type: 'DERO_MESSAGES_UPDATED',
    });
  },
});

export const config: Config<GoogleIntegration> = {
  name: 'email-client',
  //logConfig: {}, // TODO: Add this
  systemApis: [],
  systemEvents: {
    NOTE_CREATED: {
      schema: z.object({
        name: z.string(),
      }),
      description: 'A note was created',
      label: 'Note Created',
      handler: mySystemEventHandler,
    },
  },
  integrations: [
    new TwilioIntegration(),

    new AsanaIntegration({
      config: {
        CLIENT_ID: process.env.ASANA_CLIENT_ID!,
        CLIENT_SECRET: process.env.ASANA_CLIENT_SECRET!,
      },
    }),

    new GoogleIntegration({
      config: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
        CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
        REDIRECT_URI: new URL('/api/arkw/connect/callback', process.env.APP_URL).toString(),
        TOPIC: process.env.GOOGLE_MAIL_TOPIC!,
      },
    }),
  ],
  db: {
    provider: 'postgres',
    uri: 'postgresql://postgres:postgres@127.0.0.1:5432/arkwright?schema=arkw',
  },
  systemHostURL: process.env.APP_URL!,
  routeRegistrationPath: '/api/arkw',
  blueprintDirPath: '/arkw-blueprints',
};
