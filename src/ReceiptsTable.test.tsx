import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';

import { Format } from './Format';
import ReceiptsTable from './ReceiptsTable';
import { ReceiptsTableData, ReceiptsTableField } from './types/ReceiptsTableData';

const client = new QueryClient();

function renderReceiptsTable() {
    return render(
        <QueryClientProvider client={client}>
            <ReceiptsTable />
        </QueryClientProvider>
    );
}

describe('renders the headings', () => {
    const headings: string[] = [
        '#',
        'Contact',
        'Date',
        'Location',
        'Status',
        'Subtotal',
        'Taxes',
        'Total',
    ];

    it.each(headings)('renders the %s heading', async (heading) => {
        renderReceiptsTable();
        expect(await screen.findByText(heading)).toBeInTheDocument();
    })
});

describe('renders the data', () => {
    let receipt: ReceiptsTableData | undefined = undefined;

    beforeAll(async () => {
        const response = await fetch('/receipts');
        const json = await response.json();
        receipt = json.data[0];
    });

    const strings: ReceiptsTableField[] = [
        'num',
        'contact',
        'location',
    ];

    const amounts: ReceiptsTableField[] = [
        'subtotal',
        'taxes',
        'total',
    ];

    it.each(strings)('renders the %s string field', async (accessor: ReceiptsTableField) => {
        const target = receipt![accessor] as string;
        renderReceiptsTable();
        expect(await screen.findAllByText(target)).not.toHaveLength(0);
    });

    it('renders the status field', async () => {
        renderReceiptsTable();
        expect(await screen.findAllByText(receipt!.status)).not.toHaveLength(0);
    });

    it.each(amounts)('renders the %s amount field', async (accessor: ReceiptsTableField) => {
        const target = receipt![accessor] as number;
        const expected = Format.money(target);
        renderReceiptsTable();
        expect(await screen.findAllByText(expected)).not.toHaveLength(0);
    });
});
