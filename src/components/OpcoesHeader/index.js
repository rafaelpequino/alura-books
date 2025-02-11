import './OpcoesHeader.css'

const Opcoes = () => {

    const textoOpcoes = [
        'CATEGORIAS',
        'FAVORITOS',
        'MINHA ESTANTE'
    ]

    return (
        <ul className='opcoes'>
            {textoOpcoes.map(texto => <li className='opcao'>{texto}</li>)}
        </ul>
    )
}

export default Opcoes;