import React, {useEffect, useState} from 'react';
import { Format } from './Format';

export interface ReceiptsTableData {
    num: string;
    vendor: string;
    location: string;
    status: string;
    subtotal: number;
    taxes: number;
    total: number;
}

export type ReceiptsTableField = keyof ReceiptsTableData;

function ReceiptsTable() {
    const [data, setData] = useState<ReceiptsTableData[]>([]);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        const response = await fetch('/receipts');
        const json = await response.json();
        setData(json.data);
    }

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
                {data.map((item) => (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.vendor}</td>
                        <td>{item.location}</td>
                        <td>{item.status}</td>
                        <td>{Format.amount(item.subtotal)}</td>
                        <td>{Format.amount(item.taxes)}</td>
                        <td>{Format.amount(item.total)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ReceiptsTable;
