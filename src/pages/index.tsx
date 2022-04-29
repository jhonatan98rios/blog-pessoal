import SEO from '../components/SEO';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <SEO title="Dev News!" excludeTitleSuffix />

      <main className={styles.main}>
        <section className={styles.section}>

          <div className={styles.content}>
            <span>Hello Dev!!</span>
            <h1>
              Tecnologia <br />
              <span> Programação </span> <br />
              e Design
            </h1>
            <p>
              Pesquise por titulo, tema ou categoria <br />
              e vamos começar:
            </p>

            <input 
              className={styles.input}
              placeholder="Ex: Desenvolvimento de software"
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
