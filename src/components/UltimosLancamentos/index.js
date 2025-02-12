import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos'

const LancamentosContainer = styled.section`
    background-color: #EBECEC;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;


const UltimosLancamentos = () => {
    return (
        <LancamentosContainer>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
        </LancamentosContainer>
    )
}

export default UltimosLancamentos;