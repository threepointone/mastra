import { EventHandler } from '@arkw/core';

import { credit_note_line_itemFields } from '../constants';

import { StripeIntegration } from '..';

export const GetCreditNotesPreviewLines: EventHandler<StripeIntegration> = ({
  eventKey,
  integrationInstance: { name, dataLayer, getProxy },
  makeWebhookUrl,
}) => ({
  id: `${name}-sync-credit_note_line_item`,
  event: eventKey,
  executor: async ({ event, step }: any) => {
    const {
      amount,
      credit_amount,
      ending_before,
      expand,
      invoice,
      limit,
      lines,
      memo,
      metadata,
      out_of_band_amount,
      reason,
      refund,
      refund_amount,
      shipping_cost,
      starting_after,
    } = event.data;
    const { referenceId } = event.user;
    const proxy = await getProxy({ referenceId });

    const response = await proxy['/v1/credit_notes/preview/lines'].get({
      query: {
        amount,
        credit_amount,
        ending_before,
        expand,
        invoice,
        limit,
        lines,
        memo,
        metadata,
        out_of_band_amount,
        reason,
        refund,
        refund_amount,
        shipping_cost,
        starting_after,
      },
    });

    if (!response.ok) {
      return;
    }

    const d = await response.json();

    const records = d?.data?.map(({ _externalId, ...d2 }) => ({
      externalId: _externalId,
      data: d2,
      entityType: `credit_note_line_item`,
    }));

    await dataLayer?.syncData({
      name,
      referenceId,
      data: records,
      type: `credit_note_line_item`,
      properties: credit_note_line_itemFields,
    });
  },
});
