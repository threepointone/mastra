import { GmailIntegration } from '@mastra/core';
import { GithubIntegration } from '@mastra/github';

export const integrations = [
  new GmailIntegration(),
  new GithubIntegration({
    config: {
      PERSONAL_ACCESS_TOKEN: process.env.PAT!,
    },
  }),
];
