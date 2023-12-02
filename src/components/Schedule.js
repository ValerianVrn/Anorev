import React from "react";
import Table from 'react-bootstrap/Table';

export default function Schedule() {
    return (
        <>
        <Table bordered >
            <thead>
                <tr>
                    <th></th>
                    <th className="text-center align-middle">Avec rendez-vous</th>
                    <th className="text-center align-middle">Sans rendez-vous</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Mardi</th>
                    <td rowSpan={4} className="text-center align-middle">10h-19h</td>
                    <td className="text-center align-middle">10h-14h</td>
                </tr>
                <tr>
                    <th>Jeudi</th>
                    <td rowSpan={3} className="text-center align-middle">14h-18h</td>
                </tr>
                <tr>
                    <th>Vendredi (semaines paires)</th>
                </tr>
                <tr>
                    <th>Samedi (semaines impaires)</th>
                </tr>
            </tbody>
        </Table>
        </>
    );
}