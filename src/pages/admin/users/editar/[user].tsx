import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useState } from 'react'
import { UserModel } from '../../../../models/User';
import { getOneUser, updateUserRole } from '../../../../services/http/Admin/Users/client';
import styles from './style.module.scss'

interface ILogin {
  user: UserModel
}

export default function Login({ user }: ILogin) {

  const [role, setRole] = useState(undefined)

  async function formHandle(e: any) {
    e.preventDefault()
    const res = await updateUserRole(user.user, role)
    console.log(res)

    if(res) {
      alert(`Permissão do usuário ${user.user} alterada com sucesso`)
    }
  }

  return (
    <main>
      <section className={styles.main}>
        <h1 className={styles.title}> Usuário: {user.user} </h1>

        <form className={styles.form}>

          <label className={styles.label} htmlFor='roles'> Editar permissão:
            <select className={styles.select} name="roles" value={role} onChange={e => setRole(e.target.value)}>
              <option value="read">Leitor</option>
              <option value="write">Escritor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>

          <button
            className={styles.button}
            onClick={formHandle}
          >
            Confirmar
          </button>
        </form>
      </section>
    </main>
  )
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

  const { user } = await getOneUser(ctx.params.user as string)

  return {
    props: { user }
  }
}
