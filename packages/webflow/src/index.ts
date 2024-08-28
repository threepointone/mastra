
import { Integration, IntegrationAuth } from '@arkw/core';
import { createClient, type OASClient, type NormalizeOAS } from 'fets'
import { z } from 'zod'
import openapi from './openapi'
import { AppClients } from './events/AppClients'
import { Assets } from './events/Assets'
import { Asset } from './events/Asset'
import { Datasets } from './events/Datasets'
import { Dataset } from './events/Dataset'
import { DeploymentEnvironments } from './events/DeploymentEnvironments'
import { DeploymentEnvironment } from './events/DeploymentEnvironment'
import { Documents } from './events/Documents'
import { Document } from './events/Document'
import { Logs } from './events/Logs'
import { Log } from './events/Log'
import { Models } from './events/Models'
import { Model } from './events/Model'
import { DataBundles } from './events/DataBundles'
import { Trainings } from './events/Trainings'
import { Organizations } from './events/Organizations'
import { Organization } from './events/Organization'
import { PaymentMethods } from './events/PaymentMethods'
import { PaymentMethod } from './events/PaymentMethod'
import { Plans } from './events/Plans'
import { Plan } from './events/Plan'
import { Predictions } from './events/Predictions'
import { Profile } from './events/Profile'
import { Secrets } from './events/Secrets'
import { Transitions } from './events/Transitions'
import { Transition } from './events/Transition'
import { TransitionExecutions } from './events/TransitionExecutions'
import { TransitionExecution } from './events/TransitionExecution'
import { Users } from './events/Users'
import { User } from './events/User'
import { Workflows } from './events/Workflows'
import { Workflow } from './events/Workflow'
import { WorkflowExecutions } from './events/WorkflowExecutions'
import { WorkflowExecution } from './events/WorkflowExecution'

type WebflowConfig = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  REDIRECT_URI: string;
  [key: string]: any;
};

export class WebflowIntegration extends Integration {
  config: WebflowConfig;

  constructor({ config }: { config: WebflowConfig }) {
    config.authType = `OAUTH`;

    super({
      ...config,
      name: 'WEBFLOW',
      logoUrl: "TODO",
    });

    this.config = config;
  }

  registerEvents() {
    this.events = {
             'webflow.AppClients/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: AppClients,
            },
        

             'webflow.Assets/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Assets,
            },
        

             'webflow.Asset/sync': {
                schema: z.object({
                  'assetId': z.string(),
assetId: z.string()}),
                handler: Asset,
            },
        

