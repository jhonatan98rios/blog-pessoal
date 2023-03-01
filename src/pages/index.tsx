import { GetServerSideProps } from 'next';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import StoreContext from 'context/search/store'

import { SEO } from 'components/Shared';
import PresentationImage from 'components/Home/PresentationImage';
import styles from './home.module.scss';

export default function Home() {

  const { state, setState } = useContext(StoreContext)
  const [error, setError] = useState(false)
  const router = useRouter()

  function handleKeyPress(e: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, search: e.target.value })
  }

  function handleClick() {
    if (state.search.length > 3) {
      router.push('/posts')
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 500)

  }, [error])

  /* TO DO */

  return (
    <>
      <SEO
        title="Como ser um desenvolvedor?"
        description="Conteúdos sobre programação, design e muito mais!"
        image="https://www.jhonatan-dev-rios-blog.com.br/logo.png"
        excludeTitleSuffix
      />

      <main className={styles.main}>
        <section className={styles.section}>

          <div className={styles.content}>
            <h1>
              Como ser um <br />
              <span> Desenvolvedor? </span> <br />
            </h1>
            <p>
              Conteúdos sobre programação,  <br />
              design e muito mais!
            </p>

            <input
              className={`${styles.input} ${error ? styles.warning : ''}`}
              placeholder='Pesquise por titulo ou categoria'
              type="text"
              onChange={handleKeyPress}
            />

            <button
              className={styles.button}
              onClick={handleClick}
            >
              Buscar
            </button>
          </div>

          <PresentationImage />
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  return {
    redirect: {
      destination: '/posts',
      permanent: false,
    }
  }
}
