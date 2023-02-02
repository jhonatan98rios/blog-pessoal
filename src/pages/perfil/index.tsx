import { useContext } from 'react'
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

import { SEO, NavigationControl } from 'components/Shared';
import { AuthContext } from 'context/auth/store'
import useDidMountEffect from 'hooks/useDidMountEffect ';

import styles from './style.module.scss'

export default function Login({ }) {

  const ctx = useContext(AuthContext)
  const router = useRouter()

  function logout() {
    ctx.logout()
    router.push('/login')
  }

  useDidMountEffect(() => {
    if (!ctx.isAuthenticated) {
      logout()
    }
  }, [ctx.isAuthenticated])

  return (
    <>
      <SEO
        title="Perfil"
        description="Informações detalhadas sobre o seu perfil"
        keywords="perfil"
        hasADS={false}
      />
      <main>
        <NavigationControl previousPath="/posts" />

        <section className={styles.main}>
          {
            ctx.isAuthenticated &&
            <>
              <p> Olá {ctx.user.username} </p>

              <Link
                href="/perfil/editar-senha"
                className={styles.button}
              >
                Editar a senha
              </Link>

              <button
                className={styles.button}
                onClick={() => logout()}
              >
                Logout
              </button>
            </>
          }
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

  return {
    props: {}
  }
}
