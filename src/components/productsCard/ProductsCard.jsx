import styles from  "./ProductsCard.module.css"
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';





export const ProductsCard = ({element}) => {

  return (
     /* <Box className={styles.card}>
      <h2 className={styles.titulo}>{element.title}</h2>
      <img src={element.img} alt="" className={styles.imgCard} />
      <h3>${element.price}</h3>
      <Link to={`/itemDetails/${element.id}`}>Ver detalle</Link>
    </Box> */
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image= {element.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" align="center" component="div">
        {element.title}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          {element.description}
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          ${element.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent:"center"}}>
        <Button size="small" variant="outlined">Agregar al carrito</Button>
      </CardActions>
    </Card>


  );
  
}


