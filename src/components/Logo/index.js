import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
`

const Logo = () => {
    return (
        <LogoContainer>
            <img src='/img/logo.svg' alt='Logo da Alura Books' />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo