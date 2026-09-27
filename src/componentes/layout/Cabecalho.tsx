import estilos from './Cabecalho.module.css'
import { Link } from 'react-router-dom'

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <h1 className={estilos.titulo}>SeniorGuard</h1>

            <nav className={estilos.menu}>
                <Link className={estilos.link} to='/principal'>Inicio</Link>
                <Link className={estilos.link} to='/principal/sobre'>Sobre</Link>
                <Link className={estilos.link} to='/'>Sair</Link>
            </nav>
        </header>
    )
}
