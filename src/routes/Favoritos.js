import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../services/favoritos';

const AppContainer = styled.div`
    width: 100%;
    height: max-content;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaApi =  await getFavoritos();
    setFavoritos(favoritosDaApi)
  }

  useEffect( () => {
    fetchFavoritos();
  }, [])

  return (
    <AppContainer>
      {favoritos.map( favorito => (
        <p>{favorito.nome}</p>
      ) )}
    </AppContainer>
  );
}

export default Favoritos;
