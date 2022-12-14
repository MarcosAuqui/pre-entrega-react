// import { CustomButtom } from './components/customButtom/CustomButtom';
import { ItemDetailsContainer } from './components/itemDetailsContainer/ItemDetailsContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	


function App() {
  return (
    <div className="App">
      <Nav />

      <ItemListContainer greeting = {"Envios a todo el pais"}  />

      <ItemDetailsContainer/>
    </div>
  );
}

export default App;