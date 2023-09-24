import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'

import styles from './style.module.scss'
/* import { resetPassword } from 'services/http/Profile/__client' */
import { useRouter } from 'next/router'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient'
import Notification from 'infra/errors/Notification'
import { ResetPasswordService } from 'services/http/Profile/ResetPasswordService'


export default function Login({ mail, token }) {

  const router = useRouter()

  const [ password, setPassword ] = useState('')
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('')

  async function formHandle(e: any) {
    e.preventDefault()

    /* const result = await resetPassword(
      mail, token, password, passwordConfirmation
    ) */

    const httpService = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const resetPasswordService = new ResetPasswordService(httpService, notification)
    const res = await resetPasswordService.execute(mail, token, password, passwordConfirmation)

    const updatedUser = res?.user?.props

    if (updatedUser) {
      //alert(`A senha do usuário ${updatedUser.user} foi alterada com sucesso`)
      router.push('/login')

    } else {
      //alert(`Erro ao recuperar a senha`)
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
              autoComplete="on"
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
