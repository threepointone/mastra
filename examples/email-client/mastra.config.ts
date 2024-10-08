import { openai } from '@ai-sdk/openai';
import { AsanaIntegration } from '@mastra/asana';
import { AttioIntegration } from '@mastra/attio';
import { Config, SystemEventHandler } from '@mastra/core';
import { GithubIntegration } from '@mastra/github';
import { GoogleIntegration } from '@mastra/google';
import { SlackIntegration } from '@mastra/slack';
import { SpotifyIntegration } from '@mastra/spotify';
import { XIntegration } from '@mastra/x';
import { Pinecone } from '@pinecone-database/pinecone';
import { embed } from 'ai';
import { z } from 'zod';

// Initialize a client
const pc = new Pinecone({ apiKey: '174d0e8c-21da-4b88-9244-66f34a71eb53' });

const VECTOR_SYNC: SystemEventHandler = ({ eventKey, getIntegration, getVectorProvider, makeWebhookUrl }) => ({
  id: 'VECTOR_SYNC',
  event: eventKey,
  executor: async ({ event }) => {
    const { user } = event;
    const { connectionId } = user;

    const { provider } = getVectorProvider<Pinecone>('Pinecone');
    const { dataLayer, ...integration } = getIntegration<GithubIntegration>('GITHUB');

    const k_id =
      (
        await dataLayer?.getConnection({
          connectionId,
          name: 'GITHUB',
        })
      )?.id || '';

    const allEntitiesIndexName = `entities-${connectionId}`.toLowerCase();

    await provider.createIndex({
      name: allEntitiesIndexName,
      dimension: 1536,
      metric: 'cosine',
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-east-1',
        },
      },
      suppressConflicts: true,
    });

    const allEntitiesIndex = provider.index(allEntitiesIndexName);

    const entities = await dataLayer?.getEntitiesByConnection({
      k_id,
      name: 'GITHUB',
    });

    console.log({
      integration,
      entities,
    });

    for (const entity of entities ?? []) {
      const { embedding } = await embed({
        model: openai.embedding('text-embedding-3-small'),
        value: JSON.stringify(entity),
      });

      console.log({
        entity,
        embedding,
      });

      await allEntitiesIndex.namespace(entity.type).upsert([
        {
          id: entity.id,
          values: embedding,
        },
      ]);

      const entityRecords = await dataLayer?.getEntityRecordsByConnectionAndType({
        k_id,
        type: entity.type,
      });

      const entityTypeIndexName = `${entity.type}-${connectionId}`.toLowerCase();

      await provider.createIndex({
        name: entityTypeIndexName,
        dimension: 1536,
        metric: 'cosine',
        spec: {
          serverless: {
            cloud: 'aws',
            region: 'us-east-1',
          },
        },
        suppressConflicts: true,
      });

      const entityTypeIndex = provider.index(entityTypeIndexName);

      const vectors = await Promise.all(
        entityRecords?.records?.map(async record => {
          const { embedding } = await embed({
            model: openai.embedding('text-embedding-3-small'),
            value: JSON.stringify(record),
          });
          return {
            id: record.id,
            values: embedding,
          };
        }) ?? [],
      );

      console.log('entity type vector', {
        vectors,
      });

      await entityTypeIndex.namespace(entity.type).upsert(vectors);
    }
  },
});

export const config: Config = {
  name: 'email-client',
  //logConfig: {}, // TODO: Add this
  integrations: [
    new GithubIntegration(),

    new XIntegration({
      config: {
        CLIENT_ID: process.env.X_CLIENT_ID!,
        CLIENT_SECRET: process.env.X_CLIENT_SECRET!,
        SCOPES: [
          'follows.read',
          'follows.write',
          'dm.read',
          'offline.access',
          'tweet.read',
          'tweet.write',
          'users.read',
        ],
      },
    }),

    new SpotifyIntegration({
      config: {
        CLIENT_ID: process.env.SPOTIFY_CLIENT_ID!,
        CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET!,
        SCOPES: [
          'user-library-read',
          'app-remote-control',
          'playlist-read-private',
          'user-top-read',
          'user-read-recently-played',
          'user-read-currently-playing',
          'streaming',
        ],
      },
    }),

    new SlackIntegration({
      config: {
        CLIENT_ID: process.env.SLACK_CLIENT_ID!,
        CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET!,
        REDIRECT_URI: 'https://redirectmeto.com/http://localhost:3456/api/mastra/connect/callback',
        SCOPES: ['channels:manage', 'users:read', 'chat:write'],
      },
    }),

    new AttioIntegration({
      config: {
        CLIENT_ID: process.env.ATTIO_CLIENT_ID!,
        CLIENT_SECRET: process.env.ATTIO_CLIENT_SECRET!,
        REDIRECT_URI: process.env.REDIRECT_URI!,
        SCOPES: undefined,
      },
    }),

    new AsanaIntegration({
      config: {
        CLIENT_ID: process.env.ASANA_CLIENT_ID!,
        CLIENT_SECRET: process.env.ASANA_CLIENT_SECRET!,
        SCOPES: undefined,
      },
    }),

    new GoogleIntegration({
      config: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
        CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
        TOPIC: process.env.GOOGLE_MAIL_TOPIC!,
        SCOPES: [],
      },
    }),
  ],
  db: {
    provider: 'postgres',
    uri: 'postgresql://postgres:postgres@127.0.0.1:5432/mastra?schema=mastra',
  },
  workflows: {
    blueprintDirPath: '/mastra-blueprints',
    systemEvents: {
      BUTTON_CLICKED: {
        schema: z.object({}),
        key: 'BUTTON_CLICKED',
        label: 'Button Clicked',
        description: 'Triggered when trigger button is clicked',
      },
      VECTOR_SYNC: {
        schema: z.object({}),
        key: 'VECTOR_SYNC',
        label: 'Vector Sync',
        description: 'Triggered when vector sync is clicked',
        handler: VECTOR_SYNC,
      },
    },
    systemApis: [],
  },
  agents: {
    agentDirPath: '/mastra-agents',
    vectorProvider: [
      {
        name: 'Pinecone',
        provider: pc,
      },
    ],
  },
  systemHostURL: process.env.APP_URL!,
  routeRegistrationPath: '/api/mastra',
};
