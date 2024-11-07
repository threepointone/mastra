import dotenv from 'dotenv';
import path from 'path';

import { generate } from './generate';

export { generate } from '../../integration-generator/generate';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

async function main() {
  generate({
    name: 'test',
    authType: 'API_KEY',
    openapiSpec: 'https://api.firecrawl.dev/v1/openapi.json',
  });
}

main().catch(console.error);
