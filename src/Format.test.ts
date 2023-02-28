import { DateTime } from 'luxon';
import { Format } from './Format';

describe('amount', () => {
    it('formats an amount', () => {
        const input = 123.45;
        expect(Format.amount(input)).toEqual('123.45');
    });
});

describe('date', () => {
    it('formats a date', () => {
        const date = DateTime.local(2022, 6, 30);
        expect(Format.date(date)).toEqual('2022-06-30');
    });
});

describe('money', () => {
    it('formats money', () => {
        const input = 123.45;
        expect(Format.money(input)).toEqual('$123.45');
    });
});
