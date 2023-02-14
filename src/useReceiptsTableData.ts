import { useState } from 'react';

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

async function execute(uri: string) {
    const response = await fetch(uri);
    return response.json();
}

export const useReceiptsTableData = () => {
    const [receipts, setReceipts] = useState<ReceiptsTableData[]>([]);

    function load() {
        execute('/receipts').then(({ data }) => setReceipts(data));
    }

    return { load, receipts };
};
