import { useState } from "react"
import ReactModal from "react-modal"
import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header ({onOpenNewTransactionModal}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="get money" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>

    )
    
}