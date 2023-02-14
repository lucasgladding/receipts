import { Format } from './Format';

describe('amount', () => {
    it('formats an amount', () => {
        const input = 123.45;
        expect(Format.amount(input)).toEqual('123.45');
    });
});