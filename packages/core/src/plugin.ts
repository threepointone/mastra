import {
  IntegrationAction,
  IntegrationCredentialType,
  IntegrationEvent,
} from "./types"
import { ZodSchema } from "zod"
import { PluginError } from "./utils/errors"

export type PluginConfig = {
  name: string
  logoUrl: string
  scopes?: string[]
  authType?: IntegrationCredentialType
  authConnectionOptions?: ZodSchema
  [key: string]: any
}

export class IntegrationPlugin {
  name: string
  logoUrl: string

  config: Omit<PluginConfig, "name" | "logoUrl"> & { [key: string]: any } = {}
  events: Record<string, IntegrationEvent> = {}

  constructor(config: PluginConfig) {
    if (!config?.name) {
      throw new PluginError("Plugin name must be defined")
    }

    if (!config?.logoUrl) {
      throw new PluginError("Plugin logoUrl must be defined")
    }

    const { name, logoUrl, ...others } = config
    this.name = name
    this.logoUrl = logoUrl
    this.config = others
  }

  getConfig() {
    return this.config
  }

  getEventHandlers(): any[] {
    return []
  }

  getActions(): Record<string, IntegrationAction<any>> {
    return {}
  }

  defineEvents() {}

  getEvents() {
    return this.events
  }

  getEvent(name: string) {
    const event = this.events[name]

    if (!event) {
      throw new Error(`No event exists for this name: ${name}`)
    }
    return event
  }

  getEventKey(name: string) {
    return this.getEvent(name).key
  }

  //   async sendEvent({
  //     name,
  //     data,
  //     user,
  //   }: {
  //     name: string
  //     data: Record<string, any>
  //     user?: {
  //       userId?: string
  //       workspaceId?: string
  //       [key: string]: any
  //     }
  //   }) {
  //     const event = await inngest.send({
  //       name: name as any,
  //       data: data as any,
  //       user: user as any,
  //     })

  //     const integrationEvent = Object.values(this.events).find(
  //       (e) => e.key === name
  //     )

  //     if (integrationEvent?.triggerProperties) {
  //       await inngest.send({
  //         name: "workflow/run-automations",
  //         data: {
  //           trigger: integrationEvent.triggerProperties.type,
  //           payload: data,
  //         },
  //         user: user as any,
  //       })
  //     }

  //     return event
  //   }
}