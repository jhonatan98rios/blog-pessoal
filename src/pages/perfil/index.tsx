import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useContext, useEffect } from 'react'
import { NavigationControl } from '../../components/Shared/NavigationControl';
import SEO from '../../components/Shared/SEO';
import { AuthContext } from '../../context/auth/store'
import styles from './style.module.scss'

export default function Login({ }) {

  const ctx = useContext(AuthContext)
  const router = useRouter()

  function logout() {
    ctx.logout()
    router.push('/login')
  }

  useEffect(() => {
    if (!ctx.isAuthenticated) {
      logout()
    }
  })

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
