import { orderBy } from 'lodash'
import { executeVectorSync } from '@mastra/agent-core'
import { getAgentBlueprint } from './utils'
import { PropertyType } from '@mastra/core'

export async function getTeams() {
  const TEAMS = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams`
  const response = await fetch(TEAMS)
  const data = await response.json()
  return data.sports?.[0].leagues?.[0].teams.map(
    ({ team }: { team: { id: string; displayName: string } }) => {
      return {
        id: team.id,
        name: team.displayName
      }
    }
  )
}

export async function getAthletes() {
  const ATHLETES = `https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?limit=1000`
  const response = await fetch(ATHLETES)
  const data = await response.json()

  return data.items.map(
    ({
      athlete
    }: {
      athlete: {
        id: string
        fullName: string
        age: number
        jersey: number
        position: string
        experience: number
        college: string
      }
    }) => {
      return {
        id: athlete.id,
        name: athlete.fullName,
        age: athlete.age,
        jersey: athlete.jersey,
        position: athlete.position,
        experience: athlete.experience,
        college: athlete.college
      }
    }
  )
}

export async function getScores() {
  return {}
}

export async function getSportsNews() {
  const URI = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=10000`
  const response = await fetch(URI)
  const data = await response.json()

  return data?.articles?.map((a: Record<string, string>) => {
    return {
      headline: a.headline,
      description: a.description
    }
  })
}

export async function getAthletesForTeam({
  teamId,
  position
}: {
  teamId: string
  position: string
}) {
  const URI = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}/roster`
  const response = await fetch(URI)
  const data = await response.json()
  return (
    await Promise.all(
      data?.athletes?.flatMap(async (res: { items: Record<string, any>[] }) => {
        return res.items.map(a => {
          return {
            id: a.id,
            name: a.fullName,
            age: a.age,
            jersey: a.jersey,
            position: a.position.abbreviation,
            experience: a.experience?.years,
            college: a.college?.name
          }
        })
      })
    )
  )
    .flatMap(a => a)
    .filter(a => a.position === position)
}

async function getScore(day: string) {
  const response = await fetch(day)
  const data = await response.json()
  return data.events?.flatMap((e: Record<string, any>) => {
    return {
      id: e.id,
      name: e.name,
      shortName: e.shortName,
      season: e.season,
      week: e.week,
      competitions: e.competitions.map((c: Record<string, any>) => {
        return {
          id: c.id,
          teams: c.competitors.map((t: Record<string, any>) => {
            return {
              homeTeam: t.homeAway !== `away`,
              winner: t.winner,
              score: t.score,
              team: t.team?.displayName
            }
          }),

          headlines: c.headlines?.map(
            (h: { description: string; shortLinkText: string }) => {
              return {
                description: h.description,
                shortLinkText: h.shortLinkText
              }
            }
          )
        }
      })
    }
  })
}

export async function reportAnswers({ data }: any) {
  const { mastra } = await import('./framework')

  await mastra.triggerEvent({
    key: 'REPORT_ANSWERS',
    data,
    user: {
      connectionId: 'dero'
    }
  })
  return { message: 'Reported' }
}

export async function sendSlackMessage({ data, ctx }: any) {
  // @ts-ignore
  const { mastra } = await import('./framework')
  const integration = mastra.getIntegration('SLACK')

  console.log('trying to send message to slack', {
    ctx
  })

  const client = await integration.getApiClient(ctx)

  const response = await client.chatPostMessage({
    body: {
      channel: data.channelId,
      text: data.message
    }
  })

  return response
}

export function vectorSync() {
  return {
    id: 'vector-sync',
    event: 'VECTOR_SYNC',
    executor: async ({ event }: any) => {
      const { mastra } = await import('./framework')
      const agentBlueprint = getAgentBlueprint(event.data.agentId)
      console.log('EVENT', event)
      return executeVectorSync({
        mastra,
        agent: agentBlueprint,
        connectionId: event.user.connectionId,
        systemName: mastra.config.name
      })
    }
  }
}

export function syncTeams() {
  return {
    id: 'sync-nfl-teams',
    event: 'SYNC_TEAMS',
    executor: async ({ event }: any) => {
      const { mastra } = await import('./framework')
      const connectionId = event.user.connectionId
      const teams = await getTeams()

      console.log(teams, connectionId)

      await mastra.dataLayer?.syncData({
        name: mastra.config.name,
        connectionId,
        data: teams.map((r: any) => {
          return {
            externalId: r.id,
            data: r,
            entityType: 'teams'
          }
        }),
        properties: [
          {
            name: 'id',
            displayName: 'Team ID',
            type: PropertyType.SINGLE_LINE_TEXT,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'name',
            displayName: 'Name',
            type: PropertyType.SINGLE_LINE_TEXT,
            visible: true,
            order: 1,
            modifiable: true
          }
        ],
        type: 'teams',
        lastSyncId: event?.id!
      })

      console.log('SYNCED')

      return event
    }
  }
}

export function syncAthletes() {
  return {
    id: 'sync-nfl-athletes',
    event: 'SYNC_ATHLETES',
    executor: async ({ event }: any) => {
      const { mastra } = await import('./framework')
      const connectionId = event.user.connectionId
      const athletes = await getAthletes()

      await mastra.dataLayer?.syncData({
        name: mastra.config.name,
        connectionId,
        data: athletes.map((r: any) => {
          return {
            externalId: r.id,
            data: r,
            entityType: 'teams'
          }
        }),
        properties: [
          {
            name: 'id',
            displayName: 'Athlete ID',
            type: PropertyType.SINGLE_LINE_TEXT,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'name',
            displayName: 'Name',
            type: PropertyType.SINGLE_LINE_TEXT,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'age',
            displayName: 'Age',
            type: PropertyType.NUMBER,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'jersey',
            displayName: 'Jersey',
            type: PropertyType.NUMBER,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'position',
            displayName: 'Position',
            type: PropertyType.SINGLE_LINE_TEXT,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'experience',
            displayName: 'Experience',
            type: PropertyType.NUMBER,
            visible: true,
            order: 1,
            modifiable: true
          },
          {
            name: 'college',
            displayName: 'College',
            type: PropertyType.SINGLE_LINE_TEXT,
            visible: true,
            order: 1,
            modifiable: true
          }
        ],
        type: 'teams',
        lastSyncId: event?.id!
      })

      console.log('SYNCED')

      return event
    }
  }
}
