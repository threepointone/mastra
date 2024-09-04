import { Config } from '@arkw/core';
import { GoogleIntegration } from '@arkw/google';
import { z } from 'zod';

export const config: Config = {
  name: 'spotify-client',
  //logConfig: {}, // TODO: Add this
  systemApis: [],
  systemEvents: {
    messageReceived: {
      schema: z.object({
        message: z.string(),
      }),
      description: 'A message was received',
      label: 'Message Received',
    },
  },
  integrations: [
    new GoogleIntegration({
      config: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
        CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
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
