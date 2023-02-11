import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'
import styles from './style.module.scss'
import { RegisterService } from 'services/http/Profile/RegisterService'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient'
import Notification from 'infra/errors/Notification'

export default function Register({ }) {

  const router = useRouter()
  const [ username, setUser ] = useState<string>('')
  const [ mail, setMail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  async function formHandle(e: any) {
    e.preventDefault()

    const httpService = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const registerService = new RegisterService(httpService, notification)
    const res = await registerService.execute({ user: username, mail, password })

    if (res) {
      router.push('/login')
    }
  }

  return (
    <>
      <SEO
        title="Registrar"
        description="Crie sua conta"
        keywords="registrar, criar sua conta"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/posts" />

        <section className={styles.main}>
          <h1 className={styles.title}> Registrar </h1>

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
              onChange={(e) => setPassword(e.target.value)}
            />
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
