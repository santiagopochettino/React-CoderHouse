import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'


//expresion declarada :   function App(){}

//expresion funcional
const App = () => {
  return (
    <div >
      <header >
        <NavBar />
      </header>
      <main>
        <ItemListContainer title="Saludando desde una props" />
        <ItemCount />

      </main>
    </div>
  );
}

export default App;