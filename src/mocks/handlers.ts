import { rest } from 'msw';

export const handlers = [
    rest.get('/receipts', (request, response, context) => {
        const receipts = require('../responses/receipts.list.json');
        return response(context.status(200), context.json({ data: receipts }));
    }),
];
