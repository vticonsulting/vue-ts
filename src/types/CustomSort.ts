import { SortOrder } from '~/enums/SortOrder';

export type CustomSort = ((a: any, b: any, sortOrder: SortOrder) => number)
