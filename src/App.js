// import { CustomButtom } from './components/customButtom/CustomButtom';
import { ItemDetailsContainer } from './components/itemDetailsContainer/ItemDetailsContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	
import { Form } from './components/form/Form'	
import { BrowserRouter, Routes, Route,} from  "react-router-dom"
import { Cart } from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {

  // ENRUTAMIENTO

  return (
    
  <BrowserRouter>
    <CartContextProvider>

      <Nav />
      
      <Routes>

       <Route path='/' element={<ItemListContainer/>}/>

       <Route path='/category/:categoryName' element={<ItemListContainer/>}/>

       <Route path={`/itemDetails/:id`} element={<ItemDetailsContainer/>}/>

       <Route path="/checkout" element= {<Form/>}/>

       <Route path='*' element={<h1>URL no existe</h1>}/>

       <Route path='/cart' element={<Cart/>}/>

      </Routes>

   </CartContextProvider>

 </BrowserRouter>

  );
}

export default App;