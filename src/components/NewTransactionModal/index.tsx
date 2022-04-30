import Modal from 'react-modal';
import {Container} from "./styles";

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
          <Container>
              <h2>Cadastrar transação</h2>

              <input placeholder='Titulo'/>
              <input placeholder='Valor' type='number'/>
              <input placeholder='Categoria'/>

              <button type='submit'> Cadastrar </button>
          </Container>
      </Modal>
  )
}