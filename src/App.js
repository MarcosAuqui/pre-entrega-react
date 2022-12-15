// import { CustomButtom } from './components/customButtom/CustomButtom';
import { ItemDetailsContainer } from './components/itemDetailsContainer/ItemDetailsContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	
import { BrowserRouter, Routes, Route } from  "react-router-dom"

function App() {

  // ENRUTAMIENTO

  return (
    
    <BrowserRouter>

    <Nav />
    
    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>

      <Route path='/category/:categoryName' element={<ItemListContainer/>}/>

      <Route path={`/itemDetails/:id`} element={<ItemDetailsContainer/>}/>

      <Route path='*' element={<h1>URL no existe</h1>}/>

      <Route path='/card' element={<h1>Aca va a haber un carrito</h1>}/>

      
    

    </Routes>


    </BrowserRouter>

  );
}

export default App;