import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import { NavigationControl } from '../../components/Shared/NavigationControl';
import SEO from '../../components/Shared/SEO';
import styles from './style.module.scss';

export default function Admins() {

  const painels = [
    {
      title: "Usuários",
      icon: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      link: "/admin/users"
    },
    {
      title: "Posts",
      icon: "https://cdn-icons-png.flaticon.com/512/1999/1999310.png",
      link: "/admin/posts"
    },
  ]

  return (
    <>
      <SEO
        title="Painel administrativo"
        description="Acesso os recursos administrativos"
        keywords="usuários, posts, painel administrativo"
        hasADS={false}
      />

      <main >
        <NavigationControl previousPath="/posts" />

        <section className={styles.main}>
          <h1> Admin </h1>
          <section className={styles.section}>
            {
              painels.map((painel, index) => (
                <Link href={painel.link} key={index}>
                  <div className={styles.painel}>
                    <img className={styles.icon} src={painel.icon} alt="" />
                    <h2>{painel.title}</h2>
                  </div>
                </Link>
              ))
            }
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

  return {
    props: {}
  }
}
