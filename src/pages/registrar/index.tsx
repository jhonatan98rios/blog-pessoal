import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'
import { RegisterService } from 'services/http/Profile/RegisterService'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient'
import Notification from 'infra/errors/Notification'
import styles from './style.module.scss'

export default function Register({ }) {

  const router = useRouter()
  const [ username, setUser ] = useState<string>('')
  const [ mail, setMail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  const [ consent, setConsent ] = useState<boolean>(false)

  async function formHandle(e: any) {
    e.preventDefault()

    const httpService = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const registerService = new RegisterService(httpService, notification)
    const res = await registerService.execute({ user: username, mail, password, consent })

    if (res) {
      router.push('/login')
    }
  }

  return (
    <>
      <SEO
        title="Registrar uma nova conta | Como ser um desenvolvedor?"
        description="Tela de criação de conta | Registrar uma nova conta | Crie sua conta pessoal"
        keywords="registrar, criar sua conta"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/posts" />

        <section className={styles.main}>
          <h1 className={styles.title}> Registrar </h1>

          <h2 className='no-display'> Criar nova conta </h2>

          <form className={styles.form}>
            <input
              type="text"
              name='user'
              value={username}
              className={styles.input}
              placeholder='Insira seu usuário aqui'
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="mail"
              name='user'
              value={mail}
              className={styles.input}
              placeholder='Insira seu e-mail aqui'
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              type="password"
              name='password'
              value={password}
              className={styles.input}
              placeholder='Insira sua senha aqui'
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="consent" className={styles.consent}>
              <input
                id="consent"
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(e) => setConsent(prev => !prev)}
              />
              <p> Concordo em ser avisado sobre novos posts por e-mail </p>
            </label>

            <button
              className={styles.button}
              onClick={formHandle}
            >
              Confirmar
            </button>
          </form>

          <Link className={styles.register} href='/login'>
            Já possui conta? <span> Entrar </span>
          </Link>

        </section>
      </main>
    </>
  )
}
