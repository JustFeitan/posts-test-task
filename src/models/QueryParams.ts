import { SortingOrder } from "@models/SortingOrder";

export interface QueryParams {
    page: number;
    limit?: number;
    sort?: string;
    order?: SortingOrder;
    like?: string;
}
