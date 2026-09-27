import estilos from './Menu.module.css'
import { Link } from 'react-router-dom'

export function Menu(){
    return(
        <nav className={estilos.conteiner}>
            <Link className={estilos.item} to='/principal'>Inicio</Link>
            <Link className={estilos.item} to='/principal/dashboard'>Dashboard</Link>
            <Link className={estilos.item} to='/principal/alertas'>Alertas</Link>
            <Link className={estilos.item} to='/principal/lembretes'>Lembretes</Link>
            <Link className={estilos.item} to='/principal/localizacao'>Localizacao</Link>
            <Link className={estilos.item} to='/principal/dispositivo'>Dispositivo</Link>
            <Link className={estilos.item} to='/principal/mensagens'>Mensagens</Link>
            <Link className={estilos.item} to='/principal/sobre'>Sobre</Link>
            <Link className={estilos.item} to='/'>Sair</Link>
        </nav>
    )
}
