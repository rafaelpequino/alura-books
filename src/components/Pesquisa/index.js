import styled from "styled-components"
import InputPesquisa from "../InputPesquisa/Index";

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const PesquisaSection = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Pesquisa = () => {
    return (
        <PesquisaSection>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputPesquisa placeholder="Escreva sua próxima leitura." />
        </PesquisaSection>
    )
}

export default Pesquisa;