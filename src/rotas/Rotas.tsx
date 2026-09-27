import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../paginas/Login'
import { Principal } from '../componentes/layout/Principal'
import { Home } from '../paginas/Home'
import { SobreProjeto } from '../paginas/SobreProjeto'
import { Cadastro } from '../paginas/Cadastro'

export function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />

                <Route path='principal' element={ <Principal /> } >
                    <Route index element={ <Home /> } />
                    <Route path='sobre' element={ <SobreProjeto /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
