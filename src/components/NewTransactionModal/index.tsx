import Modal from 'react-modal';
import {FormEvent, useContext, useState} from 'react'
import {Container, TransactionsTypeContainer, RadioBox} from "./styles";
import closeImg from '../../assets/btnfechar.svg'
import outImg from '../../assets/saida.svg'
import incomeImg from '../../assets/entrada.svg'
import {useTransactions} from "../../hooks/TransactionsContext";



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {

    const {createTransaction} = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
       await createTransaction({
            title,amount,category,type
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }
  return (
      // eslint-disable-next-line react/jsx-no-undef
      <Modal isOpen={isOpen}
             onRequestClose={onRequestClose}
             overlayClassName='react-modal-overlay'
             className='react-modal-content'
      >
          <button type='button' onClick={onRequestClose} className='react-modal-close'>
              <img src={closeImg} alt="Fechar Modal"/>
          </button>
          <Container onSubmit={handleSubmit}>
              <h2>Cadastrar transação</h2>

              <input placeholder='Titulo' onChange={(e) => setTitle(e.target.value)}/>
              <input placeholder='Valor' type='number' onChange={(e) => setAmount(Number(e.target.value))}/>

              <TransactionsTypeContainer>
                  <RadioBox type='button'
                            onClick={() => {
                                setType('deposit')
                            } }
                            activeColor='green'
                            isActive={type === 'deposit'}>
                      <img src={incomeImg} alt="Entrada"/>
                      <span>Entrada</span>
                  </RadioBox>
                  <RadioBox   onClick={() => {
                                  setType('withdrawn')
                                }}
                             isActive={type === 'withdrawn'}
                             activeColor='red'
                             type='button'>
                      <img src={outImg} alt="Saída"/>
                      <span>Saida</span>
                  </RadioBox>
              </TransactionsTypeContainer>

              <input placeholder='Categoria' onChange={(e) => setCategory(e.target.value) }/>

              <button type='submit'> Cadastrar </button>
          </Container>
      </Modal>
  )
}