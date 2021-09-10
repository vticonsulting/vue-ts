export interface CustomFilter {
  value?: unknown;
  custom: (value: any, row: Record<string, any>) => boolean;
}
