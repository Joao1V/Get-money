import Modal from 'react-modal';
import {Container, TransactionsTypeContainer} from "./styles";
import closeImg from '../../assets/btnfechar.svg'
import outImg from '../../assets/saida.svg'
import incomeImg from '../../assets/entrada.svg'



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
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
          <Container>
              <h2>Cadastrar transação</h2>

              <input placeholder='Titulo'/>
              <input placeholder='Valor' type='number'/>

              <TransactionsTypeContainer>
                  <button type='button'>
                      <img src={incomeImg} alt="Entrada"/>
                      <span>Entrada</span>
                  </button>
                  <button type='button'>
                      <img src={outImg} alt="Saída"/>
                      <span>Saida</span>
                  </button>
              </TransactionsTypeContainer>

              <input placeholder='Categoria'/>

              <button type='submit'> Cadastrar </button>
          </Container>
      </Modal>
  )
}