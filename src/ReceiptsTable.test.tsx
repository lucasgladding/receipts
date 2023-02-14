import React from 'react';
import { render, screen } from '@testing-library/react';
import ReceiptsTable from './ReceiptsTable';
import { ReceiptsTableData, ReceiptsTableField } from './useReceiptsTableData';

describe('renders the headings', () => {
    const headings: string[] = [
        '#',
        'Vendor',
        'Location',
        'Status',
        'Subtotal',
        'Taxes',
        'Total',
    ];

    it.each(headings)('renders the %s heading', (heading) => {
        render(<ReceiptsTable />);
        expect(screen.getByText(heading)).toBeInTheDocument();
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
        'vendor',
        'location',
    ];

    const decimals: ReceiptsTableField[] = [
        'subtotal',
        'taxes',
        'total',
    ];

    it.each(strings)('renders the %s string field', async (accessor: ReceiptsTableField) => {
        render(<ReceiptsTable />);
        expect(await screen.findByText(receipt![accessor])).toBeInTheDocument();
    });

    it('renders the status field', async () => {
        render(<ReceiptsTable />);
        expect(await screen.findByText(receipt!.status)).toBeInTheDocument();
    });

    it.each(decimals)('renders the %s decimal field', async (accessor: ReceiptsTableField) => {
        const amount = receipt![accessor];
        const expected = amount.toLocaleString();
        render(<ReceiptsTable />);
        expect(await screen.findByText(expected)).toBeInTheDocument();
    });
});
