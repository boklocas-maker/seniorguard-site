import estilos from './Login.module.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImEnter } from 'react-icons/im'
import { FaUserPlus } from 'react-icons/fa'
import { LayoutContexto } from '../contextos/LayoutContexto'
import { ModalMensagem } from '../componentes/ModalMensagem'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { autenticacao } from '../firebase/firebase'

type FormValues = {
    email: string
    senha: string
}

const loginSchema = z.object({
    email: z.email({ message: 'Informe um e-mail valido.' }),
    senha: z.string()
        .min(6, { message: 'Informe uma senha com pelo menos 6 caracteres.' })
})

export function Login() {

    const { setEmailUsuarioContexto } = useContext(LayoutContexto)
    const [exibirModal, setExibirModal] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema)
    })

    const navegacao = useNavigate()

    const autenticarUsuario = async (data: FormValues) => {
        try {
            const usuario = await signInWithEmailAndPassword(
                autenticacao,
                data.email,
                data.senha
            )

            setEmailUsuarioContexto(usuario.user.email || data.email)
            navegacao('/principal')
        } catch {
            setMensagemModal('E-mail ou senha incorretos.')
            setExibirModal(true)
        }
    }

    const fecharModal = () => {
        setExibirModal(false)
    }

    const novoUsuario = () => {
        navegacao('/cadastro')
    }

    return (
        <div className={estilos.conteiner}>
            <section className={estilos.painel}>
                <h1 className={estilos.titulo}>SeniorGuard</h1>

                <p className={estilos.texto}>
                    Area de cuidadores para acompanhar o prototipo.
                </p>

                <form
                    className={estilos.formulario}
                    onSubmit={handleSubmit(autenticarUsuario)}
                >
                    <input
                        {...register('email')}
                        className={estilos.campo}
                        placeholder='E-mail'
                    />

                    {errors.email && (
                        <p className={estilos.mensagem}>
                            {errors.email.message}
                        </p>
                    )}

                    <input
                        {...register('senha')}
                        className={estilos.campo}
                        placeholder='Senha'
                        type='password'
                    />

                    {errors.senha && (
                        <p className={estilos.mensagem}>
                            {errors.senha.message}
                        </p>
                    )}

                    <button
                        className={estilos.botao}
                        type='submit'
                    >
                        <ImEnter className={estilos.icone} />
                        Entrar
                    </button>
                </form>

                <button
                    className={estilos.novoUsuario}
                    onClick={novoUsuario}
                    type='button'
                >
                    <FaUserPlus className={estilos.icone} />
                    Criar conta
                </button>
            </section>

            <ModalMensagem
                exibir={exibirModal}
                ocultar={fecharModal}
                titulo='Erro ao entrar'
                texto={mensagemModal}
            />
        </div>
    )
}