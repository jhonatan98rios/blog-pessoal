import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <input className={styles.input} type="text" placeholder="Pesquisar pelo post" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Sobre</a>
          </ActiveLink>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Tecnologias</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Blog</a>
          </ActiveLink>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Social</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
