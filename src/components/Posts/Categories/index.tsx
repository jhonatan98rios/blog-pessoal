import Link from 'next/link';
import React, { useContext, useState } from 'react';
import StoreContext from '../../../context/store';
import styles from './styles.module.scss';


export function Categories({ categories }) {

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
            </a>
          </Link>
        </li> 
      )}
    </nav>
    </section>
  )
}
