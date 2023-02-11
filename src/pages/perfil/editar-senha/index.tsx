import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useState, useContext } from 'react'

import { SEO, NavigationControl } from 'components/Shared'
import { AuthContext } from 'context/auth/store'
/* import { updateUserPassword } from 'services/http/Profile/__client' */

import styles from './style.module.scss'
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient'
import Notification from 'infra/errors/Notification'
import { UpdatePasswordService } from 'services/http/Profile/UpdatePasswordService'

export default function AdminUsersEdit() {

  const { user, logout } = useContext(AuthContext)
  const router = useRouter()

  const [ password, setPassword ] = useState<string>('')
  const [ passwordConfirmation, setPasswordConfirmation ] = useState<string>('')

  async function formHandle(e: any) {
    e.preventDefault()

    const httpService = AxiosHttpClient.getInstance()
    const notification = new Notification()
    const updatePasswordService = new UpdatePasswordService(httpService, notification)
    const res = await updatePasswordService.execute(user.username, password, passwordConfirmation)

    //const result = await updateUserPassword(user.username, password)

    if (res) {
      //alert("Usuário editado com sucesso")
      logout()
      router.push('/login')
    }
  }

  return user?.username ? (
    <>
      <SEO
        title="Perfil | Editar a senha"
        description="Editar a senha do perfil"
        keywords="perfil, editar a senha"
        hasADS={false}
      />
      <main>
        <NavigationControl previousPath="/perfil/" />

        <section className={styles.main}>
          <h1 className={styles.title}>
            Editar senha do usuário:
            <span> {user.username} </span>
          </h1>

          <form className={styles.form}>
            <input
              autoComplete="off"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name='password'
              placeholder='Insira aqui a nova senha'
            />
            <input
              autoComplete="off"
              className={styles.input}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              name='password-confirmation'
              placeholder='Insira a senha novamente'
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
  ) : <div />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
