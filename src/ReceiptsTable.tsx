import React, { useEffect } from 'react';
import { Format } from './Format';
import { useReceiptsTableData } from './useReceiptsTableData';

function ReceiptsTable() {
    const { load, receipts } = useReceiptsTableData();

    useEffect(load, []);

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
                {receipts.map((item) => (
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
