import estilos from './Lembretes.module.css'

export function Lembretes(){
    return(
        <main className={estilos.conteiner}>
            <section className={estilos.cabecalhoPagina}>
                <span className={estilos.selo}>Lembretes</span>
                <h1 className={estilos.titulo}>Rotina do dia</h1>
                <p className={estilos.descricao}>Exemplo de lembretes cadastrados para o idoso.</p>
            </section>

            <section className={`${estilos.grade} ${estilos.secao}`}>
                <article className={estilos.card}>
                    <h2 className={estilos.subtitulo}>09:00</h2>
                    <p className={estilos.texto}>Medicamento de pressao - confirmado.</p>
                </article>

                <article className={estilos.card}>
                    <h2 className={estilos.subtitulo}>14:00</h2>
                    <p className={estilos.texto}>Medicamento da tarde - pendente.</p>
                </article>

                <article className={estilos.card}>
                    <h2 className={estilos.subtitulo}>18:00</h2>
                    <p className={estilos.texto}>Lembrete de hidratacao e alimentacao.</p>
                </article>
            </section>

            <p className={estilos.apiTexto}>API futura: Firebase para cadastrar lembretes e confirmar tarefas realizadas.</p>
        </main>
    )
}
