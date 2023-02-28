import { rest } from 'msw';
import { ReceiptsTableData } from '../types/types';
import { DateTime } from 'luxon';

const receipts: ReceiptsTableData[] = [
    {
        num: '1',
        contact: 'Acme Corp',
        date: DateTime.local(2022, 4, 1),
        location: 'Waterloo, Ontario',
        status: 'Paid',
        subtotal: 100.00,
        taxes: 13.00,
        total: 113.00,
    },
    {
        num: '2',
        contact: 'Oscorp',
        date: DateTime.local(2022, 5, 1),
        location: 'Kitchener, Ontario',
        status: 'Paid',
        subtotal: 200.00,
        taxes: 26.00,
        total: 226.00,
    },
    {
        num: '3',
        contact: 'Wayne Enterprises',
        date: DateTime.local(2022, 6, 1),
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
