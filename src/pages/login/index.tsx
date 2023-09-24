import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useState, useContext } from 'react'

import { SEO, NavigationControl } from 'components/Shared';
import { AuthContext } from 'context/auth/store'

import styles from './style.module.scss'

export default function Login({ }) {

  const ctx = useContext(AuthContext)
  const router = useRouter()

  const [ username, setUser ] = useState('')
  const [ password, setPassword ] = useState('')

  async function formHandle(e: any) {
    e.preventDefault()

    await ctx.login({ username, password })
    router.push('/')
  }

  return (
    <>
      <SEO
        title="Entrar com uma conta existente | Como ser um desenvolvedor?"
        description="Tela de login | Entrar com uma conta existente | Acesse sua conta pessoal"
        keywords="login, acesse sua conta"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/posts" />

        <section className={styles.main}>
          <h1 className={styles.title}> Login </h1>

          <h2 className='no-display'> Entrar com uma conta existente </h2>

          <form className={styles.form}>
            <input
              className={styles.input}
              value={username}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              name='user'
              placeholder='Insira seu usuário aqui'
            />
            <input
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name='password'
              placeholder='Insira sua senha aqui'
              autoComplete="on"
            />
            <Link className={styles.forgotPasswordLink} href='/forgot-password'>
              <span> Esqueceu sua senha? </span>
            </Link>
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
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/perfil',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
