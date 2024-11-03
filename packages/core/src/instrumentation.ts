import { NodeSDK } from '@opentelemetry/sdk-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource, ResourceAttributes } from '@opentelemetry/resources';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';

// Configure OpenTelemetry logging
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
export interface TelemetryConfig {
  serviceName: string;
  serviceVersion?: string;
  environment?: string;
  endpoint?: string;
  attributes?: Partial<ResourceAttributes>;
}

export class Telemetry {
  private static instance: NodeSDK;
  private static isInitialized = false;

  public static initialize(config: TelemetryConfig): void {
    if (this.isInitialized) {
      diag.warn('OpenTelemetry has already been initialized');
      return;
    }

    const resource = new Resource({
      'service.name': config.serviceName,
      'service.version': config.serviceVersion || '1.0.0',
      'deployment.environment': config.environment || 'production',
      ...config.attributes, // Allow additional custom attributes
    });

    const sdk = new NodeSDK({
      resource,
      traceExporter: new OTLPTraceExporter({
        url: config.endpoint,
      }),
      instrumentations: [],
    });

    // Handle shutdown gracefully
    process.on('SIGTERM', () => {
      sdk.shutdown()
        .then(() => console.log('OpenTelemetry SDK shut down successfully'))
        .catch((error) => console.error('Error shutting down OpenTelemetry SDK', error))
    });

    // Start the SDK
    try {
      sdk.start()
      this.instance = sdk;
      this.isInitialized = true;
      diag.info('OpenTelemetry initialization completed');
    } catch (e) {
      diag.error('Error initializing OpenTelemetry', e);
      throw e;
    }
  }

  public static getInstance(): NodeSDK {
    if (!this.isInitialized) {
      throw new Error('OpenTelemetry has not been initialized. Call initialize() first.');
    }
    return this.instance;
  }
}