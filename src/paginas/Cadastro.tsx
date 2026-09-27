import estilos from './Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImEnter } from 'react-icons/im'
import { FaUserPlus } from 'react-icons/fa'
import { ModalMensagem } from '../componentes/ModalMensagem'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { autenticacao } from '../firebase/firebase'

type FormValues = {
    email: string
    senha: string
    confirmarSenha: string
}

const cadastroSchema = z.object({
    email: z.email({ message: 'Informe um e-mail valido.' }),
    senha: z.string()
        .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
    confirmarSenha: z.string()
        .min(6, { message: 'Confirme sua senha.' })
}).refine((data) => data.senha === data.confirmarSenha, {
    message: 'As senhas nao coincidem.',
    path: ['confirmarSenha']
})

export function Cadastro() {

    const [exibirModal, setExibirModal] = useState(false)
    const [mensagemModal, setMensagemModal] = useState('')

    const navegacao = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(cadastroSchema)
    })

    const cadastrarUsuario = async (data: FormValues) => {
        try {
            await createUserWithEmailAndPassword(
                autenticacao,
                data.email,
                data.senha
            )

            navegacao('/login')
        } catch (erro: any) {
            if (erro.code === 'auth/email-already-in-use') {
                setMensagemModal('Este e-mail ja possui uma conta.')
            } else if (erro.code === 'auth/invalid-email') {
                setMensagemModal('O e-mail informado e invalido.')
            } else if (erro.code === 'auth/weak-password') {
                setMensagemModal('A senha precisa ter pelo menos 6 caracteres.')
            } else {
                setMensagemModal('Nao foi possivel criar a conta.')
            }

            setExibirModal(true)
        }
    }

    const fecharModal = () => {
        setExibirModal(false)
    }

    const voltarLogin = () => {
        navegacao('/login')
    }

    return (
        <div className={estilos.conteiner}>
            <section className={estilos.painel}>
                <h1 className={estilos.titulo}>SeniorGuard</h1>

                <p className={estilos.texto}>
                    Crie sua conta para acessar a area de cuidadores.
                </p>

                <form
                    className={estilos.formulario}
                    onSubmit={handleSubmit(cadastrarUsuario)}
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

                    <input
                        {...register('confirmarSenha')}
                        className={estilos.campo}
                        placeholder='Confirmar senha'
                        type='password'
                    />

                    {errors.confirmarSenha && (
                        <p className={estilos.mensagem}>
                            {errors.confirmarSenha.message}
                        </p>
                    )}

                    <button
                        className={estilos.botao}
                        type='submit'
                    >
                        <FaUserPlus className={estilos.icone} />
                        Criar conta
                    </button>
                </form>

                <button
                    className={estilos.novoUsuario}
                    onClick={voltarLogin}
                    type='button'
                >
                    <ImEnter className={estilos.icone} />
                    Voltar para login
                </button>
            </section>

            <ModalMensagem
                exibir={exibirModal}
                ocultar={fecharModal}
                titulo='Erro ao cadastrar'
                texto={mensagemModal}
            />
        </div>
    )
}