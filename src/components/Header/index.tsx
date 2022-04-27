import { useState } from 'react';
import useDeviceDetect from '../../hooks/useDevice';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {

  const {isMobile} = useDeviceDetect()
  const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    if (checked) {
      setChecked(false)
      document.querySelector('body').style.overflowY = 'auto'
    } else {
      setChecked(true)
      document.querySelector('body').style.overflowY = 'hidden'
    }
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>

        {
          isMobile && (
            <div className={styles.menuIcon}>
              <input 
                type="checkbox" 
                id="icon_menu" 
                className={styles.icon_menu} 
                checked={checked}
                onChange={handleCheckbox}
              />
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
              <ActiveLink href="/" activeClassName={styles.active}>
                <a>Portfólio</a>
              </ActiveLink>
              <ActiveLink href="/posts" activeClassName={styles.active}>
                <a>Blog</a>
              </ActiveLink>
            </nav>
          )
        }

        {
          isMobile && checked && (
            <nav className={styles.navbar}>
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
