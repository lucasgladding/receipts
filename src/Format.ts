function amount(input: number): string {
    return input.toLocaleString();
}

function money(input: number): string {
    return input.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const Format = { amount, money };
