import React from 'react';
import { render, screen } from '@testing-library/react';
import ReceiptsTable, { ReceiptsTableData, ReceiptsTableField } from './ReceiptsTable';

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

    const receipt: ReceiptsTableData = {
        num: '1234',
        vendor: 'Acme Inc',
        location: 'Waterloo, Ontario',
        status: 'Paid',
        subtotal: 100.00,
        taxes: 13.00,
        total: 113.00,
    };

    it.each(strings)('renders the %s string field', (accessor: ReceiptsTableField) => {
        render(<ReceiptsTable />);
        expect(screen.getByText(receipt[accessor])).toBeInTheDocument();
    });

    it('renders the status field', () => {
        render(<ReceiptsTable />);
        expect(screen.getByText(receipt.status)).toBeInTheDocument();
    });

    it.each(decimals)('renders the %s decimal field', (accessor: ReceiptsTableField) => {
        const amount = receipt[accessor];
        const expected = amount.toLocaleString();
        render(<ReceiptsTable />);
        expect(screen.getByText(expected)).toBeInTheDocument();
    });
});
