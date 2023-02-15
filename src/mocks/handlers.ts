import { rest } from 'msw';
import { ReceiptsTableData } from '../types/types';

const receipts: ReceiptsTableData[] = [
    {
        num: '1',
        vendor: 'Acme Corp',
        location: 'Waterloo, Ontario',
        status: 'Paid',
        subtotal: 100.00,
        taxes: 13.00,
        total: 113.00,
    },
    {
        num: '2',
        vendor: 'Oscorp',
        location: 'Kitchener, Ontario',
        status: 'Paid',
        subtotal: 200.00,
        taxes: 26.00,
        total: 226.00,
    },
    {
        num: '3',
        vendor: 'Wayne Enterprises',
        location: 'Cambridge, Ontario',
        status: 'Paid',
        subtotal: 300.00,
        taxes: 39.00,
        total: 339.00,
    },
];

export const handlers = [
    rest.get('/receipts', (request, response, context) => {
        return response(context.status(200), context.json({ data: receipts }));
    }),
];
