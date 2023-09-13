import { IoIosAdd } from "react-icons/io";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { MarkContainer, TitleMark, MarkExternal, CardDefault, CardInternal, CardCreate } from './style'

interface MarcacoesProps {
  setListaDeMarcadores: Dispatch<SetStateAction<string[]>>
}

function Marcacoes({ setListaDeMarcadores }: MarcacoesProps) {
  let markinput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (markinput.current) {
      let newmark = markinput.current.value
      setListaDeMarcadores((prevState) => [...prevState, newmark])
    } else {
      console.log("Falha")
    }
  }

  return (
    <CardCreate>
      <input type="text" placeholder="Novo marcador" ref={markinput} />
      <IoIosAdd onClick={handleClick} />
    </CardCreate>
  )
}

export default Marcacoes