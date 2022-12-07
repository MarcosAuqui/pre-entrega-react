// import { CustomButtom } from './components/customButtom/CustomButtom';
import { Counter } from './components/counter/Counter';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	

function App() {
  return (
    <div className="App">
      <Nav />

      <Counter/>

      <ItemListContainer greeting = {"Envios a todo el pais"}  />

      
    </div>
  );
}

export default App;