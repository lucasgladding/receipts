export interface ReceiptsTableData {
    num: string;
    vendor: string;
    location: string;
    status: string;
    subtotal: number;
    taxes: number;
    total: number;
}

export type ReceiptsTableField = keyof ReceiptsTableData;
