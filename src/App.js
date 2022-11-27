import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	

function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting = {"Envios a todo el pais"}  />
    </div>
  );
}

export default App;