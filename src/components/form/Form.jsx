import { useState } from "react"



export const Form = () => {


    // const [user, setUser] = useState("")

    const [userData, setUserData] = useState({name: "", lastName:""})

    const handleSubmit = (event) => {

        event.preventDefault()
        console.log(userData)

    }

    /* const handleChangeName = (event) => {
      setUserData({...userData, name: event.target.value})
    } */
    
   const handleKey= (event) =>{
    
    if(event.key !== "a" && event.key !== "e" && event.key !== "i" && event.key !== "o" && event.key !== "u"){
      console.log(event.key)
    }else{
      event.preventDefault()
    }
   }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input 
             type="text" 
             placeholder="Ingrese su nombre "
             name="name"  
             onChange={(event) => setUserData({...userData, name: event.target.value})}
             value= {userData.name}
             onKeyDown= {handleKey}
             />

            <input 
            type="text" 
            placeholder="Ingrese su nombre apellido"
            name="lastName" 
            onChange={(event) => setUserData({...userData, lastName: event.target.value })} 
            value={userData.lastName}/>

            <button type="sumbit">Enviar</button>
        </form>
    </div>
  )
}
