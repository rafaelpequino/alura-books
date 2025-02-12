import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';

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
            <CardRecomenda 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação integrada"
                src="/img/livro2.png"
            />
            <br />
            <CardRecomenda 
                titulo="Hamlet"
                subtitulo="Willian Shakespeare"
                descricao="Obra de Hamlet"
                src="/img/livro.png"
            />
        </LancamentosContainer>
    )
}

export default UltimosLancamentos;