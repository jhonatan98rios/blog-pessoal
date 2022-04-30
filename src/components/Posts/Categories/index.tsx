import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const categories = [
  /* { label: 'All', path: '/' }, */
  { label: 'Carreira', path: 'carreira' },
  { label: 'Javascript', path: 'javascript' },
  { label: 'Python', path: 'python' },
  { label: 'SASS', path: 'sass' },
  { label: 'Design', path: 'design' },
  { label: 'Marketing', path: 'marketing' },
]

export function Categories() {

  const [category, setCategory] = useState('')

  function handleClick(cat) {
    setCategory(cat.label)
  }
  
  return  (
    <section className={styles.container}>
      <h3 className={styles.header}>
        Categorias
      </h3>
      <nav className={styles.categories}>
      { categories.map((cat, index) => 
        <li  key={index}>
          <Link 
            href={`/posts/${ cat.path }`}
          >
            <a
              className={styles.category}
              onClick={() => handleClick(cat) }
              style={{ color: category == cat.label ? '#00FFC2' : '#fff' }}
            >
             <span className={styles.name}>{ cat.label }</span>
             {/* <span className={styles.amount}> 10 </span> */}
            </a>
          </Link>
        </li> 
      )}
    </nav>
    </section>
  )
}
