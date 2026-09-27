import estilos from './SobreProjeto.module.css'
import arthur from '../assets/imagens/arthur.jpg'
import daniel from '../assets/imagens/daniel.jpg'
import davi from '../assets/imagens/davi.jpg'
import caua from '../assets/imagens/caua.jpg'

export function SobreProjeto(){
    return(
        <main className={estilos.conteiner}>
            <section className={estilos.cabecalhoPagina}>
                <span className={estilos.selo}>Sobre</span>
                <h1 className={estilos.titulo}>Sobre o SeniorGuard</h1>
                <p className={estilos.descricao}>
                    O SeniorGuard e um aplicativo de acompanhamento para cuidadores, ligado a um prototipo de oculos inteligente para idosos.
                </p>
            </section>

            <section className={`${estilos.grade} ${estilos.secao}`}>
                <article className={estilos.card}>
                    <h2 className={estilos.subtitulo}>Como funciona</h2>
                    <p className={estilos.texto}>O oculos envia dados de movimento, localizacao, bateria e alertas. O cuidador acompanha tudo pelas telas do sistema.</p>
                </article>

                <article className={estilos.card}>
                    <h2 className={estilos.subtitulo}>Tecnologias previstas</h2>
                    <p className={estilos.texto}>React, TypeScript, Node.js, Firebase ou PostgreSQL, Google Maps API, Firebase Cloud Messaging, Web Speech API e sensores do dispositivo.</p>
                </article>

                <article className={estilos.card}>
                    <h2 className={estilos.subtitulo}>Contato cuidador e idoso</h2>
                    <p className={estilos.texto}>A tela de mensagens representa o contato entre cuidador e idoso, incluindo pedidos de ajuda, avisos e respostas simples.</p>
                </article>
            </section>

            <section className={estilos.secao}>
                <h2 className={estilos.subtitulo}>Integrantes do grupo</h2>
                <div className={estilos.perfilGrupo}>
                    <article className={estilos.card}>
                        <img className={estilos.foto} src={arthur} alt='Arthur Conteiro Trindade' />
                        <p className={estilos.texto}>Arthur Conteiro Trindade</p>
                    </article>

                    <article className={estilos.card}>
                        <img className={estilos.foto} src={daniel} alt='Daniel Santos Diogo' />
                        <p className={estilos.texto}>Daniel Santos Diogo</p>
                    </article>

                    <article className={estilos.card}>
                        <img className={estilos.foto} src={davi} alt='Davi Tomaz Lima' />
                        <p className={estilos.texto}>Davi Tomaz Lima</p>
                    </article>

                    <article className={estilos.card}>
                        <img className={estilos.foto} src={caua} alt='Caua Palatin de Souza' />
                        <p className={estilos.texto}>Caua Palatin de Souza</p>
                    </article>
                </div>
            </section>

            <p className={estilos.apiTexto}>APIs previstas no projeto: Firebase, Google Maps API, Firebase Cloud Messaging, Web Speech API e OpenAI.</p>
        </main>
    )
}
