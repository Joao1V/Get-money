import { Container } from "./style";
import entradaImg from "../../assets/entrada.svg"
import saidaImg from "../../assets/saida.svg"
import totalImg from "../../assets/Total.svg"
export function Summary () {

    return (
        <h1>
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={entradaImg} alt="Entradas" />
                    </header>
                    <strong>R$1.000,00</strong>
                </div>

                <div>
                    <header>
                        <p>- Saidas</p>
                        <img src={saidaImg} alt="Saidas" />
                    </header>
                    <strong>R$500,00</strong>
                </div>

                <div className="highlight-background">
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="Total" />
                    </header>
                    <strong>R$1.000,00</strong>
                </div>
            </Container>
        </h1>
    )
}