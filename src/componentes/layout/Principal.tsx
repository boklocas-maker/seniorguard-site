import estilos from './Principal.module.css'
import { Cabecalho } from './Cabecalho'
import { Rodape } from './Rodape'
import { Outlet } from 'react-router-dom'

export function Principal(){

    return(
        <div className={estilos.gridConteiner}>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </div>
    )
}
