import { PropertyType, type EventHandler } from '@arkw/core';

import type { StripeIntegration } from '..';

export const stripeSync: EventHandler<StripeIntegration> = ({ eventKey, integrationInstance, makeWebhookUrl }) => ({
  id: `${integrationInstance.name}-sync`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const stripe = await integrationInstance.getProxy();

    let connection = await integrationInstance.dataLayer?.getConnectionByReferenceId({
      referenceId: integrationInstance.name,
      name: integrationInstance.name,
    });

    if (!connection) {
      connection = await integrationInstance.dataLayer?.createConnection({
        connection: {
          name: integrationInstance.name,
          referenceId: integrationInstance.name,
        },
        credential: {
          type: 'API_KEY',
          value: integrationInstance.config.SECRET_KEY,
        },
      });
    }

    const customers = await stripe.customers.list();

    await integrationInstance.dataLayer?.syncData({
      referenceId: integrationInstance.name,
      name: integrationInstance.name,
      data: customers.data.map(customer => ({
        externalId: customer.id,
        data: customer,
        entityType: integrationInstance.entityTypes.CUSTOMERS,
      })),
      type: integrationInstance.entityTypes.CUSTOMERS,
      properties: [
        {
          name: `id`,
          displayName: `ID`,
          order: 0,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `email`,
          displayName: `Email`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
      ],
    });

    const products = await stripe.products.list();

    await integrationInstance.dataLayer?.syncData({
      referenceId: integrationInstance.name,
      name: integrationInstance.name,
      data: products.data.map(p => ({
        externalId: p.id,
        data: p,
        entityType: integrationInstance.entityTypes.PRODUCTS,
      })),
      type: integrationInstance.entityTypes.PRODUCTS,
      properties: [
        {
          name: `id`,
          displayName: `ID`,
          order: 0,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `default_price`,
          displayName: `Default price`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `name`,
          displayName: `Name`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `type`,
          displayName: `Type`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `tax_code`,
          displayName: `Tax code`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
      ],
    });

    const subs = await stripe.subscriptions.list();

    await integrationInstance.dataLayer?.syncData({
      referenceId: integrationInstance.name,
      name: integrationInstance.name,
      data: subs.data.map(p => ({
        externalId: p.id,
        data: p,
        entityType: integrationInstance.entityTypes.SUBSCRIPTIONS,
      })),
      type: integrationInstance.entityTypes.SUBSCRIPTIONS,
      properties: [
        {
          name: `id`,
          displayName: `ID`,
          order: 0,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
      ],
    });

    const prices = await stripe.prices.list();

    await integrationInstance.dataLayer?.syncData({
      referenceId: integrationInstance.name,
      name: integrationInstance.name,
      data: prices.data.map(p => ({
        externalId: p.id,
        data: p,
        entityType: integrationInstance.entityTypes.PRICES,
      })),
      type: integrationInstance.entityTypes.PRICES,
      properties: [
        {
          name: `id`,
          displayName: `ID`,
          order: 0,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `billing_scheme`,
          displayName: `Billing scheme`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `currency`,
          displayName: `Currency`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `product`,
          displayName: `Product`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `nickname`,
          displayName: `Nickname`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `tax_behavior`,
          displayName: `Tax behavior`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `type`,
          displayName: `Type`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `unit_amount`,
          displayName: `Unit amount`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
        {
          name: `unit_amount_decimal`,
          displayName: `Unit amount decimal`,
          order: 1,
          type: PropertyType.SINGLE_LINE_TEXT,
        },
      ],
    });
  },
});
