import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string,
    category: string,
    createdAt:string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction:TransactionInput) => Promise<void>
}

const TransactionsContext =  createContext<TransactionsContextData>({} as TransactionsContextData)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect (() => {
        api.get('transactions')
            .then(res => setTransactions(res.data.transactions))
    }, []);

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})

        setTransactions([...transactions, response.data])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

    return context
}