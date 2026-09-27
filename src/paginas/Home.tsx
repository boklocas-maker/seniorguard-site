import estilos from './Home.module.css'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { banco, autenticacao } from '../firebase/firebase'
import { ModalMensagem } from '../componentes/ModalMensagem'

export function Home() {

    const [nomeRemedio, setNomeRemedio] = useState('')
    const [dataRemedio, setDataRemedio] = useState('')
    const [horarioRemedio, setHorarioRemedio] = useState('')
    const [descricaoLembrete, setDescricaoLembrete] = useState('')

    const [exibirModal, setExibirModal] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')
    const [tituloModal, setTituloModal] = useState('')

    const cadastrarRemedio = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const usuario = autenticacao.currentUser

        if (!usuario) {
            setTituloModal('Erro')
            setMensagemModal('Usuario nao esta logado.')
            setExibirModal(true)
            return
        }

        if (!nomeRemedio || !dataRemedio || !horarioRemedio) {
            setTituloModal('Campos obrigatorios')
            setMensagemModal('Preencha todos os campos do remedio.')
            setExibirModal(true)
            return
        }

        try {
            await addDoc(collection(banco, 'remedios'), {
                usuarioId: usuario.uid,
                nome: nomeRemedio,
                data: dataRemedio,
                horario: horarioRemedio,
                criadoEm: serverTimestamp()
            })

            setTituloModal('Remedio cadastrado')
            setMensagemModal('O remedio foi cadastrado com sucesso.')
            setExibirModal(true)

            setNomeRemedio('')
            setDataRemedio('')
            setHorarioRemedio('')
        } catch {
            setTituloModal('Erro')
            setMensagemModal('Nao foi possivel cadastrar o remedio.')
            setExibirModal(true)
        }
    }

    const cadastrarLembrete = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const usuario = autenticacao.currentUser

        if (!usuario) {
            setTituloModal('Erro')
            setMensagemModal('Usuario nao esta logado.')
            setExibirModal(true)
            return
        }

        if (!descricaoLembrete) {
            setTituloModal('Campo obrigatorio')
            setMensagemModal('Informe a descricao do lembrete.')
            setExibirModal(true)
            return
        }

        try {
            await addDoc(collection(banco, 'lembretes'), {
                usuarioId: usuario.uid,
                descricao: descricaoLembrete,
                criadoEm: serverTimestamp()
            })

            setTituloModal('Lembrete cadastrado')
            setMensagemModal('O lembrete foi cadastrado com sucesso.')
            setExibirModal(true)

            setDescricaoLembrete('')
        } catch {
            setTituloModal('Erro')
            setMensagemModal('Nao foi possivel cadastrar o lembrete.')
            setExibirModal(true)
        }
    }

    const fecharModal = () => {
        setExibirModal(false)
    }

    return (
        <main className={estilos.conteiner}>
            <section className={estilos.cabecalhoPagina}>
                <span className={estilos.selo}>Inicio</span>
                <h1 className={estilos.titulo}>Dashboard Cuidador</h1>
                <p className={estilos.descricao}>
                    Cadastre as informações mais importantes para o Idoso
                </p>
            </section>

            <section className={estilos.areaCadastros} aria-label="Cadastros rápidos">
            <form onSubmit={cadastrarRemedio}>
                <h1 className={estilos.titulo}>Cadastrar Remédio:</h1>

                <h1 className={estilos.titulo}>
                    Nome:
                    <input
                        type="text"
                        value={nomeRemedio}
                        onChange={(evento) => setNomeRemedio(evento.target.value)}
                    />
                </h1>

                <h1 className={estilos.titulo}>
                    Data:
                    <input
                        type="date"
                        value={dataRemedio}
                        onChange={(evento) => setDataRemedio(evento.target.value)}
                    />
                </h1>

                <h1 className={estilos.titulo}>
                    Horário:
                    <input
                        type="time"
                        value={horarioRemedio}
                        onChange={(evento) => setHorarioRemedio(evento.target.value)}
                    />
                </h1>

                <button type="submit">
                    Cadastrar
                </button>
            </form>

            <form onSubmit={cadastrarLembrete}>
                <h1 className={estilos.titulo}>
                    Cadastrar Lembrete:
                </h1>

                <h1 className={estilos.titulo}>
                    Descrição:
                    <input
                        type="text"
                        value={descricaoLembrete}
                        onChange={(evento) => setDescricaoLembrete(evento.target.value)}
                    />
                </h1>

                <button type="submit">
                    Enviar
                </button>
            </form>

            </section>
            <ModalMensagem
                exibir={exibirModal}
                ocultar={fecharModal}
                titulo={tituloModal}
                texto={mensagemModal}
            />
        </main>
    )
}