             'webflow.Datasets/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Datasets,
            },
        

             'webflow.Dataset/sync': {
                schema: z.object({
                  'datasetId': z.string(),
datasetId: z.string()}),
                handler: Dataset,
            },
        

             'webflow.DeploymentEnvironments/sync': {
                schema: z.object({
                  'owner': z.string(),
'nextToken': z.string(),
'maxResults': z.string()}),
                handler: DeploymentEnvironments,
            },
        

             'webflow.DeploymentEnvironment/sync': {
                schema: z.object({
                  'deploymentEnvironmentId': z.string(),
deploymentEnvironmentId: z.string()}),
                handler: DeploymentEnvironment,
            },
        

             'webflow.Documents/sync': {
                schema: z.object({
                  'datasetId': z.string(),
'nextToken': z.string(),
'order': z.string(),
'documentId': z.string(),
'consentId': z.string(),
'maxResults': z.string(),
'sortBy': z.string()}),
                handler: Documents,
            },
        

             'webflow.Document/sync': {
                schema: z.object({
                  'documentId': z.string(),
documentId: z.string()}),
                handler: Document,
            },
        

             'webflow.Logs/sync': {
                schema: z.object({
                  'workflowId': z.string(),
'nextToken': z.string(),
'order': z.string(),
'transitionExecutionId': z.string(),
'transitionId': z.string(),
'maxResults': z.string(),
'workflowExecutionId': z.string()}),
                handler: Logs,
            },
        

             'webflow.Log/sync': {
                schema: z.object({
                  'logId': z.string(),
logId: z.string()}),
                handler: Log,
            },
        

             'webflow.Models/sync': {
                schema: z.object({
                  'owner': z.string(),
'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Models,
            },
        

             'webflow.Model/sync': {
                schema: z.object({
                  'modelId': z.string(),
modelId: z.string()}),
                handler: Model,
            },
        

             'webflow.DataBundles/sync': {
                schema: z.object({
                  'modelId': z.string(),
'status': z.string(),
'nextToken': z.string(),
'maxResults': z.string(),
modelId: z.string()}),
                handler: DataBundles,
            },
        

             'webflow.Trainings/sync': {
                schema: z.object({
                  'modelId': z.string(),
'status': z.string(),
'nextToken': z.string(),
'maxResults': z.string(),
modelId: z.string()}),
                handler: Trainings,
            },
        

             'webflow.Organizations/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Organizations,
            },
        

             'webflow.Organization/sync': {
                schema: z.object({
                  'organizationId': z.string(),
organizationId: z.string()}),
                handler: Organization,
            },
        

             'webflow.PaymentMethods/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: PaymentMethods,
            },
        

             'webflow.PaymentMethod/sync': {
                schema: z.object({
                  'paymentMethodId': z.string(),
paymentMethodId: z.string()}),
                handler: PaymentMethod,
            },
        

             'webflow.Plans/sync': {
                schema: z.object({
                  'owner': z.string(),
'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Plans,
            },
        

             'webflow.Plan/sync': {
                schema: z.object({
                  'planId': z.string(),
planId: z.string()}),
                handler: Plan,
            },
        

             'webflow.Predictions/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string(),
'sortBy': z.string(),
'order': z.string()}),
                handler: Predictions,
            },
        

             'webflow.Profile/sync': {
                schema: z.object({
                  'profileId': z.string(),
profileId: z.string()}),
                handler: Profile,
            },
        

             'webflow.Secrets/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Secrets,
            },
        

             'webflow.Transitions/sync': {
                schema: z.object({
                  'transitionType': z.string(),
'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Transitions,
            },
        

             'webflow.Transition/sync': {
                schema: z.object({
                  'transitionId': z.string(),
transitionId: z.string()}),
                handler: Transition,
            },
        

             'webflow.TransitionExecutions/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'order': z.string(),
'executionId': z.string(),
'transitionId': z.string(),
'status': z.string(),
'maxResults': z.string(),
'sortBy': z.string(),
transitionId: z.string()}),
                handler: TransitionExecutions,
            },
        

             'webflow.TransitionExecution/sync': {
                schema: z.object({
                  'transitionId': z.string(),
'executionId': z.string(),
transitionId: z.string(),
executionId: z.string()}),
                handler: TransitionExecution,
            },
        

             'webflow.Users/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Users,
            },
        

             'webflow.User/sync': {
                schema: z.object({
                  'userId': z.string(),
userId: z.string()}),
                handler: User,
            },
        

             'webflow.Workflows/sync': {
                schema: z.object({
                  'nextToken': z.string(),
'maxResults': z.string()}),
                handler: Workflows,
            },
        

             'webflow.Workflow/sync': {
                schema: z.object({
                  'workflowId': z.string(),
workflowId: z.string()}),
                handler: Workflow,
            },
        

             'webflow.WorkflowExecutions/sync': {
                schema: z.object({
                  'fromStartTime': z.string(),
'toStartTime': z.string(),
'workflowId': z.string(),
'nextToken': z.string(),
'order': z.string(),
'status': z.string(),
'maxResults': z.string(),
'sortBy': z.string(),
workflowId: z.string()}),
                handler: WorkflowExecutions,
            },
        

             'webflow.WorkflowExecution/sync': {
                schema: z.object({
                  'executionId': z.string(),
'workflowId': z.string(),
workflowId: z.string(),
executionId: z.string()}),
                handler: WorkflowExecution,
            },
        }
    return this.events;
  }


  async getProxy({ referenceId }: { referenceId: string }): Promise<OASClient<NormalizeOAS<typeof openapi>>> {
    const connection = await this.dataLayer?.getConnectionByReferenceId({ name: this.name, referenceId })

    if (!connection) {
      throw new Error(`Connection not found for referenceId: ${referenceId}`)
    }

    // TODO: HANDLE REFRESH TOKEN IF EXPIRED
    const credential = await this.dataLayer?.getCredentialsByConnectionId(connection.id)

    const client = createClient<NormalizeOAS<typeof openapi>>({
      endpoint: openapi.servers[0].url,
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
        SERVER: `https://webflow.com`,
        AUTHORIZATION_ENDPOINT: '/oauth/authorize',
        TOKEN_ENDPOINT: '/oauth/access_token',
        SCOPES: [],
      },
    });
  }
}

    