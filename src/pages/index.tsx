import SEO from '../components/SEO';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />

      <main className={styles.main}>
        <section className={styles.section}>

          <div className={styles.content}>
            {/* <span>Hello Dev!!</span> */}
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
            />
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
