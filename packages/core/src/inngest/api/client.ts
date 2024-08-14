import { default as createClient } from 'openapi-fetch';

import { paths } from './schema';

const inngestApiUrl = process.env.INNGEST_API_URL ?? 'http://localhost:8288';
const inngestApiToken = process.env.INNGEST_SIGNING_KEY ?? '123';

export const inngestApi = createClient<paths>({
  baseUrl: inngestApiUrl,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${inngestApiToken}`,
  },
});
