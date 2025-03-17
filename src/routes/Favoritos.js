import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { getFavoritos } from '../services/favoritos';


const AppContainer = styled.div`
   max-width: 100vw;
   min-height: 100vh;
   heigth: max-content;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favoritos() {
 const [favoritos, setFavoritos] = useState([])
  
 async function fetchFavoritos() {
  const favoritosDaApi =  await getFavoritos();
  setFavoritos(favoritosDaApi)
}

useEffect( () => {
  fetchFavoritos();
}, [])

 return (
   <AppContainer>
     <div>
       <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         {
           favoritos.map(favorito => (
             <Resultado>
               <p>{favorito.nome}</p>
               <img src="/img/livro.png"/>
             </Resultado>
           ))
         }
       </ResultadoContainer>
     </div>
   </AppContainer>
 );
}


export default Favoritos