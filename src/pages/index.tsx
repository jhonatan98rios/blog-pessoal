import React, { ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router'

import StoreContext from '../context/store'
import SEO from '../components/SEO';
import styles from './home.module.scss';

export default function Home() {

  const { state, setState } = useContext(StoreContext)
  const router = useRouter()

  function handleKeyPress(e: ChangeEvent<HTMLInputElement>) {

    setState({
      ...state,
      search: e.target.value
    })
  }

  function handleClick() {
    router.push('/posts/')
  }

  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />

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
              className={styles.input}
              placeholder="Pesquise por titulo, tema ou categoria"
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

          <div className={styles.presentationImage}>
            <img src="/home/blue.png" alt="Home image" />
            <img src="/home/gray.png" alt="Home image" />
            <img src="/home/white.png" alt="Home image" />
            <img src="/home/black.png" alt="Home image" />
          </div>
        </section>
      </main>
    </>
  );
}
