import Link from 'next/link'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'

import styles from './style.module.scss'
import { forgotPassword } from 'services/http/Profile/client'

export default function Login({ }) {

  const [ mail, setMail ] = useState('')
  const [ sent, setSent ] = useState(false)

  async function formHandle(e: any) {
    e.preventDefault()

    await forgotPassword(mail)
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Login"
        description="Acesse sua conta"
        keywords="login, acesse sua conta"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/login" />

        {
          !sent ?
          <section className={styles.main}>
            <h1 className={styles.title}> Recuperação de senha </h1>

            <form className={styles.form}>
              <input
                className={styles.input}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="mail"
                name='mail'
                placeholder='insira seu e-mail aqui'
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
