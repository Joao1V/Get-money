import {useContext, useEffect, useState} from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import {useTransactions} from "../../hooks/TransactionsContext";


export function TransactionsTable () {

    const {transactions} = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                {transactions.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td className={item.type}>
                            {item.type === 'withdrawn' && <span>-</span>}
                            {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(item.amount)}
                        </td>
                        <td>{item.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date (item.createdAt))}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}