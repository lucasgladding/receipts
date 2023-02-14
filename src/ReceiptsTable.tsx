import React from 'react';
import { Format } from './Format';

export interface TableData {
    num: string;
    vendor: string;
    location: string;
    status: string;
    subtotal: number;
    taxes: number;
    total: number;
}

export type TableDataField = keyof TableData;

function ReceiptsTable() {
    const record = {
        num: '1234',
        vendor: 'Acme Inc',
        location: 'Waterloo, Ontario',
        status: 'Paid',
        subtotal: 100.00,
        taxes: 13.00,
        total: 113.00,
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Vendor</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Subtotal</th>
                    <th>Taxes</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{record.num}</td>
                    <td>{record.vendor}</td>
                    <td>{record.location}</td>
                    <td>{record.status}</td>
                    <td>{Format.amount(record.subtotal)}</td>
                    <td>{Format.amount(record.taxes)}</td>
                    <td>{Format.amount(record.total)}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ReceiptsTable;
