import { createContext, useState } from 'react'
import { type ReactNode } from 'react';

interface LayoutProviderProps {
  children: ReactNode
}

interface LayoutTipoContexto {
  emailUsuarioContexto: string
  setEmailUsuarioContexto: (email: string) => void
}

export const LayoutContexto = createContext<LayoutTipoContexto>({
  emailUsuarioContexto: "",
  setEmailUsuarioContexto: () => {}
})

export const LayoutProvider = ({children}: LayoutProviderProps) => {

  const [emailUsuarioContexto, setEmailUsuarioContexto] = useState('')

  return (
    <LayoutContexto.Provider value={{ emailUsuarioContexto,
                                      setEmailUsuarioContexto }}>
      {children}
    </LayoutContexto.Provider>
  )
}
