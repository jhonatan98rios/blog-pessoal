import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useContext } from 'react';

import { AuthContext } from 'context/auth/store';
import useDidMountEffect from 'hooks/useDidMountEffect ';
import { UserModel } from 'models/User';
import { getAllUsers } from 'services/http/Admin/Users/client';

import UserThumb from 'components/Admin/Users/UserThumb';
import { SEO, NavigationControl } from 'components/Shared';

import styles from './style.module.scss';

interface IAdminsUsers {
  users: UserModel[]
}

export default function AdminsUsers({ users }) {

  const ctx = useContext(AuthContext)
  const router = useRouter()

  useDidMountEffect(() => {
    if (!ctx.isAuthenticated) {
      ctx.logout()
      router.push('/login')
    }
  }, [ctx])


  return (
    <>
      <SEO
        title="Painel administrativo | Usuários"
        description="Acesso aos recursos administrativos"
        keywords="usuários, painel administrativo"
        hasADS={false}
      />

      <main>
        <NavigationControl previousPath="/admin/" />

        <section className={styles.main}>
          <h1> Admin Users </h1>

          <section className={styles.section}>
            {users?.map((user, index) => {
              return (
                <UserThumb user={user} key={index} />
              )
            })}
          </section>
        </section>
      </ main>
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

  const data = await getAllUsers(ctx)

  if (!data || data.users.length == 0) {
    console.log('Erro no getAllUsers')
    return {
      props: {
        users: []
      }
    }
  }

  return {
    props: {
      users: data.users
    }
  }
}
