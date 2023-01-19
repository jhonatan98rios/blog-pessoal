import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../../context/auth/store'
import { updateUser } from '../../../services/client'
import styles from './style.module.scss'

export default function AdminUsersEdit() {

  const { user, logout } = useContext(AuthContext)
  const router = useRouter()
  const [ password, setPassword ] = useState<string>('')


  useEffect(() => {
    const { ['nextauth.token']: token } = parseCookies()
    if (!token) {
      router.push('/perfil/login')
    }
  }, [])

  async function formHandle(e: any) {
    e.preventDefault()

    const result = await updateUser(user.username, password)

    if (result) {
      alert("Usuário editado com sucesso")
      router.push('/perfil/login')
      logout()
    }
  }

  return user?.username ? (
    <main>
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