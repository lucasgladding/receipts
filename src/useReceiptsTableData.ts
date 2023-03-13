import { useQuery } from 'react-query';
import { Receipt } from './types/Receipt';
import { ReceiptsTableData } from './types/ReceiptsTableData';

async function list(): Promise<ReceiptsTableData[]> {
    const response = await fetch('/receipts');
    const json = await response.json();
    return json.data.map(Receipt.decode);
}

export const useReceiptsTableData = () => {
    const query = useQuery('receipts', list);
    const loading = query.isLoading;
    const receipts = query.data;
    return { loading, receipts };
};
