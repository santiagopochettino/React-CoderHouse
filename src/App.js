import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'
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
        <ItemListContainer />


      </main>
    </div>
  );
}

export default App;