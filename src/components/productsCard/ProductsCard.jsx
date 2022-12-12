

export const ProductsCard = ({element}) => {
  return (
    <div>
              <h2>{element.title}</h2>
              <img src={element.img} alt="" />
              <h3>${element.price}</h3>
    </div>
  )
}
