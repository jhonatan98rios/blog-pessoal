import Link from 'next/link';
import { useState, useContext } from 'react'
import { AuthContext } from '../../../context/auth/store'
import { login } from '../../../services/client'
import styles from './style.module.scss'

export default function Login({ }) {

  const ctx = useContext(AuthContext)

  const [ username, setUser ] = useState('')
  const [ password, setPassword ] = useState('')

  async function formHandle(e: any) {
    e.preventDefault()

    await ctx.signIn({ username, password })
  }

  return (
    <main>

      {
        !ctx.isAuthenticated ?

        <section className={styles.main}>
          <h1 className={styles.title}> Login </h1>

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
          
          <Link className={styles.register} href='/profile/register'>
            Não possui conta ainda? <span> Registrar! </span>
          </Link>

        </section>
        :
        <section className={styles.main}>
          <p> Olá {ctx.user.username} </p>
          <button 
            className={styles.button} 
            onClick={() => ctx.logout()}
          > 
            Logout 
          </button>
        </section>
      }

    </main>
  )
}