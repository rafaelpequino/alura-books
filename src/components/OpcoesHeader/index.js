import styled from "styled-components"

const OpcoessContainer = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    height: 100%;
    padding: 0 5px;
    text-align: center;
    cursor: pointer;
`

const Opcoes = () => {

    const textoOpcoes = [
        'CATEGORIAS',
        'FAVORITOS',
        'MINHA ESTANTE'
    ]

    return (
        <OpcoessContainer>
            {textoOpcoes.map(texto => <Opcao>{texto}</Opcao>)}
        </OpcoessContainer>
    )
}

export default Opcoes;