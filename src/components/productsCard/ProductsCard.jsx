import "./ProductsCard.css"
import { Link } from "react-router-dom";

export const ProductsCard = ({element}) => {

  return (
    <div className="card">
      <h2 className="titulo">{element.title}</h2>
      <img src={element.img} alt="" />
      <h3>${element.price}</h3>
      <Link to={`/itemDetails/${element.id}`}>Ver detalle</Link>
    </div>
  );
  
}


