import { DateTime } from 'luxon';

export class Receipt {
    num: string;
    contact: string;
    date: DateTime;
    location: string;
    status: string;
    subtotal: number;
    taxes: number;
    total: number;

    constructor(data: any) {
        this.num = data.num;
        this.contact = data.contact;
        this.date = data.date;
        this.location = data.location;
        this.status = data.status;
        this.subtotal = data.subtotal;
        this.taxes = data.taxes;
        this.total = data.total;
    }

    static decode(data: any): Receipt {
        const { date, ...rest } = data;
        return new Receipt({
            ...rest,
            date: DateTime.fromISO(date),
        });
    }
}
