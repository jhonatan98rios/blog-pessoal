import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const categories = [
  'All', 'Javascript', 'Carreira', 'Python', 'Testes', 'React', 'Next', 'Vue', 'SCSS', 'Node'
]

export function Categories() {

  const [category, setCategory] = useState('')
  
  return  (
    <section className={styles.container}>
      <h3 className={styles.header}>
        Categorias
      </h3>
      <nav className={styles.categories}>
      { categories.map((cat, index) => 
        <li  key={index}>
          <Link href={`#${cat}`}>
            <a
              className={styles.category}
              onClick={() => setCategory(cat)}
              style={{ color: category == cat ? '#00FFC2' : '#fff' }}
            >
             <span className={styles.name}>{ cat }</span>
             {/* <span className={styles.amount}> 10 </span>    */}
            </a>
          </Link>
        </li> 
      )}
    </nav>
    </section>
  )
}
