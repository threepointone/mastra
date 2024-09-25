import { EventHandler } from '@kpl/core';



import { GITHUB_PULL_REQUEST_FIELDS } from '../constants';



import { GithubIntegration } from '..';


export const pullRequestSync: EventHandler<GithubIntegration> = ({ integrationInstance: { name, dataLayer, entityTypes, getApiClient }, eventKey }) => ({
  id: `${name}-sync-pull-requests`,
  event: eventKey,
  executor: async ({ event }) => {
    const { connectionId } = event.user;

    const connection = await dataLayer?.getConnection({ connectionId, name });

    if (!connection) {
      throw new Error('Integration connection not found');
    }

    const client = await getApiClient({ connectionId });

    const res = await client['/repos/{owner}/{repo}/pulls'].get({ params: { owner: 'kontent-ai', repo: 'kontent-ai' } });
    const pullRequests = await res.json();

    if (!pullRequests) {
      return;
    }

    await dataLayer?.syncData({
      name,
      connectionId,
      data: pullRequests.map((r: any) => {
        return {
          externalId: r.id,
          data: r,
          entityType: entityTypes.PULL_REQUEST,
        };
      }),
      properties: GITHUB_PULL_REQUEST_FIELDS,
      type: entityTypes.PULL_REQUEST,
      lastSyncId: event?.id!,
    });
  },
});

// export const branchSync: EventHandler<GithubIntegration> = ({ integrationInstance: { name, dataLayer, entityTypes, getApiClient }, eventKey }) => ({
//   id: `${name}-sync-branches`,
//   event: eventKey,
//   executor: async ({ event }) => {
//     const { connectionId } = event.user;

//     const connection = await dataLayer?.getConnection({ connectionId, name });

//     if (!connection) {
//       throw new Error('Integration connection not found');
//     }

//     const client = await getApiClient({ connectionId });

//     const res = await client['/repos/{owner}/{repo}/branches'].get({ params: { owner: 'kontent-ai', repo: 'kontent-ai' } });
//     const branches = await res.json();

//     if (!branches) {
//       return;
//     }

//     await dataLayer?.syncData({
//       name,
//       connectionId,
//       data: branches.map((b: any) => {
//         return {
//           externalId: b.name,
//           data: b,
//           entityType: entityTypes.BRANCHES,
//         };
//       }),
//       properties: GITHUB_BRANCH_FIELDS,
//       type: entityTypes.BRANCHES,
//       lastSyncId: event?.id!,
//     });
//   },
// });
