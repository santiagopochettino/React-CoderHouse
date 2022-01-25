import NavBar from './components/NavBar';
import './components/NavBar.css'
import ItemListContainer from './containers/ItemListContainer';


//expresion declarada :   function App(){}

//expresion funcional
const App = () => {
  return (
    <div >
      <header >
        <NavBar />
      </header>
      <main>
        <ItemListContainer title="Saludando desde una props" subtitle="Santiago Pochettino probando las props" />

      </main>
    </div>
  );
}

export default App;