import styles from './styles.module.scss';

const categories = [
  'All', 'Javascript', 'Carreira', 'Python'
]

export function Recents() {
  return (
    <aside className={styles.container}>
      <h3 className={styles.header}>
        Topicos
      </h3>
      <nav className={styles.categories}>
        { categories.map((category, index) => <li className={styles.category} key={index}> { category } </li> )}
      </nav>
    </aside>
  );
}
