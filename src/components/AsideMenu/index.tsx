import styles from './styles.module.scss';

const categories = [
  'All', 'Javascript', 'Carreira', 'Python'
]

export function AsideMenu() {
  return  (
    <aside className={styles.container}>
      <h3 className={styles.header}>
        Categorias
      </h3>
      <nav className={styles.categories}>
        { categories.map((category, index) => 
          <li className={styles.category} key={index}> 
            <span>{ category }</span> 
            <span> 10 </span>   
          </li> 
        )}
      </nav>
    </aside>
  )
}
