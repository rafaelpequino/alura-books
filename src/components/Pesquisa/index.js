import styled from "styled-components"
import InputPesquisa from "../InputPesquisa/Index";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";

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

const DivLivro = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px auto;
`


const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI);
    }

    return (
        <PesquisaSection>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputPesquisa 
                placeholder="Escreva sua próxima leitura."
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <div>
                { livrosPesquisados.map( livro => (
                    <DivLivro key={livro.nome}>
                        <img src={livro.src} />
                        <p>{livro.nome}</p>
                    </DivLivro>
                )) }
            </div>
        </PesquisaSection>
    )
}

export default Pesquisa;