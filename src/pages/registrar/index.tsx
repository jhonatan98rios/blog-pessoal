import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared'
import { register } from 'services/http/Profile/client'
import styles from './style.module.scss'

export default function Register({ }) {

  const router = useRouter()
  const [ username, setUser ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  async function formHandle(e: any) {
    e.preventDefault()

    const result = await register({ user: username, password })

    if (result) {
      alert("Usuário registrado com sucesso")
      router.push('/login')
    } else {
      alert("Erro ao se conectar. Tente novamente em alguns instantes")
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
              className={styles.input}
              value={username}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              name='user'
            />
            <input
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name='password'
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
