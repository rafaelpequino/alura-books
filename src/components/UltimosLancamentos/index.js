import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo';

const LancamentosContainer = styled.section`
    background-color: #EBECEC;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
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
            <Titulo cor="#EB9B00">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
        </LancamentosContainer>
    )
}

export default UltimosLancamentos;