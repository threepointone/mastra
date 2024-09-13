import { DataLayer } from './data-access';
import { Framework } from './framework';
import { Integration } from './integration';
import { IntegrationApi, IntegrationEvent } from './types';

export interface Config<T extends Integration = Integration> {
  name: string;
  packageManager?: string;
  systemHostURL: string;
  routeRegistrationPath: string;
  blueprintDirPath: string;
  db: {
    provider: string;
    uri: string;
  };
  integrations: Integration[];
  systemApis: Omit<IntegrationApi, 'integrationName'>[];
  systemEvents: Record<string, IntegrationEvent<T>>;
  env?: {
    provider?: 'local' | 'vercel';
    file?: string;
  };
}

export * from './workflows/types';
export { IntegrationError } from './utils/errors';
export { DataLayer } from './data-access';
export { registerRoutes } from './next';
export * from './types';
export * from './lib';
export { Integration } from './integration';
export { IntegrationCredentialType } from './types';
export {
  PropertyType,
  Connection,
  Credential,
  Entity,
  Property,
  Record,
} from '@prisma-app/client';
export { IntegrationAuth } from './authenticator';
export * from './utils';
export * from './next/utils';
export * from './schemas';
export { Framework } from './framework';

export * from './generated-types';
