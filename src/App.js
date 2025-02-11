import './App.css';
import Icones from './components/Icones';
import Logo from './components/Logo';
import Opcoes from './components/Opcoes';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <Opcoes />
        <Icones />
      </header>
    </div>
  );
}

export default App;
