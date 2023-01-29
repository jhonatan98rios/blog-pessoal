import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useState, useContext } from 'react'
import { NavigationControl } from '../../../components/Shared/NavigationControl'
import SEO from '../../../components/Shared/SEO'
import { AuthContext } from '../../../context/auth/store'
import { updateUserPassword } from '../../../services/http/Profile/client'
import styles from './style.module.scss'

export default function AdminUsersEdit() {

  const { user, logout } = useContext(AuthContext)
  const router = useRouter()
  const [ password, setPassword ] = useState<string>('')


  async function formHandle(e: any) {
    e.preventDefault()

    const result = await updateUserPassword(user.username, password)

    if (result) {
      alert("Usuário editado com sucesso")
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
