import { rest } from 'msw';

const receipt = {
    num: '1234',
    vendor: 'Acme Inc',
    location: 'Waterloo, Ontario',
    status: 'Paid',
    subtotal: 100.00,
    taxes: 13.00,
    total: 113.00,
};

export const handlers = [
    rest.get('/receipts', (request, response, context) => {
        const data = [receipt];
        return response(context.status(200), context.json({ data }));
    }),
];
