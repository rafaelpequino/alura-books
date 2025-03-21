import styled from "styled-components"
import InputPesquisa from "../InputPesquisa/Index";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";
import { postFavorito } from "../../services/favoritos";

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
    padding: 85px 0 20px;
    min-height: 270px;
    height: max-content;
    width: 100%;
`

const DivLivro = styled.div`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 20px auto;
    cursor: pointer;

    & :hover {
        outline: 2px solid white;
    }
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

    async function insertFavorito(id) {
        await postFavorito(id)
        alert('Livro adicionado aos favoritos!')
    }

    return (
        <PesquisaSection>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <InputPesquisa 
                placeholder="Escreva sua próxima leitura."
                onChange={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <div>
                { livrosPesquisados.map( livro => (
                    <DivLivro onClick={() => insertFavorito(livro.id) } key={livro.nome} >
                        <img src={livro.src} />
                        <p>{livro.nome}</p>
                    </DivLivro>
                )) }
            </div>
        </PesquisaSection>
    )
}

export default Pesquisa;