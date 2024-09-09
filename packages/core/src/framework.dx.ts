import { z, ZodSchema } from 'zod';

type Config = {
  events: {
    [key: string]: {
      schema: ZodSchema;
    };
  };
};

class IntegrationsFramework<C extends Config> {
  constructor(public config: C) {}

  async sendEvent<K extends keyof C['events']>({
    key,
    data,
  }: {
    key: K;
    data: z.infer<C['events'][K]['schema']>;
  }) {
    console.log(key, data);
  }
}

const framework = new IntegrationsFramework({
  events: {
    newEvent: {
      schema: z.object({
        hello: z.string(),
      }),
    },
  },
});

framework.sendEvent({
  key: 'newEvent',
  data: {
    hello: 'world',
  },
});
