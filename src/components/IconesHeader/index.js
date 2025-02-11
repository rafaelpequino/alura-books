import styled from 'styled-components'

const IconesContainer = styled.ul`
    display: flex;
`

const Icone = styled.li`
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
        <IconesContainer>
            {icones.map(icone => <Icone key={icone.imagem}><img src={icone.imagem} alt={icone.alt} /></Icone>)}
        </IconesContainer>
    )
}

export default Icones;