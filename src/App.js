// import { CustomButtom } from './components/customButtom/CustomButtom';
// import { ItemDetailsContainer } from './components/itemDetails/ItemDetails';
import { ItemDetailsContainer } from './components/itemDetailsContainer/ItemDetailsContainer';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { Nav } from './components/navBar/Nav'	
import { Form } from './components/form/Form'	
import { BrowserRouter, Routes, Route,} from  "react-router-dom"
import { Cart } from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';
import { FormikForm } from './components/formik/FormikForm';

function App() {

  // ENRUTAMIENTO

  return (
    
  <BrowserRouter>
    <CartContextProvider>

      <Nav />
      
      <Routes>

       <Route path='/' element={<ItemListContainer/>}/>

       <Route path='/category/:categoryName' element={<ItemListContainer/>}/>

       <Route path={`/itemDetail/:id`} element={<ItemDetailsContainer/>}/>

       <Route path="/checkout" element= {<Form/>}/>

       <Route path='*' element={<h1>URL no existe</h1>}/>

       <Route path='/cart' element={<Cart/>}/>
 
       <Route path='/formik' element={<FormikForm/>}/>

      </Routes>

   </CartContextProvider>

 </BrowserRouter>

  );
}

export default App;