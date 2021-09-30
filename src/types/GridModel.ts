import {
    CompositeFilterDescriptor,
    SortDescriptor,
} from "@progress/kendo-data-query";
import { GridColumnProps } from "@progress/kendo-vue-grid";

export default class GridModel {
    allowPaging?: boolean = true;
    allowFiltering?: boolean = false;
    allowSorting?: boolean = false;
    columns: Array<string | GridColumnProps> = [];
    dataSourceRoute = "";
    errorCallback?: (reason?: string) => void;
    filter?: CompositeFilterDescriptor;
    initialPageSize?: number = 25;
    sort: Array<SortDescriptor> = [];
    successCallback?: () => void;
}
