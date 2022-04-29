import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const categories = [
  { label: 'All', path: '/' },
  { label: 'Javascript', path: 'javascript' },
  { label: 'Carreira', path: 'carreira' },
  { label: 'Python', path: 'python' },
  { label: 'Testes', path: 'testes' },
  { label: 'React', path: 'react' },
  { label: 'Next', path: 'next' },
  { label: 'Vue', path: 'vue' },
  { label: 'SCSS', path: 'scss' },
  { label: 'Node', path: 'node' },
  { label: 'Design', path: 'design' },
  { label: 'Marketing', path: 'marketing' },
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
          <Link 
            href={`/posts/${ cat.path }`}
          >
            <a
              className={styles.category}
              onClick={() => setCategory(cat.label)}
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
