import Link from 'next/link'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'

import styles from './style.module.scss'
/* import { forgotPassword } from 'services/http/Profile/__client' */
import { ForgotPasswordService } from 'services/http/Profile/ForgotPasswordService'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient'
import Notification from 'infra/errors/Notification'

export default function Login({ }) {

  const [ mail, setMail ] = useState('')
  const [ sent, setSent ] = useState(false)

  async function formHandle(e: any) {
    e.preventDefault()

    const httpService = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const forgotPasswordService = new ForgotPasswordService(httpService, notification)
    const res = await forgotPasswordService.execute(mail)
    //await forgotPassword(mail)

    if (res) {
      setSent(true)
    }
  }

  return (
    <>
      <SEO
        title="Recuperação de senha | Como ser um desenvolvedor?"
        description="Tela de recuperação de senha | Esqueceu sua senha? Recupere sua senha por email"
        keywords="login, acesse sua conta"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/login" />

        {
          !sent ?
          <section className={styles.main}>
            <h1 className={styles.title}> Recuperação de senha </h1>
            <h2 className='no-display'> Solicitar recuperação de senha por email </h2>

            <form className={styles.form}>
              <input
                className={styles.input}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="mail"
                name='mail'
                placeholder='Insira seu e-mail aqui'
              />
              <button
                className={styles.button}
                onClick={formHandle}
              >
                Confirmar
              </button>
            </form>

            <Link className={styles.register} href='/registrar'>
              Não possui conta ainda? <span> Registrar </span>
            </Link>
          </section>
          :
          <section className={styles.main}>
            <h1 className={styles.title}>
              Verifique seu e-mail para recuperar sua senha
            </h1>
          </section>
        }

      </main>
    </>
  )
}
