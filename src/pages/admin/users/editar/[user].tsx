import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { useState } from 'react'

import { SEO, NavigationControl } from 'components/Shared';
import { UserModel } from 'models/User';
import { getOneUser, updateUserRole } from 'services/http/Admin/Users/client';

import styles from './style.module.scss'

interface ILogin {
  user: UserModel
}

export default function Login({ user }: ILogin) {

  const [role, setRole] = useState(user.role)

  async function formHandle(e: any) {
    e.preventDefault()
    const res = await updateUserRole(user.user, role)

    if(res) {
      //alert(`Permissão do usuário ${user.user} alterada com sucesso`)
      Router.push('/admin/users/')
    }
  }

  return (
    <>
      <SEO
        title="Painel administrativo | Editar permissões de usuários"
        description="Acesso aos recursos administrativos"
        keywords="usuários, painel administrativo, edição, permissões"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/admin/users" />

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
    </>
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

  const data = await getOneUser(ctx.params.user as string)

  if (!data || !data.user) {

    console.log('Erro no getAllUsers')

    return {
      props: {
        user: null
      }
    }
  }

  return {
    props: {
      user: data.user
    }
  }
}
