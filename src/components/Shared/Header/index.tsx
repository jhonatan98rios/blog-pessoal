import { useState } from 'react';
import useDeviceDetect from '../../../hooks/useDevice';
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
          (!isMobile || checked) && (
            <nav className={isMobile ? styles.navbar : null}>
              <ActiveLink href="/" activeClassName={styles.active}>
                <a onClick={handleCheckbox}>
                  Inicio
                </a>
              </ActiveLink>

              <ActiveLink href="/posts" activeClassName={styles.active}>
                <a onClick={handleCheckbox}>
                  Posts
                </a>
              </ActiveLink>
              <a href="https://jhonatan-dev-rios.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Sobre mim </a>
              <a href="https://jhonatan-dev-rios.herokuapp.com/projetos" target="_blank" rel="noopener noreferrer"> Portfólio </a>
            </nav>
          )
        }
      </div>
    </header>
  )
}
