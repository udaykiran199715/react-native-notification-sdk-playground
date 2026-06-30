export interface UserDocument {
  readonly id: string;

  readonly metadata: Readonly<Record<string, unknown>>;
}
