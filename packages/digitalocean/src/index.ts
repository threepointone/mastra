
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import type openapi from './openapi'
import { apps__deployment } from './events/apps__deployment'
import { apps__logs } from './events/apps__logs'
import { apps__logs_aggregate } from './events/apps__logs_aggregate'
import { apps__logs_active_deployment_aggregate } from './events/apps__logs_active_deployment_aggregate'
import { apps_ } from './events/apps_'
import { cdn__endpoint } from './events/cdn__endpoint'
import { databases__cluster } from './events/databases__cluster'
import { databases_ } from './events/databases_'
import { databases__connectionPool } from './events/databases__connectionPool'
import { databases__replica } from './events/databases__replica'
import { databases__user } from './events/databases__user'
import { dropletActions_ } from './events/dropletActions_'
import { floatingIPsAction_ } from './events/floatingIPsAction_'
import { functions__namespace } from './events/functions__namespace'
import { functions__trigger } from './events/functions__trigger'
import { imageActions_ } from './events/imageActions_'
import { monitoring__alertPolicy } from './events/monitoring__alertPolicy'
import { monitoring__DropletCpuMetrics } from './events/monitoring__DropletCpuMetrics'
import { monitoring__dropletFilesystemFreeMetrics } from './events/monitoring__dropletFilesystemFreeMetrics'
import { monitoring__dropletFilesystemSizeMetrics } from './events/monitoring__dropletFilesystemSizeMetrics'
import { monitoring__dropletLoad1Metrics } from './events/monitoring__dropletLoad1Metrics'
import { monitoring__dropletLoad15Metrics } from './events/monitoring__dropletLoad15Metrics'
import { monitoring__dropletLoad5Metrics } from './events/monitoring__dropletLoad5Metrics'
import { monitoring__dropletMemoryAvailableMetrics } from './events/monitoring__dropletMemoryAvailableMetrics'
import { monitoring__dropletMemoryCachedMetrics } from './events/monitoring__dropletMemoryCachedMetrics'
import { monitoring__dropletMemoryFreeMetrics } from './events/monitoring__dropletMemoryFreeMetrics'
import { monitoring__dropletMemoryTotalMetrics } from './events/monitoring__dropletMemoryTotalMetrics'
import { projects_list_resources_default } from './events/projects_list_resources_default'
import { projects_ } from './events/projects_'
import { registry__garbageCollection } from './events/registry__garbageCollection'
import { reservedIPsActions_ } from './events/reservedIPsActions_'
import { uptime_check_ } from './events/uptime_check_'
import { uptime_alert_ } from './events/uptime_alert_'
import { volumes_ } from './events/volumes_'
import { volumeActions_ } from './events/volumeActions_'
import { vpcs_ } from './events/vpcs_'

type DigitaloceanConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class DigitaloceanIntegration extends Integration {
  config: DigitaloceanConfig;

  constructor({ config }: { config: DigitaloceanConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'DIGITALOCEAN',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'digitalocean.apps__deployment/sync': {
                schema: z.object({
                  '#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0': z.string(),
'deployment_id': z.string(),
app_id: z.string(),
deployment_id: z.string()}),
                handler: apps__deployment,
            },
        

             'digitalocean.apps__logs/sync': {
                schema: z.object({
                  '#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1deployments~1%7Bdeployment_id%7D/get/parameters/1': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/1': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/2': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/3': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/4': z.string(),
app_id: z.string(),
deployment_id: z.string(),
component_name: z.string()}),
                handler: apps__logs,
            },
        

             'digitalocean.apps__logs_aggregate/sync': {
                schema: z.object({
                  '#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1deployments~1%7Bdeployment_id%7D/get/parameters/1': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/2': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/3': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/4': z.string(),
app_id: z.string(),
deployment_id: z.string()}),
                handler: apps__logs_aggregate,
            },
        

             'digitalocean.apps__logs_active_deployment_aggregate/sync': {
                schema: z.object({
                  '#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/0': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/2': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/3': z.string(),
'#/paths/~1v2~1apps~1%7Bapp_id%7D~1components~1%7Bcomponent_name%7D~1logs/get/parameters/4': z.string(),
app_id: z.string()}),
                handler: apps__logs_active_deployment_aggregate,
            },
        

             'digitalocean.apps_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1apps~1%7Bid%7D/delete/parameters/0': z.string(),
'name': z.string(),
id: z.string()}),
                handler: apps_,
            },
        

             'digitalocean.cdn__endpoint/sync': {
                schema: z.object({
                  'cdn_id': z.string(),
cdn_id: z.string()}),
                handler: cdn__endpoint,
            },
        

             'digitalocean.databases__cluster/sync': {
                schema: z.object({
                  'database_cluster_uuid': z.string(),
database_cluster_uuid: z.string()}),
                handler: databases__cluster,
            },
        

             'digitalocean.databases_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1databases~1%7Bdatabase_cluster_uuid%7D/get/parameters/0': z.string(),
