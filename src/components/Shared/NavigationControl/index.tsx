import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

interface IPrev {
  previousPath: string
}

export function NavigationControl({ previousPath }: IPrev) {

  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <nav className={styles.navbar}>

          <Link href={previousPath} className={styles.active}>
            <img
              className={styles.arrow}
              src="/arrow.png"
              alt="voltar"
            />
            Voltar
          </Link>

        </nav>

      </div>
    </section>
  )
}

/* TO DO */
