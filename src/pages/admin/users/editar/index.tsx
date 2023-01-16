import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { register, updateUser } from '../../../../services/client'
import styles from './style.module.scss'

export default function AdminUsersEdit() {

  const router = useRouter()
  const [ username, setUser ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  async function formHandle(e: any) {
    e.preventDefault()

    const { user } = router.query
    const result = await updateUser(user, { user: username, password })

    if (result) {
      alert("Usuário editado com sucesso")
      router.push('/admin/users')
    }
  }

  return (
    <main>
      <section className={styles.main}>
        <h1 className={styles.title}> 
          Editar usuário: 
          <span> { router.query.user } </span> 
        </h1>

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

        <Link className={styles.register} href='/profile/login'>
          Já possui conta? <span> Entrar! </span>
        </Link>

      </section>
    </main>
  )
}