import { serve } from 'inngest/next';
import { NextRequest } from 'next/server';
import { Mastra } from '../framework';
import { createWorkflowHandler } from '../workflows/handler';
import { client } from '../utils/inngest';

export const makeInngest = (framework: Mastra) => {
  // TODO: hook into framework to add framework functions to the inngest client
  const eventHandlers = framework.getGlobalEventHandlers();

  const globalEventHandlers = eventHandlers.map((eh) => {
    return client.createFunction(
      {
        id: eh.id,
      },
      {
        event: eh.event,
      },
      async (props) => {
        const step = props.step;
        const syncInterval = props.event.data?.syncInterval;

        if (syncInterval) {
          await step.run('sync', async () => {
            //TODO: type properly
            await eh.executor({ ...props, mastra: framework } as any);
          });

          await step.sleep(`${event}-sleep`, syncInterval);

          await step.run(`${event}-re-run`, () => {
            setTimeout(() => {
              framework.triggerEvent({
                key: eh.event,
                data: props.event.data,
                user: props.event.user,
              });
            }, 1000);
          });
        }

        //TODO: type properly
        return eh.executor({ ...props, mastra: framework } as any);
      }
    );
  });

  const systemWorkflowHandler = createWorkflowHandler({
    blueprintDirPath: framework.config.workflows?.blueprintDirPath,
    runBlueprint: framework.runBlueprint,
  });

  const handler = serve({
    client,
    functions: [...globalEventHandlers, systemWorkflowHandler],
  });

  // @ts-ignore
  return (req: NextRequest) => handler(req);
};
