import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useState, useContext } from 'react'
import { NavigationControl } from '../../../components/Shared/NavigationControl'
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
      router.push('/login')
      logout()
    }
  }

  return user?.username ? (
    <main>
      <NavigationControl previousPath="/login/" />

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
  ) : <div />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { ['nextauth.token']: token } = parseCookies(ctx)

  console.log(token)

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
