import { DateTime } from 'luxon';

export interface ReceiptsTableData {
    num: string;
    contact: string;
    date: DateTime;
    location: string;
    status: string;
    subtotal: number;
    taxes: number;
    total: number;
}

export type ReceiptsTableField = keyof ReceiptsTableData;
