import styled from "styled-components"
import { Link } from "react-router-dom"

const OpcoesContainer = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    text-align: center;
    cursor: pointer;
    color: #000;
    text-decoration: none;
`

const Opcoes = () => {

    const textoOpcoes = [
        {
            name: 'CATEGORIAS',
            route: '/categorias'
        },
        {
            name: 'FAVORITOS',
            route: '/favoritos'
        },
        {
            name: 'MINHA ESTANTE',
            route: '/estante'
        }
    ]

    return (
        <OpcoesContainer>
            {textoOpcoes.map(texto => (
                <Link to={texto.route}>
                    <Opcao key={texto.name}>{texto.name}</Opcao>
                </Link>
            ))}
        </OpcoesContainer>
    )
}

export default Opcoes;