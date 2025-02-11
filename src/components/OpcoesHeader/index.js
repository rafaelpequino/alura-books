import styled from "styled-components"

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
`

const Opcoes = () => {

    const textoOpcoes = [
        'CATEGORIAS',
        'FAVORITOS',
        'MINHA ESTANTE'
    ]

    return (
        <OpcoesContainer>
            {textoOpcoes.map(texto => <Opcao>{texto}</Opcao>)}
        </OpcoesContainer>
    )
}

export default Opcoes;