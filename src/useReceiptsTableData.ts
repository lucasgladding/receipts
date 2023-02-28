import { useQuery } from 'react-query';
import { ReceiptsTableData } from './types/types';
import { DateTime } from 'luxon';

async function list(): Promise<ReceiptsTableData[]> {
    const response = await fetch('/receipts');
    const json = await response.json();
    return json.data.map((data: any) => ({
        ...data,
        date: DateTime.fromISO(data.date),
    }));
}

export const useReceiptsTableData = () => {
    const query = useQuery('receipts', list);
    const loading = query.isLoading;
    const receipts = query.data;
    return { loading, receipts };
};
