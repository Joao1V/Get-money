import { Container } from "./style";
import entradaImg from "../../assets/entrada.svg"
import saidaImg from "../../assets/saida.svg"
import totalImg from "../../assets/Total.svg"
import {useContext} from "react";
import {useTransactions} from "../../hooks/TransactionsContext";

export function Summary () {

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction)=>{
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits:0,
        withdraws:0,
        total:0,
    })
    return (
        <h1>
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={entradaImg} alt="Entradas" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}
                    </strong>
                </div>

                <div>
                    <header>
                        <p>- Saidas</p>
                        <img src={saidaImg} alt="Saidas" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}
                    </strong>
                </div>

                <div className="highlight-background">
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="Total" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                    </strong>
                </div>
            </Container>
        </h1>
    )
}