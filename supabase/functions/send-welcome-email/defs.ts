export interface WaitlistRecord {
  id: number;
  name: string | null;
  email: string;
  response: string | null;
  source: string | null;
  created_at: string;
}

export interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: WaitlistRecord;
  old_record: WaitlistRecord | null;
}
