import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"

export function Header () {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="get money" />
                <button type="button">Nova Transação</button>
                <div>Um teste</div>
            </Content>
          
        </Container>

    )
    
}