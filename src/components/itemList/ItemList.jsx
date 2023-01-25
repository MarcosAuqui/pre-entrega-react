import "./ItemList.css"

import { ProductsCard } from '../productsCard/ProductsCard'


export const ItemList = ({items}) => {


  return (
    <div className='container-cards'>

     {items.map((element) => {
        return <ProductsCard  key={element.title} element={element} />
     })}

    </div>
  )


}
