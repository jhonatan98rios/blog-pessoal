import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../../../context/auth/store';
import StoreContext from '../../../context/search/store';
import useDeviceDetect from '../../../hooks/useDevice';

import styles from './styles.module.scss';

export function Header() {

  const ctx = useContext(AuthContext)
  const { state, setState } = useContext(StoreContext)

  const router = useRouter()
  const {isMobile} = useDeviceDetect()
  const [checked, setChecked] = useState(false);

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
              {/* <Link href="/" className={styles.active} onClick={handleCheckbox}>
                Inicio
              </Link> */}

              <Link href="/posts" className={styles.active} onClick={handleCheckbox}>
                Posts
              </Link>

              <Link href="/autor" className={styles.active} onClick={handleCheckbox}>
                Sobre o autor
              </Link>

              <Link
                href={ctx.isAuthenticated ? '/perfil/': '/login/'}
                className={styles.active}
                onClick={handleCheckbox}
              >
                { ctx.isAuthenticated ? 'Perfil' : 'Login' }
              </Link>

              {
                (ctx.isAuthenticated && ctx.user.role === 'admin') &&
                <Link href="/admin/" className={styles.active} onClick={handleCheckbox}>
                  <div className={styles.create}>
                    Painel Admin
                  </div>
                </Link>
              }
            </nav>
          )
        }
      </div>
    </header>
  )
}
