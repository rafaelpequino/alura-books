import './Icones.css'

const Icones = () => {

    const icones = [
        {
            imagem: '/img/sacola.svg',
            alt: 'Ícone de sacola'
        },
        {
            imagem: '/img/perfil.svg',
            alt: 'Ícone de perfil'
        }
    ]
    
    return (
        <ul className='opcoes'>
            {icones.map(icone => <li className='opcaoIcone'><img src={icone.imagem} alt='icone.alt' /></li>)}
        </ul>
    )
}

export default Icones;