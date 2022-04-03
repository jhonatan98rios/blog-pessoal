import styles from './styles.module.scss';

const categories = [
  'All', 'Javascript', 'Carreira', 'Python', 'All', 'Javascript', 'Carreira', 'Python', 'All', 'Javascript', 'Carreira', 'Python' 
]

export function Categories() {
  return  (
    <section className={styles.container}>
      <nav className={styles.categories}>
      { categories.map((category, index) => 
        <li className={styles.category} key={index}> 
          <span className={styles.name}>{ category }</span>   
        </li> 
      )}
    </nav>
    </section>
  )
}
