import { useRouter } from 'next/router';
import React, { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../../../context/auth/store';
import StoreContext from '../../../context/search/store';

import useDeviceDetect from '../../../hooks/useDevice';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {

  const ctx = useContext(AuthContext)

  const router = useRouter()
  const {isMobile} = useDeviceDetect()
  const [checked, setChecked] = useState(false);
  const { state, setState } = useContext(StoreContext)

  function handleKeyPress(e: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, search: e.target.value })
  }

  function handleCheckbox() {
    if (isMobile) {
      document.querySelector('body').style.overflowY = checked ? 'auto' : 'hidden'
      setChecked(!checked)
    }

    setState({ ...state, search: '' })
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

        {
          router.asPath.includes('posts') && 
          <input 
            className={styles.input} 
            type="text" 
            placeholder="Pesquisar pelo post" 
            onChange={handleKeyPress}
            value={state.search}
          />
        }

        {
          (!isMobile || checked) && (
            <nav className={isMobile ? styles.navbar : null}>
              <ActiveLink href="/" activeClassName={styles.active} onClick={handleCheckbox}>
                Inicio
              </ActiveLink>

              <ActiveLink href="/posts" activeClassName={styles.active} onClick={handleCheckbox}>
                Posts
              </ActiveLink>

              <ActiveLink href="/autor" activeClassName={styles.active} onClick={handleCheckbox}>
                Sobre o autor
              </ActiveLink>
              
              <a 
                href="https://jhonatan-dev-rios.vercel.app/projetos" 
                target="_blank" 
                rel="noopener noreferrer"
              > 
                Portfólio 
              </a>

              {
                ctx.isAuthenticated &&
                <ActiveLink href="/admin/posts/criar" activeClassName={styles.active} onClick={handleCheckbox}>
                  <div className={styles.create}>
                    Criar Post
                  </div>
                </ActiveLink>
              }
            </nav>
          )
        }
      </div>
    </header>
  )
}

/* TO DO */