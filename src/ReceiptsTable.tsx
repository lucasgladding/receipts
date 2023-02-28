import React from 'react';
import { Format } from './Format';
import { useReceiptsTableData } from './useReceiptsTableData';

function ReceiptsTable() {
    const { loading, receipts } = useReceiptsTableData();

    if (loading) {
        return (<div>Loading...</div>);
    }

    if (!receipts) {
        return (<div>Could not find receipts...</div>);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Contact</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Subtotal</th>
                    <th>Taxes</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {receipts.map((item) => (
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.contact}</td>
                        <td>{Format.date(item.date)}</td>
                        <td>{item.location}</td>
                        <td>{item.status}</td>
                        <td>{Format.money(item.subtotal)}</td>
                        <td>{Format.money(item.taxes)}</td>
                        <td>{Format.money(item.total)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ReceiptsTable;
