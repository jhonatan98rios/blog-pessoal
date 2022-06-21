import { useRouter } from 'next/router';
import React, { ChangeEvent, useContext, useState } from 'react';
import StoreContext from '../../../context/store';

import useDeviceDetect from '../../../hooks/useDevice';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {

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

        <input 
          className={styles.input} 
          type="text" 
          placeholder="Pesquisar pelo post" 
          onChange={handleKeyPress}
          value={state.search}
        />

        {
          (!isMobile || checked) && (
            <nav className={isMobile ? styles.navbar : null}>
              <ActiveLink href="/" activeClassName={styles.active}>
                <a onClick={handleCheckbox}>
                  Todos os posts
                </a>
              </ActiveLink>

              <ActiveLink href="/autor" activeClassName={styles.active}>
                <a onClick={handleCheckbox}>
                  Sobre o autor
                </a>
              </ActiveLink>
              
              <a href="https://jhonatan-dev-rios.herokuapp.com/projetos" target="_blank" rel="noopener noreferrer"> Portfólio </a>
            </nav>
          )
        }
      </div>
    </header>
  )
}
