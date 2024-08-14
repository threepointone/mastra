import { Inngest, EventSchemas } from 'inngest';

export const inngest = new Inngest({
  id: 'CORE',
  schemas: new EventSchemas().fromRecord<{
    'workflow/run-automations': {
      data: {
        trigger: string;
        payload: unknown;
        blueprintId?: string;
      };
      user: {
        workspaceId: string;
        userId: string;
      };
    };
    'workflow/run-system-automations': {
      data: {
        trigger: string;
        worksheetId: string;
      };
      user: {
        workspaceId: string;
        userId: string;
      };
    };
  }>(),
});
