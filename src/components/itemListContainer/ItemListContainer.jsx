import "./ItemListContainer.css"

import { useState } from "react"

import React from 'react'

export const ItemListContainer = ( {greeting} ) => {


  const [isDark, setIsDark] = useState(false)

  const toggleDark = () =>{

    // isDark === true ? setIsDark(false) : setIsDark(true)

    setIsDark(!isDark)

  }

  console.log(isDark)


  return (
    <div className={isDark ? "container-items-dark" : "container-items-light"}>
        <h1>{greeting}</h1>
        <button onClick={toggleDark}>{isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}</button>
        {/* <CustomButtom texto={ "que onda"}/> */}
        {/* <CustomButtom texto={ "Tu zanja redonda"}/> */}
    </div>
  )
}
