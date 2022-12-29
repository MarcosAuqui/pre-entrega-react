import { useState } from "react"



export const Form = () => {


    const [user, setUser] = useState("")

    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {

        event.preventDefault()
        console.log(`Hola, ${user}. Como estas?`)

    }
    


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre de usuario o correo electronico" name="user"  onChange={(e) => setUser(e.target.value)}value= {setUser}/>
            <input type="text" placeholder="Ingrese su nombre contraseña" name="password" onChange={(e) => setPassword(e.target.value)} value={setPassword}/>
            <button type="sumbit">Enviar</button>
        </form>
    </div>
  )
}
