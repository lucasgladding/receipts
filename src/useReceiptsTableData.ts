import { useQuery } from 'react-query';

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

async function list(): Promise<ReceiptsTableData[]> {
    const response = await fetch('/receipts');
    const json = await response.json();
    return json.data;
}

export const useReceiptsTableData = () => {
    const query = useQuery('receipts', list);
    const loading = query.isLoading;
    const receipts = query.data;
    return { loading, receipts };
};
