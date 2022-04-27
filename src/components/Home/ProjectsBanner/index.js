import Link from 'next/link'
import styles from './styles.module.scss'

export default function ProjectsBanner() {

  return (
    <section className={styles.container}>
      <h2 className="title"> Veja aqui alguns de meus projetos </h2>
      <Link href="/projetos">
        <a className="subtitle">
          Projetos
        </a>
      </Link>
    </section> 
  )
}