'database_name': z.string(),
database_cluster_uuid: z.string(),
database_name: z.string()}),
                handler: databases_,
            },
        

             'digitalocean.databases__connectionPool/sync': {
                schema: z.object({
                  '#/paths/~1v2~1databases~1%7Bdatabase_cluster_uuid%7D/get/parameters/0': z.string(),
'pool_name': z.string(),
database_cluster_uuid: z.string(),
pool_name: z.string()}),
                handler: databases__connectionPool,
            },
        

             'digitalocean.databases__replica/sync': {
                schema: z.object({
                  '#/paths/~1v2~1databases~1%7Bdatabase_cluster_uuid%7D/get/parameters/0': z.string(),
'replica_name': z.string(),
database_cluster_uuid: z.string(),
replica_name: z.string()}),
                handler: databases__replica,
            },
        

             'digitalocean.databases__user/sync': {
                schema: z.object({
                  '#/paths/~1v2~1databases~1%7Bdatabase_cluster_uuid%7D/get/parameters/0': z.string(),
'username': z.string(),
database_cluster_uuid: z.string(),
username: z.string()}),
                handler: databases__user,
            },
        

             'digitalocean.dropletActions_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1droplets~1%7Bdroplet_id%7D/get/parameters/0': z.string(),
'#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0': z.string(),
droplet_id: z.string(),
action_id: z.string()}),
                handler: dropletActions_,
            },
        

             'digitalocean.floatingIPsAction_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1floating_ips~1%7Bfloating_ip%7D/get/parameters/0': z.string(),
'#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0': z.string(),
floating_ip: z.string(),
action_id: z.string()}),
                handler: floatingIPsAction_,
            },
        

             'digitalocean.functions__namespace/sync': {
                schema: z.object({
                  'namespace_id': z.string(),
namespace_id: z.string()}),
                handler: functions__namespace,
            },
        

             'digitalocean.functions__trigger/sync': {
                schema: z.object({
                  '#/paths/~1v2~1functions~1namespaces~1%7Bnamespace_id%7D/get/parameters/0': z.string(),
'trigger_name': z.string(),
namespace_id: z.string(),
trigger_name: z.string()}),
                handler: functions__trigger,
            },
        

             'digitalocean.imageActions_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1images~1%7Bimage_id%7D/put/parameters/0': z.string(),
