// import { CustomButtom } from './components/customButtom/CustomButtom';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	

function App() {
  return (
    <div className="App">
      <Nav />
      <ItemListContainer greeting = {"Envios a todo el pais"}  />
      {/* <CustomButtom texto={ "que onda"}/> */}
    </div>
  );
}

export default App;