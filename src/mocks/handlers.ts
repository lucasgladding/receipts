import { rest } from 'msw';
import { ReceiptsTableData } from '../types/ReceiptsTableData';

type ReceiptsJsonData = Omit<ReceiptsTableData, 'date'> & { date: string }

const receipts: ReceiptsJsonData[] = [
    {
        num: '1',
        contact: 'Acme Corp',
        date: '2022-04-01',
        location: 'Waterloo, Ontario',
        status: 'Paid',
        subtotal: 100.00,
        taxes: 13.00,
        total: 113.00,
    },
    {
        num: '2',
        contact: 'Oscorp',
        date: '2022-05-01',
        location: 'Kitchener, Ontario',
        status: 'Paid',
        subtotal: 200.00,
        taxes: 26.00,
        total: 226.00,
    },
    {
        num: '3',
        contact: 'Wayne Enterprises',
        date: '2022-06-01',
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
