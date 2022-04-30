import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import {NewTransactionModal} from "./components/NewTransactionModal";

const Title = styled.h1 `
color: #8257e6;
font-size: 64px;
`
Modal.setAppElement("#root") //joga o elemento dentro do root e nao no body que é o default
export const App = () => {
  const [modalTransaction, setModalTransaction] = useState(false)

  const handleOpen = () => {
      setModalTransaction(true)
  }

  const handleClose = () => {
      setModalTransaction(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpen} />
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal isOpen={modalTransaction} onRequestClose={handleClose}/>
    </>
  );
}
