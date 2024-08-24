import { Integration } from '@arkw/core';
import Stripe from 'stripe';
import { z } from 'zod';

//@ts-ignore
import mailChimpIcon from './assets/mailchimp.svg';
import { stripeSync } from './events/sync';

type StripeConfig = {
  SECRET_KEY: string;
};

export class StripeIntegration extends Integration {
  config: StripeConfig;

  entityTypes = { CUSTOMERS: 'CUSTOMERS', PRICES: 'PRICES', PRODUCTS: 'PRODUCTS', SUBSCRIPTIONS: 'SUBSCRIPTIONS' };

  constructor({ config }: { config: StripeConfig }) {
    super({
      ...config,
      name: 'STRIPE',
      logoUrl: mailChimpIcon,
    });

    this.config = config;
  }

  async getProxy(): Promise<Stripe> {
    return new Stripe(this.config.SECRET_KEY);
  }

  registerEvents() {
    this.events = {
      'stripe/sync.table': {
        schema: z.object({
          entityId: z.string(),
          entityType: z.string(),
        }),
        handler: stripeSync,
      },
    };

    return this.events;
  }
}
