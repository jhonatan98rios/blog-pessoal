import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'

import styles from './style.module.scss'
import { resetPassword } from 'services/http/Profile/client'
import { useRouter } from 'next/router'


export default function Login({ mail, token }) {

  const router = useRouter()

  const [ password, setPassword ] = useState('')
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('')

  async function formHandle(e: any) {
    e.preventDefault()

    //await forgotPassword(mail)
    console.log(password == passwordConfirmation)

    if (password != passwordConfirmation) {
      alert("A confirmação de senha não confere")
      return
    }

    const result = await resetPassword(
      mail, token, password, passwordConfirmation
    )

    const updatedUser = result?.user?.props

    if (updatedUser) {
      alert(`A senha do usuário ${updatedUser.user} foi alterada com sucesso`)
      router.push('/login')

    } else {
      alert(`Erro ao recuperar a senha`)
    }
  }

  return (
    <>
      <SEO
        title="Reset password"
        description="Recupere a senha da sua conta"
        keywords="Recuperar senha, senha, conta"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/forgot-password" />

        <section className={styles.main}>
          <h1 className={styles.title}> Recuperação de senha </h1>

          <form className={styles.form}>
            <input
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name='password'
              placeholder='Insira sua senha aqui'
            />
            <input
              className={styles.input}
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              name='passwordConfirmation'
              placeholder='Confirme sua senha aqui'
            />
            <button
              className={styles.button}
              onClick={formHandle}
            >
              Confirmar
            </button>
          </form>
        </section>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { mail, token } = ctx.query

  if (!mail || !token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      mail, token
    }
  }
}
