import {useEffect, useState} from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string,
    category: string,
    createdAt:string
}
export function TransactionsTable () {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect (() => {
        api.get('transactions')
        .then(res => setTransactions(res.data.transactions))
    }, []);
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
                        <td>{item.createdAt}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    )
}