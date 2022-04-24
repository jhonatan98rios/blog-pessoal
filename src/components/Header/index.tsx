import useDeviceDetect from '../../hooks/useDevice';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {

  const {isMobile} = useDeviceDetect()

  return (
    <header className={styles.container}>
      <div className={styles.content}>

        {
          isMobile && (
            <div className={styles.menuIcon}>
              <input type="checkbox" id="icon_menu" className={styles.icon_menu} />
              <label htmlFor="icon_menu">
                <div></div>
                <div></div>
                <div></div>
              </label>  
            </div> 
          )
        }

        <input className={styles.input} type="text" placeholder="Pesquisar pelo post" />
        {
          !isMobile && (
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
          )
        }
      </div>
    </header>
  );
}
