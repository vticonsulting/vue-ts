import { SortOrder } from '~/enums/SortOrder'

export type SortKey = (row: any, sortOrder: SortOrder) => any