'#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0': z.string(),
image_id: z.string(),
action_id: z.string()}),
                handler: imageActions_,
            },
        

             'digitalocean.monitoring__alertPolicy/sync': {
                schema: z.object({
                  'alert_uuid': z.string(),
alert_uuid: z.string()}),
                handler: monitoring__alertPolicy,
            },
        

             'digitalocean.monitoring__DropletCpuMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__DropletCpuMetrics,
            },
        

             'digitalocean.monitoring__dropletFilesystemFreeMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletFilesystemFreeMetrics,
            },
        

             'digitalocean.monitoring__dropletFilesystemSizeMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletFilesystemSizeMetrics,
            },
        

             'digitalocean.monitoring__dropletLoad1Metrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletLoad1Metrics,
            },
        

             'digitalocean.monitoring__dropletLoad15Metrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletLoad15Metrics,
            },
        

             'digitalocean.monitoring__dropletLoad5Metrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletLoad5Metrics,
            },
        

             'digitalocean.monitoring__dropletMemoryAvailableMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletMemoryAvailableMetrics,
            },
        

             'digitalocean.monitoring__dropletMemoryCachedMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletMemoryCachedMetrics,
            },
        

             'digitalocean.monitoring__dropletMemoryFreeMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletMemoryFreeMetrics,
            },
        

             'digitalocean.monitoring__dropletMemoryTotalMetrics/sync': {
                schema: z.object({
                  '#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/0': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/3': z.string(),
'#/paths/~1v2~1monitoring~1metrics~1droplet~1bandwidth/get/parameters/4': z.string()}),
                handler: monitoring__dropletMemoryTotalMetrics,
            },
        

             'digitalocean.projects_list_resources_default/sync': {
                schema: z.object({}),
                handler: projects_list_resources_default,
            },
        

             'digitalocean.projects_/sync': {
                schema: z.object({
                  'project_id': z.string(),
project_id: z.string()}),
                handler: projects_,
            },
        

             'digitalocean.registry__garbageCollection/sync': {
                schema: z.object({
                  '#/paths/~1v2~1registry~1%7Bregistry_name%7D~1repositories/get/parameters/2': z.string(),
registry_name: z.string()}),
                handler: registry__garbageCollection,
            },
        

             'digitalocean.reservedIPsActions_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1reserved_ips~1%7Breserved_ip%7D/get/parameters/0': z.string(),
'#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0': z.string(),
reserved_ip: z.string(),
action_id: z.string()}),
                handler: reservedIPsActions_,
            },
        

             'digitalocean.uptime_check_/sync': {
                schema: z.object({
                  'check_id': z.string(),
check_id: z.string()}),
                handler: uptime_check_,
            },
        

             'digitalocean.uptime_alert_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1uptime~1checks~1%7Bcheck_id%7D/get/parameters/0': z.string(),
'alert_id': z.string(),
check_id: z.string(),
alert_id: z.string()}),
                handler: uptime_alert_,
            },
        

             'digitalocean.volumes_/sync': {
                schema: z.object({
                  'volume_id': z.string(),
volume_id: z.string()}),
                handler: volumes_,
            },
        

             'digitalocean.volumeActions_/sync': {
                schema: z.object({
                  '#/paths/~1v2~1volumes~1%7Bvolume_id%7D/get/parameters/0': z.string(),
'#/paths/~1v2~1actions~1%7Baction_id%7D/get/parameters/0': z.string(),
'#/paths/~1v2~1account~1keys/get/parameters/0': z.string(),
'#/paths/~1v2~1account~1keys/get/parameters/1': z.string(),
volume_id: z.string(),
action_id: z.string()}),
                handler: volumeActions_,
            },
        

             'digitalocean.vpcs_/sync': {
                schema: z.object({
                  'vpc_id': z.string(),
vpc_id: z.string()}),
                handler: vpcs_,
            },
        }
    return this.events;
  }


  async getProxy({ referenceId }: { referenceId: string }) {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId })

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`)
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id)

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: "",
      globalParams: {
        headers: {
          Authorization: `Bearer ${credential?.value}`
        }
      }
    })
    
    return client
  }

  getAuthenticator() {
    return new IntegrationAuth({
      dataAccess: this.dataLayer!,
      onConnectionCreated: () => {
        // TODO
      },
      config: {
        INTEGRATION_NAME: this.name,
        AUTH_TYPE: this.config.authType,
        CLIENT_ID: this.config.CLIENT_ID,
        CLIENT_SECRET: this.config.CLIENT_SECRET,
        REDIRECT_URI: this.config.REDIRECT_URI,
        SERVER: `https://cloud.digitalocean.com`,
        AUTHORIZATION_ENDPOINT: '/v1/oauth/authorize',
        TOKEN_ENDPOINT: '/v1/oauth/token',
        SCOPES: [],
      },
    });
  }
}
    
    