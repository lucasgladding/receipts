import { useQuery } from 'react-query';
import { ReceiptsTableData } from './types/types';

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
