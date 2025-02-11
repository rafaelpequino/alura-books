import './App.css';
import Logo from './components/Logo';

function App() {

  const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'MINHA ESTANTE'
  ]

  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='opcoes'>
          { textoOpcoes.map(texto => <li className='opcao'>{texto}</li>) }
        </ul>
      </header>
    </div>
  );
}

export default App;
