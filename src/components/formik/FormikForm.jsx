// import { Button, Grid, TextField, Typography } from "@mui/material"

// import { useFormik } from "formik"
// import * as Yup from "yup"

// import axios from "axios"
// import { useEffect } from "react"

// import { addDoc, collection, serverTimestamp, doc, updateDoc} from 'firebase/firestore'
// import { db } from '../../fireBaseConfig'

// export const FormikForm = ({cart, getTotalPrice}) => {

//     const total = getTotalPrice()

//     const data = {
//         name: "",
//         phone: "",
//         email: "",
//         date: serverTimestamp()
//     }

//     const enviarform = () => {
      
//       const order = {
//         buyer: data,
//         items: cart,
//         total: total,
//       }
//        const orderCollection = collection(db, "ordersPrueba")

//        addDoc( orderCollection, order )
      
//     }


    

//     const { handleSubmit, values, handleChange, errors} = useFormik( {
//         initialValues: data,
//         onSubmit: enviarform,
//          validationSchema: Yup.object().shape({

//             name: Yup.string().required("Ingrese su nombre").max(15, "El nombre es muy largo"),
//             email: Yup.string().required("Ingrese su email"),
//             // password: Yup.string().required("Contraseña requerida").min(8, "la contraseña debe tener minimo 8 caracteres"),
            
//          }),
//          validateOnChange: false
//     })

    

//   return (
//     <div>
//       <Typography color="primary" variant="h2" align="center">
//         Formulario de registro
//       </Typography>

//       <form className="form-container" onSubmit={handleSubmit}>
//                 <Grid
//                     container
//                     alignItems={"center"}
//                     justifyContent="space-evenly"
//                     spacing={2}
//                     sx={{ width: "100%" }}
//                 >
//                     <Grid item xs={12} md={7}>
//                         <TextField
//                             type="text"
//                             label="Ingrese su nombre"
//                             name="name"
//                             variant="outlined"
//                             fullWidth
//                             value={values.name}
//                             onChange={handleChange}
//                             helperText={errors.name}
//                             error={errors.name ? true : false}
//                         />
//                     </Grid>

//                     <Grid item xs={12} md={7}>
//                         <TextField
//                             type="text"
//                             label="Ingrese su teléfono"
//                             variant="outlined"
//                             fullWidth
//                             name="phone"
//                             value={values.phone}
//                             onChange={handleChange}
//                             error={errors.phone ? true : false}
//                             helperText={errors.phone}
//                         />
//                     </Grid>

//                     <Grid item xs={12} md={7}>
//                         <TextField
//                             type="text"
//                             label="Ingrese su email..."
//                             variant="outlined"
//                             fullWidth
//                             name="email"
//                             value={values.email}
//                             onChange={handleChange}
//                             error={errors.email ? true : false}
//                             helperText={errors.email}
//                         />
//                     </Grid>


//                 </Grid>
//                 <div className='buttonSend'>
//                 <Button type="submit" variant="contained">
//                     Comprar
//                 </Button>
//                 </div>
//             </form>
//     </div>
//   )
// }
