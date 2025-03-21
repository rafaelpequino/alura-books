import styled from 'styled-components';

export const Titulo = styled.h2`
    width: 100%;
    padding: ${props => props.$paddingTopBot || '30px'} 0;
    background-color: #FFF;
    color: ${props => props.$cor || '#EB9B00'};
    font-size: ${props => props.$tamanhoFonte || '32px'};
    text-align: ${props => props.$alinhamento || 'center'};
    margin: 0;
`