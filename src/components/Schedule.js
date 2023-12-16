import React from "react";
import Table from 'react-bootstrap/Table';

export default function Schedule() {
    return (
        <>
        <Table>
            <tbody>
                <tr>
                    <th className="align-middle">Lundi</th>
                    <td className="align-middle text-center">-</td>
                </tr>
                <tr>
                    <th className="align-middle">Mardi</th>
                    <td className="align-middle text-center">10h-19h<br/>10h-14h (sans RDV)</td>
                </tr>
                <tr>
                    <th className="align-middle">Mercredi</th>
                    <td className="align-middle text-center">-</td>
                </tr>
                <tr>
                    <th className="align-middle">Jeudi</th>
                    <td rowSpan={3} className="align-middle text-center">10h-19h<br/>14-18h (sans RDV)</td>
                </tr>
                <tr>
                    <th className="align-middle">Vendredi pair</th>
                </tr>
                <tr>
                    <th className="align-middle">Samedi impair</th>
                </tr>
            </tbody>
        </Table>
        </>
    );
}