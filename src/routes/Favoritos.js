import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';

const AppContainer = styled.div`
    width: 100%;
    height: max-content;
`

function Favoritos() {

  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
