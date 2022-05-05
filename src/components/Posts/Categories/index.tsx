import Link from 'next/link';
import React, { useContext, useState } from 'react';
import StoreContext from '../../../context/store';
import styles from './styles.module.scss';

const categories = [
  { label: 'Ver todos', path: '/' },
  { label: 'Programação', path: 'programacao' },
  { label: 'Carreira', path: 'carreira' },
  { label: 'Software', path: 'software' },
]

export function Categories() {

  const [category, setCategory] = useState('')
  const { state, setState } = useContext(StoreContext)

  function handleClick(cat) {
    setCategory(cat.label)
    setState({
      ...state,
      search: ''
    })
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
              style={{ color: category == cat.label ? '#8b96ff' : '#fff' }}
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
