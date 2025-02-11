import './App.css';
import Logo from './components/Logo';

function App() {

  const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
  ]

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
    <div className='App'>
      <header className='App-header'>
        <Logo />

        <ul className='opcoes'>
          { textoOpcoes.map(texto => <li className='opcao'>{texto}</li>) }
        </ul>

        <ul className='opcoes'>
          { icones.map(icone => <li className='opcaoIcone'><img src={icone.imagem} alt='icone.alt' /></li>) }
        </ul>
      </header>
    </div>
  );
}

export default App;
