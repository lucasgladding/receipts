import { DateTime } from 'luxon';

function amount(input: number): string {
    return input.toLocaleString();
}

function date(input: DateTime): string {
    return input.toFormat('yyyy-LL-dd');
}

function money(input: number): string {
    return input.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const Format = { amount, date, money };
